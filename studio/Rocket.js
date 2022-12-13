"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var totalMassKg = 0;
        for (var i = 0; i < items.length; i++) {
            totalMassKg += items[i].massKg;
        }
        return totalMassKg;
    };
    Rocket.prototype.currentMassKg = function () {
        var totalCurrentMassKg = (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
        return totalCurrentMassKg;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
        // if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
        //     return true;
        // } else return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else
            return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
