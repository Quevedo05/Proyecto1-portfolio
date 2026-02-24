/* ============================================================
   PORTFOLIO — Desarrollador Web
   Tabla de contenidos:
     1. Traducciones (i18n)
     2. Estado global
     3. Idioma
     4. Tema (claro / oscuro)
     5. Menú móvil
     6. Navegación activa al hacer scroll
     7. Animaciones de scroll (IntersectionObserver)
     8. Formulario de contacto
     9. Parallax de mouse y cursor glow
    10. Inicialización
============================================================ */


/* ============================================================
   1. TRADUCCIONES (i18n)
   Para añadir un nuevo idioma: copia uno de los objetos y
   traduce los valores. Luego añade un botón .lang-btn.
============================================================ */
const i18n = {

  es: {
    page_title:        'Lucas Quevedo | Desarrollador Web',
    nav_home:          'Inicio',
    nav_about:         'Sobre Mí',
    nav_projects:      'Proyectos',
    nav_contact:       'Contacto',
    hero_greeting:     'Disponible para proyectos',
    hero_role:         'Desarrollador Web Full Stack',
    hero_tagline:      'Creo experiencias digitales elegantes y funcionales. Me especializo en construir webs modernas, rápidas y accesibles que conectan marcas con sus usuarios.',
    hero_cta1:         'Ver Proyectos',
    hero_cta2:         'Contáctame',
    about_label:       'Sobre Mí',
    about_title:       'Un desarrollador apasionado por la web',
    about_p1:          'Soy desarrollador web con experiencia creando aplicaciones y sitios modernos. Me apasiona escribir código limpio, optimizar el rendimiento y crear interfaces que los usuarios disfruten usando.',
    about_p2:          'Trabajo tanto en el front-end como en el back-end, con especial interés en la accesibilidad, el diseño UI/UX y las buenas prácticas de ingeniería de software.',
    about_skills_title:'Tecnologías',
    projects_label:    'Proyectos',
    projects_title:    'Mi trabajo reciente',
    projects_subtitle: 'Aquí encontrarás algunos de los proyectos en los que he trabajado. El contenido se actualizará próximamente.',
    proj1_title:       'Proyecto 1',
    proj1_desc:        'Descripción del proyecto. Aquí irá el texto explicativo cuando agregues el contenido real del proyecto.',
    proj2_title:       'Proyecto 2',
    proj2_desc:        'Descripción del proyecto. Aquí irá el texto explicativo cuando agregues el contenido real del proyecto.',
    proj3_title:       'Proyecto 3',
    proj3_desc:        'Descripción del proyecto. Aquí irá el texto explicativo cuando agregues el contenido real del proyecto.',
    proj4_title:       'Proyecto 4',
    proj4_desc:        'Descripción del proyecto. Aquí irá el texto explicativo cuando agregues el contenido real del proyecto.',
    proj_demo:         'Demo',
    proj_code:         'Código',
    contact_label:     'Contacto',
    contact_title:     'Estoy disponible para desarrollar tu web',
    contact_subtitle:  '¿Tienes un proyecto en mente? Me encantaría escucharte. Escríbeme y encontramos la mejor solución juntos.',
    form_name:         'Nombre',
    form_name_ph:      'Tu nombre',
    form_email:        'Email',
    form_message:      'Mensaje',
    form_message_ph:   'Cuéntame sobre tu proyecto...',
    form_send:         'Enviar Mensaje',
    form_success:      '¡Mensaje enviado! Te responderé pronto.',
    footer_copy:       'Diseñado y desarrollado con',
  },

  en: {
    page_title:        'Your Name | Web Developer',
    nav_home:          'Home',
    nav_about:         'About',
    nav_projects:      'Projects',
    nav_contact:       'Contact',
    hero_greeting:     'Available for projects',
    hero_role:         'Full Stack Web Developer',
    hero_tagline:      'I build elegant and functional digital experiences. I specialize in crafting modern, fast, and accessible websites that connect brands with their users.',
    hero_cta1:         'View Projects',
    hero_cta2:         'Contact Me',
    about_label:       'About Me',
    about_title:       'A developer passionate about the web',
    about_p1:          'I\'m a web developer experienced in building modern applications and websites. I\'m passionate about writing clean code, optimizing performance, and crafting interfaces that users enjoy.',
    about_p2:          'I work across both front-end and back-end, with special interest in accessibility, UI/UX design, and software engineering best practices.',
    about_skills_title:'Technologies',
    projects_label:    'Projects',
    projects_title:    'My recent work',
    projects_subtitle: 'Here you\'ll find some of the projects I\'ve worked on. Content will be updated soon.',
    proj1_title:       'Project 1',
    proj1_desc:        'Project description. This is where the explanatory text will go when you add the real project content.',
    proj2_title:       'Project 2',
    proj2_desc:        'Project description. This is where the explanatory text will go when you add the real project content.',
    proj3_title:       'Project 3',
    proj3_desc:        'Project description. This is where the explanatory text will go when you add the real project content.',
    proj4_title:       'Project 4',
    proj4_desc:        'Project description. This is where the explanatory text will go when you add the real project content.',
    proj_demo:         'Demo',
    proj_code:         'Code',
    contact_label:     'Contact',
    contact_title:     'I\'m available to build your website',
    contact_subtitle:  'Have a project in mind? I\'d love to hear about it. Write to me and let\'s find the best solution together.',
    form_name:         'Name',
    form_name_ph:      'Your name',
    form_email:        'Email',
    form_message:      'Message',
    form_message_ph:   'Tell me about your project...',
    form_send:         'Send Message',
    form_success:      'Message sent! I\'ll get back to you soon.',
    footer_copy:       'Designed and developed with',
  }

};


