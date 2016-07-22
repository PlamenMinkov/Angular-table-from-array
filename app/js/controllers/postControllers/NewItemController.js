app.controller('NewItemController', function($scope, $location, $log, adsData, items) {
	
    $scope.createItem = function (item) { 
        var res = adsData.createItem(item);
        
        if(res) {
            $location.path("");
        }        
    };

    $scope.cancelAdd = function () {
        $location.path("");
    };
});