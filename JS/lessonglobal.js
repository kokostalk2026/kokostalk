const lessonsCatalog = {
    basic: [
        {
            id: 'abc',
            icon: 'fas fa-font',
            color: '#1cb0f6',
            title: 'LESSA Alphabet',
            words: [
                'A', 'B', 'C', 'CH', 'D', 'E', 'F', 'G', 'H', 'I',
                'J', 'K', 'L', 'LL', 'M', 'N', 'Ñ', 'O', 'P', 'Q',
                'R', 'RR', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
            ],
            videoUrls: ['', '', ''],
            images: [
                'img/A.png', 'img/B.png', 'img/C.png', 'img/CH.png', 'img/D.png',
                'img/E.png', 'img/F.png', 'img/G.png', 'img/H.png', 'img/I.png',
                'img/J.png', 'img/K.png', 'img/L.png', 'img/DOBLEL.png', 'img/M.png',
                'img/N.png', 'img/Ñ.png', 'img/O.png', 'img/P.png', 'img/Q.png',
                'img/R.png', 'img/DOBLER.png', 'img/S.png', 'img/T.png', 'img/U.png',
                'img/V.png', 'img/W.png', 'img/X.png', 'img/Y.png', 'img/Z.png'
            ],
            description: 'Learn the complete alphabet of Salvadoran Sign Language (LESSA). Each image shows the hand shape of a letter.',
            tips: [
                'Practice each letter in front of a mirror to check your finger position.',
                'Memorize the alphabet in order; it is the basis for spelling any word.',
                'Pay attention to palm orientation in letters like G, H, P, Q.',
                'Ñ has its own sign, different from N.',
                'Review five letters daily until you master them all.',
                'CH, LL and RR are unique signs: they are made with one hand and are not spelled letter by letter.'
            ],
            questions: [
                {
                    text: '¿Cuál de las siguientes letras tiene su propio signo único en LESSA (no se deletrea)?',
                    options: ['CH', 'PH', 'TH', 'SH'],
                    correct: 0
                },
                {
                    text: '¿Cuál es el propósito principal de aprender el alfabeto manual en LESSA?',
                    options: ['Deletrear palabras y nombres propios', 'Solo para niños pequeños', 'Contar números', 'Para colorear'],
                    correct: 0
                },
                {
                    text: '¿Qué se recomienda para practicar correctamente las letras en LESSA?',
                    options: ['Usar un espejo para verificar posición de dedos', 'Cerrar los ojos para concentrarse', 'No practicar para no cansarse', 'Solo leer la teoría'],
                    correct: 0
                }
            ]
        },
        {
            id: 'hola-adios-gracias',
            icon: 'fas fa-hand-peace',
            color: '#ff9600',
            title: 'Saludos: Hola, Adiós, Gracias',
            words: ['Hola', 'Adiós', 'Gracias'],
            videoUrls: [
                'videoslessons/HOLA.mp4',
                'videoslessons/ADIOS.mp4',
                'videoslessons/GRACIAS.mp4'
            ],
            description: 'Aprende los saludos básicos en LESSA: Hola, Adiós y Gracias. Esenciales para iniciar y finalizar una conversación.',
            tips: [
                'Hola: levanta la mano abierta a la altura de la cabeza y muévela suavemente.',
                'Adiós: mismo gesto que hola, pero moviendo la mano hacia adelante y atrás.',
                'Gracias: lleva la mano abierta desde la barbilla hacia adelante, como si lanzaras un beso.'
            ],
            questions: [
                {
                    text: '¿Cómo se realiza la seña de "Hola" en LESSA según el video?',
                    options: ['Mano abierta moviéndose suavemente', 'Puño cerrado en el pecho', 'Dedo índice en la sien', 'Aplaudir'],
                    correct: 0
                },
                {
                    text: '¿Cuál es la diferencia principal entre las señas de "Hola" y "Adiós" en LESSA?',
                    options: ['La dirección del movimiento', 'El número de dedos usados', 'La expresión facial', 'Se usan dos manos'],
                    correct: 0
                },
                {
                    text: '¿Desde qué parte del cuerpo se inicia la seña de "Gracias" en LESSA?',
                    options: ['Desde la barbilla hacia adelante', 'Desde la frente', 'Desde el pecho', 'Desde el hombro'],
                    correct: 0
                }
            ]
        },
        {
            id: 'nombre-edad-nacionalidad',
            icon: 'fas fa-id-card',
            color: '#ce82ff',
            title: 'Nombre, Edad, Nacionalidad',
            words: ['Nombre', 'Edad', 'Nacionalidad'],
            videoUrls: [
                'videoslessons/NOMBRE.mp4',
                'videoslessons/EDAD.mp4',
                'videoslessons/SALVADOREÑO.mp4'
            ],
            description: 'Aprende a presentarte: decir tu nombre, tu edad y de dónde eres usando señas básicas de identidad.',
            tips: [
                'Nombre: señala tu pecho con el dedo índice y luego deletrea tu nombre.',
                'Edad: toca tu barbilla con la mano en forma de número y luego muestra tu edad.',
                'Nacionalidad: usa la seña del país (El Salvador se hace con un movimiento ondulatorio frente al pecho).'
            ],
            questions: [
                {
                    text: 'En la seña de "Nombre" en LESSA, ¿qué haces primero?',
                    options: ['Señalar tu pecho', 'Tocar tu frente', 'Aplaudir', 'Levantar la mano'],
                    correct: 0
                },
                {
                    text: '¿En qué parte del cuerpo se toca para indicar "Edad" en LESSA?',
                    options: ['La barbilla', 'La frente', 'La nariz', 'La oreja'],
                    correct: 0
                },
                {
                    text: '¿Qué movimiento se usa para señalar "El Salvador" en LESSA?',
                    options: ['Movimiento ondulatorio frente al pecho', 'Puño cerrado', 'Dedo índice hacia arriba', 'Palma abierta'],
                    correct: 0
                }
            ]
        },
        {
            id: 'numeros',
            icon: 'fas fa-calculator',
            color: '#ff4b4b',
            title: 'Números en LESSA',
            words: ['Uno', 'Dos', 'Tres'],
            videoUrls: ['videos/numeros1.mp4', 'videos/numeros2.mp4', 'videos/numeros3.mp4'],
            description: 'Aprende los números del 1 al 20 en LESSA.',
            tips: [
                'Los números del 1 al 5 se muestran con los dedos extendidos.',
                'Los números del 6 al 9 son combinaciones de dedos.',
                'El 10 se hace con el dedo índice sobre el pulgar.',
                'Los números del 11 al 19 combinan el 10 con los dígitos.',
                'El 20 se muestra con dos manos abiertas dos veces.'
            ],
            questions: [
                {
                    text: '¿Cómo se muestra el número 3 en LESSA?',
                    options: ['Tres dedos extendidos (índice, medio, anular)', 'Puño cerrado', 'Índice y pulgar', 'Mano abierta'],
                    correct: 0
                },
                {
                    text: '¿Qué número representa un puño cerrado en LESSA?',
                    options: ['0 o 10 según el contexto', '5', '1', 'El número 8'],
                    correct: 0
                },
                {
                    text: '¿Cómo se muestra el número 10 en LESSA?',
                    options: ['Dedo índice sobre el pulgar (forma de "L")', 'Dos manos', 'Puño cerrado', 'Forma de "C" con la mano'],
                    correct: 0
                }
            ]
        },
        {
            id: 'familia',
            icon: 'fas fa-users',
            color: '#00d4aa',
            title: 'Mi Familia',
            words: ['Mamá', 'Papá', 'Hermano'],
            videoUrls: ['videos/familia1.mp4', 'videos/familia2.mp4', 'videos/familia3.mp4'],
            description: 'Aprende las señas para miembros de la familia: mamá, papá, hermano, hermana, abuelos.',
            tips: [
                'Mamá: se toca la barbilla con la mano abierta.',
                'Papá: se toca la frente con la mano abierta.',
                'Hermano: dos dedos índices juntos.',
                'Hermana: dos dedos índices juntos con un movimiento adicional.',
                'Abuelo/Abuela: se hacen círculos cerca de la sien.'
            ],
            questions: [
                {
                    text: '¿Cómo se dice "mamá" en LESSA?',
                    options: ['Tocando la barbilla con la mano abierta', 'Tocando la frente', 'Tocando el pecho', 'Tocando el hombro'],
                    correct: 0
                },
                {
                    text: '¿Qué seña representa a un "hermano" en LESSA?',
                    options: ['Dos dedos índices juntos', 'Puño cerrado', 'Forma de "L"', 'Pulgar hacia arriba'],
                    correct: 0
                },
                {
                    text: '¿Cómo se dice "abuelo/abuela" en LESSA?',
                    options: ['Círculo cerca de la sien', 'Tocando la barbilla', 'Manos juntas', 'Señalando al suelo'],
                    correct: 0
                }
            ]
        },
        {
            id: 'tiempo1',
            icon: 'fas fa-clock',
            color: '#ffc800',
            title: 'Tiempo Básico',
            words: ['Hoy', 'Mañana', 'Ayer'],
            videoUrls: ['videos/tiempo1.mp4', 'videos/tiempo2.mp4', 'videos/tiempo3.mp4'],
            description: 'Aprende las señas para expresar tiempo: hoy, mañana, ayer.',
            tips: [
                'Hoy: movimiento hacia abajo con la mano.',
                'Mañana: movimiento hacia adelante.',
                'Ayer: movimiento hacia atrás sobre el hombro.',
                'Pasado: movimiento más enfático hacia atrás.',
                'Futuro: movimiento amplio hacia adelante.'
            ],
            questions: [
                {
                    text: '¿Cómo se dice "hoy" en LESSA?',
                    options: ['Movimiento hacia abajo', 'Movimiento hacia arriba', 'Círculo con la mano', 'Puño cerrado'],
                    correct: 0
                },
                {
                    text: '¿Qué movimiento indica "mañana" en LESSA?',
                    options: ['Hacia adelante', 'Hacia atrás', 'Hacia los lados', 'Hacia arriba'],
                    correct: 0
                },
                {
                    text: '¿Cómo se dice "ayer" en LESSA?',
                    options: ['Hacia atrás sobre el hombro', 'Hacia adelante', 'Círculo en la palma', 'Dos dedos'],
                    correct: 0
                }
            ]
        },
        {
            id: 'colores',
            icon: 'fas fa-palette',
            color: '#ff86d0',
            title: 'Colores en LESSA',
            words: ['Rojo', 'Azul', 'Amarillo'],
            videoUrls: ['videos/colores1.mp4', 'videos/colores2.mp4', 'videos/colores3.mp4'],
            description: 'Aprende los colores básicos en LESSA: rojo, azul, amarillo, verde.',
            tips: [
                'Rojo: toca tus labios con el dedo índice.',
                'Azul: haz un círculo en la mejilla con el dedo índice.',
                'Amarillo: movimiento con la mano en forma de "Y".',
                'Verde: mano abierta moviéndose desde la barbilla.',
                'Blanco: puño cerrado abriéndose sobre el pecho.'
            ],
            questions: [
                {
                    text: '¿Cómo se dice "rojo" en LESSA?',
                    options: ['Tocando los labios', 'Tocando la mejilla', 'Tocando la frente', 'Tocando la nariz'],
                    correct: 0
                },
                {
                    text: '¿Qué color se indica con un círculo en la mejilla en LESSA?',
                    options: ['Azul', 'Rojo', 'Verde', 'Amarillo'],
                    correct: 0
                },
                {
                    text: '¿Cómo se dice "amarillo" en LESSA?',
                    options: ['Movimiento con mano en forma de "Y"', 'Puño cerrado', 'Dos dedos en "V"', 'Mano abierta'],
                    correct: 0
                }
            ]
        },
        {
            id: 'oraciones',
            icon: 'fas fa-pen-fancy',
            color: '#58cc02',
            title: 'Primeras Oraciones',
            words: ['Oración', 'Pregunta', 'Negación'],
            videoUrls: ['videos/oraciones1.mp4', 'videos/oraciones2.mp4', 'videos/oraciones3.mp4'],
            description: 'Combina el vocabulario aprendido para formar oraciones simples en LESSA.',
            tips: [
                'Estructura típica: Tiempo + Objeto + Sujeto + Verbo.',
                'Las cejas levantadas indican una pregunta.',
                'La negación se expresa con movimiento de cabeza.',
                'La expresión facial es parte importante de la gramática.',
                'Mantén contacto visual mientras firmas.'
            ],
            questions: [
                {
                    text: '¿Cuál es la estructura típica de una oración en LESSA?',
                    options: ['Tiempo + Objeto + Sujeto + Verbo', 'Sujeto + Verbo + Objeto', 'Verbo + Sujeto + Objeto', 'Objeto + Verbo + Sujeto'],
                    correct: 0
                },
                {
                    text: '¿Cómo se indica una pregunta en LESSA?',
                    options: ['Cejas levantadas', 'Cabeza hacia abajo', 'Manos cruzadas', 'Puño cerrado'],
                    correct: 0
                },
                {
                    text: '¿Cómo se expresa la negación en LESSA?',
                    options: ['Movimiento de cabeza (negar)', 'Asentir con la cabeza', 'Manos arriba', 'Dedo índice hacia arriba'],
                    correct: 0
                }
            ]
        },
        {
            id: 'eval-basic',
            icon: 'fas fa-graduation-cap',
            color: '#ff9600',
            title: 'Evaluación del Nivel Básico',
            words: ['Repaso', 'Práctica', 'Comunicación'],
            videoUrls: ['videos/evalbasic1.mp4', 'videos/evalbasic2.mp4', 'videos/evalbasic3.mp4'],
            description: 'Repaso general del nivel básico de LESSA.',
            tips: [
                'Repasa todas las señas aprendidas.',
                'Practica con un compañero.',
                'Grábate para autoevaluarte.',
                'Recuerda la importancia de la expresión facial.',
                'Mantén una práctica diaria de al menos 15 minutos.'
            ],
            questions: [
                {
                    text: '¿Cuál es el objetivo principal del nivel básico de LESSA?',
                    options: ['Comunicación inicial y vocabulario esencial', 'Hablar inglés', 'Cocinar en silencio', 'Bailar'],
                    correct: 0
                },
                {
                    text: '¿Qué aprendes primero en LESSA?',
                    options: ['Vocabulario básico y saludos', 'Gramática avanzada', 'Poesía en señas', 'Matemáticas'],
                    correct: 0
                },
                {
                    text: '¿Qué es fundamental en la comunicación en lengua de señas?',
                    options: ['La expresión facial', 'La velocidad al firmar', 'La fuerza al firmar', 'Hacer ruido al firmar'],
                    correct: 0
                }
            ]
        }
    ],
    intermediate: [
        {
            id: 'casa-baño-limpiar',
            icon: 'fas fa-home',
            color: '#58cc02',
            title: 'Casa, Baño, Limpiar',
            words: ['Casa', 'Baño', 'Limpiar'],
            videoUrls: [
                'videoslessons/CASA.mp4',
                'videoslessons/BAÑO.mp4',
                'videoslessons/LIMPIAR.mp4'
            ],
            description: 'Aprende las señas para espacios del hogar y acciones: casa, baño y limpiar. Útil para la vida diaria.',
            tips: [
                'Casa: forma un techo con tus manos juntas.',
                'Baño: simula lavarte las manos o hacer gesto de ducha.',
                'Limpiar: mueve tu mano plana sobre una superficie como limpiándola.'
            ],
            questions: [
                {
                    text: '¿Cómo se representa la seña de "Casa" en LESSA?',
                    options: ['Manos formando un techo', 'Puño cerrado', 'Dedo índice hacia arriba', 'Círculo con la mano'],
                    correct: 0
                },
                {
                    text: 'En la seña de "Baño" en LESSA, ¿qué acción se simula?',
                    options: ['Lavarse las manos o ducharse', 'Tocar la pared', 'Señalar al suelo', 'Manos sobre los ojos'],
                    correct: 0
                },
                {
                    text: '¿Cómo se representa "Limpiar" en LESSA?',
                    options: ['Mano plana sobre una superficie', 'Abriendo una puerta', 'Señalando la boca', 'Tocando la frente'],
                    correct: 0
                }
            ]
        },
        {
            id: 'ciudades',
            icon: 'fas fa-map-pin',
            color: '#1cb0f6',
            title: 'El Salvador, San Salvador, Santa Ana',
            words: ['El Salvador', 'San Salvador', 'Santa Ana'],
            videoUrls: [
                'videoslessons/ELSALVADOR.mp4',
                'videoslessons/SANSALVADOR.mp4',
                'videoslessons/SANTAANA.mp4'
            ],
            description: 'Señas para lugares importantes: el país, la capital y una ciudad destacada.',
            tips: [
                'El Salvador: movimiento ondulatorio frente al pecho.',
                'San Salvador: combina "San" + "Salvador" (círculo en la mejilla).',
                'Santa Ana: deletrea S-A-N-T-A A-N-A.',
                'Cada departamento tiene su propia seña o se deletrea.'
            ],
            questions: [
                {
                    text: '¿Qué movimiento identifica a "El Salvador" en LESSA?',
                    options: ['Movimiento ondulatorio frente al pecho', 'Círculo en la cabeza', 'Tocar la nariz', 'Puño hacia arriba'],
                    correct: 0
                },
                {
                    text: '¿Cómo se representa "San Salvador" en LESSA?',
                    options: ['Círculo en la mejilla (parte de Salvador)', 'Palma abierta', 'Dos dedos en "V"', 'Mano en el corazón'],
                    correct: 0
                },
                {
                    text: '¿Qué método se usa principalmente para "Santa Ana" en LESSA?',
                    options: ['Deletreo S-A-N-T-A A-N-A', 'Seña única', 'Movimiento circular', 'Tocar el hombro'],
                    correct: 0
                }
            ]
        },
        {
            id: 'comida-tipica',
            icon: 'fas fa-utensils',
            color: '#ff9600',
            title: 'Pupusa, Frijol, Atol',
            words: ['Pupusa', 'Frijol', 'Atol'],
            videoUrls: [
                'videoslessons/PUPUSA.mp4',
                'videoslessons/FRIJOL.mp4',
                'videoslessons/ATOLE.mp4',
            ],
            description: 'Aprende las señas para tres delicias salvadoreñas: pupusa, frijol y atol. La gastronomía es parte de nuestra cultura.',
            tips: [
                'Pupusa: imita la acción de aplanar la masa con las manos.',
                'Frijol: simula tomar un puñado de frijoles con la mano.',
                'Atol: simula sostener una taza caliente y beber.'
            ],
            questions: [
                {
                    text: '¿Cómo se hace la seña de "pupusa" en LESSA?',
                    options: ['Aplanando con las manos', 'Señalando la boca', 'Tocando la cabeza', 'Dedo en el aire'],
                    correct: 0
                },
                {
                    text: '¿Qué seña simula tomar un puñado con la mano?',
                    options: ['Frijol', 'Pupusa', 'Atol', 'Pan'],
                    correct: 0
                },
                {
                    text: '¿Cuál es la seña para "atol" en LESSA?',
                    options: ['Sostener taza y beber', 'Revolver', 'Aplanar', 'Señalar la garganta'],
                    correct: 0
                }
            ]
        },
        {
            id: 'cuerpo',
            icon: 'fas fa-hand-peace',
            color: '#ff4b4b',
            title: 'El Cuerpo Humano',
            words: ['Cabeza', 'Manos', 'Dolor'],
            videoUrls: ['videos/cuerpo1.mp4', 'videos/cuerpo2.mp4', 'videos/cuerpo3.mp4'],
            description: 'Aprende las partes del cuerpo y cómo expresar dolencias en LESSA.',
            tips: [
                'La cabeza se indica tocándola.',
                'El dolor se indica en el área afectada.',
                'La expresión facial es crucial para indicar la intensidad del dolor.',
                'Para indicar fiebre, se toca la frente y se hace expresión de calor.'
            ],
            questions: [
                {
                    text: '¿Qué parte del cuerpo se indica tocando la frente en LESSA?',
                    options: ['La cabeza/frente', 'El ojo', 'La nariz', 'La boca'],
                    correct: 0
                },
                {
                    text: '¿Cómo se dice "dolor" en LESSA?',
                    options: ['Señalar el área afectada con expresión de dolor', 'Puño cerrado', 'Aplaudir', 'Asentir'],
                    correct: 0
                },
                {
                    text: '¿Cómo se dice "mano" en LESSA?',
                    options: ['Mostrar la mano abierta', 'Puño cerrado', 'Dedo índice', 'Palma hacia abajo'],
                    correct: 0
                }
            ]
        },
        {
            id: 'trabajo',
            icon: 'fas fa-briefcase',
            color: '#ce82ff',
            title: 'Trabajo y Profesiones',
            words: ['Doctor', 'Profesor', 'Trabajar'],
            videoUrls: ['videos/trabajo1.mp4', 'videos/trabajo2.mp4', 'videos/trabajo3.mp4'],
            description: 'Aprende las señas para diferentes profesiones y verbos relacionados con el trabajo.',
            tips: [
                'Doctor: se indica tocando la muñeca (tomando el pulso).',
                'Profesor: se indica en la frente (sabiduría).',
                'Trabajar: puño sobre puño (acción repetitiva).',
                'Enfermero/a: similar al doctor pero con movimiento diferente.'
            ],
            questions: [
                {
                    text: '¿Cómo se dice "doctor" en LESSA?',
                    options: ['Tocando la muñeca (tomar pulso)', 'Tocando la frente', 'Señalando el pecho', 'Aplaudiendo'],
                    correct: 0
                },
                {
                    text: '¿Qué seña representa a "profesor/a" en LESSA?',
                    options: ['Frente + libro (sabiduría)', 'Puño cerrado', 'Manos juntas', 'Círculo en la mejilla'],
                    correct: 0
                },
                {
                    text: '¿Cómo se dice "trabajar" en LESSA?',
                    options: ['Puño sobre puño (movimiento repetitivo)', 'Aplaudir', 'Asentir', 'Manos arriba'],
                    correct: 0
                }
            ]
        },
        {
            id: 'transporte',
            icon: 'fas fa-bus',
            color: '#00d4aa',
            title: 'Medios de Transporte',
            words: ['Avión', 'Carro', 'Bus'],
            videoUrls: ['videos/transporte1.mp4', 'videos/transporte2.mp4', 'videos/transporte3.mp4'],
            description: 'Aprende las señas para diferentes medios de transporte en LESSA.',
            tips: [
                'Avión: manos simulando vuelo (alas abiertas).',
                'Carro: manos simulando el volante.',
                'Bus: dedos paralelos moviéndose hacia adelante.',
                'Moto: manos en posición de manillar.',
                'Bicicleta: movimiento circular con los pies.'
            ],
            questions: [
                {
                    text: '¿Cómo se indica "avión" en LESSA?',
                    options: ['Manos simulando vuelo', 'Puño cerrado', 'Dedos en "V"', 'Mano plana'],
                    correct: 0
                },
                {
                    text: '¿Cómo se dice "carro" en LESSA?',
                    options: ['Simular el volante', 'Puño cerrado', 'Aplaudir', 'Círculo en la mejilla'],
                    correct: 0
                },
                {
                    text: '¿Qué seña representa "bus" en LESSA?',
                    options: ['Dedos paralelos moviéndose', 'Puño cerrado', 'Manos juntas', 'Dedo índice'],
                    correct: 0
                }
            ]
        },
        {
            id: 'verbos',
            icon: 'fas fa-running',
            color: '#ffc800',
            title: 'Verbos de Acción',
            words: ['Correr', 'Saltar', 'Caminar'],
            videoUrls: ['videos/verbos1.mp4', 'videos/verbos2.mp4', 'videos/verbos3.mp4'],
            description: 'Aprende verbos de acción como correr, caminar y saltar en LESSA.',
            tips: [
                'Correr: dedos índice y medio simulando piernas.',
                'Caminar: dedos alternándose como si caminaran.',
                'Saltar: movimiento ascendente con la mano.',
                'Nadar: movimiento ondulatorio con los brazos.',
                'Comer: llevar la mano a la boca repetidamente.'
            ],
            questions: [
                {
                    text: '¿Qué verbo simula el movimiento de piernas con los dedos?',
                    options: ['Correr', 'Comer', 'Dormir', 'Leer'],
                    correct: 0
                },
                {
                    text: '¿Cómo se dice "saltar" en LESSA?',
                    options: ['Movimiento ascendente', 'Movimiento descendente', 'Círculo con la mano', 'Puño cerrado'],
                    correct: 0
                },
                {
                    text: '¿Qué verbo se indica con los dedos índice y medio simulando piernas?',
                    options: ['Correr', 'Saltar', 'Nadar', 'Volar'],
                    correct: 0
                }
            ]
        },
        {
            id: 'tiempo2',
            icon: 'fas fa-calendar-alt',
            color: '#ff86d0',
            title: 'Tiempo Avanzado',
            words: ['Verano', 'Siempre', 'Nunca'],
            videoUrls: ['videos/tiempoav1.mp4', 'videos/tiempoav2.mp4', 'videos/tiempoav3.mp4'],
            description: 'Aprende meses, estaciones del año y frecuencia en LESSA.',
            tips: [
                'Meses: se indican con números y un círculo.',
                'Estaciones: movimientos circulares según la estación.',
                'Siempre: círculo continuo con el dedo.',
                'Nunca: movimiento negativo con la cabeza y mano.'
            ],
            questions: [
                {
                    text: '¿Cómo se dice "verano" en LESSA?',
                    options: ['Sol en la frente', 'Lluvia', 'Viento', 'Frío'],
                    correct: 0
                },
                {
                    text: '¿Cómo se dice "siempre" en LESSA?',
                    options: ['Círculo continuo', 'Puño cerrado', 'Dedo hacia arriba', 'Asentir'],
                    correct: 0
                },
                {
                    text: '¿Qué significa una "X" con los dedos en LESSA?',
                    options: ['Nunca o negación', 'Siempre', 'Tal vez', 'A veces'],
                    correct: 0
                }
            ]
        },
        {
            id: 'clasificadores1',
            icon: 'fas fa-hand-peace',
            color: '#58cc02',
            title: 'Clasificadores I',
            words: ['Persona', 'Objeto plano', 'Vehículo'],
            videoUrls: ['videos/clasif1.mp4', 'videos/clasif2.mp4', 'videos/clasif3.mp4'],
            description: 'Introducción a los clasificadores en LESSA.',
            tips: [
                'Los clasificadores describen formas y movimientos.',
                'Persona se muestra con el dedo índice.',
                'Objeto plano se muestra con mano plana.',
                'Vehículo se muestra con mano en forma de "C".'
            ],
            questions: [
                {
                    text: '¿Para qué sirven los clasificadores en LESSA?',
                    options: ['Describir formas y movimientos', 'Contar números', 'Decir colores', 'Producir sonidos'],
                    correct: 0
                },
                {
                    text: '¿Cómo se muestra una "persona" en LESSA usando clasificadores?',
                    options: ['Dedo índice', 'Puño cerrado', 'Mano abierta', 'Dos dedos'],
                    correct: 0
                },
                {
                    text: '¿Qué clasificador describe un objeto plano como una hoja de papel?',
                    options: ['Mano plana', 'Puño cerrado', 'Dedos en pinza', 'Círculo con los dedos'],
                    correct: 0
                }
            ]
        },
        {
            id: 'eval-inter',
            icon: 'fas fa-certificate',
            color: '#ff9600',
            title: 'Evaluación del Nivel Intermedio',
            words: ['Repaso', 'Vocabulario', 'Clasificadores'],
            videoUrls: ['videos/evalinter1.mp4', 'videos/evalinter2.mp4', 'videos/evalinter3.mp4'],
            description: 'Repaso completo del nivel intermedio de LESSA.',
            tips: [
                'Repasa todo el vocabulario aprendido.',
                'Practica conversaciones cortas.',
                'Los clasificadores son clave en este nivel.',
                'La fluidez llega con práctica diaria.'
            ],
            questions: [
                {
                    text: '¿Qué nivel sigue después del intermedio en LESSA?',
                    options: ['Avanzado', 'Básico', 'Principiante', 'Ninguno'],
                    correct: 0
                },
                {
                    text: '¿Qué se aprende principalmente en el nivel intermedio?',
                    options: ['Vocabulario extendido y clasificadores', 'Alfabeto', 'Números', 'Colores básicos'],
                    correct: 0
                },
                {
                    text: '¿Qué son los clasificadores en LESSA?',
                    options: ['Descriptores visuales de formas y movimientos', 'Números', 'Letras', 'Colores'],
                    correct: 0
                }
            ]
        }
    ],
    advanced: [
        {
            id: 'verbos-direccionales',
            icon: 'fas fa-arrow-right',
            color: '#1cb0f6',
            title: 'Verbos Direccionales',
            words: ['Dar', 'Recibir', 'Enviar'],
            videoUrls: [
                'videoslessons/DAR.mp4',
                'videoslessons/RECIBIR.mp4',
                'videoslessons/ENVIAR.mp4'
            ],
            description: 'Aprende verbos direccionales en LESSA: Dar, Recibir y Enviar. Estos verbos cambian de dirección según quién realiza la acción.',
            tips: [
                'Los verbos direccionales se mueven desde el sujeto hacia el objeto.',
                'Dar y Recibir comparten el mismo movimiento pero en direcciones opuestas.',
                'Enviar se aleja del cuerpo; Recibir se acerca al cuerpo.',
                'La mirada sigue la dirección del verbo.',
                'La expresión facial indica la intención.'
            ],
            questions: [
                {
                    text: '¿Cómo se mueven los verbos direccionales en LESSA?',
                    options: ['Desde el sujeto hacia el objeto', 'Siempre hacia arriba', 'En círculos', 'Hacia atrás'],
                    correct: 0
                },
                {
                    text: '¿Qué diferencia a "Dar" de "Recibir" en LESSA?',
                    options: ['Direcciones opuestas', 'Diferente velocidad', 'Usar la otra mano', 'Misma dirección'],
                    correct: 0
                },
                {
                    text: 'En la seña de "Enviar" en LESSA, ¿hacia dónde se dirige el movimiento?',
                    options: ['Se aleja del cuerpo', 'Se acerca al cuerpo', 'Movimiento circular', 'Toque en el pecho'],
                    correct: 0
                }
            ]
        },
        {
            id: 'sabor-bailar-herida',
            icon: 'fas fa-heart',
            color: '#ff9600',
            title: 'Sabor, Bailar, Herida',
            words: ['Sabor', 'Bailar', 'Herida'],
            videoUrls: [
                'videoslessons/SABOR.mp4',
                'videoslessons/BAILAR.mp4',
                'videoslessons/HERIDA.mp4'
            ],
            description: 'Aprende a expresar sensaciones y acciones en LESSA: Sabor, Bailar y Herida. El contexto y la expresión facial son clave.',
            tips: [
                'Sabor: lleva los dedos a los labios y exprésalo con gesto facial.',
                'Bailar: mueve las manos rítmicamente frente al cuerpo.',
                'Herida: señala el área afectada y muestra expresión de dolor.',
                'La intensidad se expresa con la expresión facial.'
            ],
            questions: [
                {
                    text: '¿Cómo se expresa "sabor" en LESSA?',
                    options: ['Dedos a los labios con expresión facial', 'Tocando la cabeza', 'Puño cerrado', 'Aplaudiendo'],
                    correct: 0
                },
                {
                    text: '¿Qué movimiento representa "bailar" en LESSA?',
                    options: ['Manos rítmicamente frente al cuerpo', 'Saltar', 'Girar la cabeza', 'Señalar al suelo'],
                    correct: 0
                },
                {
                    text: '¿Cómo se indica una "herida" en LESSA?',
                    options: ['Señalar el área afectada con expresión de dolor', 'Tocar la frente', 'Manos juntas', 'Dedo al cielo'],
                    correct: 0
                }
            ]
        },
        {
            id: 'carro-direccion-moto',
            icon: 'fas fa-motorcycle',
            color: '#ff4b4b',
            title: 'Carro, Dirección, Moto',
            words: ['Carro', 'Dirección', 'Moto'],
            videoUrls: [
                'videoslessons/CARRO.mp4',
                'videoslessons/DIRECCION.mp4',
                'videoslessons/MOTO.mp4',
            ],
            description: 'Clasificadores avanzados para describir vehículos y dirección: Carro, Dirección y Moto en LESSA.',
            tips: [
                'Carro: manos simulando un volante.',
                'Dirección: dedo índice apuntando hacia la dirección deseada.',
                'Moto: manos en posición de manillar con movimiento hacia adelante.',
                'La velocidad del movimiento indica qué tan rápido va el vehículo.'
            ],
            questions: [
                {
                    text: '¿Cómo se representa "Carro" en LESSA?',
                    options: ['Simulando un volante', 'Puño cerrado', 'Dedo índice', 'Palma hacia arriba'],
                    correct: 0
                },
                {
                    text: '¿Cómo se representa "Dirección" en LESSA?',
                    options: ['Dedo índice apuntando la dirección', 'Ambas manos abiertas', 'Mano en la frente', 'Puño cerrado'],
                    correct: 0
                },
                {
                    text: '¿Cómo se indica "Moto" en LESSA?',
                    options: ['Manos en posición de manillar', 'Aplaudir', 'Dedo hacia arriba', 'Brazos cruzados'],
                    correct: 0
                }
            ]
        },
        {
            id: 'modismos-regionalismos',
            icon: 'fas fa-comment-dots',
            color: '#ce82ff',
            title: 'Modismos y Regionalismos',
            words: ['Seña Local', 'Regionalismo', 'Cultura'],
            videoUrls: ['', '', ''],
            description: 'Descubre los modismos y regionalismos de LESSA: Seña Local, Cultura y más.',
            tips: [
                'Cada región tiene sus propias señas para conceptos cotidianos.',
                'Las señas locales pueden variar incluso entre ciudades cercanas.',
                'Cultura se representa con un círculo frente al pecho.',
                'Es importante aprender las variantes regionales.'
            ],
            questions: [
                {
                    text: '¿Las señas varían según la región en El Salvador?',
                    options: ['Sí, incluso entre ciudades cercanas', 'No, son universales', 'Solo en otros países', 'Solo en la capital'],
                    correct: 0
                },
                {
                    text: '¿Cómo se representa "Cultura" en LESSA?',
                    options: ['Círculo frente al pecho', 'Puño hacia arriba', 'Dedo en la sien', 'Palma hacia abajo'],
                    correct: 0
                },
                {
                    text: '¿Qué es una "Seña Local" en LESSA?',
                    options: ['Seña única de una región específica', 'Seña universal', 'Gesto informal', 'Deletreo'],
                    correct: 0
                }
            ]
        },
        {
            id: 'leyes-derechos',
            icon: 'fas fa-scale-balanced',
            color: '#00d4aa',
            title: 'Leyes y Derechos',
            words: ['Ley', 'Derecho', 'Inclusión'],
            videoUrls: ['', '', ''],
            description: 'Aprende las señas sobre leyes y derechos en LESSA: Ley, Derecho e Inclusión.',
            tips: [
                'Ley: mano plana moviéndose hacia abajo con firmeza.',
                'Derecho: puño en el pecho (poder personal).',
                'Inclusión: manos abiertas desde el pecho hacia afuera.',
                'Justicia: manos en equilibrio simulando una balanza.'
            ],
            questions: [
                {
                    text: '¿Cómo se indica "Derecho" en LESSA?',
                    options: ['Puño en el pecho', 'Mano en la cabeza', 'Dedo en el aire', 'Palma abierta'],
                    correct: 0
                },
                {
                    text: '¿Qué movimiento representa "Inclusión" en LESSA?',
                    options: ['Manos desde el pecho hacia afuera', 'Manos hacia abajo', 'Círculo en el estómago', 'Puño cerrado'],
                    correct: 0
                },
                {
                    text: '¿Cómo se hace la seña de "Ley" en LESSA?',
                    options: ['Mano plana moviéndose hacia abajo firmemente', 'Dedo hacia arriba', 'Aplaudir', 'Círculo con la mano'],
                    correct: 0
                }
            ]
        },
        {
            id: 'temas-abstractos',
            icon: 'fas fa-brain',
            color: '#ffc800',
            title: 'Temas Abstractos',
            words: ['Amor', 'Tristeza', 'Felicidad'],
            videoUrls: ['', '', ''],
            description: 'Expresa conceptos abstractos en LESSA: Amor, Tristeza y Felicidad.',
            tips: [
                'Amor: cruza los brazos sobre el pecho.',
                'Tristeza: dedos deslizándose por las mejillas como lágrimas.',
                'Felicidad: irradiar desde el pecho con manos abiertas.',
                'La expresión facial es fundamental para transmitir la emoción correcta.'
            ],
            questions: [
                {
                    text: '¿Cómo se dice "Amor" en LESSA?',
                    options: ['Cruzando brazos sobre el pecho', 'Tocando la cabeza', 'Aplaudiendo', 'Señalando al cielo'],
                    correct: 0
                },
                {
                    text: '¿Qué gesto representa "Tristeza" en LESSA?',
                    options: ['Dedos deslizándose por las mejillas', 'Sonrisa grande', 'Puño hacia arriba', 'Giro de manos'],
                    correct: 0
                },
                {
                    text: '¿Cómo se indica "Felicidad" en LESSA?',
                    options: ['Manos abiertas desde el pecho hacia afuera', 'Puño cerrado', 'Cabeza hacia abajo', 'Ojos cerrados'],
                    correct: 0
                }
            ]
        },
        {
            id: 'poesia-narracion',
            icon: 'fas fa-book-open',
            color: '#ff86d0',
            title: 'Poesía y Narración Creativa',
            words: ['Historia', 'Cuento', 'Poema'],
            videoUrls: ['', '', ''],
            description: 'Aprende a contar historias y crear poesía en LESSA: Historia, Cuento y Poema.',
            tips: [
                'Historia: manos simulando un libro abierto.',
                'Cuento: similar pero más corto y cercano.',
                'Poema: combina ritmo y expresión con tus manos.',
                'El espacio de firma es importante para la narrativa.'
            ],
            questions: [
                {
                    text: '¿Cómo se representa "Historia" en LESSA?',
                    options: ['Manos simulando un libro abierto', 'Un solo dedo', 'Palmas hacia abajo', 'Puño cerrado'],
                    correct: 0
                },
                {
                    text: '¿Qué diferencia a "Cuento" de "Historia" en LESSA?',
                    options: ['Es más corto y cercano', 'No hay diferencia', 'Usa menos manos', 'Solo se deletrea'],
                    correct: 0
                },
                {
                    text: '¿Qué combina el "Poema" en LESSA?',
                    options: ['Ritmo y expresión corporal', 'Solo deletreo', 'Velocidad', 'Fuerza bruta'],
                    correct: 0
                }
            ]
        },
        {
            id: 'interpretacion-etica',
            icon: 'fas fa-handshake',
            color: '#58cc02',
            title: 'Interpretación y Ética',
            words: ['Intérprete', 'Ética', 'Respeto'],
            videoUrls: ['', '', ''],
            description: 'Principios fundamentales: Intérprete, Ética y Respeto en la interpretación de LESSA.',
            tips: [
                'Intérprete: combina las señas de persona y traducir.',
                'Ética: se indica con mano en el corazón y la mente.',
                'Respeto: saludo desde la frente (inclinación).',
                'Neutralidad: manos equilibradas sin tomar partido.'
            ],
            questions: [
                {
                    text: '¿Cómo se representa "Ética" en LESSA?',
                    options: ['Mano en el corazón y la mente', 'Solo en la cabeza', 'Aplaudir', 'Dedo hacia arriba'],
                    correct: 0
                },
                {
                    text: '¿Qué implica la "Neutralidad" en la interpretación de LESSA?',
                    options: ['Manos equilibradas sin tomar partido', 'Tomar partido', 'Hablar fuerte', 'Moverse rápido'],
                    correct: 0
                },
                {
                    text: '¿Quién es el "Intérprete" de LESSA?',
                    options: ['Persona que traduce entre lenguas de señas y voz', 'El que habla', 'Un actor', 'Un maestro'],
                    correct: 0
                }
            ]
        },
        {
            id: 'eval-avanzada',
            icon: 'fas fa-trophy',
            color: '#ff9600',
            title: 'Evaluación del Nivel Avanzado',
            words: ['Evaluación', 'Repaso', 'Práctica'],
            videoUrls: ['', '', ''],
            description: 'Evaluación final del nivel avanzado de LESSA.',
            tips: [
                'Repasa todas las señas aprendidas en el nivel avanzado.',
                'Practica con hablantes nativos de LESSA.',
                'La fluidez se logra con práctica diaria.',
                'La expresión corporal es tan importante como las manos.',
                'Cada región tiene variantes que debes conocer.'
            ],
            questions: [
                {
                    text: '¿Qué se necesita para lograr fluidez en LESSA?',
                    options: ['Práctica diaria', 'Solo teoría', 'No practicar', 'Adivinar'],
                    correct: 0
                },
                {
                    text: '¿Qué implica la interpretación profesional en LESSA?',
                    options: ['Ética y precisión', 'Improvisación', 'Opiniones personales', 'Velocidad extrema'],
                    correct: 0
                },
                {
                    text: '¿Cómo mejoras tu comprensión de LESSA?',
                    options: ['Viendo videos sin audio (solo señas)', 'Ignorando las señas', 'Solo leyendo', 'Sin practicar'],
                    correct: 0
                }
            ]
        }
    ]
};

