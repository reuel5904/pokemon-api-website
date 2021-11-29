let backgroundImg = document.querySelector('photo__container')
let backgroundColor = document.querySelector('.pokemon_page')
let searchQuery = "";
let results = document.querySelector('.result');
let search = document.getElementById('search__input')
const pokemonListEl = document.querySelector('.pokemons');

async function main() {

    skeleton();

    const pokemonAPI = await fetch (("https://api.pokemontcg.io/v2/cards?q=name:" + searchQuery), {
        headers: {
            'X-API-KEY': '6524a213-62fa-4d72-9a47-27c6218f2457'
        }
    }).catch(error => {
        console.log("here!!")
        console.error(error.response)
    })

    const pokemonData = await pokemonAPI.json();
    const pokemonDataResults = pokemonData.data
    console.log(pokemonDataResults)
    
    pokemonListEl.innerHTML = pokemonDataResults.map(
        (pokemon) => pokemonHTML(pokemon)).join('')

    results.innerHTML = `Results for "${search.value}" - ${pokemonDataResults.length}`

    let pokemonTypes = "" + pokemonDataResults[0].types;
    let pokemonSubTypes= "" + pokemonDataResults[0].subtypes[0];


    switch (pokemonTypes) {
        case 'Fire':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(240,128,48,1) 100%)";
            break;
        case 'Water':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(104,144,240,1) 100%)";
            break;
        case 'Grass':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(120,200,80,1) 100%)";
            break;
        case 'Lightning':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(248,208,48,1) 100%)";
            break;
        case 'Fighting':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(192,48,40,1) 100%)";
            break;
        case 'Psychic':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(248,88,136,1) 100%)";
            break;
        case 'Darkness':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(112,88,72,1) 100%)";
            break;
        case 'Dragon':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(112,56,248,1) 100%)";
            break;
        case 'Metal':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(184,184,208,1) 100%)";
            break;
        case 'Colorless':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(204,204,204,1) 80%)";
            break;
        case 'Fairy':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(240,182,188,1) 100%)";
            break;
        default:
            backgroundColor.style.backgroundColor = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(204,204,204,1) 80%)";
            break;

    }

    let exist = Object.keys(pokemonDataResults[0]).includes('types')

    if (exist === false) {
        switch(pokemonSubTypes) {
        case 'Basic':
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(204,204,204,1) 80%)";
            break;
        default:
            backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(204,204,204,1) 80%)";
            break;
        }
    }
    // if (testArr === 'Fire') {
    //     backgroundColor.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 10%, rgba(240,128,48,1) 50%, rgba(255,255,255,1) 100%)";
    // }

}

function showUserPosts(id) {
    localStorage.setItem("id", id)
    window.location.href = `pokemon.html`
}


function pokemonHTML(pokemon) {
    return `<div class="pokemon" onclick="showUserPosts('${pokemon.id}')">
                <figure class="pokemon__img--wrapper">
                    <img class="pokemon__img" alt="" src="${pokemon.images.small}">
                </figure>
                <h2 class="pokemon__title">${pokemon.name}</h2>
                <div class="pokemon__type">${pokemon.types}</div>
                <div class="content"></div>
            </div>`
}

function searchKeyPress(event) {
    event = event || window.event;
    if (event.key === 'Enter') {
        searchQuery = '"'+ search.value+'"';
        main();
        return false;
    }
    return true;
}

function openMenu() {
    document.body.classList += " menu-open"
}

function closeMenu() {
    document.body.classList.remove('menu-open')
}

function skeleton() {
    skeletonHTML = `<div class="pokemon">
                        <figure>
                            <img class="skeleton-image skeleton">
                        </figure>
                        <h2 class="skeleton-title skeleton"></h2>
                        <div class="skeleton-type skeleton"></div>
                    </div>`
    pokemonListEl.innerHTML = skeletonHTML.repeat(10);
}