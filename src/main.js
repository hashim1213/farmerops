import './style.css';

const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('.mobile-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.classList.toggle('open', !isOpen);
});

mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('open');
}));

const features = [
  {
    step: 'COMMUNICATE',
    title: 'Share what is happening, right from the field.',
    description: 'Send a voice note, photo, task update, or observation in seconds. FarmerOps adds the field, people, and context automatically.',
    list: ['Works from any phone', 'Fast enough for the busiest days', 'Simple for every person on the crew'],
  },
  {
    step: 'COORDINATE',
    title: 'Give the whole team the context they need.',
    description: 'Keep conversations connected to the right field, asset, and activity, so everyone sees the same current information.',
    list: ['Keep handoffs clear', 'Notify the right people', 'Reduce calls and repeated questions'],
  },
  {
    step: 'FOLLOW THROUGH',
    title: 'Turn every conversation into clear action.',
    description: 'Assign the next step, set a due date, and see work move from planned to completed without chasing updates.',
    list: ['Clear ownership from the start', 'Live work status', 'Fewer missed tasks'],
  },
  {
    step: 'SHARED MEMORY',
    title: 'Keep what your team learns every season.',
    description: 'Every observation, photo, and completed task becomes a searchable history of your fields, assets, and decisions.',
    list: ['Preserve hard-won experience', 'Find prior work in seconds', 'Onboard new people with context'],
  },
];

const featureButtons = document.querySelectorAll('.feature-tabs button');
featureButtons.forEach((button, index) => button.addEventListener('click', () => {
  featureButtons.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const feature = features[index];
  document.querySelector('#feature-step').textContent = feature.step;
  document.querySelector('#feature-title').textContent = feature.title;
  document.querySelector('#feature-description').textContent = feature.description;
  document.querySelector('#feature-list').innerHTML = feature.list.map((item) => `<li>${item}</li>`).join('');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const form = document.querySelector('.demo-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  button.innerHTML = 'Thanks — we’ll be in touch <span>✓</span>';
  button.classList.add('submitted');
  form.reset();
});
