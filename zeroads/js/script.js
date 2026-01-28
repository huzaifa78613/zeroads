// ZeroAds Website JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Contact Form Submit Handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    const submitButton = e.target.querySelector('button[type="submit"]');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Disable submit button
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate form submission (replace with actual endpoint)
    setTimeout(() => {
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for your message! We\'ll get back to you within 24-48 hours.';
        
        // Reset form
        e.target.reset();
        
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 5000);
    }, 1000);
    
    /* 
    // For actual implementation, use this:
    
    fetch('YOUR_FORM_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
        e.target.reset();
    })
    .catch(error => {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or email us directly.';
    })
    .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    });
    */
}

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .step, .stat-box, .faq-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s, transform 0.5s';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize animations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
    animateOnScroll();
}
