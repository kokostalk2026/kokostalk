// BASE DE DATOS DE PREGUNTAS
const LESSA_DB = {
    basic: {
        name: 'Basic',
        icon: '🌱',
        description: 'Alphabet, greetings, and simple words',
        topics: ['Alphabet', 'Basic greetings', 'Simple words'],
        questions: [
            {
                type: 'image_to_word',
                question: 'Wich letter of the alphabet does this sign represent?',
                media: { type: 'img', src: 'img/certificacion/Aa.png', alt: 'Seña de letra A' },
                options: ['A', 'B', 'C', 'D'],
                correct: 0,
                explanation: 'This is the sign for the letter A in the LESSA alphabet. It is formed by closing the fist with the thumb pointing to one side.'
            },
            {
                type: 'word_to_image',
                question: 'Select the image that represents the word "HOLA":',
                media: null,
                options: [
                    { type: 'img', src: 'img/certificacion/Hola!.png', label: 'Option A' },
                    { type: 'img', src: 'img/certificacion/Mal!.png', label: 'Option B' },
                    { type: 'img', src: 'img/certificacion/Perdon!.png', label: 'Option C' },
                    { type: 'img', src: 'img/certificacion/Bien!.png', label: 'Option D' }
                ],
                correct: 0,
                explanation: 'La seña de "Hola" en LESSA se realiza moviendo la mano abierta desde la frente hacia afuera en un gesto de saludo.'
            },
            {
                type: 'multiple',
                question: 'How do you sign "GRACIAS" in LESSA?',
                media: null,
                options: [
                    'Moving both hands up and down',
                    'Touching the forehead with the palm',
                    'Crossing the fingers',
                    'Raising the thumb up'
                ],
                correct: 0,
                explanation: '"Gracias" en LESSA se hace llevando los dedos extendidos desde la barbilla hacia la persona a quien se agradece.'
            },
            {
                type: 'image_to_word',
                question: 'Look at this sign. What word does it represent?',
                media: { type: 'img', src: 'img/certificacion/Comer.png', alt: 'Seña de comer' },
                options: ['Sleep', 'Eat', 'Drink', 'Play'],
                correct: 1,
                explanation: 'The sign for "Eat" simulates bringing food to the mouth with the fingers together, moving them downward.'
            },
            {
                type: 'video',
                question: 'Look at the image of the sign and select its meaning:',
                media: { type: 'img', src: 'img/certificacion/Mama.png', alt: 'Sign for MAMÁ' },
                options: ['Dad', 'Mom', 'Brother', 'Grandma'],
                correct: 1,
                explanation: '"MAMÁ" in LESSA is signed by placing the thumb of the open hand on the cheek and moving it slightly.'
            },
            {
                type: 'multiple',
                question: 'What is the correct sign for "NOMBRE" in LESSA?',
                media: null,
                options: [
                    'Form a "W" with three fingers and touch the mouth',
                    'Move the hand in circles like a wave',
                    'Move your hand in front of your chest',
                    'Put the hands together'
                ],
                correct: 2,
                explanation: '"Water" in LESSA is represented with the letter "W" (three extended fingers) touching the mouth.'
            },
            {
                type: 'image_to_word',
                question: 'What number does this sign represent?',
                media: { type: 'img', src: 'img/certificacion/5.png', alt: 'Sign for the number 5' },
                options: ['3', '5', '10', '2'],
                correct: 1,
                explanation: 'The number 5 in LESSA is represented by showing the five extended fingers pointing upward.'
            },
            {
                type: 'multiple',
                question: 'How do you sign "PAPÁ',
                media: null,
                options: [
                    'It touches the forehead instead of the cheek',
                    'Doing the letter "X" in front of your mounth',
                    'It is performed more quickly',
                    'It touches the chin instead of the cheek'
                ],
                correct: 1,
                explanation: '"PAPÁ" in LESSA is signed by touching the forehead with the thumb (masculine), while "Mom" is signed by touching the cheek (feminine).'
            }
        ]
    },
    intermediate: {
        name: 'Intermediate',
        icon: '🌿',
        description: 'Common phrases, directional verbs, and expressions',
        topics: ['Daily phrases', 'Directional verbs', 'Emotion expressions'],
        questions: [
            {
                type: 'multiple',
                question: 'How is the phrase "CÓMO ESTAS?" formed in LESSA?',
                media: null,
                options: [
                    'Sign for "CÓMO" + sign for "ESTAS" directed toward the person',
                    'Only the sign for "BIEN"',
                    'Sign for "TÚ" + sign for "QUÉ"',
                    'Circular movement with both hands'
                ],
                correct: 0,
                explanation: 'In LESSA, "How are you?" combines the sign for "how" with the verb "to be" directed spatially toward the person being addressed.'
            },
            {
                type: 'video',
                question: 'Look at the sign in the image. What is being expressed?',
                media: { type: 'img', src: 'img/certificacion/Aprender.png',},
                options: ['Sad', 'Angry', 'Learn', 'Tired'],
                correct: 2,
                explanation: '"Happy" in LESSA is represented with both open hands moving upward from the chest, symbolizing rising joy.'
            },
            {
                type: 'multiple',
                question: 'What are some typically food in El Salvador that you can learn',
                media: null,
                options: [
                    'Carne',
                    'Pupusas',
                    'Hambuerguesa',
                    'Pizza'
                ],
                correct: 1,
                explanation: 'Directional verbs in LESSA (such as "give," "say," and "look") use space to indicate subject and object by moving from one point to another.'
            },
            {
                type: 'image_to_word',
                question: 'Which directional verb does this sign represent?',
                media: { type: 'img', src: 'img/certificacion/Estudiar.png', alt: 'Sign for STUDY' },
                options: ['Teach', 'Study', 'Work', 'Eat'],
                correct: 1,
                explanation: '"Help" in LESSA is represented with both hands shaped like the letter "A" (fist with thumb up) moving upward alternately.'
            },
            {
                type: 'word_to_image',
                question: 'Select the image that represents the word "EL SALVADOR":',
                media: null,
                options: [
                    { type: 'img', src: 'img/certificacion/El Salvador.png', label: 'Option A' },
                    { type: 'img', src: 'img/certificacion/Belice.png', label: 'Option B' },
                    { type: 'img', src: 'img/certificacion/Guatemala.png', label: 'Option C' },
                    { type: 'img', src: 'img/certificacion/Panama.png', label: 'Option D' }
                ],
                correct: 0,
                explanation: 'La seña de "Hola" en LESSA se realiza moviendo la mano abierta desde la frente hacia afuera en un gesto de saludo.'
            },
            {
                type: 'word_to_image',
                question: 'Select the image that represents "PORFAVOR":',
                media: null,
                options: [
                    { type: 'img', src: 'img/certificacion/Adios.png', label: 'A' },
                    { type: 'img', src: 'img/certificacion/Hola.png', label: 'B' },
                    { type: 'img', src: 'img/certificacion/Porfavor.png', label: 'C' },
                    { type: 'img', src: 'img/certificacion/Cuidate.png', label: 'D' }
                ],
                correct: 2,
                explanation: '"Please" in LESSA is signed by rubbing the flat palm on the chest in a circular motion.'
            },
            {
                type: 'multiple',
                question: 'Which department you can learn',
                media: null,
                options: [
                    'San Marcos',
                    'Chimaltenango',
                    'Santa Ana',
                    'Zacapa'
                ],
                correct: 2,
                explanation: 'Yes/no questions in LESSA require raised eyebrows, open eyes, and the head tilted forward. This is part of non-manual grammar.'
            },
            {
                type: 'video',
                question: 'Interpret this directional verb sign in the image:',
                media: { type: 'img', src: 'img/certificacion/Dar.png', label: '' },
                options: ['Receive', 'Give', 'Take', 'Carry'],
                correct: 1,
                explanation: '"Give" is a classic directional verb: the hand moves from the signer toward the person receiving something, using linguistic space.'
            }
        ]
    },
    advanced: {
        name: 'Advanced',
        icon: '🌳',
        description: 'Vocabulary of courses, interpretation, and advanced grammar',
        topics: ['Fluent conversations', 'Context interpretation', 'Spatial grammar'],
        questions: [
            {
                type: 'multiple',
                question: 'When a person sneezes, what sign do you make?',
                media: null,
                options: [
                    'Move your head',
                    'Put your hands togheter',
                    'A cross with the fingers',
                    'Raise your hand'
                ],
                correct: 2,
                explanation: 'The upper space in LESSA is associated with the sky/weather. Pointing upward + "sun" = sunny/hot weather. Spatial grammar is fundamental.'
            },
            {
                type: 'video',
                question: 'Interpret this place sign in the image:',
                media: { type: 'img', src: 'img/certificacion/Hospital.png', label: '' },
                options: ['House', 'Hospital', 'Park', 'Car'],
                correct: 1,
                explanation: 'The conversation shows the sign for "WHERE" + the sign for "HOSPITAL" + a questioning facial expression. It is a common request for medical directions.'
            },
            {
                type: 'multiple',
                question: 'At the "Send" sign in LESSA, where is the movement headed?',
                media: null,
                options: [
                    'Gets closer to the body',
                    'Moves away from the body',
                    'Circular motion',
                    'Chest tap'
                ],
                correct: 1,
                explanation: 'LESSA spatial grammar assigns references to points in space. Verbs are directed between these points to show who does what to whom.'
            },
            {
                type: 'multiple',
                question: 'How is "flavor" expressed in LESSA?',
                media: null,
                options: [
                    'Touching the Head',
                    'Clenched fist',
                    'Fingers to lips with facial expression',
                    'Applauding'
                ],
                correct: 2,
                explanation: 'LESSA distinguishes verbal aspects: "see" has a softer and broader movement, while "look" is more direct and focused toward the reference point.'
            },
            {
                type: 'image_to_word',
                question: 'Interpret this sign. What concept does it represent?',
                media: { type: 'img', src: 'img/certificacion/Hermana.png', alt: 'Sign for FAMILY' },
                options: ['Group of friends', 'Sister', 'School', 'Teamwork'],
                correct: 1,
                explanation: '"Family" in LESSA is formed with the letter "F" (index finger and thumb forming a circle) moving in a circle over the chest area, representing a united core.'
            },
            {
                type: 'video',
                question: 'What is the meaning of this sign?',
                media: { type: 'img', src: 'img/certificacion/Jesus.png', label: '' },
                options: ['Fly', 'Free', 'Friend', 'Jesus'],
                correct: 3,
                explanation: 'Negation in LESSA is multimodal: head shaking (non-manual component), furrowed eyebrows, and optionally a manual negation sign. Facial expression is mandatory.'
            },
            {
                type: 'video',
                question: 'what is the issue that this sign represents? ',
                media: { type: 'img', src: 'img/certificacion/Dolor de garganta.png', label: '' },
                options: ['Headache', 'Sore throat', 'Bleeding', 'Nausea'],
                correct: 1,
                explanation: 'The narration uses spatial references: it establishes a character at one point, narrates a search using directional movement verbs, and ends with the sign for "FIND" plus a surprised/happy facial expression.'
            },
            {
                type: 'multiple',
                question: 'What movement does "dancing" represent in LESSA?',
                media: null,
                options: [
                    'Hands rhythmically in front of the body',
                    'Skip',
                    'Turning your head',
                    'Point to the ground'
                ],
                correct: 0,
                explanation: 'The "3" classifier (vehicle) in LESSA represents cars, motorcycles, and bicycles. It moves through space to describe the vehicle’s trajectory, speed, and direction.'
            }
        ]
    }
};

