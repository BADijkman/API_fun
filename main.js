




const setPokemon = async (id) => {
  const pokemonDiv = document.querySelector(".pokemon");
  const data = await getPokemon(id);
  console.log (data)

  const html = `
        <div class="name">${data.name}</div>
        
        <img src= ${data.sprites.front_default}>
        <div class="type">
          <span class="text">Type:${data.types[0].type.name}</span>
        </div>
        <div class="details">
          <span class="text id"> #${data.id}</span>
          <span class="text text__height">Height:${data.height/10} m</span>
          <span class="text text__weight">Weight:${data.weight/10} kg </span>
          
        </div>
    `;
  pokemonDiv.innerHTML = html;
};


const randomNumber = () =>{
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const id = (getRandomInt(150));
  setPokemon(id)
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", randomNumber);








