const calculateCircle = (r) => {
    if (typeof r !== "number") return 'input harus nomor'
    let phi
    if (r % 7 === 0) phi = 22 / 7
    else phi = 3.14
    const calculateArea = phi * r * r
    const calculateCircumference = 2 * phi * r
    return `luas lingkaran dengan jari-jari ${r}cm adalah ${calculateArea} cm dan kelilingnya adalah ${calculateCircumference} cm`
}

console.log(calculateCircle(49))