// Estado de la app
const appState = {
    currentLevel: null,
    currentQuestionIndex: 0,
    score: 0,
    answered: false,
    totalAnswered: 0,
    totalCorrect: 0,
    wordsLearned: 0,
    exercisesDone: 0,
    levels: {
        basic: { status: 'available', progress: 0, score: 0, answered: [], correct: 0 },
        intermediate: { status: 'locked', progress: 0, score: 0, answered: [], correct: 0 },
        advanced: { status: 'locked', progress: 0, score: 0, answered: [], correct: 0 }
    }
};

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initStats();
    initLevels();
    initCertificate();
    updateGlobalProgress();
});

// Cargar progreso guardado
function loadProgress() {
    const saved = localStorage.getItem('kokos_lessa_progress');
    if (saved) {
        const data = JSON.parse(saved);
        Object.assign(appState.levels, data.levels || {});
        appState.wordsLearned = data.wordsLearned || 0;
        appState.exercisesDone = data.exercisesDone || 0;
        appState.totalCorrect = data.totalCorrect || 0;
        appState.totalAnswered = data.totalAnswered || 0;
    }
}

function saveProgress() {
    const data = {
        levels: appState.levels,
        wordsLearned: appState.wordsLearned,
        exercisesDone: appState.exercisesDone,
        totalCorrect: appState.totalCorrect,
        totalAnswered: appState.totalAnswered
    };
    localStorage.setItem('kokos_lessa_progress', JSON.stringify(data));
}