let game = {
    completedLessons: JSON.parse(localStorage.getItem('completedLessons')) || [],
    currentLessonId: 'abc'
};
let currentModalLesson = null;
let questionsStatus = [false, false, false];



function getCompletedCountByLevel(levelName) {
    const lessons = lessonsCatalog[levelName];
    if (!lessons) return { completed: 0, total: 0 };
    const completed = game.completedLessons.filter(id => lessons.some(l => l.id === id)).length;
    return { completed, total: lessons.length };
}

function checkAndGetDiploma(levelType) {
    let levelName = '';
    let requiredLessons = [];
    let levelDisplayName = '';
   
    switch(levelType) {
        case 'basico':
            levelName = 'basic';
            requiredLessons = lessonsCatalog.basic;
            levelDisplayName = 'Basic Level';
            break;
        case 'intermedio':
            levelName = 'intermediate';
            requiredLessons = lessonsCatalog.intermediate;
            levelDisplayName = 'Intermediate Level';
            break;
        case 'avanzado':
            levelName = 'advanced';
            requiredLessons = lessonsCatalog.advanced;
            levelDisplayName = 'Advanced Level';
            break;
    }
   
    const completedCount = game.completedLessons.filter(id => requiredLessons.some(l => l.id === id)).length;
    const totalCount = requiredLessons.length;
   
    if (completedCount === totalCount && totalCount > 0) {
        window.location.href = 'Certification.html';
    } else {
        const missingCount = totalCount - completedCount;
        const missingLevelsDiv = document.getElementById('missingLevelsInfo');
       
        let levelClass = '';
        switch(levelType) {
            case 'basico': levelClass = 'basic'; break;
            case 'intermedio': levelClass = 'intermediate'; break;
            case 'avanzado': levelClass = 'advanced'; break;
        }
       
        missingLevelsDiv.innerHTML = `
            <div class="missing-level">
                <div class="missing-level-icon ${levelClass}">
                    <i class="${levelType === 'basico' ? 'fas fa-book' : (levelType === 'intermedio' ? 'fas fa-chalkboard' : 'fas fa-star')}"></i>
                </div>
                <div class="missing-level-text">
                    <strong>${levelDisplayName}</strong>
                    <span>You are missing ${missingCount} lesson${missingCount !== 1 ? 's' : ''} to complete (${completedCount}/${totalCount})</span>
                </div>
            </div>
        `;
       
        document.getElementById('diplomaWarningModal').style.display = 'flex';
    }
}

