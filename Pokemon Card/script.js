let pokeName = "pikachu="
const PokeURL = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
let poke = document.querySelector('.poke')
let PokeData = fetch(PokeURL)
PokeData.then(response => response.json())
.then((data) => {
    console.log(data)
    console.log("name: ",data.name)
    console.log("weight: ",data.weight)
    console.log("attack: ",data.moves[0].move.name)
    console.log(data.stats[0].base_stat)
    console.log(data.sprites.other.dream_world.front_default)
    let imgSrc = data.sprites.other.home.front_default
    poke.innerHTML = `
    <img src="${imgSrc}">`
}).catch((error)=> {
    console.log(error,"pokemon not found!!");
    
})