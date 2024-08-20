/* 

We can declare variables to store data by using the var, let, or const keywords.

    let – is a modern variable declaration.
    var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
    const – is like let, but the value of the variable can’t be changed.

Variable naming:
    The name must contain only letters, digits, or the symbols $ and _.
    The first character must not be a digit.

When the name contains multiple words, camelCase is commonly used.

let userName;

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

*/


var name = 'naseer';
var name = 'khan'
console.log(name); // outputs: khan.    


/*
    Cannot redeclare block scoped variable 
    let age = 10;
    let age = 20; 
 */
let age = 20;
const NAME = 'JS';
console.log(age,NAME)

let std1 = 'naseer' , std2='ahmad', std3 = 'khan';
console.log(std1,std2,std3)