function closeWarningModal() {
    document.getElementById('diplomaWarningModal').style.display = 'none';
}

function setMascotMessage(msg) {
    const bubble = document.getElementById('mascot-message');
    if (bubble) bubble.textContent = msg;
}

function getOrganicFluidPositions(count, width = 600, height = 820) {
    const points = [];
    const startY = 55;
    const endY = height - 65;
    const stepY = (endY - startY) / (count - 1);
    const centerX = width / 2;
    for (let i = 0; i < count; i++) {
        const y = startY + stepY * i;
        const t = i / (count - 1);
        const phase = i * Math.PI / 2.4;
        const amplitude = width * 0.32 * (1 - Math.abs(t - 0.5) * 0.5);
        let x = centerX + Math.sin(phase) * amplitude;
        x = Math.min(width - 55, Math.max(55, x));
        points.push({ x, y });
    }
    return points;
}

function buildSuperSmoothPath(points) {
    if (points.length < 2) return "";
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const dy = curr.y - prev.y;
        const tension = 0.75;
        const bulge = (i % 2 === 0 ? 1 : -1) * Math.abs(dy) * 0.45;
        const cp1x = prev.x + bulge;
        const cp1y = prev.y + dy * tension;
        const cp2x = curr.x + bulge;
        const cp2y = curr.y - dy * tension;
        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    return d;
}

