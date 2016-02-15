gameApp.controller("ctrlGame", function ($scope, cardsData, $filter, $window) {

    var Array = cardsData.data;

    $scope.gameApp.playerACards = Array[0];
    $scope.gameApp.playerBCards = Array[1];
    $scope.gameApp.playerCCards = Array[2];
    $scope.gameApp.playerDCards = Array[3];

    $scope.gameApp.boardCards = [];

    $scope.gameApp.playerAPts = 0;
    $scope.gameApp.playerBPts = 0;
    $scope.gameApp.playerCPts = 0;
    $scope.gameApp.playerDPts = 0;

    // For now lets make Player A to be Manual rest everybody else as AI

    $scope.gameApp.players = [{ player: 'playerA', mode: 'manual', name: 'Raj', playersCard: $scope.gameApp.playerACards, playerPtsScored: $scope.gameApp.playerAPts },
        { player: 'playerB', mode: 'aI', name: 'Sadek', playersCard: $scope.gameApp.playerBCards, playerPtsScored: $scope.gameApp.playerBPts },
        { player: 'playerC', mode: 'aI', name: 'Wasim', playersCard: $scope.gameApp.playerCCards, playerPtsScored: $scope.gameApp.playerCPts },
        { player: 'playerD', mode: 'aI', name: 'Kriti', playersCard: $scope.gameApp.playerDCards, playerPtsScored: $scope.gameApp.playerDPts }
    ];

    // Currently lets just hard code the Trump suit to say Club
    $scope.gameApp.trumpSuit = 'CLUB';

    // Watch expressions to monitor the items in the Board Card List
    $scope.$watch('$scope.gameApp.boardCards', function (newValue, oldValue) {

        //Check If all the 4 players have played their card
        if (newValue.length == 4) {

            //Logic to decide who won the move

            var winningPlayer = '';

            if ($filter('filter')(newValue, $scope.gameApp.trumpSuit).length > 0) // Check if there are Trumps played
            {
                var filteredMoveListForTrump = $filter('orderBy')($filter('filter')(newValue, $scope.gameApp.trumpSuit), 'priority', true);
                winningPlayer = filteredMoveListForTrump[0].player;
            }
            else
            {
                // Get the suit of the card played by the first person.
                var moveSuit = newValue[0].suit;
                var filteredMoveList = $filter('orderBy')($filter('filter')(newValue, moveSuit), 'priority', true);
                winningPlayer = filteredMoveList[0].player;
            }


        }
        else {

            // Logic for determining the next player to make the move

            var moveCardPlayer = $filer('filter')($scope.gameApp.players, { name: newValue[newValue.length - 1].player })[0];

            if (moveCardPlayer != null)
            {
                if (moveCardPlayer.mode == 'manual')
                {
                    $window.alert(moveCardPlayer.name +'\'s turn');
                }
                else
                {
                    play(moveCardPlayer.playersCard,newValue[newValue.length - 1].suit);
                }
            }
        }

    })


    // AI 
    function play(playerCardsArray , suitname)
    {
        // Check If the player has the suit in question
        var matchingSuitCards = $filter('filter')(playerCardsArray, { suit: suitname });



    }
});