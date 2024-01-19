//  With IIFE's (Immediately Invoked Function Expression) each function is its own scope (gets its own private scope). Under the hood node uses this same pattern.
// Before a module's code executes node will wrap it with a function wrapper that provides module scope
// This saves us from having to worry about conflicting variables or functions
// There is proper encapsulation and reusability is unaffected.
(function(message){
    const superHero = "Batman"
    console.log(message, superHero);
})("Hello");

(function(message){
    const superHero = "Superman"
    console.log(message, superHero);
})("Hi");

// Before a module's code is executed node will wrap it in a function that contains 5 parameters i.e
// (function(exports, require, module, __filename, __dirname){
//     const superHero = "Batman"
//     console.log(message, superHero);
// })("Hello");