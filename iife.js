//  With IIFE's (Immediately Invoked Function Expression) each function is its own scope (gets its own private scope). Under the hood node uses this same pattern.
// Before a module's code executes node will wrap it with a function wrapper that provides module scope
// This saves us from having to worry about conflicting variables or functions
// There is proper encapsulation and reusability is unaffected
(function(){
    const superHero = "Batman"
    console.log(superHero);
})();

(function(){
    const superHero = "Superman"
    console.log(superHero);
})();