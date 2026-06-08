<?php
session_start();
require_once "conexion.php";

header('Content-Type: application/json; charset=utf-8');

if (!isset($_SESSION['usuario_id'])) {
    echo json_encode(["ok" => false, "message" => "Sesión no iniciada."]);
    exit();
}

$usuario_id = intval($_SESSION['usuario_id']);
$current = $_POST['current_password'] ?? '';
$new = $_POST['new_password'] ?? '';
$confirm = $_POST['confirm_password'] ?? '';

if ($current === '' || $new === '' || $confirm === '') {
    echo json_encode(["ok" => false, "message" => "Completa todos los campos de contraseña."]);
    exit();
}

if (strlen($new) < 6) {
    echo json_encode(["ok" => false, "message" => "La nueva contraseña debe tener al menos 6 caracteres."]);
    exit();
}

if ($new !== $confirm) {
    echo json_encode(["ok" => false, "message" => "Las nuevas contraseñas no coinciden."]);
    exit();
}

$stmt = $conexion->prepare("SELECT password FROM usuarios WHERE id = ?");
$stmt->bind_param("i", $usuario_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows !== 1) {
    echo json_encode(["ok" => false, "message" => "Usuario no encontrado."]);
    exit();
}

$user = $result->fetch_assoc();
$stmt->close();

if (!password_verify($current, $user['password'])) {
    echo json_encode(["ok" => false, "message" => "La contraseña actual es incorrecta."]);
    exit();
}

$newHash = password_hash($new, PASSWORD_DEFAULT);
$update = $conexion->prepare("UPDATE usuarios SET password = ? WHERE id = ?");
$update->bind_param("si", $newHash, $usuario_id);

if ($update->execute()) {
    echo json_encode(["ok" => true, "message" => "Contraseña actualizada correctamente."]);
    exit();
}

echo json_encode(["ok" => false, "message" => "No se pudo cambiar la contraseña."]);
?>
