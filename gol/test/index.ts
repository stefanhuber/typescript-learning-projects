import { Gol } from '../src/gol';

describe('Gol', () => {

    let grid1 = [
        [0,1,0,0] ,
        [0,1,1,0] ,
        [0,1,0,0] ,
    ];


    it('count = 3', () => {
        let gol = new Gol(grid1);
        expect(gol.countNeighbours(1,1)).toEqual(3);
         expect(gol.countNeighbours(1,2)).toEqual(3);
    });

});