// script.js - UPDATED VERSION

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Animate hamburger to X
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');

            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Typing Effect
    const typingText = document.getElementById('typingText');
    const words = ['Innovative Solutions', 'Cutting-Edge Technology', 'Impactful Products', 'Digital Transformation'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let erasingDelay = 50;
    let newWordDelay = 1500;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (!isDeleting && charIndex < currentWord.length) {
            typingText.textContent += currentWord.charAt(charIndex);
            charIndex++;
            typingDelay = 100;
        } else if (isDeleting && charIndex > 0) {
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = erasingDelay;
        } else if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingDelay = newWordDelay;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingDelay = 500;
        }

        setTimeout(typeEffect, typingDelay);
    }

    // Start typing effect
    if (typingText) {
        setTimeout(typeEffect, 1000);
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Marquee hover pause/resume is handled via CSS

    // Scroll animations
    const fadeElements = document.querySelectorAll('.product-card, .marquee-item, .testimonial-blog-card, .team-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
});