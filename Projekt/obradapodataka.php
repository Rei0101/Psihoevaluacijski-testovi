<?php
session_start();

$con = mysqli_connect("sql106.infinityfree.com", "if0_38944216", "azLIb3fPLS", "if0_38944216_zavrsnirad");
//$con = mysqli_connect("localhost", "root", "", "zavrsnirad");

$trtest = trim($_GET['trtest'], "'");

$korisnik = $_SESSION['administrator'];
$zaporka = $_SESSION['zaporka'];
echo $korisnik." ".$zaporka." ".$trtest." ".$_GET['brbodova'];


$ubaci = "UPDATE bodovi SET $trtest = '$_GET[brbodova]' WHERE ime = '$korisnik' AND lozinka = '$zaporka'";

$result = mysqli_query($con, $ubaci);
echo "asdasd";
mysqli_close($con);

?>