let klikovi = document.getElementById("klikovi");
let zaKlikat = document.getElementById("za-klikat");
let vrijeme = document.getElementById("vrijeme");

window.alert("Klikći plavi kvadrat što brže možeš u pet sekundi!")

let i = 5;
zaKlikat.addEventListener("click", function(){
    let timer = setInterval(
        function (){
            i--;
            vrijeme.innerHTML = i + " sekunda preostalo";
    }, 1000);

    setTimeout(function(){
        clearInterval(timer);
        klikovi.innerHTML;
        cps = klikovi.innerHTML/5;

        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "obradapodataka.php?trtest='brzinaklikanja'&brbodova="+cps);
        xhttp.send();
        
        document.getElementById("next").innerHTML = "<button>Idući test</button>";
        window.alert("Cps(clicks per second): " + cps);

        zaKlikat.removeEventListener("click",Bodovi);
    
    }, 5000);
},{once: true});

let cps = 0;

zaKlikat.addEventListener("click", Bodovi)
function Bodovi(){
        klikovi.innerHTML++;
};