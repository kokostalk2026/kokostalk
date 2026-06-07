<?php
session_start();

$conexion = new mysqli("localhost", "root", "", "usuarios");

if ($conexion->connect_error) {
    die("Error de conexión");
}
 
if (!isset($_SESSION['usuario_id'])) {
    echo "no_session";
    exit();
}

$usuario_id = $_SESSION['usuario_id'];

if (!isset($_POST['plan'], $_POST['metodo'])) {
    die("Datos incompletos");
}

$plan = ucfirst(strtolower(trim($_POST['plan'])));
$metodo = $_POST['metodo'];

switch ($plan) {

    case "Basic":
        $precio = 7.99;
        $fecha_fin = date("Y-m-d", strtotime("+1 month"));
        break;

    case "Premium":
        $precio = 14.99;
        $fecha_fin = date("Y-m-d", strtotime("+1 month"));
        break;

    default:
        $plan = "Free";
        $precio = 0;
        $fecha_fin = NULL;
}

$fecha_inicio = date("Y-m-d");

$sql = "SELECT id FROM suscripciones WHERE usuario_id=?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("i", $usuario_id);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {

    $sql = "UPDATE suscripciones 
            SET plan=?, precio=?, metodo_pago=?, fecha_inicio=?, fecha_fin=? 
            WHERE usuario_id=?";

    $stmt = $conexion->prepare($sql);

    $stmt->bind_param(
        "sdsssi",
        $plan,
        $precio,
        $metodo,
        $fecha_inicio,
        $fecha_fin,
        $usuario_id
    );

} else {

    $sql = "INSERT INTO suscripciones
    (usuario_id, plan, precio, metodo_pago, fecha_inicio, fecha_fin)
    VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conexion->prepare($sql);

    $stmt->bind_param(
        "isdsss",
        $usuario_id,
        $plan,
        $precio,
        $metodo,
        $fecha_inicio,
        $fecha_fin
    );
}

if ($stmt->execute()) {
    echo "ok";
} else {
    echo $stmt->error;
}

$stmt->close();
$conexion->close();
?>