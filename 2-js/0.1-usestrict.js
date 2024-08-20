// 'use strict';

name = 'naseer';
console.log(name)
/* 
! Eliminates Silent Errors:
    Syntax errors that would otherwise fail silently are thrown. 
    For example, assigning a value to an undeclared variable will throw an error.

! Prevents Certain Actions:
    You cannot use with statements, which can lead to confusion and bugs.
    Variables cannot be deleted using delete.
    The eval function has restricted behavior.

! Disallows Duplicate Parameters:
    Function parameters must have unique names. For example, function foo(a, a) {} will throw an error in strict mode.

! Changes this Behavior:
    In strict mode, this in global code or in a function that is called without an explicit context is undefined, rather than the global object.

---------------------------------------
    "use strict";   // Strict mode
var obj = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};

obj.greet(); // Output: Hello, Alice

function globalFunction() {
    console.log(this); // `this` is undefined in strict mode
}

globalFunction(); // Output: undefined
-------------------------------------------



! Enforces Read-Only Properties:
    You cannot write to read-only properties or create new properties on non-extensible objects.

Prevent this from Defaulting to the Global Object:
    In strict mode, if a function is called without a specified this context, it doesn’t default to the global object (window in browsers).
*/