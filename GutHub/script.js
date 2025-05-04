const API = "https://api.github.com/users/";
const Input = document.getElementsByClassName("input")[0];
const Btn = document.getElementsByClassName("Btn")[0];
const Card = document.querySelector(".Second");
const Rep = document.querySelector(".Repo");
const getGithub = () => {
    const username = Input.value.trim(); // Get input value
    if(!username){
        alert("Enter the valid Username!")
        return;
    }
    let GitApi =  API + username;

    fetch(GitApi)
    .then((response) => response.json())
    .then((data) => {
        getGenerate(data);
        
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}

const getGenerate = (data) => {
    console.log(data);
    const Image = data.avatar_url;
    const Follower = data.followers;
    const Following = data.following;
    const Name = data.name || "No Name";
    const Location = data.location || "Unknown";
    const Repo = data.public_repos;
    const Username = data.login;
    const Update = data.created_at;
    const Email = data.email;
    const Company = data.company    ;
    console.log(Username)
    Card.innerHTML = `
      <div class="Top">
          <img src= ${Image} alt="" class="Image">
          <div class="Dummy"></div>
          <div class="Name-User_Id">
             <h6 class="User-Name">${Username}</h6>
              <h6 class="Name">${Update}</h6>
          </div>
      </div>
      <div class="Follower">
        <div class="One">
          <h3>${Follower}</h3>
          <span class="S">Follower</span>
        </div>
        <div class="One">
          <h3>${Following}</h3>
          <span class="S">Following</span>
        </div>
        <div class="One">
          <h3>${Repo}</h3>
          <span class="S">Repo</span>
        </div>
      </div>
      <div class="Repo">
            <h6 class="User-Name">Email : ${Email}</h6>
            <h6 class="User-Name">Company : ${Company}</h6>
      </div>
      <div class="Loca">
        <p class="LocationAddr">${Location}</p>
      </div>`
    
}
// const PrintRepo  = (TEXT) => {
//      Rep.releasePointerCapture(0 , 6).forEach (repo => {
//            const name =   repo.name;
//            const url = repo.html_url;
//            repoHTML += `<span><a href="${url}" target="_blank">${name}</a></span>`;
//      })
// }
Btn.addEventListener("click",  getGithub)

// suraj-mali-1423
// singhsanket143
// repos.slice(0, 6).forEach(repo => {
//     const name = repo.name;
//     const url = repo.html_url;
//     repoHTML += `<span><a href="${url}" target="_blank">${name}</a></span>`;
// });