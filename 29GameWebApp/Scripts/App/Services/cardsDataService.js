gameApp.factory('cardsData', function () {

    var deck = [

        { id: 1, suit: 'SPADE', name: 'Jack', pts: 3, priority: 8 },
        { id: 2, suit: 'SPADE', name: '9', pts: 2, priority: 7 },
        { id: 3, suit: 'SPADE', name: 'Ace', pts: 1, priority: 6 },
        { id: 4, suit: 'SPADE', name: '10', pts: 1, priority: 5 },
        { id: 5, suit: 'SPADE', name: 'KING', pts: 0, priority: 4 },
        { id: 6, suit: 'SPADE', name: 'QUEEN', pts: 0, priority: 3 },
        { id: 7, suit: 'SPADE', name: '8', pts: 0, priority: 2 },
        { id: 8, suit: 'SPADE', name: '7', pts: 0, priority: 1 },

        { id: 9, suit: 'HEART', name: 'Jack', pts: 3, priority: 8 },
        { id: 10, suit: 'HEART', name: '9', pts: 2, priority: 7 },
        { id: 11, suit: 'HEART', name: 'Ace', pts: 1, priority: 6 },
        { id: 12, suit: 'HEART', name: '10', pts: 1, priority: 5 },
        { id: 13, suit: 'HEART', name: 'KING', pts: 0, priority: 4 },
        { id: 14, suit: 'HEART', name: 'QUEEN', pts: 0, priority: 3 },
        { id: 15, suit: 'HEART', name: '8', pts: 0, priority: 2 },
        { id: 16, suit: 'HEART', name: '7', pts: 0, priority: 1 },

        { id: 17, suit: 'CLUB', name: 'Jack', pts: 3, priority: 8 },
        { id: 18, suit: 'CLUB', name: '9', pts: 2, priority: 7 },
        { id: 19, suit: 'CLUB', name: 'Ace', pts: 1, priority: 6 },
        { id: 20, suit: 'CLUB', name: '10', pts: 1, priority: 5 },
        { id: 21, suit: 'CLUB', name: 'KING', pts: 0, priority: 4 },
        { id: 32, suit: 'CLUB', name: 'QUEEN', pts: 0, priority: 3 },
        { id: 22, suit: 'CLUB', name: '8', pts: 0, priority: 2 },
        { id: 23, suit: 'CLUB', name: '7', pts: 0, priority: 1 },

        { id: 24, suit: 'DIAMOND', name: 'Jack', pts: 3, priority: 8 },
        { id: 25, suit: 'DIAMOND', name: '9', pts: 2, priority: 7 },
        { id: 26, suit: 'DIAMOND', name: 'Ace', pts: 1, priority: 6 },
        { id: 27, suit: 'DIAMOND', name: '10', pts: 1, priority: 5 },
        { id: 28, suit: 'DIAMOND', name: 'KING', pts: 0, priority: 4 },
        { id: 29, suit: 'DIAMOND', name: 'QUEEN', pts: 0, priority: 3 },
        { id: 30, suit: 'DIAMOND', name: '8', pts: 0, priority: 2 },
        { id: 31, suit: 'DIAMOND', name: '7', pts: 0, priority: 1 }

    ];

    var playingCards = [];

    var drawnCards = [];

    // Create a copy of the deck
    angular.copy(deck, playingCards);

    var playerACards = [];
    var playerBCards = [];
    var playerCCards = [];
    var playerDCards = [];

    var playerCardsArray = [{ player: 'playerA', cards: playerACards },
                            { player: 'playerB', cards: playerBCards }, 
                            { player: 'playerC', cards: playerCCards },
                            { player: 'playerD', cards: playerDCards }];

    shuffleCards(playerCardsArray);

    function drawNextCardId ()
    {
        // Generate a random number for shuffle draw
        return Math.floor((Math.random() * 31) + 1);
    }

    function drawCardsForPlayer(playerCards)
    {
        //We will draw four cards at once for a player 

        for(var i=0 ; i< 4; i++ )
        {
            var nextCardId = drawNextCardId();

            while (!(drawnCards.indexOf(nextCardId) == -1)) {
                nextCardId = drawNextCardId();
            }
            drawnCards.push(nextCardId);

            var drawnCardIndex = -1;
            angular.forEach(playingCards, function (obj, index) {
                if (obj.id == nextCardId) {
                    obj.player = playerCards.player;
                    drawnCardIndex = index;
                    playerCards.cards.push(obj);
                }
            });
            // Remove the drawn card from the playing cards deck
            if (drawnCardIndex != -1) {
                playingCards.splice(drawnCardIndex, 1);
            }
        }
    }

    function shuffleCards(Array)
    {
        angular.forEach(Array,function(obj,index)
        {
            drawCardsForPlayer(obj);
        })
    }

    return {
        data: {playerACards, playerBCards, playerCards, playerDCards}
    };

})