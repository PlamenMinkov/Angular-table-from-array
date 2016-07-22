app.controller('EditItemController', function($scope, items, $location, $log, adsData, $routeParams) { 
    var id = $routeParams.id;
    $scope.thisItem = items[id];
    $scope.item = items[id];
    
    $scope.editItem = function (item) {                     
        var res = adsData.editItem(item, id);
        
        if(res) {
            $location.path("");
        }      
    };

    $scope.cancelAdd = function () {
        $location.path("");
    };
});