// Estadísticas
function initStats() {
    animateValue('statWords', 0, appState.wordsLearned, 1200);
    animateValue('statExercises', 0, appState.exercisesDone, 1200);
    document.getElementById('statLevel').textContent = getCurrentLevelName();
    const accuracy = appState.totalAnswered > 0 ? Math.round((appState.totalCorrect / appState.totalAnswered) * 100) : 0;
    animateValue('statAccuracy', 0, accuracy, 1200, '%');
}

function getCurrentLevelName() {
    if (appState.levels.advanced.status === 'completed') return 'Advanced ';
    if (appState.levels.intermediate.status === 'completed') return 'Intermediate ';
    if (appState.levels.basic.status === 'completed') return 'Basic ';
    if (appState.levels.intermediate.status === 'available') return 'Intermediate';
    if (appState.levels.basic.status === 'available') return 'Basic';
    return 'Not started';
}

function animateValue(id, start, end, duration, suffix = '') {
    const el = document.getElementById(id);
    const startTime = performance.now();
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (end - start) * easeOut);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

function updateGlobalProgress() {
    const totalQuestions = LESSA_DB.basic.questions.length + LESSA_DB.intermediate.questions.length + LESSA_DB.advanced.questions.length;
    const answeredTotal = appState.levels.basic.answered.length + appState.levels.intermediate.answered.length + appState.levels.advanced.answered.length;
    const pct = Math.round((answeredTotal / totalQuestions) * 100);
    const bar = document.getElementById('globalProgress');
    bar.style.width = pct + '%';
    bar.textContent = pct + '%';
}

