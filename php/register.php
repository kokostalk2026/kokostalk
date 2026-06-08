<?php
require_once "conexion.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    $email = trim($_POST['email'] ?? '');

    if ($username === '' || $password === '' || $email === '') {
        echo "<script>
            alert('Debes completar todos los campos.');
            window.location.href='../register.html';
        </script>";
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>
            alert('Correo electrónico no válido.');
            window.location.href='../register.html';
        </script>";
        exit();
    }

    if (strlen($password) < 6) {
        echo "<script>
            alert('La contraseña debe tener al menos 6 caracteres.');
            window.location.href='../register.html';
        </script>";
        exit();
    }

    $check = $conexion->prepare("SELECT id FROM usuarios WHERE username = ? OR email = ?");
    if (!$check) {
        die("Error preparando consulta: " . $conexion->error);
    }

    $check->bind_param("ss", $username, $email);
    $check->execute();
    $check->store_result();

    if ($check->num_rows > 0) {
        echo "<script>
            alert('El usuario o correo ya existe.');
            window.location.href='../register.html';
        </script>";
        exit();
    }

    $passwordHash = password_hash($password, PASSWORD_DEFAULT);
    $country = 'El Salvador';
    $reason = '';

    $stmt = $conexion->prepare("INSERT INTO usuarios (username, password, email, country, reason) VALUES (?, ?, ?, ?, ?)");
    if (!$stmt) {
        die("Error preparando inserción: " . $conexion->error);
    }

    $stmt->bind_param("sssss", $username, $passwordHash, $email, $country, $reason);

    if ($stmt->execute()) {
        echo "<script>
            alert('Usuario registrado correctamente. Ahora puedes iniciar sesión.');
            window.location.href='../login.html';
        </script>";
        exit();
    }

    echo "<script>
        alert('Error al registrar usuario.');
        window.location.href='../register.html';
    </script>";
    exit();
}

header("Location: ../register.html");
exit();
?>
