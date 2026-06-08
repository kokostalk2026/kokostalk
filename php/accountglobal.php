<?php
session_start();
require_once "conexion.php";

if (!isset($_SESSION['usuario_id'])) {
    header("Location: ../login.html");
    exit();
}

$usuario_id = intval($_SESSION['usuario_id']);

$sql = "SELECT id, username, email, country, reason FROM usuarios WHERE id = ?";
$stmt = $conexion->prepare($sql);

if (!$stmt) {
    die("Error preparando consulta del usuario: " . $conexion->error);
}

$stmt->bind_param("i", $usuario_id);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows === 1) {
    $usuario = $resultado->fetch_assoc();

    $_SESSION['usuario'] = $usuario['username'];
    $_SESSION['email'] = $usuario['email'];
} else {
    session_destroy();
    header("Location: ../login.html");
    exit();
}

$nombre_usuario = $usuario['username'] ?? "";
$email_usuario = $usuario['email'] ?? "";
$country_usuario = $usuario['country'] ?? "El Salvador";
$reason_usuario = $usuario['reason'] ?? "";

$stmt->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>KOKO'S - My Account</title>

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="../css/perfil.css">
</head>

<body>

<!-- RETURN BUTTON -->
<a href="../lessonglobal.html" class="return-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"/>
    </svg>
    Back
</a>

<!-- HERO -->
<div class="account-hero">
    <div class="hero-inner">
        <div class="avatar-wrap">
            <div class="avatar-circle" id="avatarDisplay" onclick="openAvatarPicker()">
                <span id="avatarEmoji">🐨</span>
            </div>

            <div class="avatar-edit-btn" onclick="openAvatarPicker()">
                <i class="fas fa-pencil-alt"></i>
            </div>
        </div>

        <div class="hero-info">
            <h1 id="heroName"><?php echo htmlspecialchars($nombre_usuario, ENT_QUOTES, 'UTF-8'); ?></h1>
            <p id="heroEmail"><?php echo htmlspecialchars($email_usuario, ENT_QUOTES, 'UTF-8'); ?></p>

            <div class="hero-badges">
                <button class="hero-badge" id="levelBadge">
                    <i class="fas fa-seedling"></i>
                    <span>Beginner</span>
                </button>

                <button class="hero-badge" onclick="window.location.href='logout.php'">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    </div>
</div>

