<?php
session_start();
require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';

    if ($username === '' || $password === '') {
        echo "<script>
            alert('Debes completar todos los campos.');
            window.location.href='../login.html';
        </script>";
        exit();
    }

    $stmt = $conexion->prepare("SELECT id, username, email, password, country, reason FROM usuarios WHERE username = ?");
    if (!$stmt) {
        die("Error preparando consulta: " . $conexion->error);
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $usuario = $resultado->fetch_assoc();

        if (password_verify($password, $usuario['password'])) {
            $_SESSION['usuario_id'] = $usuario['id'];
            $_SESSION['usuario'] = $usuario['username'];
            $_SESSION['email'] = $usuario['email'];
            $_SESSION['country'] = $usuario['country'] ?? 'El Salvador';
            $_SESSION['reason'] = $usuario['reason'] ?? '';

            header("Location: accountglobal.php");
            exit();
        }

        echo "<script>
            alert('Contraseña incorrecta');
            window.location.href='../login.html';
        </script>";
        exit();
    }

    echo "<script>
        alert('Usuario no registrado. Debes registrarte primero.');
        window.location.href='../register.html';
    </script>";
    exit();
}

header("Location: ../login.html");
exit();
?>
