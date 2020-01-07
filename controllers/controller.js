"use strict";
function showRocket() {
    var rocket1 = new Rocket('32WESSDS', 3);
    var rocket2 = new Rocket('LDSFJA32', 6);
    var showRocket = document.getElementById('showRocket');
    var elementRocket1 = document.createElement('div');
    var elementRocket2 = document.createElement('div');
    elementRocket1.innerHTML = rocket1.mostrarRockets();
    showRocket.appendChild(elementRocket1);
    elementRocket2.innerHTML = rocket2.mostrarRockets();
    showRocket.appendChild(elementRocket2);
}