<!-- MAIN -->
<div class="page-body">

    <!-- LEFT COLUMN -->
    <div class="left-col">

        <!-- Profile card -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--green);">
                    <i class="fas fa-user"></i>
                </div>
                <h2>My Profile</h2>
            </div>

            <div class="card-body">
                <div class="form-group">
                    <label>Name</label>
                    <input class="form-control" id="inputName" type="text"
                           value="<?php echo htmlspecialchars($nombre_usuario, ENT_QUOTES, 'UTF-8'); ?>">
                </div>

                <div class="form-group">
                    <label>Email address</label>
                    <input class="form-control" id="inputEmail" type="email"
                           value="<?php echo htmlspecialchars($email_usuario, ENT_QUOTES, 'UTF-8'); ?>">
                </div>

                <div class="form-group">
                    <label>Country</label>
                    <input class="form-control" id="inputCountry" type="text"
                           value="<?php echo htmlspecialchars($country_usuario, ENT_QUOTES, 'UTF-8'); ?>">
                </div>

                <div class="form-group">
                    <label>Why are you learning LESSA?</label>
                    <input class="form-control" id="inputReason" type="text"
                           value="<?php echo htmlspecialchars($reason_usuario, ENT_QUOTES, 'UTF-8'); ?>"
                           placeholder="I find it fascinating...">
                </div>
            </div>

            <div style="padding: 0 22px 22px; display:flex; flex-direction:column; gap:10px;">
                <button class="save-btn" onclick="saveProfile()">
                    <i class="fas fa-save"></i> Save changes
                </button>

                <button class="save-btn" type="button" onclick="togglePasswordPanel()" style="background:#1cb0f6;">
                    <i class="fas fa-lock"></i> Change password
                </button>
            </div>
        </div>

        <!-- Password card hidden by default -->
        <div class="card" id="passwordCard" style="display:none;">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--blue);">
                    <i class="fas fa-lock"></i>
                </div>
                <h2>Change Password</h2>
            </div>

            <div class="card-body">
                <div class="form-group">
                    <label>Current password</label>
                    <input class="form-control" id="currentPassword" type="password" placeholder="Current password">
                </div>

                <div class="form-group">
                    <label>New password</label>
                    <input class="form-control" id="newPassword" type="password" placeholder="New password">
                </div>

                <div class="form-group">
                    <label>Confirm new password</label>
                    <input class="form-control" id="confirmPassword" type="password" placeholder="Confirm new password">
                </div>
            </div>

            <div style="padding: 0 22px 22px; display:flex; flex-direction:column; gap:10px;">
                <button class="save-btn" onclick="changePassword()">
                    <i class="fas fa-key"></i> Save new password
                </button>

                <button class="save-btn" type="button" onclick="togglePasswordPanel()" style="background:#6b7280;">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </div>
        </div>

        <!-- Mini stats -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--yellow);">
                    <i class="fas fa-chart-bar"></i>
                </div>
                <h2>Statistics</h2>
            </div>

            <div class="card-body">
                <div class="mini-stats">
                    <div class="mini-stat">
                        <div class="mini-stat-val" id="statLessons" style="color:var(--green);">0</div>
                        <div class="mini-stat-label">Lessons</div>
                    </div>

                    <div class="mini-stat">
                        <div class="mini-stat-val" id="statXP" style="color:var(--yellow);">0</div>
                        <div class="mini-stat-label">Total XP</div>
                    </div>

                    <div class="mini-stat">
                        <div class="mini-stat-val" id="statStreak" style="color:var(--orange);">0🔥</div>
                        <div class="mini-stat-label">Streak</div>
                    </div>

                    <div class="mini-stat">
                        <div class="mini-stat-val" id="statPct" style="color:var(--blue);">0%</div>
                        <div class="mini-stat-label">Progress</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Achievements -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--purple);">
                    <i class="fas fa-trophy"></i>
                </div>
                <h2>Achievements</h2>
            </div>

            <div class="card-body">
                <div class="badges-grid" id="badgesGrid"></div>
            </div>
        </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="right-col">

        <!-- Overall progress -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--blue);">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <h2>My Overall Progress</h2>
            </div>

            <div class="card-body">
                <div class="progress-ring-section">
                    <div class="ring-container">
                        <svg class="ring-svg" width="130" height="130" viewBox="0 0 130 130">
                            <circle class="ring-bg" cx="65" cy="65" r="55"/>
                            <circle class="ring-fill" id="mainRingFill" cx="65" cy="65" r="55"
                                    stroke="url(#ringGrad)"
                                    stroke-dasharray="345.4"
                                    stroke-dashoffset="345.4"/>
                            <defs>
                                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#58cc02"/>
                                    <stop offset="100%" stop-color="#00d4aa"/>
                                </linearGradient>
                            </defs>
                        </svg>

                        <div class="ring-text">
                            <span class="ring-percent" id="mainRingPct" style="color:var(--green);">0%</span>
                            <span class="ring-sub">completed</span>
                        </div>
                    </div>

                    <div class="ring-details">
                        <h3 id="progressTitle">You are just starting</h3>
                        <p id="progressDesc">Every lesson brings you closer to full communication in LESSA.</p>
                        <div class="overall-motivation" id="motivationChip">
                            <i class="fas fa-bolt"></i>
                            <span id="motivText">Start your first lesson!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Level breakdown -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--orange);">
                    <i class="fas fa-layer-group"></i>
                </div>
                <h2>Progress by Level</h2>
            </div>

            <div class="card-body">
                <div class="level-bar-list">

                    <div class="level-bar-item">
                        <div class="level-bar-top">
                            <div class="level-name-grp">
                                <div class="level-dot" style="background:var(--blue);"></div>
                                <span class="level-name">Basic Level</span>
                            </div>
                            <span class="level-count" id="basicCount">0/9</span>
                        </div>
                        <div class="bar-track">
                            <div class="bar-fill" id="basicBarFill" style="background:var(--blue);"></div>
                        </div>
                    </div>

                    <div class="level-bar-item">
                        <div class="level-bar-top">
                            <div class="level-name-grp">
                                <div class="level-dot" style="background:var(--orange);"></div>
                                <span class="level-name">Intermediate Level</span>
                            </div>
                            <span class="level-count" id="interCount">0/10</span>
                        </div>
                        <div class="bar-track">
                            <div class="bar-fill" id="interBarFill" style="background:var(--orange);"></div>
                        </div>
                    </div>

                    <div class="level-bar-item">
                        <div class="level-bar-top">
                            <div class="level-name-grp">
                                <div class="level-dot" style="background:var(--purple);"></div>
                                <span class="level-name">Advanced Level</span>
                            </div>
                            <span class="level-count" id="advCount">0/9</span>
                        </div>
                        <div class="bar-track">
                            <div class="bar-fill" id="advBarFill" style="background:var(--purple);"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Lesson detail tabs -->
        <div class="card">
            <div class="card-header" style="border-bottom:none; padding-bottom:0;">
                <div class="icon-dot" style="background:var(--teal);">
                    <i class="fas fa-list-check"></i>
                </div>
                <h2>Lesson Details</h2>
            </div>

            <div class="tabs">
                <button class="tab-btn active" onclick="switchTab('all', this)">All</button>
                <button class="tab-btn" onclick="switchTab('done', this)">Completed</button>
                <button class="tab-btn" onclick="switchTab('pending', this)">Pending</button>
            </div>

            <div id="tab-all" class="tab-content active">
                <div class="lessons-scroll" id="allLessonsList"></div>
            </div>

            <div id="tab-done" class="tab-content">
                <div class="lessons-scroll" id="doneLessonsList"></div>
            </div>

            <div id="tab-pending" class="tab-content">
                <div class="lessons-scroll" id="pendingLessonsList"></div>
            </div>
        </div>
    </div>
