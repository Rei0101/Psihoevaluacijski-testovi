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
		<h2> Ulogiraj se:</h2>
		<form name="prijava" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		
			<input placeholder="Korisničko ime" type="text" name="korisnik" value="">   
			<br />   
			<input placeholder="Lozinka" type="password" name="zaporka" value="">
			<br />
			<input type="submit" name="sbmt_login" value="Login">
			
			<p>Nemaš račun, <a href="./registracija.php">REGISTRIRAJ SE</a></p>
			</div>
			
		</form>
	</div>
</div>
  
  <?php

	if (isset($_POST["sbmt_login"])) {
		$korisnik = $_POST['korisnik'];
		$zaporka = $_POST['zaporka'];
		
		$con = mysqli_connect("sql207.epizy.com","epiz_31700090", "M7de5WdlddrC","epiz_31700090_zavrsnirad");
		//$con = mysqli_connect("localhost", "root", "", "zavrsnirad");

        $upit = "SELECT ime,lozinka FROM bodovi WHERE ime = '$korisnik' AND lozinka = '$zaporka'";

        $rezupit = mysqli_query($con, $upit);

		
		
		$row = mysqli_fetch_array($rezupit);
		

		if(isset($row["ime"]) != null || isset($row["lozinka"]) != null){
			session_start();

			$_SESSION['administrator'] = $row["ime"];
			$_SESSION['zaporka'] = $row["lozinka"];

			$SID = session_id();
			header('location:../testbrzineklikanja.html');

		}
		else{
			echo "<h3 id='neispravno'>Neispravno korisničko ime ili lozinka</h3>";
			exit; 
		}
		
	}	
	
?>
</body>
</html>