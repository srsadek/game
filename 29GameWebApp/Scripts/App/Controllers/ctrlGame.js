gameApp.controller("ctrlGame", function ($scope, cardsData) {
    var Array = cardsData.data;
    $scope.playerACards = Array[0];
    $scope.boardCards = [];

    $scope.playerAPts = 0;
    $scope.playerBPts = 0;
    $scope.playerCPts = 0;
    $scope.playerDPts = 0;
});