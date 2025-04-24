// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle with Smooth Transition
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link with a slight delay for smooth animation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }, 300); // Delay for smooth animation
    });
});

// Scroll Animation with Slight Delay
const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});

// Contact Form Handler with Basic Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Please fill in all required fields.');
        return; // Prevent form submission
    }

    // Add your form submission logic here (e.g., send data to a server)
    alert('Form submitted! This is a demo version.');
});
// Smooth Hover Effect on Social Icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.querySelector('img').style.transform = 'scale(1)';
    });
});
