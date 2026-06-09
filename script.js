document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. LOGO FLUJO DE CARGA ---
    const studioLogo = document.getElementById('studio-logo');
    const loadingText = document.getElementById('loading-msg');

    function showLogo() {
        if (loadingText) loadingText.style.display = 'none';
        if (studioLogo) studioLogo.classList.add('visible');
    }

    if (studioLogo) {
        // Si la imagen ya cargó (por caché), mostrar al instante
        if (studioLogo.complete) {
            showLogo();
        } else {
            // Si no ha cargado, esperar a que cargue
            studioLogo.onload = showLogo;
        }
    }

    // --- 2. CARRUSEL DE PROYECTOS ---
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev'); 
    let currentSlide = 0;

    window.moveSlide = function(direction) {
        if (slides.length === 0) return;

        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');

        // Lógica de visibilidad: flecha atrás solo al avanzar
        if (prevBtn) {
            prevBtn.classList.toggle('visible', currentSlide > 0);
        }
    };

    // --- 3. LÓGICA DE LA IP ---
    window.copyIp = function() {
        const ipText = document.getElementById('ip-address').innerText;
        const ipBar = document.getElementById('server-ip-bar');
        const btnCopy = document.getElementById('btn-copy-action');

        navigator.clipboard.writeText(ipText).then(() => {
            if (ipBar) ipBar.classList.add('copied-active');
            if (btnCopy) btnCopy.innerText = "COPIADO";
            setTimeout(() => {
                if (ipBar) ipBar.classList.remove('copied-active');
                if (btnCopy) btnCopy.innerText = "COPIAR";
            }, 2000);
        });
    };

    // --- 4. NAVEGACIÓN MANUAL ---
    window.setActiveNav = (selectedElement) => {
        document.querySelectorAll('#main-nav a').forEach(link => link.classList.remove('active'));
        selectedElement.classList.add('active');
    };
});

// --- 5. DETECTOR DE SCROLL ---
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('#main-nav a');
    let currentId = '';
    
    sections.forEach(section => {
        // Detecta qué sección está activa según el scroll
        if (window.scrollY >= (section.offsetTop - 200)) {
            currentId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
        }
    });
});
// --- 5. LÓGICA DE MEDIAS ---
const grid = document.querySelector('.medias-grid');
const colaboradores = [
    { nombre: "Panzi01", img: "media1.png", link: "perfil-panzi01.html", color: "purple" },
    { nombre: "INddestable", img: "media2.png", link: "perfil-inddestable.html", color: "pink" },
    { nombre: "mrTocinin", img: "media3.png", link: "perfil-mrtocinin.html", color: "pink-light" },
    { nombre: "MrCreepers08", img: "media4.png", link: "perfil-mrcreepers08.html", color: "green" },
    { nombre: "evamorgelio", img: "media5.png", link: "perfil-evamorgelio.html", color: "cyan" },
    { nombre: "OMARzMOURE", img: "media6.png", link: "perfil-omarzmoure.html", color: "orange" },
    { nombre: "extrandes", img: "media7.png", link: "perfil-extrandes.html", color: "blue" },
    { nombre: "Knoblademc", img: "media8.png", link: "perfil-knoblademc.html", color: "dark-green" }
];

if (grid) {
    grid.innerHTML = "";
    colaboradores.forEach(c => {
        grid.innerHTML += `
            <a href="${c.link}" class="profile-card border-${c.color}">
                <div class="profile-image" style="background-image: url('${c.img}');">
                    <div class="profile-info">
                        <p class="profile-name">${c.nombre}</p>
                        <p class="profile-desc">Sintux Medias</p>
                    </div>
                </div>
            </a>
        `;
    });
}
