const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF"
};

const url = "https://pokeapi.co/api/v2/pokemon/";
let card = document.getElementById("Card");
const btn = document.getElementsByClassName("Next");
let Color =  () => {

}
let getnumber = () => {
     let id = Math.floor(Math.random() * 150)+1;
     let fatchid = url + id;
    fetch(fatchid)
    .then((response) => response.json())
    .then((data) => {
        getGenerate(data);
        
    })
}

let getGenerate = (data) => {
    console.log(data);
    const hp = data.stats[0].base_stat;
    const Image = data.sprites.other.dream_world.front_default;
    const PokName = data.name;
    const Atk = data.stats[1].base_stat;
    const deffence = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;
    const Color = typeColor[data.types[0].type.name]
    console.log(Color)
    card.innerHTML = `
            <h3 class="HP">Hp ${hp} ${getnumber.id}</h3>
            <img src="${Image}" alt="#" class="Image-Pok">
            <h2 class="Pok-Name">${PokName}</h2>
            <div class="types">
                <div class="Types1">
                    
                </div>
                <div class="Other">
                     <div>
                        <h3>${Atk}</h3>
                        <span>Attack</span>
                     </div>
                     <div>
                        <h3>${deffence}</h3>
                        <span>Defense</span>
                     </div>
                     <div>
                        <h3>${speed}</h3>
                        <span>Speed</span>
                     </div>
                </div>
            </div>`
            appendType(data.types);
            StyleCard(Color);
}
let appendType = (types) => {
    types.forEach(item => {
        let span = document.createElement("Span");
        span.textContent = item.type.name;
        document.querySelector(".Types1").appendChild(span);
    });
}
let StyleCard = (Color1) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${Color1} 36%, #ffffff 36%)`
}
// btn[0].addEventListener("click", getnumber);
setInterval(getnumber, 2000);