const profile = {
    name: "John O'Connor",
    age: 30,
    skills: ['Web Programming', 'Painting'],
    education: {
        name: "Universitas Udayana",
        year: 2018
    }
}

const { skills: [wp], age, name: fullName } = profile // menggunakan koma untuk mengambil lebih dari 1 key
const { skills: anotherSkills } = structuredClone(profile) // menggunakan alias

const { education: { name: univName } } = profile

anotherSkills[2] = "Hiking"

// console.log(univName)
// console.log(skills)
// console.log(anotherSkills)

// ecercise

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

// console.log(data[0][1][3].string[1].value);

// const [a,[s,d,f,{string:[x,{value}]}]] = data 
const { string: [x, { value }] } = data[0][1][3]

console.log(value)
