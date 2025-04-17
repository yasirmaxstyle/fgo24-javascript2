const isNumber = (num, cb) => {
    return cb(num)
}

const isOddOrEven = (num) => {
    if (num % 2 === 0) return `number ${num} is even`
    else return `number ${num} is odd`
}

console.log(isNumber(8, isOddOrEven))