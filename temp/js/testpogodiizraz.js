let izraz = document.getElementById("izraz");
let izrazi = ["slike/sretan.png", "slike/tuzan.png"];
let streak = 0;


alert("Klikni lijevu strelicu ako misliš da će bit happy emoji ili desnu ako misliš da će bit sad emoji");

//pokazi prvu sliku
let trenutacniIzraz = Math.floor(Math.random() * izrazi.length);
izraz.src = izrazi[trenutacniIzraz];

document.addEventListener("keyup",Test);


function Test(e){
    trenutacniIzraz = Math.floor(Math.random() * izrazi.length);

    if(e.which == 37){
        if(izrazi[trenutacniIzraz] == "slike/sretan.png"){
            izraz.src = izrazi[trenutacniIzraz];
            streak++;
            console.log(streak);
        }
        else{
            document.removeEventListener("keyup", Test);
            alert("Višee sreće drugi put! Vaš lucky streak je "+streak);
            console.log(streak);

            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "obradapodataka.php?trtest='luckystreak'&brbodova="+streak);
            xhttp.send();
            
            document.getElementById("next").innerHTML = "<button>Idući test</button>";
        }
    }
    else if(e.which == 39){
        if(izrazi[trenutacniIzraz] == "slike/tuzan.png"){
            izraz.src = izrazi[trenutacniIzraz];
            streak++;
            console.log(streak);
        }
        else{
            document.removeEventListener("keyup", Test);
            alert("Višee sreće drugi put! Vaš lucky streak je "+streak);
            console.log(streak);

            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "obradapodataka.php?trtest='luckystreak'&brbodova="+streak);
            xhttp.send();

            
            document.getElementById("next").innerHTML = "<button>Idući test</button>";
        }
    }
    else{
        alert("Kriva tipka! Koristi lijevu ili desnu strelicu.")
    }     
};
