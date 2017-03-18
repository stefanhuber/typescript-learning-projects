export class Gol {

    constructor(public grid:number[][]) {
    }

    countNeighbours(h:number,w:number) : number {
        if (h < 1 || h >= this.grid.length - 1) {
            return 0;
        }
        if (w < 1 || w >= this.grid[h].length - 1) {
            return 0;
        }
        
        let count = 0;
        for (let i = h-1; i <= h+1; i++) {
            for (let j = w-1; j <= w+1; j++) {     
                if (i==h && j==w) {
                    continue;
                }

                count += this.grid[i][j];
            }
        }

        return count;
    }

    transform() {
        let nextGrid = [];

        for (let h = 0; h < this.grid.length; h++) {
            nextGrid[h] = [];
            for (let w = 0; w < this.grid[h].length; w++) {
                if (this.grid[h][w] == 0 &&
                    this.countNeighbours(h,w) == 3) {
                    nextGrid[h][w] = 1;
                } else if (this.grid[h][w] == 1 &&
                    this.countNeighbours(h,w) >= 2 &&
                    this.countNeighbours(h,w) <= 3) {
                    nextGrid[h][w] = 1;
                } else {
                    nextGrid[h][w] = 0;
                }
            }
        }

        this.grid = nextGrid;
        return this.grid;
    }

}