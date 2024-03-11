// function takes an array as argument
// returns a sorted array
// use recursion to sort
//An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13],
// and an input of [105, 79, 100, 110] should return [79, 100, 105, 110]

function mergeSort(array) {
    if (array.length === 0) return
    if (array.length === 1) return array

    const middle = Math.floor(array.length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle, array.length)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftArray, rightArray) {
    const result = []

    let iLeft = 0
    let iRight = 0

    while(iLeft < leftArray.length && iRight < rightArray.length) {
        if (leftArray[iLeft] < rightArray[iRight]) {
            result.push(leftArray[iLeft])
            iLeft++
        } else {
            result.push(rightArray[iRight])
            iRight++
        }
    }

    while (iLeft < leftArray.length) {
        result.push(leftArray[iLeft])
        iLeft++
    }

    while (iRight < rightArray.length) {
        result.push(rightArray[iRight])
        iRight++
    }

    return result
}

console.log(mergeSort([9,10,3,2,5,1,11]))