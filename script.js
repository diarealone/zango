// =============================================
// THE.GIRLINTECH - SCRIPT.JS
// Animations, smooth scroll, hover effects, interactive elements
// Fully commented for understanding
// =============================================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll fade-in effect for sections
const sections = document.querySelectorAll('.section, .hero');
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Floating Back-To-Top Button
const topBtn = document.createElement('button');
topBtn.id = 'topBtn';
topBtn.innerText = '↑';
topBtn.style.cssText = 'position:fixed;bottom:25px;right:25px;padding:10px 15px;font-size:22px;border-radius:50%;border:none;background:#FF3B99;color:white;cursor:pointer;display:none;box-shadow:0 4px 12px rgba(0,0,0,0.2);transition:0.3s;';
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Image hover glow effect
const images = document.querySelectorAll('.hero-image img, .card img, .feature img');
images.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.boxShadow = '0 10px 25px rgba(255, 105, 180, 0.5)';
    img.style.transform = 'scale(1.07)';
  });
  img.addEventListener('mouseout', () => {
    img.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    img.style.transform = 'scale(1)';
  });
});

// Typing animation control (for hero heading)
// Already handled in CSS, can extend with JS if needed

// Mobile menu toggle (future use)
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('main-nav');
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
}