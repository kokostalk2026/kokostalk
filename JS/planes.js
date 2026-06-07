let selectedPlanData = {
    name: 'Premium',
    price: 14.99,
    period: 'mes'
};

let currentPaymentMethod = 'card';
let discountApplied = 0;

// =========================
// SELECCIONAR PLAN
// =========================
function selectPlan(card) {

    const planName = card.dataset.plan;
    const planPrice = parseFloat(card.dataset.price);

// PLAN GRATIS
if (planName.toLowerCase() === 'free' && planPrice === 0) {

    const userConfirmed = confirm(
        '¡Has seleccionado el plan gratuito! ¿Deseas continuar?'
    );

    if (userConfirmed) {
        window.location.href = 'index.html';
    }

    return;
}

    // QUITAR SELECCIÓN ANTERIOR
    document.querySelectorAll('.pricing-card').forEach(c => {
        c.classList.remove('selected');
    });

    // AGREGAR NUEVA SELECCIÓN
    card.classList.add('selected');

    // GUARDAR DATOS
    selectedPlanData = {
        name: planName,
        price: planPrice,
        period: 'mes'
    };

    // CUPÓN
    const couponSection = document.getElementById('couponSection');

    if (selectedPlanData.price === 0) {
        couponSection.style.display = 'none';
        discountApplied = 0;
    } else {
        couponSection.style.display = 'block';
    }

    // MOSTRAR CHECKOUT
    document.getElementById('checkoutForm').classList.add('active');

    updateSummary();

    document.getElementById('checkoutForm').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// =========================
// VOLVER A PLANES
// =========================
function backToPlans() {

    document.getElementById('checkoutForm')
        .classList.remove('active');

    document.querySelectorAll('.pricing-card').forEach(c => {
        c.classList.remove('selected');
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// =========================
// MÉTODO DE PAGO
// =========================
function selectPayment(element, method) {

    document.querySelectorAll('.payment-method').forEach(m => {
        m.classList.remove('selected');
    });

    element.classList.add('selected');

    currentPaymentMethod = method;

    document.getElementById('cardDetails')
        .classList.remove('active');

    document.getElementById('paypalDetails')
        .classList.remove('active');

    document.getElementById(method + 'Details')
        .classList.add('active');
}

// =========================
// ACTUALIZAR RESUMEN
// =========================
function updateSummary() {

    document.getElementById('summaryPlan').textContent =
        selectedPlanData.name;

    document.getElementById('summaryPrice').textContent =
        selectedPlanData.price === 0
            ? 'Gratis'
            : '$' + selectedPlanData.price.toFixed(2);

    let total = selectedPlanData.price * (1 - discountApplied);

    document.getElementById('summaryTotal').textContent =
        selectedPlanData.price === 0
            ? 'Gratis'
            : '$' + total.toFixed(2);
}

// =========================
// CUPÓN
// =========================
function applyCoupon() {

    if (selectedPlanData.price === 0) {
        alert('El plan gratuito no aplica descuentos');
        return;
    }

    const coupon = document.getElementById('coupon')
        .value
        .toUpperCase();

    if (coupon === 'INTRO20') {

        discountApplied = 0.20;

        document.getElementById('discountRow')
            .style.display = 'flex';

        const discountAmount =
            selectedPlanData.price * 0.20;

        document.getElementById('discountAmount')
            .textContent = '-$' + discountAmount.toFixed(2);

        updateSummary();

        alert('¡Descuento del 20% aplicado!');

    } else {

        alert('Código no válido');

        discountApplied = 0;

        document.getElementById('discountRow')
            .style.display = 'none';

        updateSummary();
    }
}

// =========================
// FORMATO TARJETA
// =========================
function formatCardNumber(input) {

    let value = input.value
        .replace(/\s/g, '')
        .replace(/[^0-9]/gi, '');

    let formattedValue =
        value.match(/.{1,4}/g)?.join(' ') || '';

    input.value = formattedValue;
}

// =========================
// FORMATO FECHA
// =========================
function formatExpiry(input) {

    let value = input.value.replace(/\D/g, '');

    if (value.length >= 2) {
        value =
            value.substring(0, 2) +
            '/' +
            value.substring(2, 4);
    }

    input.value = value;
}

// =========================
// TARJETA VISUAL
// =========================
function updateCardDisplay() {

    const cardNumber =
        document.getElementById('cardNumber').value
        || '**** **** **** ****';

    const name =
        (
            document.getElementById('firstName').value +
            ' ' +
            document.getElementById('lastName').value
        ).toUpperCase()
        || 'NOMBRE APELLIDO';

    const expiry =
        document.getElementById('expiry').value
        || 'MM/AA';

    document.getElementById('cardDisplay')
        .textContent = cardNumber;

    document.getElementById('nameDisplay')
        .textContent = name;

    document.getElementById('expiryDisplay')
        .textContent = expiry;
}

// =========================
// VALIDAR CAMPOS
// =========================
function validateField(field) {

    if (!field.value.trim()) {

        field.classList.add('error');

        field.nextElementSibling.classList.add('show');

        return false;

    } else {

        field.classList.remove('error');

        field.nextElementSibling.classList.remove('show');

        return true;
    }
}

// =========================
// VALIDAR EMAIL
// =========================
function validateEmail(field) {

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(field.value)) {

        field.classList.add('error');

        field.nextElementSibling.classList.add('show');

        return false;

    } else {

        field.classList.remove('error');

        field.nextElementSibling.classList.remove('show');

        return true;
    }
}

// =========================
// PROCESAR PAGO
// =========================
function processPayment() {

    // PLAN GRATIS
    if (
        selectedPlanData.name === 'Free' &&
        selectedPlanData.price === 0
    ) {

        window.location.href = 'index.html';
        return;
    }

    // CAMPOS
    const firstName =
        document.getElementById('firstName');

    const lastName =
        document.getElementById('lastName');

    const email =
        document.getElementById('email');

    const phone =
        document.getElementById('phone');

    let isValid = true;

    if (!validateField(firstName)) isValid = false;
    if (!validateField(lastName)) isValid = false;
    if (!validateEmail(email)) isValid = false;
    if (!validateField(phone)) isValid = false;

    // VALIDAR TARJETA
    if (
        currentPaymentMethod === 'card' &&
        selectedPlanData.price > 0
    ) {

        const cardNumber =
            document.getElementById('cardNumber');

        const expiry =
            document.getElementById('expiry');

        const cvv =
            document.getElementById('cvv');

        if (
            !cardNumber.value ||
            cardNumber.value.replace(/\s/g, '').length < 16
        ) {
            isValid = false;
        }

        if (!expiry.value || expiry.value.length < 5) {
            isValid = false;
        }

        if (!cvv.value || cvv.value.length < 3) {
            isValid = false;
        }
    }

    // VALIDACIÓN GENERAL
    if (!isValid) {

        alert('Por favor completa todos los campos correctamente');

        return;
    }

    // =========================
    // ENVIAR A PHP
    // =========================
    fetch("php/guardar_plan.php", {

        method: "POST",

        credentials: "same-origin",

        headers: {
            "Content-Type":
                "application/x-www-form-urlencoded"
        },

        body: new URLSearchParams({
            plan: selectedPlanData.name,
            precio: selectedPlanData.price,
            metodo: currentPaymentMethod
        })
    })

    .then(res => res.text())

    .then(data => {

        console.log("Respuesta:", data);

        // SIN SESIÓN
        if (data.trim() === "no_session") {

            alert("Debes iniciar sesión");

            window.location.href = "login.html";

            return;
        }

        // ÉXITO
        if (data.trim() === "ok") {

            document.getElementById('modalPlanName')
                .textContent =
                'Plan ' + selectedPlanData.name;

            document.getElementById('modalPlanPrice')
                .textContent =
                '$' +
                (
                    selectedPlanData.price *
                    (1 - discountApplied)
                ).toFixed(2) +
                '/' +
                selectedPlanData.period;

            document.getElementById('modalEmail')
                .textContent = email.value;

            document.getElementById('successModal')
                .classList.add('active');

        } else {

            console.log(data);

            alert("Error al guardar la suscripción");
        }
    })

    .catch(error => {

        console.error(error);

        alert("Error de conexión con el servidor");
    });
}

// =========================
// CERRAR MODAL
// =========================
document.getElementById('successModal')
    .addEventListener('click', function(e) {

    if (e.target === this) {
        this.classList.remove('active');
    }
});