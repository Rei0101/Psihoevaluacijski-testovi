<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<link href="stil.css" rel="stylesheet" type="text/css" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>


<body onload="window.document.prijava.korisnik.focus()">

<div class="sve">
	
	<div id="container">
		<h2> Registriraj se:</h2>
		<form name="prijava" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		
			<input placeholder="Korisničko ime" type="text" name="korisnik" value="">   
			<br />   
			<input placeholder="Lozinka" type="password" name="zaporka" value="">
			<br />
			<input type="submit" name="sbmt_login" value="Register">
			</div>
		</form>
	</div>
  
  <?php

	if (isset($_POST["sbmt_login"])) {
		$korisnik = $_POST['korisnik'];
		$zaporka = $_POST['zaporka'];

        
        $con = mysqli_connect("sql106.infinityfree.com", "if0_38944216", "azLIb3fPLS", "if0_38944216_zavrsnirad");
		//$con = mysqli_connect("localhost", "root", "", "zavrsnirad");

        $upit = "INSERT INTO bodovi(ime, lozinka) VALUES('$korisnik', '$zaporka')";

        $rezupit = mysqli_query($con, $upit);
        header("location:../index.html");	
    }
		
		
?>
</div>
</body>
</html>