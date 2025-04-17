// main function
const celsius = (c, type) => {
    if (typeof c !== "number") return
    return type(c)
}

// to fahrenheit callback
const f = (c) => {
    const result = 9 / 5 * c + 32
    return result
}

// to fahrenheit immediate callback
celsius(50, (c) => {
    if (typeof c !== "number") return
    const result = 9 / 5 * c + 32
    return result
})

// to kelvin callback
const k = (c) => {
    const result = c + 273
    return result
}

// to kelvin immediate callback
celsius(50, (c) => {
    if (typeof c !== "number") return
    const result = c + 273
    return result
})

// to reamur callback
const r = (c) => {
    const result = 4 / 5 * c
    return result
}

// to reamur immediate callback
celsius(50, (c) => {
    if (typeof c !== "number") return
    const result = 4 / 5 * c
    return result
})