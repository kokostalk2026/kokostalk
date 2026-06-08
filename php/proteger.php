<?php

session_start();

$conexion = new mysqli("localhost", "root", "", "usuarios");

if ($conexion->connect_error) {
    die("Error de conexión");
}

if (!isset($_SESSION['usuario_id'])) {

    header("Location: ../login.html");
    exit();
}

$usuario_id = $_SESSION['usuario_id'];

$sql = "SELECT plan FROM suscripciones WHERE usuario_id=?";

$stmt = $conexion->prepare($sql);

$stmt->bind_param("i", $usuario_id);

$stmt->execute();

$result = $stmt->get_result();

$plan = "Free";

if($result->num_rows > 0){

    $datos = $result->fetch_assoc();

    $plan = $datos['plan'];
}
?>