// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Create mailto link as fallback
                const mailtoLink = `mailto:howell.cho319@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                
                // Try to open email client
                window.location.href = mailtoLink;
                
                // Reset form
                this.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showNotification('Thank you for your message! Your email client should open shortly.', 'success');
            }, 1500);
        });
    }
    
    // Form field animations
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            // Focus and blur effects
            input.addEventListener('focus', function() {
                group.classList.add('focused');
                label.style.transform = 'translateY(-20px) scale(0.8)';
                label.style.color = 'var(--accent-primary)';
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    group.classList.remove('focused');
                    label.style.transform = 'translateY(0) scale(1)';
                    label.style.color = 'var(--text-secondary)';
                }
            });
            
            // Check if field has value on load
            if (input.value) {
                group.classList.add('focused');
                label.style.transform = 'translateY(-20px) scale(0.8)';
                label.style.color = 'var(--accent-primary)';
            }
        }
    });
    
    // Animate contact cards on scroll
    const contactCards = document.querySelectorAll('.contact-card, .collaboration-card, .university-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });
    
    contactCards.forEach(card => {
        card.style.opacity = '0';
        cardObserver.observe(card);
    });
    
    // Contact card hover effects
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Social links hover effects
    const socialLinks = document.querySelectorAll('.contact-btn, .social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Animate collaboration skills on hover
    const collaborationSkills = document.querySelectorAll('.collaboration-skills li');
    
    collaborationSkills.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.color = 'var(--accent-primary)';
        });
        
        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = 'var(--text-primary)';
        });
    });
});

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .form-group {
        position: relative;
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;
    }
    
    .form-group label {
        position: absolute;
        top: 15px;
        left: 15px;
        transition: all 0.3s ease;
        pointer-events: none;
        background: var(--card-bg-primary);
        padding: 0 5px;
    }
    
    .form-group.focused label,
    .form-group input:focus + label,
    .form-group select:focus + label,
    .form-group textarea:focus + label {
        transform: translateY(-20px) scale(0.8);
        color: var(--accent-primary);
    }
    
    .contact-card, .collaboration-card, .university-card {
        transition: all 0.3s ease;
    }
    
    .contact-btn, .social-link {
        transition: all 0.2s ease;
    }
    
    .collaboration-skills li {
        transition: all 0.2s ease;
        cursor: pointer;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
    }
    
    .notification-close:hover {
        opacity: 0.7;
    }
`;
document.head.appendChild(style);
