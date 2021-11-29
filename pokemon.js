const pokemonInfoEl = document.querySelector('.pokemons__info');
const id = localStorage.getItem("id");
let pokemonType = document.querySelector('.pokemon__type')



async function renderCards(id) {
    const pokemonInfo = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`);
    const pokemonInfoJSON = await pokemonInfo.json();
    const pokemonInfoData = pokemonInfoJSON.data;
    console.log(pokemonInfoData)
    
    var exist = Object.keys(pokemonInfoData).includes('attacks')
    console.log(exist)

    pokemonInfoEl.innerHTML = postHTML(pokemonInfoData)

    let pokemonTypes = "" + pokemonInfoData.types
    let pokemonTypeInfo = document.querySelector('.pokemon__type--info')
    let pokemonArtist = document.querySelector('.pokemon__info--artist')
    let pokemonInfoPrice = document.querySelector('.pokemon__info--price')
    let pokemonAttackContainer = document.querySelector('.pokemon__attack--container')
    let pokemonAttackOne = document.querySelector('.attack__1')
    let pokemonAttackTwo = document.querySelector('.attack__2')
    
    switch(pokemonTypes) {
        case 'Fire':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#F08030";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#F08030" : pokemonAttackOne.style.color = "#F08030";
            break;
        case 'Water':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#6890F0";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#6890F0" : pokemonAttackOne.style.color = "#6890F0";
            break;
        case 'Grass':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#78C850";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#78C850" : pokemonAttackOne.style.color = "#78C850";
            break;
        case 'Lightning':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#F8D030";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#F8D030" : pokemonAttackOne.style.color = "#F8D030";
            break;
        case 'Fighting':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#C03028";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#C03028" : pokemonAttackOne.style.color = "#C03028";
            break;
        case 'Psychic':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#F85888";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#F85888" : pokemonAttackOne.style.color = "#F85888";
            break;
        case 'Darkness':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#705848";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#705848" : pokemonAttackOne.style.color = "#705848";
            break;   
        case 'Dragon':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#705848";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#705848" : pokemonAttackOne.style.color = "#705848";
            break;
        case 'Metal':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#705848";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#705848" : pokemonAttackOne.style.color = "#705848";
            break;
        case 'Colorless':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#CCC";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#CCC" : pokemonAttackOne.style.color = "#CCC";
            break;
        case 'Fairy':
            pokemonTypeInfo.style.color = pokemonArtist.style.color = pokemonInfoPrice.style.color = pokemonAttackContainer.style.borderColor = "#705848";
            typeof pokemonInfoData.attacks[1] !== "undefined" ? pokemonAttackOne.style.color = pokemonAttackTwo.style.color = "#705848" : pokemonAttackOne.style.color = "#705848";
            break;
        default:
            break;
    }

}
renderCards(id);

function postHTML(pokemon) {
    return `<div class="pokemon__info--container">
        <div class="left__column">
        <img src="${pokemon.images.small}" alt="" class="pokemon__info--img">
    </div>
    <div class="right__column">
        <div class="text__column">
            ${Object.keys(pokemon).includes('artist') ? `<h5 class="pokemon__info--artist">Artist: ${pokemon.artist}</h5>` : `<h5 class="pokemon__info--artist"></h5>`}

            <h1 class="pokemon__info--name">${pokemon.name}</h1>

            ${Object.keys(pokemon).includes('types') ? `<h4 class="pokemon__info--type">Type: <span class="pokemon__type--info">${pokemon.types}</span></h4>` : `<h4 class="pokemon__info--type></h4>`}

            ${Object.keys(pokemon).includes('attacks') ? typeof pokemon.attacks[1] !== "undefined" ? 

            // If two attacks exist exists 
            `<div class="pokemon__attack--container"><span class="container-title">Attacks</span>
            <h5 class="pokemon__info--attack attack__1"><span class="highlight-text">${pokemon.attacks[0].name}</span></h5>
                <ul class="pokemon__attacks--text">
                    <li class="pokemon__attack--text cost">Cost: ${pokemon.attacks[0].cost.length} - ${pokemon.attacks[0].cost} Energy</li>
                    
                    <li class="pokemon__attack--text details"> ${pokemon.attacks[0].text}</li>
                </ul>` +
            `<h5 class="pokemon__info--attack attack__2"><span class="highlight-text">${pokemon.attacks[1].name}</span></h5>
                <ul class="pokemon__attacks--text">
                    <li class="pokemon__attack--text cost">Cost: ${pokemon.attacks[1].cost.length} - ${pokemon.attacks[1].cost} Energy</li>
                    <li class="pokemon__attack--text details"> ${pokemon.attacks[1].text}</li>
                </ul>
            </div>`
            :
            
            // If one attack exists
            `<div class="pokemon__attack--container"><span class="container-title">Attacks</span>
            <h5 class="pokemon__info--attack attack__1"><span class="highlight-text">${pokemon.attacks[0].name}</span></h5>
                <ul class="pokemon__attacks--text">
                    <li class="pokemon__attack--text cost">Cost: ${pokemon.attacks[0].cost.length} - ${pokemon.attacks[0].cost} Energy</li>
                    <li class="pokemon__attack--text details"> ${pokemon.attacks[0].text}</li>
                </ul>
            </div>`

            : `<h5 class="pokemon__info--attack"></h5>`}  

            ${Object.keys(pokemon).includes('prices') ? `<h2 class="pokemon__info--price">Price: $${pokemon.cardmarket.prices.trendPrice} </h2>` : `<h2 class="pokemon__info--price highlight-text">No Price Available for this Card</h2>`}
        </div>
    </div>
</div>`
}

// <h3 class="pokemon__info--type">${pokemon.types}</h3>

// <h2 class="pokemon__info--price">