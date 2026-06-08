<?php
session_start();
require_once "conexion.php";

if (!isset($_SESSION['usuario_id'])) {
    header("Location: ../login.html");
    exit();
}

$usuario_id = intval($_SESSION['usuario_id']);
$plan = "Free";

$sql = "SELECT plan, fecha_fin FROM suscripciones WHERE usuario_id = ? ORDER BY id DESC LIMIT 1";
$stmt = $conexion->prepare($sql);

if (!$stmt) {
    die("Error preparando consulta: " . $conexion->error);
}

$stmt->bind_param("i", $usuario_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $datos = $result->fetch_assoc();

    if (!empty($datos['fecha_fin']) && date("Y-m-d") > $datos['fecha_fin']) {
        $plan = "Free";

        $update = $conexion->prepare("UPDATE suscripciones SET plan = 'Free', precio = 0, fecha_fin = NULL WHERE usuario_id = ?");
        if ($update) {
            $update->bind_param("i", $usuario_id);
            $update->execute();
            $update->close();
        }
    } else {
        $plan = $datos['plan'];
    }
}

$stmt->close();
?>
