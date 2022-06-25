export class SinglyLinkedList {
    #head;
    #tail;

    #size;

    constructor() {
        this.#head = null; // first
        this.#tail = null; // last

        this.#size = null;
    }

    // adds tail data, O(1)
    append(data) {
        const node = { data, next: null };

        if (this.#tail) this.#tail.next = node;
        this.#tail = node;
        if (!this.#head) this.#head = node;

        this.#size++;
    }

    // adds head data, O(1)
    prepend(data) {
        const node = { data, next: this.#head };

        this.#head = node;
        if (!this.#tail) this.#tail = node;

        this.#size++;
    }

    // delete head, O(1)
    deleteFirst() {
        this.#head = this.#head.next;

        this.#size--;
    }

    // peek head, O(1)
    get peekFirst() {
        return this.#head.data;
    }

    // get list size, O(1)
    get size() {
        return this.#size;
    }

    _log() {
        let nodeTrav = this.#head;

        while(nodeTrav) {
            console.log(nodeTrav.data);
            nodeTrav = nodeTrav.next;
        }
    }
}
