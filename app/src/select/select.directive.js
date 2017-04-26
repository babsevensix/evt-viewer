angular.module('evtviewer.select')

.directive('evtSelect', function($timeout, evtSelect, evtInterface) {
    return {
        restrict: 'E',
        scope: {
            id: '@',
            type: '@',
            init: '@'
        },
        templateUrl: 'src/select/select.directive.tmpl.html',
        controllerAs: 'vm',
        controller: 'SelectCtrl',
        link: function(scope) {
            // Initialize select
            var currentSelect = evtSelect.build(scope, scope.vm);

            $timeout(function(){
                if (currentSelect !== undefined) {
                    if (scope.init !== undefined && scope.init !== '') {
                        currentSelect.selectOptionByValue(scope.init);
                    } else {
                        currentSelect.callback(undefined, scope.vm.optionList[0]);
                    }
                }
            });

            if (scope.type === 'witness-page') {
                var witness = scope.$parent.vm.witness;
                scope.$watch(function() {
                    return evtInterface.getCurrentWitnessPage(witness);
                }, function(newItem, oldItem) {
                    if (oldItem !== newItem) {
                        currentSelect.selectOptionByValue(witness+'-'+newItem);
                    }
                }, true); 
            }

            if (scope.type === 'source') {
                scope.$watch(function() {
                    return evtInterface.getCurrentSource();
                }, function(newItem, oldItem) {
                    if (oldItem !== newItem) {
                        currentSelect.selectOptionByValue(newItem);
                    }
                }, true);
            }

            // Garbage collection
            scope.$on('$destroy', function() {
                if (currentSelect){
                    currentSelect.destroy();
                }     
            });
        }
    };
});