import { Item } from "./item.interface";
import { TNode } from "./tree-node";

export class Solution {

    private input: Item[] = [];
    private depth: number = 0;
    private container: Item[][] = [];

    constructor(input: Item[], depth: number) {
        this.input = input;
        this.depth = depth;
    }

    build() {
        this.container = [];
        this.buildTree(null, this.input, this.depth);
    }

    getResult(): Item[][] {
        return this.container;
    }

    private buildTree(parent: TNode | null, input: Item[], depth: number) {
        if (depth == 0) {
            this.appendPath(parent);
            // this.show(parent);
            return;
        }
        const [first, ...rests] = input;
        if (first.amount > 0) {
            const node = new TNode(first.type, parent);
            const adjInput: Item[] = [{
                type: first.type,
                amount: first.amount - 1
            }, ...rests];
            this.buildTree(node, adjInput, depth - 1);
        }
        if (rests.length > 0) {
            this.buildTree(parent, rests, depth);
        }
    }   

    private appendPath(leaf: TNode | null) {
        if (leaf === null) {
            return;
        }

        let list: Item[] = [];
        let hash: { [key: string]: Item } = {};
        let iterator: TNode | null = leaf;
        while (iterator != null) {
            if (hash[iterator.value] !== undefined) {
                hash[iterator.value].amount++;
            } else {
                let item = { type: iterator.value, amount: 1 };
                list.push(item);
                hash[iterator.value] = item;
            }
            iterator = iterator.parent;
        }
        this.container.push(list);
    }

    // private show(leaf: TNode | null) {
    //     const result: string[] = [];
    //     let iterator: TNode | null = leaf;
    //     while (iterator != null) {
    //         result.push(iterator.value);
    //         iterator = iterator.parent;
    //     }
    //     console.log(result.join(","));
    // }    
}