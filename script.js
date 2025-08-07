// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter');
const emailInput = document.querySelector('.newsletter input');
const subscribeBtn = document.querySelector('.newsletter button');

if (newsletterForm) {
    subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        
        if (validateEmail(email)) {
            // Simulate subscription
            subscribeBtn.textContent = 'Subscribed!';
            subscribeBtn.style.background = '#10B981';
            emailInput.value = '';
            
            setTimeout(() => {
                subscribeBtn.textContent = 'Subscribe';
                subscribeBtn.style.background = '';
            }, 3000);
        } else {
            alert('Please enter a valid email address');
        }
    });
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateOnScroll = document.querySelectorAll('.feature-card, .product-card');
animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Add floating animation to tropical elements
document.addEventListener('DOMContentLoaded', () => {
    const tropicalElements = document.querySelectorAll('.element');
    tropicalElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
    });
});

// Product card hover effects
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
}

// Safari Mobile Viewport Fixes
function isSafariMobile() {
    const ua = navigator.userAgent;
    const isSafari = /Safari/.test(ua) && /Version/.test(ua);
    const isMobile = /iPhone|iPad|iPod/.test(ua) || (/Android/.test(ua) && /Mobile/.test(ua));
    const isNotChrome = !/Chrome/.test(ua) && !/CriOS/.test(ua);
    const isNotFirefox = !/Firefox/.test(ua) && !/FxiOS/.test(ua);
    return isSafari && isMobile && isNotChrome && isNotFirefox;
}

function applySafariMobileFixes() {
    if (!isSafariMobile()) return;
    
    console.log('Safari Mobile detected - applying viewport fixes');
    
    // Create and inject Safari-specific styles
    const safariStyles = document.createElement('style');
    safariStyles.id = 'safari-mobile-fixes';
    safariStyles.innerHTML = `
        /* Safari Mobile Specific Fixes */
        @media screen and (max-width: 768px) {
            /* Force proper viewport behavior */
            html {
                -webkit-text-size-adjust: 100% !important;
                height: 100% !important;
            }
            
            body {
                width: 100vw !important;
                max-width: 100vw !important;
                overflow-x: hidden !important;
                -webkit-font-smoothing: antialiased !important;
            }
            
            .container {
                width: 100% !important;
                max-width: calc(100vw - 40px) !important;
                margin: 0 auto !important;
                padding: 0 20px !important;
                box-sizing: border-box !important;
            }
            
            /* Hero sections adjustments */
            .hero, .about-hero, .products-hero, .contact-hero, .faq-hero, .socials-hero {
                padding: 100px 0 60px !important;
                width: 100vw !important;
                max-width: 100vw !important;
            }
            
            .hero-content, .about-hero-content, .products-hero-content, 
            .contact-hero-content, .faq-hero-content, .socials-hero-content {
                width: 100% !important;
                max-width: calc(100vw - 40px) !important;
                margin: 0 auto !important;
                padding: 0 20px !important;
            }
            
            /* Typography fixes */
            .hero-text h1, .about-hero h1, .products-hero h1, .contact-hero h1 {
                font-size: 2.2rem !important;
                line-height: 1.2 !important;
                margin-bottom: 1rem !important;
            }
            
            .hero-text p, .about-hero p, .products-hero p, .contact-hero p {
                font-size: 1rem !important;
                line-height: 1.5 !important;
            }
            
            /* Section adjustments */
            .story-section, .products-showcase, .contact-section,
            .mission-values, .process-section, .team-section,
            .ingredients-section, .nutrition-section, .buy-section {
                padding: 60px 0 !important;
                width: 100vw !important;
                max-width: 100vw !important;
            }
            
            /* Grid layouts */
            .product-showcase, .story-grid, .contact-grid, .nutrition-grid {
                grid-template-columns: 1fr !important;
                gap: 2rem !important;
                width: 100% !important;
                max-width: calc(100vw - 40px) !important;
                margin: 0 auto !important;
            }
            
            /* Product showcase specific */
            .showcase-content h2 {
                font-size: 1.8rem !important;
                margin-bottom: 1rem !important;
            }
            
            .flavor-description {
                font-size: 0.95rem !important;
                line-height: 1.6 !important;
            }
            
            .can-large {
                width: 140px !important;
                height: 220px !important;
                margin: 0 auto !important;
            }
            
            /* Form elements */
            .contact-form {
                width: 100% !important;
                max-width: 100% !important;
            }
            
            .form-row {
                grid-template-columns: 1fr !important;
                gap: 1rem !important;
            }
            
            .form-group input, .form-group textarea, .form-group select {
                width: 100% !important;
                max-width: 100% !important;
                font-size: 16px !important; /* Prevents zoom */
                box-sizing: border-box !important;
            }
            
            /* Contact items */
            .contact-item {
                padding: 1rem !important;
                margin-bottom: 1rem !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }
            
            /* Ingredients and nutrition */
            .ingredients-grid {
                grid-template-columns: 1fr !important;
                gap: 1.2rem !important;
                width: 100% !important;
                max-width: calc(100vw - 40px) !important;
                margin: 0 auto !important;
            }
            
            .ingredient-card, .nutrition-card {
                padding: 1.2rem !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }
            
            /* Prevent any element from exceeding viewport */
            * {
                max-width: 100vw !important;
                box-sizing: border-box !important;
            }
        }
        
        @media screen and (max-width: 480px) {
            .hero-text h1, .about-hero h1, .products-hero h1, .contact-hero h1 {
                font-size: 1.9rem !important;
            }
            
            .showcase-content h2 {
                font-size: 1.5rem !important;
            }
            
            .can-large {
                width: 120px !important;
                height: 190px !important;
            }
            
            .container {
                padding: 0 15px !important;
                max-width: calc(100vw - 30px) !important;
            }
        }
    `;
    
    document.head.appendChild(safariStyles);
    
    // Dynamic viewport adjustments
    function adjustSafariViewport() {
        if (!isSafariMobile()) return;
        
        // Force viewport meta tag for Safari
        let viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
            viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no';
        }
        
        // Fix container widths dynamically
        const containers = document.querySelectorAll('.container');
        containers.forEach(container => {
            container.style.maxWidth = `${window.innerWidth - 40}px`;
            container.style.width = '100%';
            container.style.margin = '0 auto';
            container.style.padding = '0 20px';
            container.style.boxSizing = 'border-box';
        });
        
        // Fix grid layouts
        const grids = document.querySelectorAll('.product-showcase, .story-grid, .contact-grid, .nutrition-grid');
        grids.forEach(grid => {
            if (window.innerWidth <= 768) {
                grid.style.gridTemplateColumns = '1fr';
                grid.style.maxWidth = `${window.innerWidth - 40}px`;
                grid.style.width = '100%';
                grid.style.margin = '0 auto';
            }
        });
        
        // Fix form elements
        const formElements = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
        formElements.forEach(element => {
            element.style.width = '100%';
            element.style.maxWidth = '100%';
            element.style.boxSizing = 'border-box';
            element.style.fontSize = '16px'; // Prevents zoom on focus
        });
    }
    
    // Apply fixes on load and resize
    adjustSafariViewport();
    window.addEventListener('resize', adjustSafariViewport);
    window.addEventListener('orientationchange', () => {
        setTimeout(adjustSafariViewport, 500); // Delay to ensure proper orientation change
    });
}

// Initialize Safari fixes
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySafariMobileFixes);
} else {
    applySafariMobileFixes();
}
