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

data[0][1][3].string[1] = {
    ...data[0][1][3].string[1],
    value: "we did it!!!!"
}

// data[0][1] = [
//     ...data[0][1]
// ]

console.log(data[0][1][3].string[1].value)

const bio = {
    name: "John O'Connor",
    age: 30
}

const extraInfo = {
    skills: ['Web Programming', 'Painting'],
    education: [
        {
            name: "SMP 1 Denpasar",
            year: 2012
        }
    ]
}

extraInfo.skills = [
    ...extraInfo.skills,
    "Hiking"
]

extraInfo.education = [
    ...extraInfo.education,
    {
        name: "SMA 1 Oxford",
        year: 2015
    }
]

const profile = {
    ...bio,
    ...extraInfo
}

console.log(profile)