</div>

<!-- AVATAR PICKER -->
<div class="avatar-selector" id="avatarSelector">
    <div class="avatar-modal">
        <h3>Choose your avatar</h3>
        <div class="avatar-options" id="avatarOptions"></div>
        <button class="avatar-close" onclick="closeAvatarPicker()">Done</button>
    </div>
</div>

<!-- TOAST -->
<div class="toast" id="toast"></div>

<!-- Se quitó accountglobal.js porque sobrescribía nombre/correo con valores genéricos -->

<script>
const currentUser = {
    id: <?php echo intval($usuario_id); ?>,
    username: <?php echo json_encode($nombre_usuario); ?>
};

try {
    localStorage.setItem('kokosCurrentUser', JSON.stringify(currentUser));
} catch (e) {}

function showToast(message) {
    const toast = document.getElementById('toast');

    if (!toast) {
        alert(message);
        return;
    }

    toast.textContent = message;
    toast.classList.add('show');
    toast.style.opacity = '1';
    toast.style.display = 'block';

    setTimeout(() => {
        toast.classList.remove('show');
        toast.style.opacity = '0';
    }, 3000);
}

async function saveProfile() {
    const username = document.getElementById('inputName').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const country = document.getElementById('inputCountry').value.trim();
    const reason = document.getElementById('inputReason').value.trim();

    if (!username || !email) {
        showToast('Name and email are required.');
        return;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('reason', reason);

    try {
        const response = await fetch('actualizar_perfil.php', {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        });

        const data = await response.json();
        showToast(data.message || 'Response received.');

        if (data.ok) {
            document.getElementById('heroName').textContent = data.usuario;
            document.getElementById('heroEmail').textContent = data.email;

            currentUser.username = data.usuario;
            localStorage.setItem('kokosCurrentUser', JSON.stringify(currentUser));
        }
    } catch (error) {
        showToast('Error updating profile.');
    }
}

function togglePasswordPanel() {
    const card = document.getElementById('passwordCard');

    if (!card) return;

    if (card.style.display === 'none' || card.style.display === '') {
        card.style.display = 'block';
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        card.style.display = 'none';
        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';
    }
}

async function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!currentPassword || !newPassword || !confirmPassword) {
        showToast('Complete all password fields.');
        return;
    }

    if (newPassword.length < 6) {
        showToast('The new password must be at least 6 characters.');
        return;
    }

    if (newPassword !== confirmPassword) {
        showToast('The new passwords do not match.');
        return;
    }

    const formData = new FormData();
    formData.append('current_password', currentPassword);
    formData.append('new_password', newPassword);
    formData.append('confirm_password', confirmPassword);

    try {
        const response = await fetch('cambiar_password.php', {
            method: 'POST',
            body: formData,
            credentials: 'same-origin'
        });

        const data = await response.json();
        showToast(data.message || 'Response received.');

        if (data.ok) {
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        }
    } catch (error) {
        showToast('Error changing password.');
    }
}

