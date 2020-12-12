import { Item } from "./item.interface";
import { Solution } from "./solution";

function showResult(result: Item[][]) {
    for (let items of result) {
        console.log(items.map(i => `<${i.type},${i.amount}>`).join(", "));
    }
}

function combination(items: Item[], reqAmount: number): Item[][] {

    let solution = new Solution(items, reqAmount);
    solution.build();
    return solution.getResult();
}

let solution: Item[][] = combination([{ type: 'A', amount: 3 }, { type: 'B', amount: 3 }, { type: 'C', amount: 3 }] as Item[], 3);
showResult(solution);