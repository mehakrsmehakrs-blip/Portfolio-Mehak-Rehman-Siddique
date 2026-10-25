// Tailwind config
tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter', 'sans-serif'] } } } };

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
  document.getElementById('menu-icon').className =
    menu.classList.contains('hidden') ? 'fa-solid fa-bars text-xl' : 'fa-solid fa-xmark text-xl';
}

// Toast message
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-message').textContent = msg;
  t.classList.remove('hidden');
  setTimeout(() => t.classList.add('hidden'), 3000);
}

// Contact form
function handleFormSubmit(e) {
  e.preventDefault();
  showToast('Message sent successfully!');
  e.target.reset();
}

// Project data: yahan apne asli links likhein
const projects = [
  {
    title: 'Product Landing Page',
    image: 'assets/project1.png',
    description: 'A responsive promotional landing page built to practise semantic HTML5 and modern CSS layouts.',
    features: ['Responsive on mobile and desktop', 'Smooth scrolling between sections', 'Clear call-to-action buttons'],
    tags: ['HTML5', 'CSS3', 'Responsive'],
    live: 'https://your-username.github.io/landing-page/',
    code: 'https://github.com/your-username/landing-page'
  },
  {
    title: 'Data Analytics Dashboard',
    image: 'assets/project2.png',
    description: 'A spreadsheet dashboard that summarises numbers with charts so trends are easy to read.',
    features: ['Pivot tables for quick summaries', 'Bar and pie charts for key metrics', 'Clean, organised data sheet'],
    tags: ['Google Sheets', 'Data Viz', 'Pivot Tables'],
    live: 'https://docs.google.com/spreadsheets/',
    code: 'https://github.com/your-username/data-dashboard'
  },
  {
    title: 'Personal Portfolio Site',
    image: 'assets/project3.png',
    description: 'This portfolio, designed in Figma first and then coded and published with GitHub Pages.',
    features: ['Six sections from header to footer', 'Downloadable CV and project popups', 'Scroll animations and typing effect'],
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GitHub Pages'],
    live: 'https://your-username.github.io/Portfolio_Mehak_Rehman_Siddique/',
    code: 'https://github.com/your-username/Portfolio_Mehak_Rehman_Siddique'
  }
];

// Popup kholna
function openProject(i) {
  const p = projects[i];
  const img = document.getElementById('m-img');
  img.style.display = '';
  img.src = p.image;
  document.getElementById('m-title').textContent = p.title;
  document.getElementById('m-desc').textContent = p.description;
  document.getElementById('m-features').innerHTML = p.features.map(f => '<li>' + f + '</li>').join('');
  document.getElementById('m-tags').innerHTML = p.tags.map(t =>
    '<span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">' + t + '</span>').join('');
  document.getElementById('m-live').href = p.live;
  document.getElementById('m-code').href = p.code;
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

// Popup band karna
function closeProject() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });

// Typing effect
const roles = ['Web Developer', 'Data Analytics Student', 'Future Full-Stack Developer'];
let r = 0, c = 0, deleting = false;
function type() {
  const word = roles[r];
  c += deleting ? -1 : 1;
  document.getElementById('typed').textContent = word.slice(0, c);
  let delay = deleting ? 50 : 110;
  if (!deleting && c === word.length) { deleting = true; delay = 1400; }
  else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 400; }
  setTimeout(type, delay);
}
type();

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('show'); revealObserver.unobserve(en.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Menu mein current section highlight
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('section[id]').forEach(s => sectionObserver.observe(s));

// Scroll progress bar
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  document.getElementById('progress').style.width =
    (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + '%';
});