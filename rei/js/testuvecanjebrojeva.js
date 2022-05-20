let broj = document.getElementById("broj");

let trenutniBroj;
let noviBroj = 10;
let i = 1;
let bodovi = 0;

alert("Pamti broj po broj!")

Timer();

function Timer(){
    
    do{
        broj.innerHTML = Math.floor(Math.random() * noviBroj);
        trenutniBroj = broj.innerHTML;
    }while(broj.innerHTML.length != i);
    i++;
            
    let upis = setTimeout(
        function(){
            broj.innerHTML = `
                <input type="text" id="upisano" placeholder="Upiši brojeve po redu">
                <button type="button" id="provjera">Provjera</button> 
            `;
            console.log(broj.innerhtml);
            
            noviBroj = noviBroj * 10;
            document.getElementById("provjera").addEventListener("click", function(){
                if(document.getElementById("upisano").value == trenutniBroj){
                    bodovi++;
                    Timer();
                }
                else{
                    alert("Krivo! Imate " + bodovi + " bodova.");

                    const xhttp = new XMLHttpRequest();
                    xhttp.open("GET", "obradapodataka.php?trtest='zapamcenouvecanihbr'&brbodova="+bodovi);
                    xhttp.send();
                    
                    document.getElementById("next").innerHTML = "<button>Idući test</button>";
                }
            },{once: true});
        }, 500);
    
};
