let btn = document.getElementById("ID");
const Random = () =>{
    let val = "0123456789ABCDEF"; 
    let c = "#";
    for ( let i = 0 ; i < 6 ; i++ ){
        c = c + val[Math.floor(Math.random() * 16)];
    }

    return c;
}

function ChangeColor(){
    document.body.style.backgroundColor = Random();
}

btn.addEventListener("click" , ChangeColor);
