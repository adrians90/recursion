function fibsRec(n) {
    if (n < 1 || isNaN(n)) return
    if (n === 1) return [0]
    if (n === 2) return [0, 1]

    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]
}

console.log(fibsRec(10))