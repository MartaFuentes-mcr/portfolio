// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll("a")
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
  })
})

// Header scroll effect
const header = document.getElementById("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    header.classList.add("header-scrolled")
  } else {
    header.classList.remove("header-scrolled")
  }

  lastScroll = currentScroll
})

// Contact Form Submission
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Here you would typically send the data to a server
  console.log("Form submitted:", { name, email, message })

  // Show success message
  alert("¡Gracias por tu mensaje! Te responderé pronto.")

  // Reset form
  contactForm.reset()
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))

    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
})



  // Animación de escala al hacer scroll
  window.addEventListener('scroll', function() {
    const avatar = document.querySelector('.avatar-3d');
    if (!avatar) return;

    const rect = avatar.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      anime({
        targets: avatar,
        scale: [0.8, 1],
        opacity: [0.7, 1],
        duration: 1000,
        easing: 'easeOutElastic',
        delay: 200,
        complete: function() {
          // Solo se ejecuta una vez
          avatar.style.transform = 'scale(1)';
        }
      });
    }
  });

  // Animación inicial al cargar
  document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.avatar-3d');
    if (avatar) {
      avatar.style.opacity = '0';
      avatar.style.transform = 'scale(0.8)';

      anime({
        targets: avatar,
        scale: 1,
        opacity: 1,
        duration: 1200,
        easing: 'easeOutBack',
        delay: 500
      });
    }
  });
