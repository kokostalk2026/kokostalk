<?php
session_start();
require_once "conexion.php";

if ($conexion->connect_error) {
    die("Error de conexión");
}

if (!isset($_SESSION['usuario_id'])) {
 
    echo json_encode([
        "plan" => "Free"
    ]);
    exit();
}

$usuario_id = $_SESSION['usuario_id'];

$sql = "SELECT * FROM suscripciones WHERE usuario_id=?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("i", $usuario_id);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {

    $datos = $result->fetch_assoc();

    if ($datos['fecha_fin'] != NULL && date("Y-m-d") > $datos['fecha_fin']) {

        $update = "UPDATE suscripciones 
                   SET plan='Free', precio=0, fecha_fin=NULL
                   WHERE usuario_id=?";

        $stmt2 = $conexion->prepare($update);
        $stmt2->bind_param("i", $usuario_id);
        $stmt2->execute();

        echo json_encode(["plan" => "Free"]);

    } else {

        echo json_encode([
            "plan" => $datos['plan'],
            "precio" => $datos['precio'],
            "fecha_fin" => $datos['fecha_fin']
        ]);
    }

} else {

    echo json_encode(["plan" => "Free"]);
}

$conexion->close();
?>