<?php

$hostname = "localhost";
$bancodedados = "rifas";
$usuario = "root";
$senha = "";

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

if ($mysqli -> connect_errno) {
    echo "erro de conexao: (" . $mysqli -> connect_errno . ") " . $mysqli -> connect_error;
}

else 

echo "conectada!!! :)";

