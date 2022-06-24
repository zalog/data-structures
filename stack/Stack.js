export class Stack {
    #stack;

    constructor() {
        this.#stack = new Array();
    }

    push(el) {
        this.#stack.push(el);
    }

    pop() {
        this.#stack.pop();
    }

    get peek() {
        return this.#stack[this.#stack.length - 1];
    }

    get size() {
        return this.#stack.length;
    }
}
