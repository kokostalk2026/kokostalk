<?php
$host = getenv("DB_HOST");
$user = getenv("DB_USER");
$password = getenv("DB_PASSWORD");
$database = getenv("DB_NAME");
$port = getenv("DB_PORT") ?: 3306;

$conexion = mysqli_init();

if (!$conexion) {
    die("Error al inicializar MySQL.");
}

// Aiven requiere SSL. Esta configuración activa conexión SSL sin archivo CA.
mysqli_ssl_set($conexion, NULL, NULL, NULL, NULL, NULL);

mysqli_real_connect(
    $conexion,
    $host,
    $user,
    $password,
    $database,
    intval($port),
    NULL,
    MYSQLI_CLIENT_SSL
);

if (mysqli_connect_errno()) {
    die("Error de conexión: " . mysqli_connect_error());
}

$conexion->set_charset("utf8mb4");
?>
