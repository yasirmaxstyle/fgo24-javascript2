# JAVASCRIPT PART 2

This part includes the exercise of using: ***spread operator, destructuring, function, method, and callback.***

#### DESTRUCTURING
destructuring can go way way deeper like follow
```c
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

const [[a, [s, d, f, { string: [x, { value }] }]]] = data
// here we get the value of key 'value' which is string 'hello'

console.log(value) // hello
```

