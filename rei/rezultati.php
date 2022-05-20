<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/rezultati.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
<center>
<?php
    session_start();

    $con = mysqli_connect("sql207.epizy.com", "epiz_31700090", "M7de5WdlddrC", "epiz_31700090_zavrsnirad");
    //$con = mysqli_connect("localhost", "root", "", "zavrsnirad");
    

    $upit = "SELECT * FROM bodovi WHERE ime = '$_SESSION[administrator]'";

    

    $rezupit = mysqli_query($con, $upit);

    $row = mysqli_fetch_array($rezupit);

    echo '
    <table >
        <tr><td>KORISNIK</td><td>'.$row['ime'].'</td></tr>
        <tr><td>BRZINA KLIKANJA</td><td>' .$row['brzinaklikanja'] . '</td></tr>
        <tr><td>POGOĐENE METE</td><td>' .$row['ciljanjemeta'] . '</td></tr>
        <tr><td>VRIJEME ZA NAPUNIT BAR</td><td>' .$row['punjenjebara'] . '</td></tr>
        <tr><td>LUCKY STREAK</td><td>' .$row['luckystreak'] . '</td></tr>
        <tr><td>POGOĐENO NASUMIČNIH BROJEVA</td><td>' .$row['zapamcenouvecanihbr'] . '</td></tr>
        <tr><td>POGOĐENO U VELIKOM BROJU</td><td>' .$row['zapamcenorandombr'] . '</td></tr>
        <tr><td>BRZINA REAKCIJE</td><td>' .$row['reakcija'] . '</td></tr>
    </table>';

    
    
?>
<a href = "./loginsustav/odjava.php"><button class = "botun">Odjava</button></a>

</center>
</body>
</html>
