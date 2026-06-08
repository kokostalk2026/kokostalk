<?php
session_start();
require_once "conexion.php";

header('Content-Type: application/json; charset=utf-8');

if (!isset($_SESSION['usuario_id'])) {
    echo json_encode(["ok" => false, "message" => "Sesión no iniciada."]);
    exit();
}

$usuario_id = intval($_SESSION['usuario_id']);
$username = trim($_POST['username'] ?? '');
$email = trim($_POST['email'] ?? '');
$country = trim($_POST['country'] ?? 'El Salvador');
$reason = trim($_POST['reason'] ?? '');

if ($username === '' || $email === '') {
    echo json_encode(["ok" => false, "message" => "Nombre y correo son obligatorios."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["ok" => false, "message" => "Correo electrónico no válido."]);
    exit();
}

$check = $conexion->prepare("SELECT id FROM usuarios WHERE (username = ? OR email = ?) AND id <> ?");
$check->bind_param("ssi", $username, $email, $usuario_id);
$check->execute();
$check->store_result();

if ($check->num_rows > 0) {
    echo json_encode(["ok" => false, "message" => "Ese usuario o correo ya está en uso."]);
    exit();
}
$check->close();

$stmt = $conexion->prepare("UPDATE usuarios SET username = ?, email = ?, country = ?, reason = ? WHERE id = ?");
if (!$stmt) {
    echo json_encode(["ok" => false, "message" => "Error preparando actualización."]);
    exit();
}

$stmt->bind_param("ssssi", $username, $email, $country, $reason, $usuario_id);

if ($stmt->execute()) {
    $_SESSION['usuario'] = $username;
    $_SESSION['email'] = $email;
    $_SESSION['country'] = $country;
    $_SESSION['reason'] = $reason;

    echo json_encode([
        "ok" => true,
        "message" => "Perfil actualizado correctamente.",
        "usuario" => $username,
        "email" => $email,
        "country" => $country,
        "reason" => $reason
    ]);
    exit();
}

echo json_encode(["ok" => false, "message" => "No se pudo actualizar el perfil."]);
?>