function normalizeCompletedLessons(rawValue) {
    if (!rawValue) return [];

    try {
        const parsed = JSON.parse(rawValue);

        if (Array.isArray(parsed)) {
            return parsed;
        }

        if (parsed && Array.isArray(parsed.completedLessons)) {
            return parsed.completedLessons;
        }

        if (parsed && Array.isArray(parsed.completed)) {
            return parsed.completed;
        }

        if (parsed && Array.isArray(parsed.lessons)) {
            return parsed.lessons;
        }

        if (parsed && Array.isArray(parsed.doneLessons)) {
            return parsed.doneLessons;
        }

    } catch (e) {
        console.warn("No se pudo leer progreso como JSON:", e);
    }

    return [];
}

function readProgressFromLocalStorage() {
    /*
        Esta función es más amplia que la anterior.
        Lee el progreso aunque la página de Lessons lo guarde como:
        - arreglo de lecciones completadas
        - objeto con completedLessons
        - objeto con basic/intermediate/advanced
        - objeto con basicCompleted/intermediateCompleted/advancedCompleted
        - objeto con porcentajes o conteos
    */

    const result = {
        completedLessons: [],
        basic: 0,
        intermediate: 0,
        advanced: 0,
        totalCompleted: 0,
        percent: 0,
        sourceKey: ""
    };

    /*
        IMPORTANTE:
        Solo se leen llaves específicas del usuario actual.
        No se usan lessonProgress_guest, kokoGame ni completedLessons global,
        porque eso mezcla el avance de otros usuarios.
    */
    const keysToCheck = [
        'lessonProgress_' + currentUser.id,
        'completedLessons_' + currentUser.id,
        'progress_' + currentUser.id,
        'userProgress_' + currentUser.id,
        'kokoProgress_' + currentUser.id
    ];

    for (const key of keysToCheck) {
        const raw = localStorage.getItem(key);
        if (!raw) continue;

        let parsed = null;

        try {
            parsed = JSON.parse(raw);
        } catch (e) {
            continue;
        }

        const lessons = normalizeCompletedLessons(raw);

        if (lessons.length > 0) {
            result.completedLessons = lessons;
            result.totalCompleted = lessons.length;

            /*
                Si las lecciones se guardan como ids, intenta clasificarlas por nombre.
                Si se guardan como números, reparte usando el orden del curso.
            */
            let basic = 0;
            let intermediate = 0;
            let advanced = 0;

            lessons.forEach((lesson, index) => {
                const value = String(lesson).toLowerCase();

                if (
                    value.includes('basic') ||
                    value.includes('basico') ||
                    value.includes('abc') ||
                    value.includes('hola') ||
                    value.includes('nombre') ||
                    value.includes('numeros') ||
                    value.includes('familia') ||
                    value.includes('tiempo1') ||
                    value.includes('colores') ||
                    value.includes('oraciones') ||
                    value.includes('eval-basic')
                ) {
                    basic++;
                } else if (
                    value.includes('inter') ||
                    value.includes('casa') ||
                    value.includes('ciudades') ||
                    value.includes('comida') ||
                    value.includes('cuerpo') ||
                    value.includes('trabajo') ||
                    value.includes('transporte') ||
                    value.includes('verbos') ||
                    value.includes('tiempo2') ||
                    value.includes('clasificadores1') ||
                    value.includes('eval-inter')
                ) {
                    intermediate++;
                } else if (
                    value.includes('adv') ||
                    value.includes('avanz') ||
                    value.includes('direccionales') ||
                    value.includes('rol') ||
                    value.includes('modismos') ||
                    value.includes('leyes') ||
                    value.includes('abstractos') ||
                    value.includes('poesia') ||
                    value.includes('interpretacion') ||
                    value.includes('eval-avanzada')
                ) {
                    advanced++;
                } else {
                    // Si no se reconoce, asume orden: primero 9 básicas, luego 10 intermedias, luego 9 avanzadas.
                    if (index < 9) basic++;
                    else if (index < 19) intermediate++;
                    else advanced++;
                }
            });

            result.basic = Math.min(9, basic);
            result.intermediate = Math.min(10, intermediate);
            result.advanced = Math.min(9, advanced);
            result.percent = Math.min(100, Math.round((result.totalCompleted / 28) * 100));
            result.sourceKey = key;

            console.log("Progreso encontrado en:", key, result);
            return result;
        }

        /*
            Caso especial: el modal de progreso suele guardar conteos por nivel.
            Ejemplos posibles:
            { basic: 2, intermediate: 0, advanced: 0 }
            { basicCompleted: 2, intermediateCompleted: 0, advancedCompleted: 0 }
            { basicProgress: 2, intermediateProgress: 0, advancedProgress: 0 }
        */
        if (parsed && typeof parsed === 'object') {
            const basic =
                Number(parsed.basic ?? parsed.basicCompleted ?? parsed.basicProgress ?? parsed.basicCount ?? 0);

            const intermediate =
                Number(parsed.intermediate ?? parsed.intermediateCompleted ?? parsed.intermediateProgress ?? parsed.intermediateCount ?? parsed.interCount ?? 0);

            const advanced =
                Number(parsed.advanced ?? parsed.advancedCompleted ?? parsed.advancedProgress ?? parsed.advancedCount ?? parsed.advCount ?? 0);

            const total =
                Number(parsed.totalCompleted ?? parsed.completedCount ?? parsed.completed ?? (basic + intermediate + advanced));

            const percent =
                Number(parsed.percent ?? parsed.percentage ?? parsed.progressPercent ?? Math.round((total / 28) * 100));

            if (basic > 0 || intermediate > 0 || advanced > 0 || total > 0 || percent > 0) {
                result.basic = Math.min(9, basic);
                result.intermediate = Math.min(10, intermediate);
                result.advanced = Math.min(9, advanced);
                result.totalCompleted = Math.min(28, total || (basic + intermediate + advanced));
                result.percent = Math.min(100, percent || Math.round((result.totalCompleted / 28) * 100));
                result.sourceKey = key;

                console.log("Progreso por conteos encontrado en:", key, result);
                return result;
            }
        }
    }

    console.log("No se encontró progreso guardado para el usuario actual:", currentUser.id);
    return result;
}

