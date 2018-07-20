angular.module('evtviewer.search')
   .provider('evtSearchBox', function () {
      var defaults = this.defaults;
      
      this.setDefaults = function (_defaults) {
         defaults = _defaults;
      };
      
      this.$get = function (SEARCHBOXDEFAULTS) {
         var searchBox = [],
            searchBoxCollection = {},
            searchBoxId;
         
         searchBox.build = function (scope, vm) {
            var status = {
               searchResultBox: false,
               searchCaseSensitive : false,
               virtualKeyboard: false,
               progressBar : false
            };
            var searchBoxBtn = [];
            var defaultSearchBoxBtn = SEARCHBOXDEFAULTS.searchBoxBtn;
            var currentBoxEdition = scope.$parent.edition;
            for(var btn in defaultSearchBoxBtn) {
               if(currentBoxEdition !== 'interpretative') {
                  searchBoxBtn.push(defaultSearchBoxBtn[btn]);
               }
               else {
                  if(btn !== 'virtualKeyboard') {
                     searchBoxBtn.push(defaultSearchBoxBtn[btn]);
                  }
               }
            }
            
            var parentBoxId = scope.$parent.id;
            searchBoxId = parentBoxId + 'SearchBox';
            
            var scopeHelper = {
               status: status,
               searchBoxBtn: searchBoxBtn,
               parentBoxId: parentBoxId,
               searchBoxId: searchBoxId
            };
            
            searchBoxCollection[parentBoxId] = angular.extend(vm, scopeHelper);
            return searchBoxCollection[parentBoxId];
         };
         
         searchBox.getDefaults = function (key) {
            return defaults[key];
         };
         
         searchBox.getSearchResults = function (parentBoxId) {
            return searchBoxCollection[parentBoxId].searchResults;
         };
         
         searchBox.getInputValue = function (parentBoxId) {
            searchBoxCollection[parentBoxId].searchedTerm = searchBoxCollection[parentBoxId].searchInput;
            return searchBoxCollection[parentBoxId].searchedTerm;
         };
         
         searchBox.getStatus = function (parentBoxId, key) {
            if(searchBoxCollection[parentBoxId].status) {
               return searchBoxCollection[parentBoxId].status[key];
            }
         };
         
         searchBox.updateStatus = function (parentBoxId, key) {
            searchBoxCollection[parentBoxId].status[key] = !searchBoxCollection[parentBoxId].status[key];
         };
         
         searchBox.closeBox = function (parentBoxId, key) {
            var currentBox;
            
            for(var i in searchBoxCollection) {
               currentBox = searchBoxCollection[i];
               if (currentBox.parentBoxId === parentBoxId) {
                  currentBox.status[key] = false;
                  return currentBox.status[key];
               }
            }
         };
         
         searchBox.showBtn = function (parentBoxId, type) {
            var currentBoxButtons = searchBoxCollection[parentBoxId].searchBoxBtn;
            for(var i in currentBoxButtons) {
               if(currentBoxButtons[i].type === type) {
                  currentBoxButtons[i].hide = false;
               }
            }
         };
   
         searchBox.hideBtn = function (parentBoxId, type) {
            var currentBoxButtons = searchBoxCollection[parentBoxId].searchBoxBtn;
            for(var i in currentBoxButtons) {
               if(currentBoxButtons[i].type === type) {
                  currentBoxButtons[i].hide = true;
               }
            }
         };
         
         return searchBox;
      };
   });
