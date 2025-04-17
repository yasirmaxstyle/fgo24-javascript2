const number = (num, cb) => {
    return cb(num)
}

const isNumber = (num) => {
    if (num % 2 === 0) return `number ${num} is even`
    else return `number ${num} is odd`
}

console.log(number(8, isNumber))