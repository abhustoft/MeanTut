
angular.module('AdminCtrl', []).controller('AdminController', function($scope, terdFactory) {

    $scope.admin = 'This is admin controller';
    $scope.user = {};

    $scope.saveUser = function (user) {
        $scope.user = angular.copy(user);
        console.log($scope.user.firstName);
        var nerd = {'name': $scope.user.firstName};
        console.log(nerd);
        terdFactory.save(nerd);
    };

});