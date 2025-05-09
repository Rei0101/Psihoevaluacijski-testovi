<?php
session_start();

$con = mysqli_connect("sql207.epizy.com", "epiz_31700090", "M7de5WdlddrC", "epiz_31700090_zavrsnirad");
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