/* ============================================================
   2. ESTADO GLOBAL
============================================================ */
let currentLang  = localStorage.getItem('lang')  || 'es';
let currentTheme = localStorage.getItem('theme') || 'light';


/* ============================================================
   3. IDIOMA
============================================================ */
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyLang();
}

function applyLang() {
  const t = i18n[currentLang];

  // Atributo lang del HTML (importante para accesibilidad y SEO)
  document.documentElement.lang = currentLang;

  // Título de la página
  document.title = t.page_title;

  // Textos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Placeholders con data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // Botones de idioma activo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
}


/* ============================================================
   4. TEMA (CLARO / OSCURO)
============================================================ */
function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Actualizar icono del botón
  document.getElementById('themeBtn').textContent = currentTheme === 'light' ? '🌙' : '☀️';

  // Actualizar meta theme-color (barra del navegador en móvil)
  document.querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', currentTheme === 'light' ? '#F8F8F9' : '#0C0C0E');
}


/* ============================================================
   5. MENÚ MÓVIL
============================================================ */
function toggleMenu() {
  const menu      = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  const isOpen    = menu.classList.toggle('open');

  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
}

function closeMenu() {
  const menu      = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  menu.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

// Cerrar menú al hacer click fuera de él
document.addEventListener('click', e => {
  const menu      = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeMenu();
  }
});

// Cerrar menú al redimensionar a desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});


/* ============================================================
   6. NAVEGACIÓN ACTIVA AL HACER SCROLL
============================================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
  let currentSection = '';
  sections.forEach(section => {
    // La sección activa es aquella cuyo tope está dentro del viewport
    if (section.getBoundingClientRect().top <= 100) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentSection);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });


/* ============================================================
   7. ANIMACIONES DE SCROLL — IntersectionObserver
============================================================ */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // Animar solo una vez
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

// Observar todos los elementos con clase .reveal o .reveal-stagger
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
  revealObserver.observe(el);
});


/* ============================================================
   8. FORMULARIO DE CONTACTO
============================================================ */
function handleFormSubmit(e) {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) return;

  // Aquí puedes integrar tu servicio de email (Formspree, EmailJS, etc.)
  // Por ahora mostramos un mensaje de éxito visual.
  const successEl = document.getElementById('formSuccess');
  successEl.classList.add('visible');
  e.target.reset();

  // Ocultar el mensaje de éxito después de 5 segundos
  setTimeout(() => successEl.classList.remove('visible'), 5000);
}


/* ============================================================
   9. PARALLAX DE MOUSE Y CURSOR GLOW
   Los divs con [data-parallax] se desplazan suavemente en
   función del puntero. El valor numérico es la "profundidad":
   mayor valor → mayor desplazamiento (elemento más cercano).
============================================================ */
(function initParallax() {
  const parallaxEls  = document.querySelectorAll('[data-parallax]');
  const cursorGlow   = document.getElementById('cursorGlow');

  if (!parallaxEls.length && !cursorGlow) return;

  // Posición objetivo (mouse normalizado a -1..+1 desde el centro)
  const mouse  = { x: 0, y: 0 };
  // Posición actual interpolada (lerp)
  const lerped = { x: 0, y: 0 };
  let   hasPointer = false;

  // Registrar posición del mouse
  window.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;

    // El glow responde de forma inmediata (no lerpeado)
    if (cursorGlow) {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top  = e.clientY + 'px';
      if (!hasPointer) {
        cursorGlow.classList.add('active');
        hasPointer = true;
      }
    }
  }, { passive: true });

  // Ocultar glow al salir de la ventana
  window.addEventListener('mouseleave', () => {
    if (cursorGlow) cursorGlow.classList.remove('active');
    hasPointer = false;
  });

  // Loop de animación con interpolación lineal suave (factor 0.065)
  // Esto da el efecto de "inercia" elegante al mover el mouse
  (function tick() {
    const ease = 0.065;
    lerped.x += (mouse.x - lerped.x) * ease;
    lerped.y += (mouse.y - lerped.y) * ease;

    parallaxEls.forEach(el => {
      const depth = parseFloat(el.dataset.parallax);
      // Máximo ~90px horizontal y ~70px vertical a profundidad 1
      const tx = lerped.x * depth * 90;
      const ty = lerped.y * depth * 70;
      el.style.transform = `translate(${tx}px, ${ty}px)`;
    });

    requestAnimationFrame(tick);
  })();
})();


/* ============================================================
   10. INICIALIZACIÓN
============================================================ */
(function init() {
  // Aplicar tema e idioma guardados (o valores por defecto)
  applyTheme();
  applyLang();

  // Actualizar año en el footer dinámicamente
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Marcar el nav link correcto según la posición inicial
  updateActiveNav();
})();
