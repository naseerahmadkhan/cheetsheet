// IIFE immediately-invoked function expressions

// In the past, as there was only var, and it has no block-level visibility, programmers invented a way to emulate it. What they did was called “immediately-invoked function expressions” (abbreviated as IIFE).

(function go(){
    console.log('going')
})();

(function(){
    console.log('talking')   
}());

!function(){
    console.log('doing...')
}();

+function(){
    console.log('bye bye')
}()