var hubConnectionStatus = 'INIT';
$(function () {
    // Declare a proxy to reference the hub. 
    var hub = $.connection.gameHub;
    // Create a function that the hub can call to broadcast messages.
    hub.client.broadcastMessage = function (name, message) {
  
    };
    // Start the connection.
    $.connection.hub.start().done(function () {
        hubConnectionStatus = 'CONNECTED';
        hub.server.Hello();
    })
    .fail(function () {

    });

    $.connection.hub.stateChanged(function (oldState, newState) {
        debugger;
        hubConnectionStatus = newState;
    });

    });