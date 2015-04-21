angular.module('evtviewer.box')

.provider('evtBox', function() {

    var defaults = this.defaults;

    this.setDefaults = function(_defaults) {
        defaults = _defaults;
    };

    this.$get = function($log, parsedData) {
        var box = {},
            collection = {},
            list = [],
            idx = 0;

        var _console = $log.getInstance('box');


        // 
        // Control function
        // 
        function updateContent(newContent) {
            var vm = this;
            vm.content = newContent;
            
            _console.log('vm - updating content ' + vm.id);
        }

        function destroy() {
            var tempId = this.uid;
            // TODO: remove from list and collection
            // this.$destroy();

            _console.log('vm - destroy ' + tempId);
        }


        // 
        // Box builder
        // 

        box.build = function(vm) {
            var currentId = vm.id || idx++,
                currentType = vm.type || 'default',
                topMenuList = { 
                    selectors: [],
                    buttons: []
                },
                bottomMenuList = { 
                    selectors: [],
                    buttonSwitches: []
                },
                content;

            var scopeHelper = {};

            if (typeof(collection[currentId]) !== 'undefined') {
                return;
            }
            
            _console.log('vm - building box for ' + currentId);

            switch (currentType) {
                case 'image':
                    topMenuList.selectors.push({ id:'page', type: 'page' });
                    topMenuList.buttons.push({ title:'Thumbnails', label: 'Thumbs' });
                    content = '<img src="'+parsedData.getImage()+'" />';
                    break;
                case 'text':
                    topMenuList.selectors.push({ id:'document', type: 'document' });
                    topMenuList.selectors.push({ id:'editionLevel', type: 'edition'});
                    content = parsedData.getText1()[0].diplomatic;
                    break;
            }

            scopeHelper = {
                // expansion
                uid: currentId,
                defaults: angular.copy(defaults),

                // model
                topMenuList: topMenuList,
                bottomMenuList: bottomMenuList,
                content: content,

                // function
                updateContent: updateContent,
                destroy: destroy
            };

            collection[currentId] = angular.extend(vm, scopeHelper);
            list.push({
                id: currentId,
                type: currentType
            });

            return collection[currentId];
        };


        //
        // Service function
        // 

        box.getById = function(currentId) {
            if (collection[currentId] !== 'undefined') {
                return collection[currentId];
            }
        };

        box.getList = function() {
            return list;
        };

        return box;
    };

});