function canAccess(lessonsArray, idx) {
    if (idx === 0) return true;
    return game.completedLessons.includes(lessonsArray[idx-1].id);
}

function renderLevel(levelName, lessonsArray, containerId, fillId) {
    const container = document.getElementById(containerId);
    if (!container) return;
   
    const svg = container.querySelector('svg');
    const width = 600, height = 820;
    const positions = getOrganicFluidPositions(lessonsArray.length, width, height);
    const pathD = buildSuperSmoothPath(positions);
   
    const bgPath = svg.querySelector('.path-bg');
    const fillPath = svg.querySelector('.path-fill');
    if (bgPath) bgPath.setAttribute('d', pathD);
    if (fillPath) fillPath.setAttribute('d', pathD);
   
    const oldNodes = container.querySelectorAll('.lesson-node');
    oldNodes.forEach(n => n.remove());
   
    lessonsArray.forEach((lesson, idx) => {
        const pos = positions[idx];
        const completed = game.completedLessons.includes(lesson.id);
        const isCurrent = game.currentLessonId === lesson.id;
        const locked = (!completed && !isCurrent && !canAccess(lessonsArray, idx));
       
        const nodeDiv = document.createElement('div');
        nodeDiv.className = `lesson-node ${completed ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${locked ? 'locked' : ''}`;
        nodeDiv.style.left = `${(pos.x / width) * 100}%`;
        nodeDiv.style.top = `${(pos.y / height) * 100}%`;
        nodeDiv.style.transform = 'translate(-50%, -50%)';
        nodeDiv.onclick = () => { if (!locked) openLessonModal(lesson); };
        nodeDiv.innerHTML = `<div class="node-icon" style="background: ${lesson.color};"><i class="${lesson.icon}" style="color:white;"></i></div><div class="level-number">${idx+1}</div>`;
        container.appendChild(nodeDiv);
    });
   
    setTimeout(() => { if (fillPath) fillPath.classList.add('active'); }, 200);
}

