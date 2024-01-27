#!/usr/bin/env node
const yargs = require("yargs");
const {argv} = yargs(process.argv);

// console.log(process.argv)
// [
//   '/home/mmwandera/.nvm/versions/node/v21.6.0/bin/node', // PATH TO INTERPRETER
//   '/home/mmwandera/.nvm/versions/node/v21.6.0/bin/mans-just-here-init', // PATH TO CLI
//   '--pikachu' // ARGUMENT
// ]

const printFiveMoves = async(pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({move}) => move.name);
    console.log(moves.slice(0, 5));
}

printFiveMoves(argv.pokemon);

// mans-just-here-init --pokemon=charmander //IN CLI