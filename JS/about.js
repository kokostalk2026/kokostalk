function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function () {

    const statsGrid = document.getElementById('statsGrid');
    if (statsGrid) {
        const statElements = {
            students: document.getElementById('statStudents'),
            lessons: document.getElementById('statLessons'),
            instructors: document.getElementById('statInstructors'),
            satisfaction: document.getElementById('statSatisfaction')
        };

        const targets = {
            students: { value: 100, suffix: '+' },
            lessons: { value: 30, suffix: '+' },
            instructors: { value: 10, suffix: '+' },
            satisfaction: { value: 98, suffix: '%' }
        };

        function animateCounter(element, targetValue, suffix) {
            let current = 0;
            const increment = targetValue / 60;
            const intervalTime = 2000 / 60;
            let finalDisplay = targetValue + suffix;

            if (targetValue >= 1000) {
                finalDisplay = (targetValue / 1000).toFixed(0) + 'k+';
            }

            const timer = setInterval(function () {
                current += increment;
                if (current >= targetValue) {
                    element.textContent = finalDisplay;
                    clearInterval(timer);
                } else {
                    let display;
                    if (targetValue >= 1000) {
                        display = Math.floor(current / 1000) + 'k+';
                    } else {
                        display = Math.floor(current) + suffix;
                    }
                    element.textContent = display;
                }
            }, intervalTime);
        }

        let animationTriggered = false;

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !animationTriggered) {
                    animationTriggered = true;

                    document.querySelectorAll('.stat-card').forEach(function (card) {
                        card.classList.add('counting');
                        setTimeout(function () {
                            card.classList.remove('counting');
                        }, 300);
                    });

                    animateCounter(statElements.students, targets.students.value, targets.students.suffix);
                    animateCounter(statElements.lessons, targets.lessons.value, targets.lessons.suffix);
                    animateCounter(statElements.instructors, targets.instructors.value, targets.instructors.suffix);
                    animateCounter(statElements.satisfaction, targets.satisfaction.value, targets.satisfaction.suffix);

                    observer.unobserve(statsGrid);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsGrid);
    }

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Thank you! Our team will contact you shortly.');
            contactForm.reset();
        });
    }

    // Resaltar el enlace activo en el menú
    const currentLocation = window.location.href;
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(function (link) {
        if (link.href === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});