function renderAllLevels() {
    renderLevel('basic', lessonsCatalog.basic, 'basic-path', 'basic-path-fill');
    renderLevel('intermediate', lessonsCatalog.intermediate, 'intermediate-path', 'inter-path-fill');
    renderLevel('advanced', lessonsCatalog.advanced, 'advanced-path', 'adv-path-fill');
}

function loadVideosForLesson(lesson) {
    const container = document.getElementById('videosGrid');
    if (!container) return;
    container.innerHTML = '';

    if (lesson.images && lesson.images.length > 0) {
        container.classList.add('alphabet-grid');
        lesson.images.forEach((imgSrc, idx) => {
            const letter = lesson.words && lesson.words[idx] ? lesson.words[idx] : String.fromCharCode(65 + idx);
            const card = document.createElement('div');
            card.className = 'video-card alphabet-card';
            card.innerHTML = `<h4>${letter}</h4><div class="video-preview"></div>`;
            const preview = card.querySelector('.video-preview');
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = `Sign for letter ${letter}`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';
            img.onerror = function() {
                preview.innerHTML = `<div class="video-placeholder"><i class="fas fa-image"></i><span>${letter}</span></div>`;
            };
            preview.appendChild(img);
            container.appendChild(card);
        });
        return;
    }

    container.classList.remove('alphabet-grid');
    const words = lesson.words || [];
    for (let i = 0; i < 3; i++) {
        let videoUrl = lesson.videoUrls && lesson.videoUrls[i] ? lesson.videoUrls[i] : '';
        const wordLabel = words[i] ? words[i] : lesson.title;
        const videoHtml = videoUrl
            ? `<video src="${videoUrl}" controls style="width:100%; height:100%; object-fit:cover;"></video>`
            : '<div class="video-placeholder"><i class="fas fa-video"></i><span>Video not available</span></div>';
       
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `<h4>Video ${i+1} - ${wordLabel}</h4><div class="video-preview">${videoHtml}</div>`;
        container.appendChild(card);
    }
}
function loadGameForLesson(lesson) {
    const container = document.getElementById('questionsContainer');
    if(!container) return;

    container.innerHTML = '';
    questionsStatus = [false, false, false];

    lesson.questions.forEach((q, idx) => {

        // Guardar respuesta correcta
        const correctAnswer = q.options[q.correct];

        // Copiar opciones
        const shuffledOptions = [...q.options];

        // Mezclar opciones (Fisher-Yates)
        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }

        // Encontrar nueva posición de la correcta
        const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);

        const questionDiv = document.createElement('div');
        questionDiv.className = 'game-question-item';
        questionDiv.setAttribute('data-qidx', idx);

        questionDiv.innerHTML = `
            <div class="question-text">${idx + 1}. ${q.text}</div>
            <div class="game-options" id="options-${idx}"></div>
            <div class="question-feedback" id="feedback-${idx}"></div>
        `;

        container.appendChild(questionDiv);

        const optionsContainer = document.getElementById(`options-${idx}`);

        shuffledOptions.forEach((opt, optIdx) => {

            const optDiv = document.createElement('div');
            optDiv.className = 'game-option';
            optDiv.textContent = opt;

            optDiv.onclick = () =>
                checkAnswer(
                    idx,
                    optIdx,
                    newCorrectIndex,
                    optDiv
                );

            optionsContainer.appendChild(optDiv);
        });
    });

    document.getElementById('completeLessonBtn').disabled = true;
}

