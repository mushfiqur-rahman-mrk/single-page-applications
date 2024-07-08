// Initialize Aos for Scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';  
AOS.init({
  offset: 50,
  once: true,
});

// active nav link
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  function activateLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active-link"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active-link");
    }
  }

  window.addEventListener("scroll", activateLink);

  activateLink();
});

// go to top button
const goToTopBtn = document.getElementById("goToTopBtn");

if (goToTopBtn) {
  window.addEventListener("scroll", scrollFunction);
  goToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  scrollFunction();
}

function scrollFunction() {
  if (goToTopBtn) {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
  }
}
