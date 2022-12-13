import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload"; 

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let totalMassKg: number = 0;

        for (let i = 0; i < items.length; i++) {
            totalMassKg += items[i].massKg;
        }

        return totalMassKg;
    }

    currentMassKg(): number {
        let totalCurrentMassKg: number = (this.sumMass(this.astronauts) + this.sumMass(this.cargoItems));
        return totalCurrentMassKg;
    }

    canAdd(item: Payload): boolean {
       return this.currentMassKg() + item.massKg <= this.totalCapacityKg;

        // if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
        //     return true;
        // } else return false;
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else return false;

    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else return false;
    }

}