// Mostrar niveles
function initLevels() {
    const container = document.getElementById('levelsContainer');
    const levels = ['basic', 'intermediate', 'advanced'];

    container.innerHTML = levels.map((key, i) => {
        const level = LESSA_DB[key];
        const state = appState.levels[key];
        const statusClass = state.status;
        const statusText = {
            completed: 'Completed ',
            available: 'Available ',
            locked: 'Locked '
        }[state.status];

        const btnClass = {
            completed: 'btn-completed',
            available: 'btn-primary',
            locked: 'btn-locked'
        }[state.status];

        const btnText = {
            completed: 'View Progress',
            available: 'Start Evaluation',
            locked: 'Locked'
        }[state.status];

        const btnAction = state.status === 'locked' ? '' : `onclick="startLevel('${key}')"`;
        const progress = state.status === 'completed' ? 100 : state.progress;

        return `
            <div class="level-card ${statusClass}" style="animation:fadeInUp 0.6s ease-out ${i*0.15}s both">
                <div class="level-badge">${i+1}</div>
                <div class="level-header">
                    <div class="level-icon">${level.icon}</div>
                    <div class="level-info">
                        <h3>${level.name}</h3>
                        <span class="level-status">${statusText}</span>
                    </div>
                </div>
                <div class="level-progress-bar">
                    <div class="level-progress-fill" style="width:${progress}%"></div>
                </div>
                <div class="level-meta">
                    <span>${level.questions.length} Questions</span>
                    <span>${state.answered.length}/${level.questions.length}</span>
                </div>
                <div class="level-topics">
                    <strong>Topics: </strong> ${level.topics.join(' • ')}
                </div>
                <p style="font-size:0.9rem;color:var(--gris-claro);margin-bottom:15px;font-weight:600;">${level.description}</p>
                <button class="btn ${btnClass}" ${btnAction}>${btnText}</button>
            </div>
        `;
    }).join('');
}

