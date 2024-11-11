/* 
a. Primitive Data Types 
    1. Number  - Represents both integer and floating-point numbers.
        let age = 30;          // integer
        let price = 19.99;     // floating-point number

    2. String  - Represents a sequence of characters.
        let name = "Alice";
        let greeting = `Hello, ${name}!`;

    3. Boolean - Represents a logical value, either true or false.
        let isActive = true;
        let hasErrors = false;

    4. Undefined  - Represents a variable that has been declared but not yet assigned a value.
        let result;
        console.log(result); // undefined


    5. Null  - Represents the intentional absence of any object value.
        let user = null;

    6. Symbol  - Represents a unique and immutable value, often used as object property keys.
        const id = Symbol('id');
        let user = {
        [id]: 1234
        };


    7. BigInt  - Represents integers with arbitrary precision, useful for very large numbers.
        let bigNumber = 123456789012345678901234567890n;


b. Non Primitive Data Types
    1. Object
        1.1. Object  - A collection of key-value pairs where keys are strings (or Symbols) and values can be of any type.

                let person = {
                    name: "Bob",
                    age: 25
                    };

        1.2. Array  - A special type of object used for storing ordered collections of values

                let numbers = [1, 2, 3, 4];
                let mixed = [1, "hello", true, null];


        1.3. Function
             functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called.


        1.4. Date
             let now = new Date();
             let specificDate = new Date('2024-08-29');

        1.5. RegExp  -  Represents regular expressions, which are patterns used to match character combinations in strings.

             let pattern = /abc/;
             let regex = new RegExp('abc');

        1.6. Map - A collection of key-value pairs where keys can be of any type, and each key is unique. Unlike objects, the order of elements in a Map is preserved.

        Usage: Maps are used when you need a collection of key-value pairs with keys that can be of any type and when you want to maintain the order of elements.

             let map = new Map();
             map.set('name', 'Alice');
             map.set(1, 'number');

        1.7. Set  - A collection of unique values. Values can be of any type, and each value can only appear once.
            let set = new Set();
            set.add(1);
            set.add('hello');
            set.add(1); // duplicate value, will be ignored

        1.8. WeakMap
        1.9. WeakSet

*/