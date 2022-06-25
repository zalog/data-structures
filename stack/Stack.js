import { SinglyLinkedList } from '../linked-list/Singly-Linked-List.js';

export class Stack {
    #stack;
    #type;

    constructor(type = 'array') {
        this.#type = type;

        if (this.#type === 'array') this.#stack = new Array();
        else if (this.#type === 'singly-linked-list') this.#stack = new SinglyLinkedList();
    }

    push(el) {
        if (this.#type === 'array') this.#stack.push(el); // O(1)
        else if (this.#type === 'singly-linked-list') this.#stack.prepend(el); // O(1)
    }

    pop() {
        if (this.#type === 'array') this.#stack.pop(); // O(1)
        else if (this.#type === 'singly-linked-list') this.#stack.deleteFirst(); // O(1)
    }

    get peek() {
        if (this.#type === 'array') return this.#stack[this.#stack.length - 1]; // O(1)
        else if (this.#type === 'singly-linked-list') return this.#stack.peekFirst; // O(1)
    }

    get size() {
        if (this.#type === 'array') return this.#stack.length; // O(1)
        else if (this.#type === 'singly-linked-list') return this.#stack.size; // O(1)
    }
}
