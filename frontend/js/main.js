const API_URL = CONFIG.API_URL;

// ——— MENÚ MÓVIL ———
const toggle   = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ——— SCROLL: highlight nav activo ———
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav__links a');

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  links.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current ? '#e8e6f0' : '';
  });
}

window.addEventListener('scroll', updateActiveLink);

// ——— ANIMACIÓN DE ENTRADA ———
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

function observeCards() {
  document.querySelectorAll(
    '.project-card, .skill-group, .timeline__item, .contact-item'
  ).forEach(el => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ——— PROYECTOS DESDE LA API ———
const SVG_CODE = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
  viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="16 18 22 12 16 6"/>
  <polyline points="8 6 2 12 8 18"/>
</svg>`;

function buildCard(project) {
  const techs = project.technologies
    .map(t => `<span class="tag tag--sm">${t}</span>`)
    .join('');

  const githubLink = project.github_url
    ? `<a href="${project.github_url}" class="icon-link" target="_blank" title="Ver código">${SVG_CODE}</a>`
    : `<span class="icon-link" style="opacity:0.3" title="Sin repositorio público">${SVG_CODE}</span>`;

  return `
    <div class="project-card">
      <div class="project-card__header">
        <span class="project-card__icon">${project.icon || '💻'}</span>
        <div class="project-card__links">${githubLink}</div>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-card__tags">${techs}</div>
    </div>`;
}

async function loadProjects() {
  const grid = document.getElementById('projectsGrid');
  try {
    const res  = await fetch(`${API_URL}/api/projects`);
    const json = await res.json();

    if (!json.ok || !json.data.length) {
      grid.innerHTML = '<p style="color:var(--color-muted)">No hay proyectos disponibles.</p>';
      return;
    }

    grid.innerHTML = json.data.map(buildCard).join('');
    observeCards();
  } catch {
    // Si el backend no está disponible, muestra tarjetas estáticas de respaldo
    grid.innerHTML = `
      <div class="project-card">
        <div class="project-card__header">
          <span class="project-card__icon">⚙️</span>
          <div class="project-card__links"><span class="icon-link" style="opacity:0.3">${SVG_CODE}</span></div>
        </div>
        <h3>Sistema de gestión ISO</h3>
        <p>Backend para gestión de cotizaciones y flujos administrativos con integración de formularios externos.</p>
        <div class="project-card__tags">
          <span class="tag tag--sm">Laravel</span>
          <span class="tag tag--sm">MySQL</span>
          <span class="tag tag--sm">Power BI</span>
        </div>
      </div>
      <div class="project-card">
        <div class="project-card__header">
          <span class="project-card__icon">🐾</span>
          <div class="project-card__links"><span class="icon-link" style="opacity:0.3">${SVG_CODE}</span></div>
        </div>
        <h3>App Pets — Backend</h3>
        <p>Sistema backend para gestión de vendedores, proveedores y ventas en aplicación móvil.</p>
        <div class="project-card__tags">
          <span class="tag tag--sm">Node.js</span>
          <span class="tag tag--sm">MongoDB</span>
          <span class="tag tag--sm">NestJS</span>
        </div>
      </div>
      <div class="project-card">
        <div class="project-card__header">
          <span class="project-card__icon">💳</span>
          <div class="project-card__links"><span class="icon-link" style="opacity:0.3">${SVG_CODE}</span></div>
        </div>
        <h3>Sistema de cobranzas</h3>
        <p>Web completa para control de cobranzas integrado con Saint Enterprise. Módulo de reservas y POS.</p>
        <div class="project-card__tags">
          <span class="tag tag--sm">PHP</span>
          <span class="tag tag--sm">MySQL</span>
          <span class="tag tag--sm">Saint Enterprise</span>
        </div>
      </div>
      <div class="project-card">
        <div class="project-card__header">
          <span class="project-card__icon">📱</span>
          <div class="project-card__links"><span class="icon-link" style="opacity:0.3">${SVG_CODE}</span></div>
        </div>
        <h3>Apps Android — Almacén</h3>
        <p>Tres aplicaciones móviles Android para gestión de almacén, ventas y catálogos de repuestos.</p>
        <div class="project-card__tags">
          <span class="tag tag--sm">Android</span>
          <span class="tag tag--sm">Kotlin</span>
          <span class="tag tag--sm">MVVM</span>
        </div>
      </div>`;
    observeCards();
  }
}

// ——— FORMULARIO DE CONTACTO ———
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn  = form.querySelector('button[type="submit"]');
  const data = {
    name:    form.nombre.value.trim(),
    email:   form.email.value.trim(),
    message: form.mensaje.value.trim(),
  };

  btn.textContent = 'Enviando...';
  btn.disabled    = true;

  try {
    const res  = await fetch(`${API_URL}/api/messages`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(data),
    });
    const json = await res.json();

    if (json.ok) {
      note.textContent = '¡Mensaje enviado! Te responderé pronto.';
      form.reset();
    } else {
      note.style.color = '#f9a5a5';
      note.textContent = json.message || 'Error al enviar. Intenta de nuevo.';
    }
  } catch {
    note.style.color = '#f9a5a5';
    note.textContent = 'No se pudo conectar al servidor.';
  } finally {
    btn.textContent = 'Enviar mensaje';
    btn.disabled    = false;
    setTimeout(() => {
      note.textContent = '';
      note.style.color = '';
    }, 5000);
  }
});

// ——— INIT ———
loadProjects();
observeCards();