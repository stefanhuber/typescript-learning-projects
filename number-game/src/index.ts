import * as readline from 'readline';
import { Game } from './game';

let rl = readline.createInterface({
    input : process.stdin
});

let game = new Game();
let numbers = game.generateNumbers(5);
let inputs = [];

console.log("Please sort these numbers: " + numbers.join(", "));

rl.prompt();
rl.on('line', (input) => {

    inputs.push(input);

    if (inputs.length >= numbers.length) {
        let result = game.checkNumbers(numbers, inputs);

        if (result) {
            console.log("Super!");
        } else {
            console.log("Try again!");
        }

        rl.close();
    } 
});
