import * as chalk from 'chalk';
import * as ansi from 'ansi';

export class UI {

    get width() {
        return process.stdout['columns'];    
    }

    get height() {
        return process.stdout['rows'];
    }

    get cell() {
        return chalk.bgGreen(" ");
    }

    get empty () {
        return chalk.bgRed(' ');
    }

    draw(grid:number[][]) {
        let curs = ansi(process.stdout);
        let output = "";

        for (let h = 0; h < grid.length; h++) {
            for (let w = 0; w < grid[h].length; w++) {
                if (grid[h][w] > 0) {
                    output += this.cell;
                } else {
                    output += this.empty;
                }
            }
        }

        process.stdout.write(output);
        curs.goto(1,1);
    }

}