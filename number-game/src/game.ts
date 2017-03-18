export class Game {

    generateNumbers(length:number) : Array<number> {
        let output = [];

        for (let i = 0; i < length; i++) {
            output.push(Math.round(Math.random() * 100));
        }

        return output;
    }

    checkNumbers(init:Array<number>, sorted:Array<number>) : boolean {
        let korrNumb = init.sort();
        let i = 0;

        while (i <= korrNumb.length) {
            if (korrNumb[i] == sorted[i]) {
                i++;
                if (i == (korrNumb.length-1)) {
                    return true;
                }
            } else {
                return false;
            }
        }
    }

}