// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type

// let spacecraftName: string = 'Determination';
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;
let kilometersToTheMoon: number = 384400;
let kilometersToMars: number = 225000000;

//let milesToMars: number = (kilometersToMars * milesPerKilometer);
//let hoursToMars: number = (milesToMars / speedMph);
//let daysToMars: number = (hoursToMars / 24);

// Part 2: Print Days to Mars

//console.log(`${spacecraftName} has ${daysToMars} days until the next Mars landing.`);

// Part 3: Create a Function ("getDaysToLocation")

// function getDaysToLocation(kilometersAway: number): number {
   
//     let milesAway: number = (kilometersAway * milesPerKilometer);
//     let hoursToLocation: number = (milesAway / speedMph);
//     let daysTilArrival: number = (hoursToLocation / 24);
//     return daysTilArrival;
// }

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

// console.log(`${spacecraftName} has ${getDaysToLocation(kilometersToMars)} days until the next Mars landing.`);
// console.log(`${spacecraftName} has ${getDaysToLocation(kilometersToTheMoon)} days until the next Moon landing.`);

// Part 4: Create a Spacecraft Class

class Spacecraft {
    name: string;
    milesPerKilometer: number = 0.621;
    speedMph: number;

    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
    
    getDaysToLocation(kilometersAway: number): number {
   
        let milesAway: number = (kilometersAway * this.milesPerKilometer);
        let hoursToLocation: number = (milesAway / this.speedMph);
        let daysTilArrival: number = (hoursToLocation / 24);
        return daysTilArrival;
    }
}

// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(`${spaceShuttle.name} has ${spaceShuttle.getDaysToLocation(kilometersToMars)} days until the next Mars landing.`);
console.log(`${spaceShuttle.name} has ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days until the next Moon landing.`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
