const data = [
    [
        null,
        [
            null,
            null,
            null,
            {
                string: [
                    null,
                    {
                        value: "hello"
                    }
                ]
            }
        ]
    ]
];

data[0][1][3].string[1]= {
    ...data[0][1][3].string[1],
    value: "we did it!!!!"
}

console.log(data[0][1][3].string[1].value)