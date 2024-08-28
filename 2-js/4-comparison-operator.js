
/* 

Number       vs Undefined     [NaN]
Number       vs null          [0]
Number       vs Number 
Number       vs String        [Num]
Number       vs Boolean       [Num]
Number       vs Arrays        [Str -> NaN]
Number       vs Object        [NaN]
Number       vs Set           [NaN]

String       vs undefined     [NaN]
String       vs null          [0]
String [uni] vs String        [uni]  
String [Num] vs Boolean       [Num]
String       vs Arrays        [Str]
String       vs Object        [Str]
String       vs Set           [Str]

Boolean[Num] vs undefined
Boolean[Num] vs null
Boolean[Num] vs Boolean
Boolean[Num] vs Array         [Str]
Boolean[Num] vs Object        [Str]
Boolean[Num] vs Set

Arrays       vs undefined
Arrays       vs null
Arrays       vs Arrays         [by ref]
Arrays[Str]  vs Object         [Str]
Arrays       vs Set

Object       vs undefined
Object       vs null
Object       vs Object
Object       vs Set

Set vs Set


*******************************************************************************

###############################################################################
Number vs. Undefined
Rule of Thumb: undefined coerces to NaN in numeric contexts.

5 > undefined → false (undefined coerced to NaN)
5 < undefined → false (undefined coerced to NaN)
5 >= undefined → false (undefined coerced to NaN)
5 <= undefined → false (undefined coerced to NaN)
5 == undefined → false (undefined is not equal to 5)
5 != undefined → true (undefined coerced to NaN, and 5 is not NaN)
5 === undefined → false (different types, no coercion)
5 !== undefined → true (different types, no coercion)
Exceptions: undefined does not coerce to 0 in numeric contexts; it remains NaN.


Number vs. Null
Rule of Thumb: null coerces to 0 in numeric contexts.

5 > null → true (null coerced to 0)
5 < null → false (null coerced to 0)
5 >= null → true (null coerced to 0)
5 <= null → true (null coerced to 0)
5 == null → false (null is not equal to 5)
5 != null → true (null coerced to 0, and 5 is not 0)
5 === null → false (different types, no coercion)
5 !== null → true (different types, no coercion)
Exceptions: null does not coerce to a meaningful value in relational comparisons with numbers. It behaves as 0 in numeric contexts but is not equal to a number in strict comparisons.


Number vs. Number
Rule of Thumb: Comparisons are straightforward with no coercion.
Examples:
5 > 3 → true
5 < 3 → false
5 >= 5 → true
5 <= 5 → true
5 == 5 → true
5 != 3 → true
5 === 5 → true
5 !== 3 → true
Exceptions: None.


Number vs. String
Rule of Thumb: The string is coerced to a number for comparison.
Examples:
'5' > 3 → true (string '5' coerced to 5)
'5' < 3 → false (string '5' coerced to 5)
'5' >= 5 → true (string '5' coerced to 5)
'5' <= 5 → true (string '5' coerced to 5)
'5' == 5 → true (string '5' coerced to 5)
'5' != 3 → true (string '5' coerced to 5, 5 is not 3)
'5' === 5 → false (different types, no coercion)
'5' !== 5 → true (different types, no coercion)
Exceptions: If the string is not a valid number (e.g., 'abc'), the comparison results in false due to coercion to NaN.


Number vs. Boolean
Rule of Thumb: The Boolean is coerced to a number (true to 1, false to 0).
Examples:
true > 0 → true (true coerced to 1, and 1 is greater than 0)
true < 0 → false (true coerced to 1, and 1 is not less than 0)
true >= 1 → true (true coerced to 1, and 1 is equal to 1)
true <= 1 → true (true coerced to 1, and 1 is equal to 1)
true == 1 → true (true coerced to 1, and 1 is equal to 1)
true != 1 → false (true coerced to 1, and 1 is equal to 1)
true === 1 → false (different types, no coercion)
true !== 1 → true (different types, no coercion)
false > 0 → false (false coerced to 0, and 0 is not greater than 0)
false < 0 → false (false coerced to 0, and 0 is not less than 0)
false >= 0 → true (false coerced to 0, and 0 is equal to 0)
false <= 0 → true (false coerced to 0, and 0 is equal to 0)
false == 0 → true (false coerced to 0, and 0 is equal to 0)
false != 0 → false (false coerced to 0, and 0 is equal to 0)
false === 0 → false (different types, no coercion)
false !== 0 → true (different types, no coercion)

Type Coercion: true is coerced to 1, and false is coerced to 0 for numeric comparisons.
Strict Comparison: === and !== do not coerce types; they compare both value and type directly.



Number vs. Arrays
Rule of Thumb: The array is coerced to a string, which is then coerced to a number.
Examples:
[1] == 1 → true (array [1] coerced to "1", which is 1)
[1,2] > 1 → false (array [1,2] coerced to "1,2", which is NaN)
[1] == '1' → true (array [1] coerced to "1", which is equal to string '1')
[1,2] > 2 → false (array [1,2] coerced to "1,2", which is NaN)
[1,2] < 2 → false
[1,2] >= 2 → false
[1,2] <= 2 → false
[1,2] == 2 → false
[1,2] != 2 → true
[1,2] === 2 → false
[1,2] !== 2 → true
Exceptions: Arrays with multiple elements (e.g., [1,2]) are coerced to a non-numeric string representation (e.g., "1,2"), which results in NaN.


Number vs. Object
Rule of Thumb: Objects are coerced to NaN in numeric comparisons.
Examples:
{} > 0 → false (object {} coerced to NaN)
{} < 0 → false
{} >= 0 → false
{} <= 0 → false
{} == 0 → false
{} != 0 → true
{} === 0 → false
{} !== 0 → true
Exceptions: Objects are always coerced to NaN in numeric comparisons, regardless of their contents.


Number vs. Set
Rule of Thumb: Sets are coerced to NaN in numeric comparisons.
Examples:
new Set() > 0 → false (Set coerced to NaN)
new Set() < 0 → false
new Set() >= 0 → false
new Set() <= 0 → false
new Set() == 0 → false
new Set() != 0 → true
new Set() === 0 → false
new Set() !== 0 → true
Exceptions: Sets are not meaningful in numeric comparisons and always coerce to NaN.
###############################################################################




###############################################################################
String vs. Undefined
Rule of Thumb: undefined coerces to NaN or is treated as undefined.

'abc' > undefined → false (undefined coerced to NaN)
'abc' < undefined → false
'abc' >= undefined → false
'abc' <= undefined → false
'abc' == undefined → false (string 'abc' is not equal to undefined)
'abc' != undefined → true
'abc' === undefined → false (different types, no coercion)
'abc' !== undefined → true
Exceptions: Strings are not directly comparable to undefined due to differing types.


String vs. Null
Rule of Thumb: null coerces to 0 or is treated as null.

'abc' > null → false (null coerced to 0, and 'abc' is not greater than 0)
'abc' < null → false
'abc' >= null → false
'abc' <= null → false
'abc' == null → false (different types, and string cannot be coerced to null)
'abc' != null → true
'abc' === null → false (different types, no coercion)
'abc' !== null → true
Exceptions: Strings are not directly comparable to null due to differing types.

String vs. String
Rule of Thumb: Comparisons are lexicographic based on Unicode values.

'a' > 'b' → false (Unicode value of 'a' is less than 'b')
'a' < 'b' → true (Unicode value of 'a' is less than 'b')
'a' >= 'a' → true (equal characters, comparison is true)
'a' <= 'a' → true (equal characters, comparison is true)
'a' == 'a' → true (same characters, same length)
'a' != 'b' → true (different characters)
'a' === 'a' → true (same characters, same type)
'a' !== 'b' → true (different characters)

Lexicographic Order: Strings are compared based on their Unicode code points. For instance, 'a' (code point 97) is less than 'b' (code point 98).
Equality (== and ===): Strings are considered equal if they have the same sequence of characters and the same length. The == operator checks for equality with type coercion, but for strings, this is redundant because they are already of the same type. The === operator checks for strict equality (same type and same value).
Inequality (!= and !==): Strings are considered different if they have different sequences of characters or lengths. The != operator checks for inequality with type coercion, which is not relevant for strings, while !== checks for strict inequality.
Additional Examples:

'hello' > 'hello' → false (same string, so not greater)
'hello' < 'hello' → false (same string, so not less)
'hello' > 'hella' → true (based on Unicode values of characters, 'o' > 'a')
'hello' < 'helloo' → true (shorter string is considered less than longer string when characters are identical up to the length of the shorter string)
Special Cases:

Empty Strings: Comparisons involving empty strings compare based on the other string’s value.
'' < 'a' → true
'' > 'a' → false
'' == '' → true
Case Sensitivity: String comparisons are case-sensitive.
'a' < 'B' → true (lowercase 'a' has a greater Unicode value than uppercase 'B')
Explanation for Case Sensitivity:

In Unicode, uppercase letters are generally less than lowercase letters. For example, 'A' (code point 65) is less than 'a' (code point 97).

Exceptions: None.


String vs. Boolean
Rule of Thumb: The Boolean is coerced to a number (true becomes 1, false becomes 0), and then the string is coerced to a number if possible.

true > '0' → true (string '0' coerced to 0, true coerced to 1, and 1 is greater than 0)
true < '0' → false (same coercion as above)
true >= '1' → true (string '1' coerced to 1, true coerced to 1)
true <= '1' → true
true == '1' → false (string '1' cannot be coerced to Boolean true)
true != '1' → true
true === '1' → false (different types, no coercion)
true !== '1' → true
false > '0' → false (string '0' coerced to 0, false coerced to 0)
false < '0' → false (same coercion as above)
false >= '1' → false (string '1' coerced to 1, false coerced to 0)
false <= '1' → true
false == '1' → false (string '1' cannot be coerced to Boolean false)
false != '1' → true
false === '1' → false (different types, no coercion)
false !== '1' → true

Exceptions: String and Boolean comparisons can lead to unexpected results due to different coercion rules.


String vs. Arrays
Rule of Thumb: Arrays are coerced to strings and then compared.
Examples:
'1' == [1] → true (array [1] coerced to "1")
'1,2' == [1,2] → true (array [1,2] coerced to "1,2")
'1' > [1] → false (array [1] coerced to "1", and '1' is equal to "1", not greater)
'1' < [1] → false
'1,2' > [1,2] → false
'1,2' < [1,2] → false
Explanation: Arrays are converted to strings, and then these strings are compared with other strings.


Exceptions: Arrays with multiple elements are coerced to a string format (e.g., [1,2] becomes '1,2'), which may not always match the string directly.


String vs. Object
Rule of Thumb: Objects are coerced to their string representation, which is usually "[object Object]" for plain objects. Comparisons between a string and an object typically yield false unless the object can be coerced into a string that matches the string.

Examples:

'' == {} → false (object {} coerced to "[object Object]", empty string '' is not equal to "[object Object]")
'' == new String('') → false (object new String('') coerced to "[object String]", empty string '' is not equal to "[object String]")
'string' == {} → false (object {} coerced to "[object Object]", string 'string' is not equal to "[object Object]")
'string' == new String('string') → false (object new String('string') coerced to "[object String]", string 'string' is not equal to "[object String]")
'string' == {toString: () => 'string'} → true (object with toString method returns 'string', which matches the string 'string')
'string' == {valueOf: () => 'string'} → true (object with valueOf method returns 'string', which matches the string 'string')
'string' == {toString: () => 'string', valueOf: () => 'not string'} → true (object with toString method returns 'string', which matches the string 'string', while valueOf is ignored in this case)

Explanation:

Coercion: When comparing an object with a string, JavaScript attempts to coerce the object to a primitive value using its toString or valueOf methods. If these methods return a string that matches the other string, the comparison may result in true. Otherwise, the result is generally false.

toString and valueOf Methods: If the object’s toString or valueOf method returns a string that matches the other string, the comparison evaluates to true. Otherwise, the default coercion to "[object Object]" does not match, resulting in false.

Additional Notes:

Primitive Conversion: The toString method is primarily used for converting objects to strings. The valueOf method is used for converting to a primitive value, but is less relevant for string comparisons.
Custom Objects: For custom objects, if you define toString or valueOf methods that return a string that matches the string being compared, the comparison will yield true.
Special Cases:

Empty Strings: Comparisons with empty strings often return false unless the object’s coercion results in an empty string.

'' == {toString: () => ''} → true (object’s toString returns '', which matches the empty string '')
'' == {valueOf: () => ''} → true (object’s valueOf returns '', which matches the empty string '')
Object Wrappers: new String('string') creates a String object, not a primitive string. Comparing it directly with a string without coercion will result in false.


Exceptions: Objects are compared based on their toString representation in comparisons with strings.


String vs. Set
Rule of Thumb: Sets are coerced to NaN or a string representation.
Examples:
'string' == new Set() → false (Set coerced to NaN)
'string' == new Set(['string']) → false (Set coerced to NaN)
Exceptions: Sets are not meaningful in string comparisons and always coerce to NaN.
###############################################################################



###############################################################################
Boolean vs. Undefined
Rule of Thumb: undefined coerces to NaN.
Examples:
true > undefined → false (undefined coerced to NaN)
true < undefined → false
true >= undefined → false
true <= undefined → false
true == undefined → false (different types)
true != undefined → true
true === undefined → false (different types, no coercion)
true !== undefined → true
false > undefined → false
false < undefined → false
false >= undefined → false
false <= undefined → false
false == undefined → false (different types)
false != undefined → true
false === undefined → false (different types)
false !== undefined → true
Exceptions: undefined cannot be compared meaningfully to a Boolean due to differing types.


Boolean vs. Null
Rule of Thumb: null coerces to 0.

true > null → true (null coerced to 0, and true coerced to 1)
true < null → false (null coerced to 0)
true >= null → true (true coerced to 1)
true <= null → false
true == null → false (different types, and true is not equal to null)
true != null → true
true === null → false (different types, no coercion)
true !== null → true
false > null → false (null coerced to 0)
false < null → false
false >= null → true (false coerced to 0)
false <= null → true
false == null → false (different types)
false != null → true
false === null → false (different types)
false !== null → true

Exceptions: null is not directly comparable to a Boolean in non-numeric contexts.


Boolean vs. Boolean
Rule of Thumb: Comparisons are straightforward.
Examples:
true == false → false
true === true → true
false !== false → false
Exceptions: None.


Boolean vs. Array
Rule of Thumb: Arrays are coerced to strings, and then compared to the coerced Boolean value.
Examples:
true == [1] → false (array [1] coerced to "1", and true coerced to 1)
true == [1,2] → false (array [1,2] coerced to "1,2", and true coerced to 1)
false == [0] → true (array [0] coerced to "0", and false coerced to 0)
false == [1] → false (array [1] coerced to "1", and false coerced to 0)
true > [0] → true (array [0] coerced to "0", and true coerced to 1)
true < [0] → false
false > [1] → false (array [1] coerced to "1", and false coerced to 0)
false < [1] → true
Exceptions: Arrays are converted to strings for comparison, leading to potential discrepancies.


Boolean vs. Object
Rule of Thumb: Objects are coerced to their string representation ("[object Object]"), which is not numerically meaningful or NaN.
Examples:
true > {} → false (object {} coerced to "[object Object]")
true < {} → false
true >= {} → false
true <= {} → false
true == {} → false (object {} coerced to "[object Object]")
true != {} → true
true === {} → false (different types, no coercion)
true !== {} → true
false > {} → false (object {} coerced to "[object Object]")
false < {} → false
false >= {} → false
false <= {} → false
false == {} → false (object {} coerced to "[object Object]")
false != {} → true
false === {} → false (different types, no coercion)
false !== {} → true
Exceptions: Objects are not directly comparable to Booleans in most contexts.


Boolean vs. Set
Rule of Thumb: Sets are coerced to strings, and then compared with the coerced Boolean value.

Examples:
true == new Set() → false (Set coerced to "[object Set]")
true == new Set([1]) → false (Set coerced to "[object Set]", not 1)
false == new Set() → false (Set coerced to "[object Set]")
false != new Set() → true
true > new Set() → false (Set coerced to "[object Set]")
true < new Set() → false
false > new Set() → false
false < new Set() → false
Exceptions: Sets do not meaningfully compare to Booleans and always coerce to NaN.
###############################################################################




###############################################################################
Arrays vs. Undefined

Rule of Thumb: undefined coerces to NaN.
Examples:
[1] == undefined → false
[1] !== undefined → true
Exceptions: Arrays cannot be directly compared to undefined meaningfully.


Arrays vs. Null
Rule of Thumb: null coerces to 0 in numeric contexts.
Examples:
[1] == null → false
[1] !== null → true
Exceptions: Arrays are not directly comparable to null meaningfully.


Arrays vs. Arrays
Rule of Thumb: Arrays are compared by reference, not by value.
Examples:
[1] == [1] → false
[1,2] === [1,2] → false
Exceptions: Arrays are compared by instance reference, not by their contents.


Arrays vs. Object
Rule of Thumb: Arrays are coerced to strings, while objects are coerced to "[object Object]".
Examples:
[1] == {} → false
[1] == {toString: () => '1'} → true (if object’s toString returns '1')
Exceptions: Arrays are compared based on their string representation against objects’ string representations.


Arrays vs. Set
Rule of Thumb: Arrays are coerced to strings, and sets are coerced to NaN.
Examples:
[1] == new Set() → false
[1] == new Set([1]) → false
Exceptions: Arrays and sets are not directly comparable and may coerce to non-matching values.
###############################################################################



###############################################################################
Object vs. Undefined
Rule of Thumb: undefined coerces to NaN.
Examples:
{} == undefined → false
{} !== undefined → true
Exceptions: Objects cannot be meaningfully compared to undefined.

Object vs. Null
Rule of Thumb: null coerces to 0.
Examples:
{} == null → false
{} !== null → true
Exceptions: Objects are not directly comparable to null in numeric contexts.

Object vs. Object
Rule of Thumb: Objects are compared by reference.
Examples:
{} == {} → false
{} === {} → false
Exceptions: Object comparisons are based on instance references, not content.

Object vs. Set
Rule of Thumb: Objects are coerced to strings or NaN, and sets are coerced to NaN.
Examples:
{} == new Set() → false
{} == new Set([{toString: () => '{}'}]) → false
Exceptions: Direct comparison between objects and sets is not meaningful due to different coercion rules.
###############################################################################





###############################################################################
Set vs. Set
Rule of Thumb: Sets are compared by reference, not by value.
Examples:
new Set() == new Set() → false
new Set([1]) == new Set([1]) → false
Exceptions: Sets are unique instances and are not compared by their contents.
###############################################################################
 */
