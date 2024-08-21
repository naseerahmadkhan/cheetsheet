/* * 
Arithmetic Operators
! Addition        + 
    String + Other      => Str + Str
    Number + Number     => Num + Num
    Boolean + Number    => Num + Num
    Null + Number       => 0   + Num
    Undefined + Any     => NaN + Any = NaN


    1 + {} = '1[object Object]'  

! Subtraction     -
    Any - Any           => Num - Num

! Multiplication  *
    Any * Any           => Num * Num

! Division        /
    Any / Any           => Num / Num

! Remainder / Modulus      %
    Any % Any           => Num % Num

!  Unary Plus (+) : Converts its operand to a number.
    Example: +"5" → 5 (string "5" is converted to number 5)
    Example: +true → 1 (boolean true is converted to number 1)
    +{}         //NaN   => objects cannot be converted to numbers

                            Objects in JavaScript cannot be directly used in arithmetic operations with the + operator in a meaningful way. When an object is involved in a + operation, it is converted to a string (using its toString() method) or a number (using its valueOf() method) if possible. 

                            When an object is used with the + operator, JavaScript first tries to convert the object to a primitive value. For most objects, this conversion is done by calling the toString() method.
                            If JavaScript cannot convert the object to a number (as is usually the case with most objects), the result of the operation will be NaN.
    +[1] + +[2]             //3         |+"1" + +"2"|  =>    1 +2 =3     
                             Arrays are first converted into string then in numbers        
                          

!  Unary Minus (-) : First converts its operand to a number, and then applies the negation operation.   
    -true       //-1
    -false      //-0
    -null       //-0
    -undefined  //NaN
    -"5"        //-5
    -{}         //NaN   => objects cannot be converted to numbers
                           


! Increment       ++
Prefix Increment (++x): Increments the value of x before using it in an expression.
Postfix Increment (x++): Increments the value of x after using it in an expression.

let x = 5;
x++ + ++x // 5 + 7 = 12


! Decrement       --
Prefix Decrement (--x): Decreases the value of x before using it in an expression.
Postfix Decrement (x--): Decreases the value of x after using it in an expression.


! Exponentiation  ** Calculates the power of a number, raising the base to the exponent.
console.log(2 ** 3); // 8 (2 raised to the power of 3)
console.log(5 ** 2); // 25 (5 raised to the power of 2)
console.log(9 ** 0.5); // 3 (9 raised to the power of 0.5, which is the square root of 9)


*/



// Result-----------------------------------------------------------------
// NaN + NaN = NaN
// 1 + {} = "1[object Object]"
// false + 2 = 2
// true + 1 = 2
// null + 1 = 1
// undefined + 1 = NaN
// +[1] + +[2] = 3
// +[1, 2, 3] + +[1, 2, 3] = NaN
// '5' + undefined = "5undefined"
// '5' + null = "5null"
// '5' + true = "5true"
// '5' + false = "5false"
// '5' + {} = "5[object Object]"
// 1 + '2' = "12"
// '2' + 1 = "21"
// {} + 1 = 1 (Note: {} is treated as a block, so +1 is just 1)
// {} + {} = NaN (Note: {} is treated as blocks, so no valid operation)
