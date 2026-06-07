<?php
require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = trim($_POST['username']);
    $password = $_POST['password'];
    $email = trim($_POST['email']);

    if (empty($username) || empty($password) || empty($email)) {
        echo "<script>
            alert('Debes completar todos los campos.');
            window.location.href='../register.html';
        </script>";
        exit();
    }

    $check = $conexion->prepare("SELECT id FROM usuarios WHERE username = ?");
    $check->bind_param("s", $username);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        echo "<script>
            alert('El usuario ya existe.');
            window.location.href='../register.html';
        </script>";
        exit();
    }

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conexion->prepare("INSERT INTO usuarios (username, password, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $passwordHash, $email);

    if ($stmt->execute()) {
        echo "<script>
            alert('Usuario registrado correctamente. Ahora puedes iniciar sesión.');
            window.location.href='../login.html';
        </script>";
        exit();
    } else {
        echo "<script>
            alert('Error al registrar usuario.');
            window.location.href='../register.html';
        </script>";
        exit();
    }

    $stmt->close();
    $check->close();
}

$conexion->close();
?>