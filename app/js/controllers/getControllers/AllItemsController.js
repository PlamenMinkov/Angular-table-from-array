app.controller('AllItemsController', function($scope, adsData, items) {
    $scope.ready = "false";
    $scope.paging = "true";

    $scope.propertyName = '';
    $scope.reverse = true;
    $scope.items = items;

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
    
    $scope.deleteItem = function(index) {
        adsData.deleteItem(index);
        $scope.items = items;
    };
});