let napunjeno = document.getElementById("napunjeno");

alert("Klikći spacebar što brže možeš kako bi napunio bar!");


document.addEventListener("keyup", function Bar(e){
    if(e.which == 32){
        document.removeEventListener("keyup",Bar);
        let i = 0;
        let timer = setInterval(
            function (){
                i++;
                console.log((i/100).toFixed(2));
            }, 10);
    

        let trenutnoNapunjeno = 0;
        let snizavanje = setInterval(
            function (){
                if(trenutnoNapunjeno > 30){
                    trenutnoNapunjeno -= 30;
                    napunjeno.style.height = trenutnoNapunjeno + "px";
                }
            }, 250);

        document.addEventListener("keyup", function Vrijeme(event){
            if(event.which == 32){
                trenutnoNapunjeno += 50;
                napunjeno.style.height = trenutnoNapunjeno + "px";
            }
            if(trenutnoNapunjeno >= 400){
                let vrijeme = (i/100).toFixed(2);

                clearInterval(snizavanje);
                clearInterval(timer);
                alert("Napunili ste bar u " + vrijeme + " s")

                const xhttp = new XMLHttpRequest();
                xhttp.open("GET", "obradapodataka.php?trtest='punjenjebara'&brbodova="+vrijeme);
                xhttp.send();

                document.removeEventListener("keyup", Vrijeme);

                document.getElementById("next").innerHTML = "<button>Idući test</button>";
            }
        });

    }

                
    
});



