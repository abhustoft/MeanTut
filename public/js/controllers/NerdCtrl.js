/**
 * Created by abhustoft on 08.11.14.
 */
// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', []).controller('NerdController', function($scope, nerdFactory) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.nerds = nerdFactory.query();
    var kk = {'id': '54610d5c6de1237c1017d147' };
    //$scope.abh = nerdFactory.get(kk);
    // Sends http://localhost:8081/api/nerds?id=54610d5c6de1237c1017d147
    // not http://localhost:8081/api/nerds/54610d5c6de1237c1017d147
    console.log($scope.nerds);
});

