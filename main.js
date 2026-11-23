fetch('https://api.github.com/repos/olizimmermann/s3dns')
  .then(r => r.json())
  .then(d => { if (d.stargazers_count !== undefined) document.getElementById('s3dns-stars').textContent = d.stargazers_count; })
  .catch(() => {});

const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
