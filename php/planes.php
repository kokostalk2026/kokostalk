<?php
session_start();
require_once "conexion.php";

if (!isset($_SESSION['usuario_id'])) {
    echo "no_session";
    exit();
}

if (!isset($_POST['plan'], $_POST['metodo'])) {
    header("Location: ../planes.html");
    exit();
}

$usuario_id = intval($_SESSION['usuario_id']);
$plan = ucfirst(strtolower(trim($_POST['plan'])));
$metodo = trim($_POST['metodo']);

switch ($plan) {
    case "Basic":
        $precio = 15.00;
        $fecha_fin = date("Y-m-d", strtotime("+1 month"));
        break;
    case "Premium":
        $precio = 25.00;
        $fecha_fin = date("Y-m-d", strtotime("+1 month"));
        break;
    case "Enterprise":
        $precio = 100.00;
        $fecha_fin = date("Y-m-d", strtotime("+1 month"));
        break;
    default:
        $plan = "Free";
        $precio = 0.00;
        $fecha_fin = NULL;
        break;
}

$fecha_inicio = date("Y-m-d");

$check = $conexion->prepare("SELECT id FROM suscripciones WHERE usuario_id = ?");
$check->bind_param("i", $usuario_id);
$check->execute();
$result = $check->get_result();

if ($result->num_rows > 0) {
    $stmt = $conexion->prepare("UPDATE suscripciones SET plan = ?, precio = ?, metodo_pago = ?, fecha_inicio = ?, fecha_fin = ? WHERE usuario_id = ?");
    $stmt->bind_param("sdsssi", $plan, $precio, $metodo, $fecha_inicio, $fecha_fin, $usuario_id);
} else {
    $stmt = $conexion->prepare("INSERT INTO suscripciones (usuario_id, plan, precio, metodo_pago, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("isdsss", $usuario_id, $plan, $precio, $metodo, $fecha_inicio, $fecha_fin);
}

if ($stmt->execute()) {
    echo "ok";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$check->close();
$conexion->close();
?>
