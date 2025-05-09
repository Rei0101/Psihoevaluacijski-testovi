let container = document.getElementById("container");

alert("Pogodi što više crvenih meta možeš! Pri promašaju se oduzima po jedan bod.")

let Meta = function(){  

    let meta = document.createElement("div");
    

    meta.classList.add("meta");
    meta.style.top = Math.floor(Math.random() * 600) + "px";
    meta.style.left = Math.floor(Math.random() * 900) + "px";

    meta.addEventListener("click", function(){
        meta.style.top = Math.floor(Math.random() * 600) + "px";
        meta.style.left = Math.floor(Math.random() * 900) + "px";
        
        
    });


    container.append(meta);
}

let meta1 = new Meta();
let meta2 = new Meta();
let meta3 = new Meta();
let meta4 = new Meta();//ovo ne bi radilo da smo dolje stavili

let brojac = 0;


let klase = document.getElementsByClassName("meta");

for(let i = 0; i < 4; i++){
    klase[i].addEventListener("click", function(){
        brojac++;
        console.log(brojac);
    });
}
container.addEventListener("click", function(e){
    //moramo ovako da ne uhvatimo i child element
    if(e.target == container){
        brojac--;
        console.log(brojac);
    }
});

let i = 5;

let timer = setInterval(
    function (){
        i--;
        vrijeme.innerHTML = i + " sekunda preostalo";
        console.log(brojac);
}, 1000);
setTimeout(function(){
    clearInterval(timer);
    window.alert("Bodovi: " + brojac);
    const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "obradapodataka.php?trtest='ciljanjemeta'&brbodova="+brojac);
        xhttp.send();

    document.getElementById("next").innerHTML = "<button>Idući test</button>";
    
}, 5000);

