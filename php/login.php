<?php
session_start();
require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = trim($_POST['username']);
    $password = $_POST['password'];

    if (empty($username) || empty($password)) {
        echo "<script>
            alert('Debes completar todos los campos.');
            window.location.href='../login.html';
        </script>";
        exit();
    }

    $stmt = $conexion->prepare("SELECT id, username, email, password FROM usuarios WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();

    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {

        $usuario = $resultado->fetch_assoc();

        if (password_verify($password, $usuario['password'])) {

            $_SESSION['usuario'] = $usuario['username'];
            $_SESSION['email'] = $usuario['email'];
            $_SESSION['usuario_id'] = $usuario['id'];

            header("Location: accountglobal.php");
            exit();

        } else {
            echo "<script>
                alert('Contraseña incorrecta');
                window.location.href='../login.html';
            </script>";
            exit();
        }

    } else {
        echo "<script>
            alert('Usuario no registrado. Debes registrarte primero.');
            window.location.href='../register.html';
        </script>";
        exit();
    }

    $stmt->close();
}

$conexion->close();
?>