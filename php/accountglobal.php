<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    header("Location: ../login.html");
    exit();
}
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
    <style>
       
    </style>
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
            <h1><?php echo $_SESSION['usuario']; ?></h1>
<p><?php echo $_SESSION['email']; ?></p>
            <div class="hero-badges">
                <!-- Solo badge de nivel, sin racha ni XP -->
                <button class="hero-badge" onclick="window.location.href='../php/logout.php'">
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
                   value="<?php echo $_SESSION['usuario']; ?>">
        </div>

        <div class="form-group">
            <label>Email address</label>
            <input class="form-control" id="inputEmail" type="email"
                   value="<?php echo $_SESSION['email'] ?? ''; ?>">
        </div>

        <div class="form-group">
            <label>Country</label>
            <input class="form-control" id="inputCountry" type="text" placeholder="El Salvador">
        </div>

        <div class="form-group">
            <label>Why are you learning LESSA?</label>
            <input class="form-control" id="inputReason" type="text" placeholder="I find it fascinating...">
        </div>

    </div>

    <div style="padding: 0 22px 22px;">
        <button class="save-btn" onclick="saveProfile()">
            <i class="fas fa-save"></i> Save changes
        </button>
    </div>
</div>

        <!-- Mini stats (sin racha ni XP en hero, pero sí en las stats) -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--yellow);"><i class="fas fa-chart-bar"></i></div>
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
                <div class="icon-dot" style="background:var(--purple);"><i class="fas fa-trophy"></i></div>
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
                <div class="icon-dot" style="background:var(--blue);"><i class="fas fa-graduation-cap"></i></div>
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
                        <p id="progressDesc">Every lesson brings you closer to full communication in LESSA. The first step is the most important one!</p>
                        <div class="overall-motivation" id="motivationChip">
                            <i class="fas fa-bolt"></i> <span id="motivText">Start your first lesson!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Level breakdown -->
        <div class="card">
            <div class="card-header">
                <div class="icon-dot" style="background:var(--orange);"><i class="fas fa-layer-group"></i></div>
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
                <div class="icon-dot" style="background:var(--teal);"><i class="fas fa-list-check"></i></div>
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

<script>
document.addEventListener("DOMContentLoaded", () => {

    // Obtener lecciones completadas
    const completedLessons =
        JSON.parse(localStorage.getItem("completedLessons")) || [];

    const totalLessons = 29;
    const completed = completedLessons.length;
    const percent = Math.round((completed / totalLessons) * 100);

    // Estadísticas
    document.getElementById("statLessons").textContent = completed;
    document.getElementById("statXP").textContent = completed * 10;
    document.getElementById("statPct").textContent = percent + "%";
    document.getElementById("mainRingPct").textContent = percent + "%";

    // Círculo de progreso
    const ring = document.getElementById("mainRingFill");
    if (ring) {
        const circumference = 345.4;
        ring.style.strokeDashoffset =
            circumference - (percent / 100) * circumference;
    }

    // Barras por nivel
    const basic = Math.min(completed, 9);
    const inter = Math.max(0, Math.min(completed - 9, 10));
    const adv = Math.max(0, Math.min(completed - 19, 9));

    document.getElementById("basicCount").textContent = basic + "/9";
    document.getElementById("interCount").textContent = inter + "/10";
    document.getElementById("advCount").textContent = adv + "/9";

    document.getElementById("basicBarFill").style.width =
        (basic / 9 * 100) + "%";

    document.getElementById("interBarFill").style.width =
        (inter / 10 * 100) + "%";

    document.getElementById("advBarFill").style.width =
        (adv / 9 * 100) + "%";

    // Mostrar lecciones completadas
    const allList = document.getElementById("allLessonsList");
    const doneList = document.getElementById("doneLessonsList");

    if (completedLessons.length === 0) {
        allList.innerHTML = "<div style='padding:10px'>No lessons completed yet.</div>";
        doneList.innerHTML = "<div style='padding:10px'>No lessons completed yet.</div>";
    } else {
        completedLessons.forEach(lesson => {

            const item1 = document.createElement("div");
            item1.innerHTML = "✅ " + lesson;
            item1.style.padding = "10px";

            const item2 = document.createElement("div");
            item2.innerHTML = "✅ " + lesson;
            item2.style.padding = "10px";

            allList.appendChild(item1);
            doneList.appendChild(item2);
        });
    }

});
</script>

<script src="../JS/accountglobal.js"></script>
</body>
</html>