function getCompletedLessons() {
    return readProgressFromLocalStorage().completedLessons;
}

function updateProfileProgress() {
    const progress = readProgressFromLocalStorage();

    const totalLessons = 28;
    const completed = Math.min(28, progress.totalCompleted || progress.completedLessons.length || 0);
    const percent = Math.min(100, progress.percent || Math.round((completed / totalLessons) * 100));

    const basic = Math.min(9, progress.basic || Math.min(completed, 9));
    const inter = Math.min(10, progress.intermediate || Math.max(0, Math.min(completed - 9, 10)));
    const adv = Math.min(9, progress.advanced || Math.max(0, Math.min(completed - 19, 9)));

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    setText('statLessons', completed);
    setText('statXP', completed * 10);
    setText('statStreak', completed > 0 ? '1🔥' : '0🔥');
    setText('statPct', percent + '%');
    setText('mainRingPct', percent + '%');

    const ring = document.getElementById('mainRingFill');
    if (ring) {
        const circumference = 345.4;
        ring.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    }

    setText('basicCount', basic + '/9');
    setText('interCount', inter + '/10');
    setText('advCount', adv + '/9');

    const basicBar = document.getElementById('basicBarFill');
    const interBar = document.getElementById('interBarFill');
    const advBar = document.getElementById('advBarFill');

    if (basicBar) basicBar.style.width = (basic / 9 * 100) + '%';
    if (interBar) interBar.style.width = (inter / 10 * 100) + '%';
    if (advBar) advBar.style.width = (adv / 9 * 100) + '%';

    const progressTitle = document.getElementById('progressTitle');
    const progressDesc = document.getElementById('progressDesc');
    const motivText = document.getElementById('motivText');
    const levelBadge = document.querySelector('#levelBadge span');

    if (percent >= 80) {
        if (progressTitle) progressTitle.textContent = 'Advanced progress';
        if (progressDesc) progressDesc.textContent = 'You are very close to completing your LESSA learning path.';
        if (motivText) motivText.textContent = 'Excellent work!';
        if (levelBadge) levelBadge.textContent = 'Advanced';
    } else if (percent >= 40) {
        if (progressTitle) progressTitle.textContent = 'You are improving';
        if (progressDesc) progressDesc.textContent = 'You already have a solid base. Keep practicing to unlock more progress.';
        if (motivText) motivText.textContent = 'Keep going!';
        if (levelBadge) levelBadge.textContent = 'Intermediate';
    } else if (percent > 0) {
        if (progressTitle) progressTitle.textContent = 'You are just starting';
        if (progressDesc) progressDesc.textContent = 'You have already started your LESSA learning path. Keep going!';
        if (motivText) motivText.textContent = 'Keep practicing!';
        if (levelBadge) levelBadge.textContent = 'Beginner';
    } else {
        if (progressTitle) progressTitle.textContent = 'You are just starting';
        if (progressDesc) progressDesc.textContent = 'Every lesson brings you closer to full communication in LESSA.';
        if (motivText) motivText.textContent = 'Start your first lesson!';
        if (levelBadge) levelBadge.textContent = 'Beginner';
    }

    const allList = document.getElementById('allLessonsList');
    const doneList = document.getElementById('doneLessonsList');
    const pendingList = document.getElementById('pendingLessonsList');

    if (allList) allList.innerHTML = '';
    if (doneList) doneList.innerHTML = '';
    if (pendingList) pendingList.innerHTML = '';

    if (completed === 0) {
        if (allList) allList.innerHTML = "<div style='padding:10px'>No lessons completed yet.</div>";
        if (doneList) doneList.innerHTML = "<div style='padding:10px'>No lessons completed yet.</div>";
        if (pendingList) pendingList.innerHTML = "<div style='padding:10px'>Complete your first lesson to see pending progress.</div>";
    } else {
        if (allList) {
            allList.innerHTML = `
                <div style='padding:10px'>✅ Basic Level: ${basic}/9</div>
                <div style='padding:10px'>${inter > 0 ? '✅' : '⏳'} Intermediate Level: ${inter}/10</div>
                <div style='padding:10px'>${adv > 0 ? '✅' : '⏳'} Advanced Level: ${adv}/9</div>
            `;
        }

        if (doneList) {
            doneList.innerHTML = `
                <div style='padding:10px'>Completed lessons: ${completed}/28</div>
                <div style='padding:10px'>Progress source: ${progress.sourceKey || 'localStorage'}</div>
            `;
        }

        if (pendingList) {
            pendingList.innerHTML = "<div style='padding:10px'>Keep completing more lessons to increase your percentage.</div>";
        }
    }
}

