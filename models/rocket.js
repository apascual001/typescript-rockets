"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(codi, propulsors) {
        this.codi = codi;
        this.propulsors = propulsors;
        this.mostrarRockets = this.mostrarRockets;
    }
    Rocket.prototype.mostrarRockets = function () {
        var resultado = "El COHET:  " + this.codi + " t\u00E9  " + this.propulsors + " propulsors";
        return resultado;
    };
    return Rocket;
}());
