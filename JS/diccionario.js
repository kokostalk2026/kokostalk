tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#3b4cca',
                        secondary: '#f59e0b',
                        accent: '#f97316',
                        background: '#f3f4f6',
                    },
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                    }
                }
            }
        }
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
  }
     const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });