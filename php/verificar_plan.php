<?php
session_start();
require_once "conexion.php";

header('Content-Type: application/json; charset=utf-8');

if (!isset($_SESSION['usuario_id'])) {
    echo json_encode(["plan" => "Free"]);
    exit();
}

$usuario_id = intval($_SESSION['usuario_id']);

$sql = "SELECT * FROM suscripciones WHERE usuario_id = ? ORDER BY id DESC LIMIT 1";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("i", $usuario_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $datos = $result->fetch_assoc();

    if (!empty($datos['fecha_fin']) && date("Y-m-d") > $datos['fecha_fin']) {
        $update = $conexion->prepare("UPDATE suscripciones SET plan = 'Free', precio = 0, fecha_fin = NULL WHERE usuario_id = ?");
        $update->bind_param("i", $usuario_id);
        $update->execute();
        $update->close();

        echo json_encode(["plan" => "Free"]);
        exit();
    }

    echo json_encode([
        "plan" => $datos['plan'],
        "precio" => $datos['precio'],
        "fecha_fin" => $datos['fecha_fin']
    ]);
    exit();
}

echo json_encode(["plan" => "Free"]);
?>
