<?php
include("proteger.php");

if($plan != "Premium"){
    echo "
    <script>
        alert('This content is exclusive to Premium users.');
        window.location.href='planes.php';
    </script>
    ";
    exit();
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LESSA Academy - Salvadoran Sign Language</title>

    <link rel="stylesheet" href="../css/diccionario.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@300;400;600;700;800&display=swap" rel="stylesheet">
        <link rel="icon" type="image/png" href="../img/logo.png">

</head>
<body>

 <!-- NAVBAR -->
<div class="navbar-container">
  <nav class="navbar" id="mainNav">
    <div class="navbar-inner">
      <div class="brand">
        <img src="../img/invitacion/logo.png" alt="Logo">
        <div class="brand-text">Koko´s Talk</div>
      </div>
      <ul class="nav-links">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../lessonglobal.html">Lessons</a></li>
        <li><a href="php/cursosglobal.php">Courses</a></li>
        <li><a href="php/diccionario.php" class="active">Dictionary</a></li>
        <li><a href="../about.html">About Us</a></li>
      </ul>
      <div class="nav-right">
        <div class="email-area">
          <a href="php/accountglobal.php" class="email-icon">
            <img src="../img/usuario.png" alt="Account">
          </a>
        </div>
        <!-- Botón hamburguesa -->
        <button class="hamburger" id="hamburger" aria-label="Abrir menú" onclick="toggleMenu()">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <!-- Menú mobile -->
    <ul class="mobile-menu" id="mobileMenu">
      <li><a href="../index.html" class="active">Home</a></li>
      <li><a href="../lessonglobal.html">Lessons</a></li>
      <li><a href="php/accountglobal.php">Courses</a></li>
      <li><a href="php/diccionario.php">Dictionary</a></li>
      <li><a href="../about.html">About Us</a></li>
    </ul>
  </nav>
</div>

<section id="intro" class="fade-in">
    <div class="main-container">
        <div class="shape-left"></div>
        <div class="shape-right"></div>
        <div class="shape-bottom"></div>

        <h1 class="main-title">
            Learn LESSA <br>
            <span class="highlight">Salvadoran Sign Language</span>
        </h1>

        <p style="max-width: 700px; margin: 0 auto 30px; color: #666; font-size: 18px; line-height: 1.6; position: relative; z-index: 1;">
            Salvadoran Sign Language (LESSA) is the natural language of the deaf community in El Salvador. 
            Used by approximately 15,000 people, it is a complete language with its own grammar.
        </p>

        <!-- Buttons -->
        <div style="position: relative; z-index: 1; margin-bottom: 40px; display: flex; flex-wrap: wrap; justify-content: center; gap: 15px;">
            <a href="../alfabeto.html" class="btn-primary">
                <i class="fas fa-font"></i>
                Alphabet
            </a>
            <a href="../Dic.html" class="btn-primary">
                <i class="fas fa-book-open"></i>
                Dictionary
            </a>
            <a href="../juegos.html" class="btn-primary">
                <i class="fas fa-gamepad"></i>
                Games
            </a>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer class="footer">
    <div class="wave-top">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"></path>
      </svg>
    </div>

    <div class="container">
      <div class="footer-content">
        <div class="footer-column">
          <h4>Koko's Talk</h4>
          <p>Transforming lives through inclusive communication. Learn LESSA dynamically and professionally.</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
        <div class="footer-column">
          <h4>Resources</h4>
          <ul>
             <li><a href="../index.html">Home</a></li>
             <li><a href="../lessonglobal.html">Lessons</a></li>
             <li><a href="php/cursosglobal.php">Courses</a></li>
             <li><a href="php/diccionario.php">Dictionary</a></li>
             <li><a href="../about.html">About us</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@kokostalk.com"><i class="fas fa-envelope"></i> info@kokostalk.com</a></li>
            <li><a href="tel:+50322223333"><i class="fas fa-phone"></i> +503 2222-3333</a></li>
            <li><a href="#"><i class="fas fa-map-marker-alt"></i> San Salvador, El Salvador</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Koko's Talk Group. All rights reserved.</p>
      </div>
    </div>
</footer>

<script src="JS/diccionario.js"></script>
</body>
</html>