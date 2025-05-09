let svijetlo = document.getElementById("svijetlo");
let timer;
let i = 0;

alert("Kad crveno svijetlo postane zeleno klikni ga što brže možeš!")
svijetlo.style.backgroundColor = "red";
let random = setTimeout(
    function (){
        svijetlo.style.backgroundColor = "green";

        if(svijetlo.style.backgroundColor == "green"){
            timer = setInterval(
                function (){
                    i++;
                    console.log((i/100).toFixed(2));
            }, 10);
        }
}, Math.floor(Math.random() * 5000));


svijetlo.addEventListener("click", function() {
    clearInterval(timer);
    let reakcija = (i/100).toFixed(2);
    if(svijetlo.style.backgroundColor != "green"){
        alert("Prerano! Klikni nakon što svijetlo postane zeleno.")
    }
    else{
        window.alert(reakcija + " s");
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", "obradapodataka.php?trtest='reakcija'&brbodova="+reakcija);
        xhttp.send();
        
        document.getElementById("next").innerHTML = "<button>Rezultati</button>";
    }
},{once:true})