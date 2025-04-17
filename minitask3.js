const celsius = {
    fahrenheit: function (c) {
        if (typeof c !== "number") return 'harus memasukkan angka'
        return 9 / 5 * c + 32
    },
    kelvin: function (c) {
        if (typeof c !== "number") return 'harus memasukkan angka'
        return c + 273
    },
    reamur: function (c) {
        if (typeof c !== "number") return 'harus memasukkan angka'
        return 4 / 5 * c
    },
    convert: function (c) {
        if (typeof c !== "number") return 'harus memasukkan angka'
        console.log(`hasil konversi: ${this.fahrenheit(c)} fahrenheit`);
        console.log(`hasil konversi: ${this.kelvin(c)} kelvin`);
        console.log(`hasil konversi: ${this.reamur(c)} reamur`);
    }
}

console.log(celsius.convert(50))