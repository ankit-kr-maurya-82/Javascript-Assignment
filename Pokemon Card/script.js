let searchBtn = document.getElementById("search-btn");
let input = document.getElementById("pokemon-input");
let result = document.querySelector(".result");

searchBtn.addEventListener("click", () => {
    let pokeName = input.value.toLowerCase().trim();
    if (pokeName === "") {
        result.innerHTML = `<h3 class="error">Please enter a Pokémon name!</h3>`;
        return;
    }

    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let imgSrc =
                data.sprites.other.home.front_default ||
                data.sprites.other.dream_world.front_default ||
                data.sprites.front_default;

            let types = data.types.map(t => t.type.name).join(", ");
            let abilities = data.abilities.map(a => a.ability.name).join(", ");

            result.innerHTML = `
                <div class="poke-card">
                    <h2>${data.name.toUpperCase()}</h2>
                    <img src="${imgSrc}" alt="Pokemon Image">

                    <p><b>Type:</b> ${types}</p>
                    <p><b>Weight:</b> ${data.weight}</p>
                    <p><b>Abilities:</b> ${abilities}</p>

                    <h3>Stats</h3>
                    <p>HP: ${data.stats[0].base_stat}</p>
                    <p>Attack: ${data.stats[1].base_stat}</p>
                    <p>Defense: ${data.stats[2].base_stat}</p>
                    <p>Speed: ${data.stats[5].base_stat}</p>
                </div>
            `;
        })
        .catch(err => {
            result.innerHTML = `<h2 class="error">Pokémon not found!</h2>`;
        });
});
