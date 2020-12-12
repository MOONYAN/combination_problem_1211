export class TNode {

    parent: TNode | null;

    value: string;

    constructor(value: string, parent?: TNode | null) {

        this.value = value;
        this.parent = parent ? parent : null;
    }
}