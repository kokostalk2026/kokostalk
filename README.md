# Koko's Talk

**Koko's Talk** es una plataforma web educativa orientada al aprendizaje de la Lengua de Señas Salvadoreña (LESSA). El proyecto busca transformar la comunicación mediante una experiencia accesible, dinámica e inclusiva para que más personas puedan aprender, practicar y certificarse en LESSA.

## Descripción del proyecto

Koko's Talk nace con la idea de reducir las barreras de comunicación entre la comunidad oyente y la comunidad sorda en El Salvador. La plataforma ofrece contenido educativo, lecciones interactivas, juegos, cursos especializados, diccionario, práctica con cámara y acceso a certificaciones según el plan del usuario.

Desde la sección **About Us**, el proyecto se presenta como una plataforma innovadora para aprender LESSA de manera efectiva y accesible, con una visión centrada en una sociedad más inclusiva y sin barreras de comunicación.

## Objetivo general

Desarrollar una plataforma web educativa que facilite el aprendizaje de la Lengua de Señas Salvadoreña mediante recursos interactivos, módulos de práctica, planes de suscripción y herramientas de seguimiento del progreso del usuario.

## Características principales

- Página principal con presentación visual de Koko's Talk.
- Registro e inicio de sesión de usuarios.
- Perfil de usuario con datos personales editables.
- Cambio de contraseña desde el perfil.
- Recuperación de contraseña.
- Visualización del progreso del usuario por niveles.
- Lecciones organizadas por nivel básico, intermedio y avanzado.
- Diccionario de LESSA.
- Juegos interactivos para reforzar el aprendizaje.
- Práctica con cámara mediante reconocimiento de manos.
- Cursos especializados.
- Sistema de planes: Free, Basic, Premium y Enterprise.
- Control de acceso a contenido según el plan del usuario.
- Certificación para usuarios Premium.
- Conexión con base de datos MySQL en Aiven.
- Despliegue en Render usando Docker.

## Tecnologías utilizadas

### Frontend

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Font Awesome
- MediaPipe Hands

### Backend

- PHP
- MySQL
- Sesiones PHP

### Base de datos y despliegue

- Aiven MySQL
- Render
- Docker
- GitHub

## Estructura general del proyecto

```txt
kokostalk/
│
├── css/
│   └── Archivos de estilos de las páginas
│
├── img/
│   └── Imágenes, logos e ilustraciones del sitio
│
├── JS/
│   └── Archivos JavaScript para interacciones y progreso
│
├── php/
│   ├── conexion.php
│   ├── login.php
│   ├── register.php
│   ├── logout.php
│   ├── accountglobal.php
│   ├── actualizar_perfil.php
│   ├── cambiar_password.php
│   ├── cursosglobal.php
│   ├── diccionario.php
│   ├── certificados.php
│   ├── guardar_plan.php
│   ├── planes.php
│   ├── proteger.php
│   ├── verificar_plan.php
│   └── solicitar_reset.php
│
├── sql/
│   └── Scripts para actualizar tablas y crear recuperación de contraseña
│
├── videoscursos/
│   └── Videos de cursos especializados
│
├── videoslessons/
│   └── Videos de lecciones
│
├── index.html
├── about.html
├── login.html
├── register.html
├── forgot_password.html
├── reset_password.php
├── planes.html
├── lessonglobal.html
├── juegos.html
├── practicaconia.html
├── Dockerfile
└── README.md
```

## Módulos principales

### 1. Página principal

La página principal presenta la plataforma, su identidad visual y enlaces a las secciones principales: lecciones, cursos, diccionario, perfil y planes.

### 2. About Us

La sección **About Us** explica la finalidad del proyecto: transformar la comunicación mediante LESSA y promover una educación accesible para todos. También presenta la misión, visión, valores y medios de contacto.

### 3. Registro e inicio de sesión

El sistema permite crear usuarios mediante un formulario de registro. Las contraseñas se almacenan cifradas usando `password_hash()` y se validan con `password_verify()` durante el inicio de sesión.

### 4. Perfil de usuario

El perfil muestra:

- Nombre del usuario.
- Correo electrónico.
- País.
- Motivo por el cual aprende LESSA.
- Avatar.
- Porcentaje de avance.
- Lecciones completadas.
- Progreso por nivel.
- Cambio de contraseña.

El usuario puede modificar sus datos personales y actualizar su contraseña desde esta sección.



### 6. Lecciones

Las lecciones están organizadas en tres niveles:

- Nivel básico.
- Nivel intermedio.
- Nivel avanzado.

El progreso se guarda de forma individual por usuario para evitar que el avance se mezcle entre diferentes cuentas.

### 7. Diccionario

El diccionario permite explorar palabras y recursos relacionados con LESSA. El acceso puede estar limitado según el plan del usuario.

### 8. Cursos especializados

Los cursos especializados ofrecen contenido adicional para usuarios con planes superiores. Algunos cursos están enfocados en áreas como vocabulario religioso, salud y tecnología.

### 9. Planes de suscripción

El sistema maneja diferentes planes:

- **Free**: acceso básico.
- **Basic**: acceso a más contenido educativo.
- **Premium**: acceso completo, cursos especializados y certificaciones.
- **Enterprise**: plan institucional o empresarial.

### 10. Certificación

Los usuarios Premium pueden acceder a la sección de certificación, responder evaluaciones y generar certificados relacionados con su aprendizaje de LESSA.


## Dockerfile

El proyecto utiliza Docker para que Render pueda ejecutar PHP con Apache.


## Seguridad básica implementada

- Contraseñas cifradas.
- Sesiones PHP.
- Protección de páginas privadas.
- Validación de usuario antes de acceder a contenido restringido.
- Tokens temporales para recuperación de contraseña.
- Variables de entorno para no exponer credenciales en el código.

## Autores

Proyecto desarrollado por el equipo de **Koko's Talk Group**.
- **Diana Marroquin** — General Manager.
- **Kristian Jurado** — Administrative and Financial Manager.
- **Daniela Lopez** — Sign Language Specialist.
- **Camila Castillo** — Designer.
- **Milagro Martinez** — Sales Manager.
- **Fatima Beltran** — Marketing Manager.
- **Jose Chavez** — Programmer.
- **Juan Paz** — Programmer.

## Contacto

- Correo: info@kokostalk.com
- Teléfono: +503 6049-2076
- Ubicación: Soyapango, San Salvador, El Salvador

## Estado del proyecto

Proyecto en desarrollo y mejora continua. Actualmente se encuentra adaptado para funcionar con PHP, MySQL en Aiven y despliegue en Render.

## Licencia

Este proyecto fue desarrollado con fines educativos.
