const person = { name: 'Alice', age: 30 };

console.log('hello %s how are %s','naseer','you')        //hello naseer how are you     #string substitution with %s
console.log('hi %i',5.5)        //hi 5  %d and %i: Display numbers, with %d generally used for decimal numbers and %i specifically for integers.
console.log('hi %d',5.5)        //hi 5.5
console.log('Person object: %o', person);   //%o: Displays objects, often in a format that can be expanded in developer tools.

console.warn('i am giving you warning');
console.info('giving info');
console.error('this is error');
console.debug('i am debugging');

console.time('t1');
setTimeout(()=>{
    console.log('done')
    console.timeEnd('t1')
},2000)

console.clear()

// work in browser
console.log('%cHello world!', 'color: blue; font-size: xx-large');

/* 
Specifier Output
%s Formats the value as a string
%i or %d Formats the value as an integer
%f Formats the value as a floating point value
%o Formats the value as an expandable DOM element
%O Formats the value as an expandable JavaScript object
%c Applies CSS style rules to the output string as specified by the second parameter 
*/