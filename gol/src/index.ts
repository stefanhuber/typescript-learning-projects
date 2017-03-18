import { UI } from './ui';
import { Gol } from './gol';

let ui = new UI();

let initGrid:number[][] = [];
for (let h = 0; h < ui.height; h++) {
    initGrid[h] = [];
    for (let w = 0; w < ui.width; w++) {
        initGrid[h][w] = 0;
    }
}


initGrid[3][9] = 1;
initGrid[4][10] = 1;
initGrid[5][8] = 1;
initGrid[5][9] = 1;
initGrid[5][10] = 1;

let gol = new Gol(initGrid);

setInterval(() => {
    ui.draw(gol.grid);
    gol.transform();
},150);
