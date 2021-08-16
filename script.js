const apiData = {
  url: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: "22",
};
// const apiUrl= `${apiData.url}${apiData.type}/${apiData.id}`
// anders genoteerd
const { url, type, id } = apiData;
const apiUrl = `${url}${type}/${id}`;


fetch(apiUrl)
  .then((data) => data.json())
  .then((pokemon) => generateHTML(pokemon));

const generateHTML = (data) => {
  console.log(data); 
  const html = `
        <div class="name">${data.name}</div>
        <img src= ${data.sprites.front_default}>
        
        <div class="details">
            <span class="text">Height:${data.height}</span>
            <span class="text">Weight:${data.weight}</span>
        </div>
    `


const pokemonDiv = document.querySelector(".pokemon")
pokemonDiv.innerHTML = html
}; 