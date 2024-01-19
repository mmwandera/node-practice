const superHero = require('./super-hero')
console.log(superHero.getName())
// => Batman
superHero.setName("Superman")
console.log(superHero.getName())
// => Superman

const newSuperHero = require('./super-hero')
console.log(newSuperHero.getName())
// => Superman