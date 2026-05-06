class MinStack {
    constructor() {
        this.minStack = []
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)

        if (this.minStack.length === 0){
            this.minStack.push(val)
        } else {
            let lastElem = this.minStack[this.minStack.length - 1];

            this.minStack.push(Math.min(lastElem, val))
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop()
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