function checkAllQuestionsComplete() {
    const allCorrect = questionsStatus.every(status => status === true);
    document.getElementById('completeLessonBtn').disabled = !allCorrect;
}

function checkAnswer(qIdx, selectedIdx, correctIdx, element) {
    if(questionsStatus[qIdx]) return;
   
    const allOptions = document.querySelectorAll(`#options-${qIdx} .game-option`);
    const feedbackDiv = document.getElementById(`feedback-${qIdx}`);
   
    if(selectedIdx === correctIdx) {
        questionsStatus[qIdx] = true;
        element.classList.add('correct');
        feedbackDiv.innerHTML = '✓ Correct!';
        feedbackDiv.className = 'question-feedback success';
    } else {
        element.classList.add('wrong');
        allOptions[correctIdx].classList.add('correct');
        feedbackDiv.innerHTML = '✗ Incorrect. The correct answer is marked above.';
        feedbackDiv.className = 'question-feedback error';
    }
    checkAllQuestionsComplete();
}

function showCompletionMessage() {
    const popup = document.getElementById('completion-popup');
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 1200);
}

function showCelebrationEffect() {
    const celDiv = document.getElementById('celebration');
    celDiv.innerHTML = '';
    celDiv.classList.add('active');
    const colors = ['#58cc02', '#1cb0f6', '#ffc800', '#ff4b4b'];
    for (let i = 0; i < 80; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + '%';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        conf.style.width = conf.style.height = Math.random() * 10 + 6 + 'px';
        conf.style.animationDelay = Math.random() * 2 + 's';
        celDiv.appendChild(conf);
    }
    setTimeout(() => celDiv.classList.remove('active'), 2600);
}

