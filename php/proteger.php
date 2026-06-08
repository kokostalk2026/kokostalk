<?php
session_start();

require_once "conexion.php";

/*
    proteger.php
    Protege páginas privadas.
    Si el usuario no ha iniciado sesión, lo envía al login.
    También obtiene el plan actual del usuario.
*/

if (!isset($_SESSION['usuario_id'])) {
    header("Location: ../login.html");
    exit();
}

$usuario_id = $_SESSION['usuario_id'];

$plan = "Free";

$sql = "SELECT plan FROM suscripciones WHERE usuario_id = ?";

$stmt = $conexion->prepare($sql);

if ($stmt) {
    $stmt->bind_param("i", $usuario_id);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $datos = $result->fetch_assoc();
        $plan = $datos['plan'];
    }

    $stmt->close();
} else {
    die("Error preparando consulta: " . $conexion->error);
}
?>