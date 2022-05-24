<?php

$hostname = "sql102.epizy.com";
$database = "epiz_31454924_banquinho";
$username = "epiz_31454924";
$password = "KdnZ3joQxGqA";

try {
    $pdo = new PDO('mysqli:host= ' .$hostname . ';dbname=' . $dbname, $username, $password);
    $pdo -> setAttribute(PDO:: ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);

} 

catch (PDOException) {

    echo 'error: ' . $e -> getMessage();
}