// Empezar nivel
function startLevel(levelKey) {
    const state = appState.levels[levelKey];

    if (state.status === 'locked') return;

    // Si el nivel ya fue completado, mostrar certificado
    if (state.status === 'completed') {
        showCertificate(levelKey);
        return;
    }

    // Ocultar certificado si estaba visible
    document.getElementById('certTitleSection').style.display = 'none';
    document.getElementById('certSection').style.display = 'none';

    appState.currentLevel = levelKey;
    appState.currentQuestionIndex = 0;
    appState.score = 0;
    appState.answered = false;

    const panel = document.getElementById('examPanel');
    panel.classList.add('active');
    document.getElementById('examTitle').textContent = LESSA_DB[levelKey].name;
    document.getElementById('examScore').textContent = '0 pts';

    setTimeout(() => {
        panel.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);

    renderQuestion();
    updateExamProgress();
}

// Dibujar pregunta actual
function renderQuestion() {
    const level = LESSA_DB[appState.currentLevel];
    const q = level.questions[appState.currentQuestionIndex];
    const container = document.getElementById('examContent');

    let mediaHTML = '';
    if (q.media) {
        if (q.media.type === 'img') {
            mediaHTML = `
                <div class="media-container">
                    <img src="${q.media.src}" alt="${q.media.alt}" loading="lazy">
                </div>
            `;
        } else if (q.media.type === 'video') {
            mediaHTML = `
                <div class="media-container">
                    <div class="video-placeholder" onclick="playVideo(this)">
                        <div class="play-btn"></div>
                        <p>${q.media.label}</p>
                        <span class="video-label">${q.media.duration}</span>
                    </div>
                </div>
            `;
        }
    }

    let optionsHTML = '';
    if (q.type === 'word_to_image') {
        optionsHTML = `<div class="options-grid images">` + 
            q.options.map((opt, i) => `
                <button class="option-btn image-option" onclick="selectOption(${i})" data-index="${i}">
                    <img src="${opt.src}" alt="${opt.label}" class="option-img" loading="lazy">
                    <span>${opt.label}</span>
                </button>
            `).join('') + `</div>`;
    } else {
        optionsHTML = `<div class="options-grid">` +
            q.options.map((opt, i) => `
                <button class="option-btn" onclick="selectOption(${i})" data-index="${i}">
                    <span class="option-letter">${String.fromCharCode(65+i)}</span>
                    <span>${opt}</span>
                </button>
            `).join('') + `</div>`;
    }

    container.innerHTML = `
        <div class="question-container" id="questionContainer">
            <div class="question-counter">Question ${appState.currentQuestionIndex + 1} of ${level.questions.length}</div>
            <div class="question-text">${q.question}</div>
            ${mediaHTML}
            ${optionsHTML}
            <div class="feedback-msg" id="feedbackMsg"></div>
            <button class="next-btn" id="nextBtn" onclick="nextQuestion()">Next Question →</button>
        </div>
    `;

    appState.answered = false;
    updateExamProgress();
}

function playVideo(el) {
    el.innerHTML = `
        <div style="font-size:3rem;animation:pulseBg 1s ease infinite"></div>
        <p style="margin-top:10px;font-weight:700">Playing sign...</p>
    `;
    setTimeout(() => {
        el.innerHTML = `
            <div style="font-size:2.5rem"></div>
            <p style="margin-top:10px;font-weight:700">Video watched</p>
        `;
    }, 2000);
}

// Cuando el usuario elige una opción
function selectOption(index) {
    if (appState.answered) return;
    appState.answered = true;

    const level = LESSA_DB[appState.currentLevel];
    const q = level.questions[appState.currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    const feedback = document.getElementById('feedbackMsg');
    const nextBtn = document.getElementById('nextBtn');

    const isCorrect = index === q.correct;

    buttons.forEach((btn, i) => {
        btn.classList.add('disabled');
        if (i === q.correct) {
            btn.classList.add('correct');
        } else if (i === index && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Actualizar contadores globales
    appState.totalAnswered++;
    appState.exercisesDone++;

    if (isCorrect) {
        appState.score += 10;
        appState.totalCorrect++;
        appState.wordsLearned += 1;

        document.getElementById('examScore').textContent = appState.score + ' pts';
        feedback.className = 'feedback-msg correct show';
        feedback.innerHTML = ' <span>Correct! +10 points</span>';

        animateValue('statWords', appState.wordsLearned - 1, appState.wordsLearned, 500);
        animateValue('statExercises', appState.exercisesDone - 1, appState.exercisesDone, 500);
    } else {
        feedback.className = 'feedback-msg incorrect show';
        feedback.innerHTML = ' <span>Incorrect. ' + q.explanation + '</span>';
    }

    // Guardar progreso del nivel
    const levelState = appState.levels[appState.currentLevel];
    if (!levelState.answered.includes(appState.currentQuestionIndex)) {
        levelState.answered.push(appState.currentQuestionIndex);
        if (isCorrect) levelState.correct++;
    }

    levelState.progress = Math.round((levelState.answered.length / level.questions.length) * 100);

    nextBtn.classList.add('show');
    saveProgress();
    updateGlobalProgress();
}

// Siguiente pregunta
function nextQuestion() {
    const level = LESSA_DB[appState.currentLevel];
    appState.currentQuestionIndex++;

    if (appState.currentQuestionIndex >= level.questions.length) {
        finishLevel();
        return;
    }

    // Animación de salida
    const container = document.getElementById('questionContainer');
    container.style.opacity = '0';
    container.style.transform = 'translateX(-30px)';
    container.style.transition = 'all 0.3s ease';

    setTimeout(() => {
        renderQuestion();
        const newContainer = document.getElementById('questionContainer');
        newContainer.style.opacity = '0';
        newContainer.style.transform = 'translateX(30px)';
        requestAnimationFrame(() => {
            newContainer.style.opacity = '1';
            newContainer.style.transform = 'translateX(0)';
        });
    }, 300);
}

function updateExamProgress() {
    const level = LESSA_DB[appState.currentLevel];
    const pct = ((appState.currentQuestionIndex + 1) / level.questions.length) * 100;
    document.getElementById('examProgressFill').style.width = pct + '%';
}

// Terminar nivel
function finishLevel() {
    const levelKey = appState.currentLevel;
    const level = LESSA_DB[levelKey];
    const state = appState.levels[levelKey];
    const maxScore = level.questions.length * 10;
    const percentage = Math.round((appState.score / maxScore) * 100);
    const passed = percentage >= 60;

    document.getElementById('examPanel').classList.remove('active');

    if (passed) {
        state.status = 'completed';
        state.score = appState.score;

        // Desbloquear siguiente nivel
        const levels = ['basic', 'intermediate', 'advanced'];
        const currentIdx = levels.indexOf(levelKey);
        if (currentIdx < levels.length - 1) {
            const nextKey = levels[currentIdx + 1];
            if (appState.levels[nextKey].status === 'locked') {
                appState.levels[nextKey].status = 'available';
            }
        }

        showConfetti();

        showModal({
            icon: '✅',
            title: '¡Nivel Completado!',
            text: `Has aprobado ${level.name} con éxito.`,
            score: percentage + '%',
            stats: [
                { label: 'Puntuación', value: appState.score + '/' + maxScore },
                { label: 'Correctas', value: state.correct + '/' + level.questions.length }
            ],
            btnText: 'Continuar',
            btnAction: () => {
                closeModal();
                initLevels();
                initStats();
                showCertificate(levelKey);
            }
        });
    } else {
        showModal({
            icon: '❌',
            title: 'Keep Practicing',
            text: `You need at least 60% to pass ${level.name}. Try again!`,
            score: percentage + '%',
            stats: [
                { label: 'Puntuación', value: appState.score + '/' + maxScore },
                { label: 'Revisadas', value: state.answered.length + '/' + level.questions.length }
            ],
            btnText: 'Reintentar',
            btnAction: () => {
                closeModal();
                state.answered = [];
                state.correct = 0;
                state.progress = 0;
                saveProgress();
                initLevels();
                startLevel(levelKey);
            }
        });
    }

    saveProgress();
    updateGlobalProgress();
}

function abandonExam() {
    document.getElementById('examPanel').classList.remove('active');
    appState.currentLevel = null;
    appState.currentQuestionIndex = 0;
    appState.score = 0;
    appState.answered = false;
}

// Modal de resultados
function showModal(config) {
    const modal = document.getElementById('resultModal');
    document.getElementById('modalIcon').textContent = config.icon;
    document.getElementById('modalIcon').className = 'modal-icon ' + (config.icon === '🎉' || config.icon === '' || config.icon === '📜' || config.icon === '🔓' ? 'success' : 'fail');
    document.getElementById('modalTitle').textContent = config.title;
    document.getElementById('modalText').textContent = config.text;
    document.getElementById('modalScore').textContent = config.score;
    document.getElementById('modalScore').style.display = config.score ? 'block' : 'none';

    const statsContainer = document.getElementById('modalStats');
    if (config.stats && config.stats.length > 0) {
        statsContainer.innerHTML = config.stats.map(s => `
            <div class="modal-stat">
                <div class="modal-stat-value">${s.value}</div>
                <div class="modal-stat-label">${s.label}</div>
            </div>
        `).join('');
        statsContainer.style.display = 'grid';
    } else {
        statsContainer.style.display = 'none';
    }

    const btn = document.getElementById('modalBtn');
    btn.textContent = config.btnText || 'Continuar';
    btn.onclick = config.btnAction || closeModal;

    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('resultModal').classList.remove('show');
}

// Cerrar modal si se clickea fuera
document.getElementById('resultModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

// Certificado
function initCertificate() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('certDate').textContent = dateStr;

    document.getElementById('userNameInput').addEventListener('input', function() {
        const name = this.value.trim() || 'Tu Nombre';
        document.getElementById('certName').textContent = name;
    });
}

function showCertificate(levelKey) {
    document.getElementById('certTitleSection').style.display = 'flex';
    document.getElementById('certSection').style.display = 'block';

    let levelText = '';
    let levelBadge = '';
    let levelColor = '';
    
    if (levelKey === 'basic') {
        levelText = 'Nivel Básico';
        levelBadge = '🌱';
        levelColor = '#10b981'; // verde
    }
    if (levelKey === 'intermediate') {
        levelText = 'Nivel Intermedio';
        levelBadge = '🌿';
        levelColor = '#3b82f6'; // azul
    }
    if (levelKey === 'advanced') {
        levelText = 'Nivel Avanzado';
        levelBadge = '🌳';
        levelColor = '#8b5cf6'; // violeta
    }
    
    document.getElementById('certLevelText').textContent = levelText;
    document.getElementById('certLevelBadge').textContent = levelBadge;
    document.getElementById('certLevelBadge').style.background = levelColor;
    document.getElementById('certLevelBadge').style.boxShadow = `0 4px 15px ${levelColor}40`;

    setTimeout(() => {
        document.getElementById('certSection').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 300);
}
// ============================================================
// CERTIFICADO - DISEÑO EXACTO AL DE LA IMAGEN
// ============================================================

// ============================================================
// CERTIFICADO - DISEÑO ELEGANTE Y REFINADO
// ============================================================

function initCertificate() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('certDate').textContent = dateStr;

    document.getElementById('userNameInput').addEventListener('input', function() {
        const name = this.value.trim() || 'Your name';
        document.getElementById('certName').textContent = name;
    });
}

function showCertificate(levelKey) {
    document.getElementById('certTitleSection').style.display = 'flex';
    document.getElementById('certSection').style.display = 'block';

    let levelText = 'Level: ';
    
    if (levelKey === 'basic') {
        levelText += 'Basic 🌱';
    }
    if (levelKey === 'intermediate') {
        levelText += 'Intermediate 🌿';
    }
    if (levelKey === 'advanced') {
        levelText += 'Advanced 🌳';
    }
    
    document.getElementById('certLevelText').textContent = levelText;

    setTimeout(() => {
        document.getElementById('certSection').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }, 300);
}

function downloadCertificate() {
    const name = document.getElementById('userNameInput').value.trim();
    if (!name) {
        const input = document.getElementById('userNameInput');
        input.focus();
        input.style.boxShadow = '0 0 0 4px rgba(239,68,68,0.4)';
        setTimeout(() => { input.style.boxShadow = ''; }, 1000);
        return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 750;
    const ctx = canvas.getContext('2d');

    // ===== FONDO BLANCO CON TEXTURA SUTIL =====
    ctx.fillStyle = '#fafbfc';
    ctx.fillRect(0, 0, 1000, 750);

    // Patrón de puntos muy sutil
    ctx.save();
    ctx.globalAlpha = 0.04;
    ctx.fillStyle = '#4f46e5';
    for (let x = 20; x < 1000; x += 40) {
        for (let y = 20; y < 750; y += 40) {
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    ctx.restore();

    // ===== MARCO EXTERIOR CON ESQUINAS REDONDEADAS =====
    const framePad = 30;
    const frameRadius = 20;
    
    ctx.beginPath();
    ctx.moveTo(framePad + frameRadius, framePad);
    ctx.lineTo(1000 - framePad - frameRadius, framePad);
    ctx.quadraticCurveTo(1000 - framePad, framePad, 1000 - framePad, framePad + frameRadius);
    ctx.lineTo(1000 - framePad, 750 - framePad - frameRadius);
    ctx.quadraticCurveTo(1000 - framePad, 750 - framePad, 1000 - framePad - frameRadius, 750 - framePad);
    ctx.lineTo(framePad + frameRadius, 750 - framePad);
    ctx.quadraticCurveTo(framePad, 750 - framePad, framePad, 750 - framePad - frameRadius);
    ctx.lineTo(framePad, framePad + frameRadius);
    ctx.quadraticCurveTo(framePad, framePad, framePad + frameRadius, framePad);
    ctx.closePath();
    
    // Borde dorado degradado
    const goldGrad = ctx.createLinearGradient(0, 0, 1000, 750);
    goldGrad.addColorStop(0, '#d97706');
    goldGrad.addColorStop(0.3, '#f59e0b');
    goldGrad.addColorStop(0.5, '#d97706');
    goldGrad.addColorStop(0.7, '#b45309');
    goldGrad.addColorStop(1, '#d97706');
    ctx.strokeStyle = goldGrad;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Sombra suave del marco
    ctx.shadowColor = 'rgba(0,0,0,0.08)';
    ctx.shadowBlur = 30;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;
    ctx.stroke();
    ctx.shadowColor = 'transparent';

    // ===== MARCO INTERIOR =====
    const innerPad = 50;
    ctx.beginPath();
    ctx.moveTo(innerPad + 10, innerPad);
    ctx.lineTo(1000 - innerPad - 10, innerPad);
    ctx.quadraticCurveTo(1000 - innerPad, innerPad, 1000 - innerPad, innerPad + 10);
    ctx.lineTo(1000 - innerPad, 750 - innerPad - 10);
    ctx.quadraticCurveTo(1000 - innerPad, 750 - innerPad, 1000 - innerPad - 10, 750 - innerPad);
    ctx.lineTo(innerPad + 10, 750 - innerPad);
    ctx.quadraticCurveTo(innerPad, 750 - innerPad, innerPad, 750 - innerPad - 10);
    ctx.lineTo(innerPad, innerPad + 10);
    ctx.quadraticCurveTo(innerPad, innerPad, innerPad + 10, innerPad);
    ctx.closePath();
    ctx.strokeStyle = 'rgba(79, 70, 229, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // ===== ESQUINAS DECORATIVAS ELEGANTES =====
    const drawElegantCorner = (cx, cy, rotation) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rotation);
        
        // Líneas decorativas
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 25);
        ctx.lineTo(0, 0);
        ctx.lineTo(25, 0);
        ctx.stroke();
        
        // Círculo central
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#4f46e5';
        ctx.fill();
        
        // Pequeño diamante
        ctx.fillStyle = '#d97706';
        ctx.beginPath();
        ctx.moveTo(0, -8);
        ctx.lineTo(6, 0);
        ctx.lineTo(0, 8);
        ctx.lineTo(-6, 0);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
    };

    drawElegantCorner(55, 55, 0);
    drawElegantCorner(945, 55, Math.PI / 2);
    drawElegantCorner(945, 695, Math.PI);
    drawElegantCorner(55, 695, -Math.PI / 2);

    // ===== LÍNEA SUPERIOR AZUL CON DEGRADADO =====
    const topGrad = ctx.createLinearGradient(0, 0, 1000, 0);
    topGrad.addColorStop(0, 'transparent');
    topGrad.addColorStop(0.2, '#4f46e5');
    topGrad.addColorStop(0.8, '#4f46e5');
    topGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = topGrad;
    ctx.fillRect(150, 80, 700, 4);

    // ===== ICONO SUPERIOR (círculo decorativo) =====
    ctx.save();
    ctx.translate(500, 115);
    
    // Círculo exterior
    ctx.beginPath();
    ctx.arc(0, 0, 28, 0, Math.PI * 2);
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Círculo interior
    ctx.beginPath();
    ctx.arc(0, 0, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(79, 70, 229, 0.08)';
    ctx.fill();
    
    // Símbolo de manos/señas estilizado
    ctx.fillStyle = '#4f46e5';
    ctx.font = 'bold 22px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦', 0, 1);
    
    ctx.restore();

    // ===== TÍTULO PRINCIPAL =====
    ctx.textAlign = 'center';
    
    ctx.fillStyle = '#4f46e5';
    ctx.font = 'bold 46px "Georgia", "Times New Roman", serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('Achievement Certificate', 500, 175);

    // ===== SUBTÍTULO DORADO =====
    ctx.fillStyle = '#d97706';
    ctx.font = 'bold 14px "Helvetica Neue", Arial, sans-serif';
    ctx.letterSpacing = '5px';
    ctx.fillText('LENGUA DE SEÑAS SALVADOREÑA (LESSA)', 500, 208);

    // Línea decorativa bajo subtítulo
    ctx.beginPath();
    ctx.moveTo(400, 225);
    ctx.lineTo(600, 225);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Puntos decorativos
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath();
    ctx.arc(400, 225, 4, 0, Math.PI * 2);
    ctx.arc(600, 225, 4, 0, Math.PI * 2);
    ctx.fill();

    // ===== "IS AWARDED TO" =====
    ctx.fillStyle = '#9ca3af';
    ctx.font = 'italic 16px "Georgia", serif';
    ctx.fillText('Is awarded to', 500, 270);

    // ===== NOMBRE =====
    ctx.fillStyle = '#1e1b4b';
    ctx.font = 'bold 52px "Georgia", "Times New Roman", serif';
    ctx.fillText(name, 500, 330);

    // ===== LÍNEA DORADA ELEGANTE BAJO NOMBRE =====
    ctx.beginPath();
    ctx.moveTo(300, 360);
    ctx.lineTo(700, 360);
    const nameLineGrad = ctx.createLinearGradient(300, 0, 700, 0);
    nameLineGrad.addColorStop(0, 'transparent');
    nameLineGrad.addColorStop(0.25, '#d97706');
    nameLineGrad.addColorStop(0.75, '#d97706');
    nameLineGrad.addColorStop(1, 'transparent');
    ctx.strokeStyle = nameLineGrad;
    ctx.lineWidth = 3;
    ctx.stroke();

    // ===== DESCRIPCIÓN =====
    ctx.fillStyle = '#6b7280';
    ctx.font = '500 17px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('For successfully completing the program', 500, 405);

    // ===== NIVEL CON BADGE =====
    let levelStr = '';
    let levelColor = '';
    
    if (appState.levels.advanced.status === 'completed') {
        levelStr = 'Advanced Level';
        levelColor = '#8b5cf6';
    } else if (appState.levels.intermediate.status === 'completed') {
        levelStr = 'Intermediate Level';
        levelColor = '#3b82f6';
    } else if (appState.levels.basic.status === 'completed') {
        levelStr = 'Basic Level';
        levelColor = '#10b981';
    }

    // Badge de nivel elegante
    const badgeW = 240;
    const badgeH = 42;
    const badgeX = 500 - badgeW / 2;
    const badgeY = 430;

    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 21);
    ctx.fillStyle = `${levelColor}12`;
    ctx.fill();
    ctx.strokeStyle = levelColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = levelColor;
    ctx.font = 'bold 15px "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(levelStr, 500, badgeY + 28);

    // ===== FECHA =====
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.fillStyle = '#9ca3af';
    ctx.font = 'italic 14px "Georgia", serif';
    ctx.fillText(dateStr, 500, 505);

    // ===== ESPACIO PARA LOGO (círculo con borde) =====
     // ===== ESPACIO PARA LOGO (círculo con borde) =====
    const logoY = 580;
    const logoRadius = 50;
    
    // Círculo de fondo
    ctx.beginPath();
    ctx.arc(500, logoY, logoRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#f3f4f6';
    ctx.fill();
    
    // Borde del círculo
    ctx.beginPath();
    ctx.arc(500, logoY, logoRadius, 0, Math.PI * 2);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Borde exterior dorado sutil
    ctx.beginPath();
    ctx.arc(500, logoY, logoRadius + 4, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // ===== CARGAR Y DIBUJAR IMAGEN DEL LOGO =====
    const logoImg = new Image();
    logoImg.crossOrigin = 'anonymous';
    
    logoImg.onload = function() {
        const imgSize = 80;
        const imgX = 500 - imgSize / 2;
        const imgY = logoY - imgSize / 2;
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(500, logoY, logoRadius - 5, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(logoImg, imgX, imgY, imgSize, imgSize);
        ctx.restore();
        
        downloadCanvas();
    };
    
    logoImg.onerror = function() {
        ctx.fillStyle = '#9ca3af';
        ctx.font = '500 11px "Helvetica Neue", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('', 500, logoY + 75);
        downloadCanvas();
    };
    
    logoImg.src = 'img/certificacion/Koko.png.png';

    // Función para descargar
    function downloadCanvas() {
        const link = document.createElement('a');
        link.download = 'Certificado_LESSA_KokosTalk_' + name.replace(/\s+/g, '_') + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        showConfetti();
        showModal({
            icon: '📜',
            title: 'Certificate Downloaded!',
            text: 'Your LESSA certificate has been saved successfully.',
            score: '',
            stats: [],
            btnText: 'Close'
        });
    }
}

// Enter en el campo de nombre
document.getElementById('userNameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') downloadCertificate();
});