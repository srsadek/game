var gameApp = angular.module("gameApp", []);

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    // The Card Id is the Id of the draggable div and is prefixed with '-'
    var elemArray = data.split('-');
    var dragCardId = elemArray[elemArray.length - 1];

    //Get the controller scope 
    var controllerElement = document.getElementById('ctrlGame');
    var controllerScope = angular.element(controllerElement).scope();

    controllerScope.$apply(function () {
        // Find the Card , remove it from the players bundle and add it to the board bundle
        angular.forEach(controllerScope.playerACards, function (obj, index) {
            if (obj.id == dragCardId) {
                controllerScope.boardCards.push(obj);
                controllerScope.playerACards.splice(index, 1);
            }
        });

    });
}