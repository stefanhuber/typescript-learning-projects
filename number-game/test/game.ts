import { Game } from '../src/game';

describe("Game Test", () => {

    let game = new Game();

    it("should generate x randomly sorted numbers", () => {
        
        let result = game.generateNumbers(5);
        expect(result.length).toEqual(5);

        result = game.generateNumbers(9);
        expect(result.length).toEqual(9);

    });

    it("should check positive", () => {
        let res = game.checkNumbers([88,12,90,43], [12,43,88,90]);
        expect(res).toBeTruthy();
    });

    it("should check negative", () => {
        let res = game.checkNumbers([88,12,90,43], [12,88,43,90]);
        expect(res).toBeFalsy();
    });

});