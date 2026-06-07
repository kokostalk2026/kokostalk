// Control de sesión
let usuarioLogueado = false;

// Verificar si hay sesión antes de ejecutar algo
function verificarSesion(accion) {
  if (!usuarioLogueado) {
    alert(`⚠️ Debes iniciar sesión primero para acceder a: ${accion}`);
    return false;
  }
  return true;
}

// Manejar acciones que necesitan sesión
function manejarAccionProtegida(event, accion) {
  event.preventDefault();
  event.stopPropagation();
  if (verificarSesion(accion)) {
    console.log(`Acción permitida: ${accion}`);
    alert(`✅ Acceso concedido a: ${accion}\n(Bienvenido usuario)`);
  }
  return false;
}

// Proteger botones del navbar
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
  const accion = link.getAttribute('data-accion') || link.textContent.trim();
  link.addEventListener('click', (e) => manejarAccionProtegida(e, accion));
});

// Proteger el área de email
const emailArea = document.getElementById('emailCopyTrigger');
if (emailArea) {
  const accion = emailArea.getAttribute('data-accion') || 'Perfil de Usuario';
  emailArea.addEventListener('click', (e) => manejarAccionProtegida(e, accion));
}

// Proteger botones de suscripción
const suscribirseBtns = document.querySelectorAll('.suscribirse-btn');
suscribirseBtns.forEach(btn => {
  const accion = btn.getAttribute('data-accion') || 'Suscripción';
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (verificarSesion(accion)) {
      alert(`Funcionalidad de ${accion} en desarrollo. ¡Pronto estará disponible!`);
    }
  });
});

// Proteger enlaces del footer
const footerLinks = document.querySelectorAll('.footer-column a');
footerLinks.forEach(link => {
  if (link.getAttribute('href') === '#') {
    link.setAttribute('href', 'javascript:void(0)');
  }
  const accion = link.getAttribute('data-accion') || link.textContent.trim();
  link.addEventListener('click', (e) => manejarAccionProtegida(e, accion));
});

// Proteger redes sociales del footer
const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const accion = link.getAttribute('data-accion') || 'Red Social';
    e.preventDefault();
    if (verificarSesion(accion)) {
      alert(`🔗 Redirigiendo a ${accion}... (simulación)`);
    }
  });
});

// Acordeón del FAQ
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });
    
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// Navbar con efecto de blur al hacer scroll
const navbarContainer = document.querySelector('.navbar-container');
if (navbarContainer) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbarContainer.style.background = 'rgba(255, 255, 255, 0.85)';
      navbarContainer.style.backdropFilter = 'blur(12px)';
    } else {
      navbarContainer.style.background = 'transparent';
      navbarContainer.style.backdropFilter = 'blur(0px)';
    }
  });
  if (window.scrollY > 10) {
    navbarContainer.style.background = 'rgba(255, 255, 255, 0.85)';
    navbarContainer.style.backdropFilter = 'blur(12px)';
  }
}

// Scroll suave a anclas, con protección de sesión
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  const originalClick = anchor.onclick;
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const accion = this.getAttribute('data-accion');
    if (accion && !usuarioLogueado) {
      e.preventDefault();
      verificarSesion(accion);
      return;
    }
    
    // Si no hay protección o está logueado, hacer scroll
    if (usuarioLogueado || !accion) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar-container').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight - 10;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    } else if (accion) {
      e.preventDefault();
      verificarSesion(accion);
    }
  });
});

// Efecto visual al hacer click en enlaces del navbar
const allNavLinks = document.querySelectorAll('.nav-links li a');
allNavLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Solo efecto visual, sin importar sesión
    link.style.transform = 'scale(0.96)';
    setTimeout(() => {
      link.style.transform = '';
    }, 120);
  });
});