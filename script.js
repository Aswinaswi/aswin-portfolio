// 🌀 Initialize AOS Animation
AOS.init({
  once: true,
  duration: 800,
});

// 🖋️ TypeIt Effect for Hero Section
new TypeIt("#typed-text", {
  speed: 50,
  waitUntilVisible: true,
}).go();

// 🌫️ Add Shadow on Navbar Scroll
const navbar = document.querySelector('nav.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 🔗 Smooth Scrolling for Internal Links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetID = this.getAttribute('href');
    if (targetID.startsWith("#")) {
      e.preventDefault();
      const offsetTop = document.querySelector(targetID)?.offsetTop || 0;

      window.scrollTo({
        top: offsetTop - 60, // adjust for fixed navbar
        behavior: "smooth"
      });
    }
  });
});

// 🌟 Highlight Active Nav Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// 🔄 Collapse navbar on mobile after clicking a link
document.querySelectorAll(".navbar-collapse .nav-link").forEach(item => {
  item.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    }
  });
});

// ⬆️ Optional: Scroll-To-Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
