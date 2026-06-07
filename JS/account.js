document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;

            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';

            const eyeIcon = this.querySelector('.eye-icon');
            const eyeOffIcon = this.querySelector('.eye-off-icon');
            if (eyeIcon) eyeIcon.classList.toggle('hidden', isPassword);
            if (eyeOffIcon) eyeOffIcon.classList.toggle('hidden', !isPassword);

            const label = isPassword ? 'Hide password' : 'Show password';
            this.setAttribute('aria-label', label);
        });
    });

    const form = document.getElementById('registerForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        clearErrors();

        let valid = true;

        if (!name) {
            showError('name', 'Name is required.');
            valid = false;
        }
        if (!username) {
            showError('username', 'Username is required.');
            valid = false;
        }
        if (!email || !isValidEmail(email)) {
            showError('email', 'Enter a valid email address.');
            valid = false;
        }
        if (password.length < 6) {
            showError('password', 'Password must be at least 6 characters.');
            valid = false;
        }
        if (password !== confirmPassword) {
            showError('confirmPassword', 'Passwords do not match.');
            valid = false;
        }

        if (!valid) return;

        alert('✅ Account created successfully! Welcome to Koko\'s Talk.');
        form.reset();

        toggleButtons.forEach(function (btn) {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (input && input.type === 'text') {
                input.type = 'password';
                const eyeIcon = btn.querySelector('.eye-icon');
                const eyeOffIcon = btn.querySelector('.eye-off-icon');
                if (eyeIcon) eyeIcon.classList.remove('hidden');
                if (eyeOffIcon) eyeOffIcon.classList.add('hidden');
                btn.setAttribute('aria-label', 'Show password');
            }
        });
    });

    function showError(fieldId, message) {
        const input = document.getElementById(fieldId);
        const group = input.closest('.input-group');
        if (!group) return;

        const existing = group.querySelector('.error-message');
        if (existing) existing.remove();

        const errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.textContent = message;
        group.appendChild(errorSpan);
        input.classList.add('input-error');
    }

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(function (el) {
            el.remove();
        });
        document.querySelectorAll('.input-error').forEach(function (el) {
            el.classList.remove('input-error');
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});