function switchTab(tab, btn) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    const target = document.getElementById('tab-' + tab);
    if (target) target.classList.add('active');
    if (btn) btn.classList.add('active');
}

function openAvatarPicker() {
    const selector = document.getElementById('avatarSelector');
    const options = document.getElementById('avatarOptions');

    if (!selector || !options) return;

    const avatars = ['🐨', '🐵', '🦊', '🐼', '🐯', '🐸', '🐶', '🐱'];
    options.innerHTML = '';

    avatars.forEach(emoji => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = emoji;
        btn.style.fontSize = '32px';
        btn.style.margin = '8px';
        btn.style.cursor = 'pointer';

        btn.onclick = () => {
            document.getElementById('avatarEmoji').textContent = emoji;
            localStorage.setItem('kokosAvatar_' + currentUser.id, emoji);
            closeAvatarPicker();
        };

        options.appendChild(btn);
    });

    selector.classList.add('active');
}

function closeAvatarPicker() {
    const selector = document.getElementById('avatarSelector');
    if (selector) selector.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedAvatar = localStorage.getItem('kokosAvatar_' + currentUser.id);
    if (savedAvatar) {
        const avatarEmoji = document.getElementById('avatarEmoji');
        if (avatarEmoji) avatarEmoji.textContent = savedAvatar;
    }

    updateProfileProgress();
});
</script>

</body>
</html>
