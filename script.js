/**
 * ============================================================
 * NADIR HUSSAIN — PROFESSIONAL PORTFOLIO SCRIPTS
 * Lab 01 Full Stack Web Development | Air University
 * ============================================================
 */

'use strict';

/* ===== DOM ELEMENT REFERENCES ===== */
const html = document.documentElement;
const navbar = document.getElementById('mainNavbar');
const scrollProgress = document.getElementById('scroll-progress');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const typingElement = document.getElementById('typing-text');
const navLinks = document.querySelectorAll('.nav-link');
const revealElements = document.querySelectorAll('.reveal');

/* ===== TYPING EFFECT CONFIG ===== */
const typingPhrases = [
    'Building responsive web applications...',
    'Developing mobile apps with Flutter...',
    'Designing relational databases...',
    'Exploring AWS cloud computing...',
    'UN Millennium Fellow — Class of 2025'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

/**
 * Typing effect for hero section tagline
 */
function typeEffect() {
    if (!typingElement) return;

    const currentPhrase = typingPhrases[phraseIndex];

    if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
    } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        typingSpeed = 500; // Pause before next phrase
    }

    setTimeout(typeEffect, typingSpeed);
}

/* ===== DARK / LIGHT MODE TOGGLE ===== */

/**
 * Apply theme and update icon
 * @param {string} theme - 'light' or 'dark'
 */
function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

/**
 * Toggle between dark and light mode
 */
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

/**
 * Initialize theme from localStorage or system preference
 */
function initTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(theme);
}

/* ===== SCROLL PROGRESS BAR ===== */

/**
 * Update scroll progress bar width based on scroll position
 */
function updateScrollProgress() {
    if (!scrollProgress) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    scrollProgress.style.width = `${progress}%`;
    scrollProgress.setAttribute('aria-valuenow', Math.round(progress));
}

/* ===== ACTIVE NAV LINK HIGHLIGHT ===== */

/**
 * Highlight the nav link corresponding to the current scroll section
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section, header');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/* ===== NAVBAR SCROLL EFFECT ===== */

/**
 * Add shadow to navbar on scroll
 */
function updateNavbar() {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

/* ===== BACK TO TOP BUTTON ===== */

/**
 * Show/hide back to top button based on scroll position
 */
function updateBackToTop() {
    if (!backToTopBtn) return;

    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

/**
 * Smooth scroll to top of page
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== SCROLL REVEAL (FADE-IN ON SCROLL) ===== */

/**
 * Intersection Observer for fade-in animations on scroll
 */
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
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

    revealElements.forEach(el => observer.observe(el));
}

/* ===== CONTACT FORM VALIDATION ===== */

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show validation error on a form field
 * @param {HTMLElement} field
 * @param {boolean} isValid
 */
function setFieldValidity(field, isValid) {
    if (isValid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
    }
}

/**
 * Validate entire contact form
 * @returns {boolean}
 */
function validateForm() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    let isFormValid = true;

    // Name validation
    const nameValid = nameField.value.trim().length >= 2;
    setFieldValidity(nameField, nameValid);
    if (!nameValid) isFormValid = false;

    // Email validation
    const emailValid = isValidEmail(emailField.value.trim());
    setFieldValidity(emailField, emailValid);
    if (!emailValid) isFormValid = false;

    // Message validation (minimum 10 characters)
    const messageValid = messageField.value.trim().length >= 10;
    setFieldValidity(messageField, messageValid);
    if (!messageValid) isFormValid = false;

    return isFormValid;
}

/**
 * Handle contact form submission
 * @param {Event} e
 */
function handleFormSubmit(e) {
    e.preventDefault();

    const formSuccess = document.getElementById('form-success');

    if (validateForm()) {
        // Show success message (in production, send to backend/email service)
        if (formSuccess) {
            formSuccess.classList.remove('d-none');
        }

        contactForm.reset();

        // Remove validation classes after reset
        contactForm.querySelectorAll('.form-control').forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
            if (formSuccess) {
                formSuccess.classList.add('d-none');
            }
        }, 5000);
    }
}

/* ===== SMOOTH SCROLL FOR NAV LINKS ===== */

/**
 * Enable smooth scrolling when clicking nav links
 */
function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });

                    // Close mobile navbar if open
                    const navbarCollapse = document.getElementById('navbarNav');
                    if (navbarCollapse.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                        if (bsCollapse) bsCollapse.hide();
                    }
                }
            }
        });
    });
}

/* ===== COMBINED SCROLL HANDLER ===== */

/**
 * Handle all scroll-based updates in one listener (performance)
 */
function handleScroll() {
    updateScrollProgress();
    updateActiveNavLink();
    updateNavbar();
    updateBackToTop();
}

/* ===== INITIALIZATION ===== */

document.addEventListener('DOMContentLoaded', () => {
    // Theme
    initTheme();
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Typing effect
    setTimeout(typeEffect, 1000);

    // Scroll reveal
    initScrollReveal();

    // Smooth scroll
    initSmoothScroll();

    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);

        // Real-time validation on blur
        contactForm.querySelectorAll('.form-control').forEach(field => {
            field.addEventListener('blur', () => {
                if (field.value.trim()) {
                    validateForm();
                }
            });
        });
    }

    // Back to top
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }

    // Scroll events (throttled via requestAnimationFrame)
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial scroll state
    handleScroll();
});
