function fibs(number) {
    const array = [0, 1]

    if (number <= 0) return
    if (number === 1) return [0]
    if (number === 2) return array

    for (let i =2; i < number; i++) {
        array.push(array[array.length - 2]+array[array.length - 1])
    }
    return array



}

console.log(fibs(8))

function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci (n - 2)
}


console.log(fibonacci(10))