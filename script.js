// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Dynamic Island Navigation
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = 'translate(-50%, -100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translate(-50%, 0)';
    }
    
    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navButtons = document.querySelector('.nav-buttons');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    navButtons.classList.toggle('active');
});

// Facility Cards Animation
const facilityCards = document.querySelectorAll('.facility-card');
facilityCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('img').style.transform = 'scale(1.1)';
        card.querySelector('h3').style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('img').style.transform = 'scale(1)';
        card.querySelector('h3').style.transform = 'translateY(0)';
    });
});

// Testimonials Slider
const testimonialsSlider = document.querySelector('.testimonials-slider');
let isDown = false;
let startX;
let scrollLeft;

testimonialsSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    testimonialsSlider.style.cursor = 'grabbing';
    startX = e.pageX - testimonialsSlider.offsetLeft;
    scrollLeft = testimonialsSlider.scrollLeft;
});

testimonialsSlider.addEventListener('mouseleave', () => {
    isDown = false;
    testimonialsSlider.style.cursor = 'grab';
});

testimonialsSlider.addEventListener('mouseup', () => {
    isDown = false;
    testimonialsSlider.style.cursor = 'grab';
});

testimonialsSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonialsSlider.offsetLeft;
    const walk = (x - startX) * 2;
    testimonialsSlider.scrollLeft = scrollLeft - walk;
});

// Form Validation
const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    let isValid = true;
    const inputs = contactForm.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    }
});

// Dynamic Background Video
const videoBackground = document.querySelector('.video-background video');
if (videoBackground) {
    videoBackground.playbackRate = 0.7;
}

// Membership Plan Hover Effects
const planCards = document.querySelectorAll('.plan-card');
planCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.querySelector('ul').style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.querySelector('ul').style.transform = 'translateY(0)';
    });
});

// Trainer Cards Animation
const trainerCards = document.querySelectorAll('.trainer-card');
trainerCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('img').style.transform = 'scale(1.1)';
        card.querySelector('h3').style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('img').style.transform = 'scale(1)';
        card.querySelector('h3').style.transform = 'translateY(0)';
    });
});

// Service Cards Animation
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('i').style.transform = 'scale(1.2) rotate(10deg)';
        card.querySelector('h3').style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('i').style.transform = 'scale(1) rotate(0)';
        card.querySelector('h3').style.transform = 'translateY(0)';
    });
});

// Dynamic Content Loading
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loading animation to elements
    const elements = document.querySelectorAll('.service-card, .plan-card, .trainer-card, .testimonial-card, .facility-card');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.classList.add('fade-in');
    });
});

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .plan-card, .trainer-card, .testimonial-card, .facility-card').forEach(element => {
    observer.observe(element);
});

// Parallax Effect for Sections
const parallaxSections = document.querySelectorAll('.hero, .services, .membership, .trainers');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    parallaxSections.forEach(section => {
        const speed = 0.5;
        const yPos = -(scrollPosition * speed);
        section.style.backgroundPositionY = `${yPos}px`;
    });
}); 