let broj = document.getElementById("broj");

let brojevi = [];

alert("Zapamti broj što bolje moguće!")

let interval = setInterval(
    function (){
        if(brojevi.length > 8){
            clearInterval(interval);
            broj.innerHTML = `
                    <input type="text" id="upisano" maxlength="9" placeholder="Upiši brojeve po redu">
                    <button type="button" id="provjera">Provjera</button> 
            `;
            let provjera = document.getElementById("provjera");

            provjera.addEventListener("click",function Pogodeno(){
                let upisano = document.getElementById("upisano");            

                let podijeljeno = upisano.value.split("");
            
                console.log(brojevi)
                console.log(podijeljeno);
                
                let pogodeno = 0;
                let j = 0;

                for(i in podijeljeno){
                    
                    if(podijeljeno[i] == brojevi[j]){
                        
                        pogodeno++;
                        j++;

                    }
                    else{
                        j++;
                    }
                    console.log(pogodeno);
                }
                window.alert("Zapamtili ste "+ pogodeno + " od " + brojevi.length + " brojeva!");
                console.log(pogodeno);

                const xhttp = new XMLHttpRequest();
                xhttp.open("GET", "obradapodataka.php?trtest='zapamcenorandombr'&brbodova="+pogodeno);
                xhttp.send();
                
                document.getElementById("next").innerHTML = "<button>Idući test</button>";

                provjera.removeEventListener("click", Pogodeno);
            });

        }
        else{
            broj.innerHTML = Math.floor(Math.random() * 10);
            brojevi.push(broj.innerHTML);
            setTimeout(function(){broj.innerHTML = ""},600);
        }
}, 800);





