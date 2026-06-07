function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}

// Modal de notificación
const modal = document.getElementById('notifyModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const confirmNotifyBtn = document.getElementById('confirmNotifyBtn');

// Abrir modal
if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Cerrar modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Confirmar suscripción
if (confirmNotifyBtn) {
    confirmNotifyBtn.addEventListener('click', () => {
        const originalText = confirmNotifyBtn.innerHTML;
        confirmNotifyBtn.innerHTML = '<i class="fas fa-check"></i> Registered!';
        confirmNotifyBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            closeModal();
            setTimeout(() => {
                confirmNotifyBtn.innerHTML = originalText;
                confirmNotifyBtn.style.background = 'linear-gradient(135deg, #ffa41b, #e69500)';
                showToast();
            }, 300);
        }, 800);
    });
}

// Cerrar modal si se hace clic fuera
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function showToast() {
    const toast = document.createElement('div');
    toast.innerHTML = `
        <div style="position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #1e293b, #0f172a); color: white; padding: 12px 24px; border-radius: 50px; font-size: 0.9rem; font-weight: 500; z-index: 10000; box-shadow: 0 10px 25px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 10px; backdrop-filter: blur(10px); animation: slideUp 0.3s ease;">
            <i class="fas fa-check-circle" style="color: #10b981;"></i>
            We'll let you know when the course is ready!
        </div>
    `;
    document.body.appendChild(toast);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from { opacity: 0; transform: translateX(-50%) translateY(20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Animaciones al hacer scroll
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) entry.target.classList.add('active'); 
    });
}, observerOptions);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

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
}

tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#ffa41b',
                    'orange-light': '#ffb347',
                    'orange-dark': '#e69500',
                    'orange-50': '#FFF8F0',
                    blue: '#2563EB',
                    'blue-light': '#3B82F6',
                    'blue-dark': '#1D4ED8',
                    'blue-50': '#EFF6FF',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        }
    }
}