function completeCurrentLesson() {
    if (!currentModalLesson) return;

    if (!game.completedLessons.includes(currentModalLesson.id)) {
        game.completedLessons.push(currentModalLesson.id);

        // Guardar progreso
        localStorage.setItem(
            'completedLessons',
            JSON.stringify(game.completedLessons)
        );

        showCompletionMessage();
        showCelebrationEffect();
        setMascotMessage("Lesson completed! Keep moving forward.");
        renderAllLevels();
    }

    document.getElementById('lessonModal').style.display = 'none';
    resetGameState();
}

function resetGameState() {
    currentModalLesson = null;
    questionsStatus = [false, false, false];
    document.getElementById('completeLessonBtn').disabled = true;
}

function openLessonModal(lesson) {
    currentModalLesson = lesson;
    const modal = document.getElementById('lessonModal');
    document.getElementById('modalTitle').textContent = lesson.title;
    document.getElementById('modalDescText').textContent = lesson.description;
   
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = lesson.tips.map(tip => `<li>${tip}</li>`).join('');
   
    loadVideosForLesson(lesson);
    loadGameForLesson(lesson);
   
    modal.style.display = 'flex';
    setMascotMessage(`Learning: ${lesson.title}`);
}

function setupModalEvents() {
    const modal = document.getElementById('lessonModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const completeBtn = document.getElementById('completeLessonBtn');
   
    closeBtn.onclick = () => { modal.style.display = 'none'; resetGameState(); setMascotMessage("Continue whenever you want."); };
    completeBtn.onclick = () => { if (currentModalLesson) completeCurrentLesson(); };
}

function setupProgressButton() {
    const progressModal = document.getElementById('progressModal');
    const closeProgressModal = document.getElementById('closeProgressModal');
   
    document.getElementById('progress-button').addEventListener('click', () => {
        updateProgressModal();
        progressModal.classList.add('show');
    });
   
    closeProgressModal.onclick = () => {
        progressModal.classList.remove('show');
    };
   
    window.addEventListener('click', (e) => {
        if (e.target === progressModal) {
            progressModal.classList.remove('show');
        }
    });
}

function updateProgressModal() {
    const totalLessons = lessonsCatalog.basic.length + lessonsCatalog.intermediate.length + lessonsCatalog.advanced.length;
    const completedCount = game.completedLessons.length;
    const percent = Math.round((completedCount / totalLessons) * 100);
   
    const basicCompleted = game.completedLessons.filter(id => lessonsCatalog.basic.some(l => l.id === id)).length;
    const intermediateCompleted = game.completedLessons.filter(id => lessonsCatalog.intermediate.some(l => l.id === id)).length;
    const advancedCompleted = game.completedLessons.filter(id => lessonsCatalog.advanced.some(l => l.id === id)).length;
   
    const circle = document.getElementById('progressCircle');
    circle.style.setProperty('--progress', `${percent * 3.6}deg`);
   
    document.getElementById('progressPercent').textContent = `${percent}%`;
   
    const basicPercent = Math.round((basicCompleted / lessonsCatalog.basic.length) * 100);
    const intermediatePercent = Math.round((intermediateCompleted / lessonsCatalog.intermediate.length) * 100);
    const advancedPercent = Math.round((advancedCompleted / lessonsCatalog.advanced.length) * 100);
   
    setTimeout(() => {
        document.getElementById('basicProgressBar').style.width = `${basicPercent}%`;
        document.getElementById('intermediateProgressBar').style.width = `${intermediatePercent}%`;
        document.getElementById('advancedProgressBar').style.width = `${advancedPercent}%`;
    }, 100);
   
    document.getElementById('basicProgressText').textContent = `${basicCompleted}/${lessonsCatalog.basic.length}`;
    document.getElementById('intermediateProgressText').textContent = `${intermediateCompleted}/${lessonsCatalog.intermediate.length}`;
    document.getElementById('advancedProgressText').textContent = `${advancedCompleted}/${lessonsCatalog.advanced.length}`;
   
    const motivation = document.getElementById('progressMotivation');
    if (percent === 100) {
        motivation.textContent = 'Congratulations! You have completed all lessons!';
        motivation.classList.add('completed');
    } else if (percent >= 75) {
        motivation.textContent = ' Excellent progress! You are almost there!';
        motivation.classList.remove('completed');
    } else if (percent >= 50) {
        motivation.textContent = ' You are on the right track. Keep it up! ';
        motivation.classList.remove('completed');
    } else if (percent >= 25) {
        motivation.textContent = ' Well done. Keep learning! ';
        motivation.classList.remove('completed');
    } else if (percent > 0) {
        motivation.textContent = ' You are just starting. Cheer up! ';
        motivation.classList.remove('completed');
    } else {
        motivation.textContent = ' Start your first lesson now! ';
        motivation.classList.remove('completed');
    }
}

function init() {
    renderAllLevels();
    setupProgressButton();
    setupModalEvents();
    setMascotMessage("Welcome to Koko's Talk! Click on any lesson to start learning LESSA.");
   
    window.addEventListener('click', (e) => {
        const warningModal = document.getElementById('diplomaWarningModal');
        if (e.target === warningModal) {
            closeWarningModal();
        }
        const lessonModal = document.getElementById('lessonModal');
        if (e.target === lessonModal) {
            lessonModal.style.display = 'none';
            resetGameState();
        }
    });
}

init();
