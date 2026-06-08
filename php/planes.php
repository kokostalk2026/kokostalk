<?php
session_start();
require_once "conexion.php";

if ($conexion->connect_error) {
    die("Error de conexión");
}

// Verificar sesión
if (!isset($_SESSION['usuario_id'])) {
    echo "no_session";
    exit();
}

// Si entra directo al archivo, redirigir
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: ../planes.html");
    exit();
}

$usuario_id = $_SESSION['usuario_id'];

// Obtener datos del formulario
$plan = ucfirst(strtolower(trim($_POST['plan'] ?? '')));
$metodo = trim($_POST['metodo'] ?? '');

// Validar datos
if (empty($plan) || empty($metodo)) {
    die("Faltan datos");
}

$fecha_inicio = date("Y-m-d");

// Determinar precio y duración según el plan
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

    case "Free":
        $precio = 0.00;
        $fecha_fin = NULL;
        break;

    default:
        die("Plan no válido");
}

// Verificar si ya existe una suscripción
$sql_check = "SELECT id FROM suscripciones WHERE usuario_id = ?";
$stmt_check = $conexion->prepare($sql_check);

if (!$stmt_check) {
    die("Error en consulta");
}

$stmt_check->bind_param("i", $usuario_id);
$stmt_check->execute();

$result = $stmt_check->get_result();

// Si ya existe → UPDATE
if ($result->num_rows > 0) {

    $sql = "UPDATE suscripciones
            SET plan = ?, precio = ?, metodo_pago = ?, fecha_inicio = ?, fecha_fin = ?
            WHERE usuario_id = ?";

    $stmt = $conexion->prepare($sql);

    if (!$stmt) {
        die("Error en update");
    }

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

    // Si no existe → INSERT
    $sql = "INSERT INTO suscripciones
            (usuario_id, plan, precio, metodo_pago, fecha_inicio, fecha_fin)
            VALUES (?, ?, ?, ?, ?, ?)";

    $stmt = $conexion->prepare($sql);

    if (!$stmt) {
        die("Error en insert");
    }

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

// Ejecutar consulta
if ($stmt->execute()) {
    echo "ok";
} else {
    echo "error";
}

// Cerrar conexiones
$stmt->close();
$stmt_check->close();
$conexion->close();
?>