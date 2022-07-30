// traversing a collection from the beginning to the end
const cart = ['apple', 'banana', 'orange']

// Modern languages already provide abstraction for the iterator pattern like the for loop
for (const item of cart) {
    console.log(item)
}

// JS does not have a range function
function range(start: number, end: number, step=1) {
    return {
        // use it with for of loop
        [Symbol.iterator]() {
            return this
        },
        next() {
            if (start <= end) {
                const current = start;
                start += step;
                return { value: current, done: false }
            }
            return { done: true, value: end}
        }
    }
}

for (const i of range(0, 50, 5)) {
    console.log(i)
}

// Iterator is a pull-based system