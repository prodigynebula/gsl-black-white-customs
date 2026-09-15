// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scrolling for Navigation Links =====
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

// ===== Form Submission =====
const vrfsForm = document.getElementById('vrfsForm');
const contactForm = document.getElementById('contactForm');

if (vrfsForm) {
    vrfsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const vin = this.querySelector('input[placeholder="Vehicle VIN"]').value;
        const name = this.querySelector('input[placeholder="Full Name"]').value;
        const email = this.querySelector('input[placeholder="Email Address"]').value;
        const phone = this.querySelector('input[placeholder="Phone Number"]').value;
        const serviceType = this.querySelector('select').value;
        
        // Create form data
        const formData = {
            vin: vin,
            name: name,
            email: email,
            phone: phone,
            serviceType: serviceType,
            timestamp: new Date().toISOString()
        };
        
        // Log to console (in production, this would be sent to a server)
        console.log('VRFS Application Submitted:', formData);
        
        // Show success message
        alert(`Thank you, ${name}! Your VRFS application has been submitted. We'll contact you at ${email} soon.`);
        
        // Reset form
        this.reset();
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const subject = this.querySelector('input[placeholder="Subject"]').value;
        const message = this.querySelector('textarea').value;
        
        // Create form data
        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: new Date().toISOString()
        };
        
        // Log to console (in production, this would be sent to a server)
        console.log('Contact Form Submitted:', formData);
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you shortly.`);
        
        // Reset form
        this.reset();
    });
}

// ===== CTA Button Click =====
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        const vrfsSection = document.getElementById('vrfs');
        if (vrfsSection) {
            vrfsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ===== Scroll Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards and portfolio items
document.querySelectorAll('.service-card, .portfolio-item').forEach(el => {
    observer.observe(el);
});

// ===== Active Nav Link =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Add Animation CSS Classes =====
const style = document.createElement('style');
style.textContent = `
    .service-card, .portfolio-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.active {
        border-bottom-color: var(--primary-white);
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// ===== Console Message =====
console.log('%cGSL Black & White Customs - VRFS System', 'font-size: 20px; font-weight: bold; color: #000;');
console.log('%cVehicle Registration & Financing System', 'font-size: 14px; color: #666;');