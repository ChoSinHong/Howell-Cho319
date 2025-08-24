/**
 * HowellCho Profile Website JavaScript
 * Company: Professional Portfolio
 * Author: Howell Cho
 * Version: 1.0
 * Description: Main JavaScript functionality for portfolio website
 */

'use strict';

// ===== CONFIGURATION =====
const CONFIG = {
    animationDuration: 300,
    scrollOffset: 150,
    debounceDelay: 100,
    breakpoints: {
        mobile: 480,
        tablet: 768,
        desktop: 1024
    }
};

// ===== UTILITY FUNCTIONS =====
const Utils = {
    /**
     * Debounce function to limit function calls
     * @param {Function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {Function} Debounced function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle function to limit function calls
     * @param {Function} func - Function to throttle
     * @param {number} limit - Time limit in milliseconds
     * @returns {Function} Throttled function
     */
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Check if element is in viewport
     * @param {Element} element - Element to check
     * @returns {boolean} True if element is in viewport
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    /**
     * Get current screen size category
     * @returns {string} Screen size category
     */
    getScreenSize() {
        const width = window.innerWidth;
        if (width <= CONFIG.breakpoints.mobile) return 'mobile';
        if (width <= CONFIG.breakpoints.tablet) return 'tablet';
        return 'desktop';
    }
};

// ===== NAVIGATION MODULE =====
const Navigation = {
    init() {
        this.bindEvents();
        this.updateActiveSection();
    },

    bindEvents() {
        // Smooth scrolling for navigation links (only for anchor links)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
        });

        // Update active navigation based on current page
        this.updateActiveNavigation();

        // Handle window resize
        window.addEventListener('resize', Utils.debounce(this.handleResize.bind(this), CONFIG.debounceDelay));
    },

    /**
     * Handle smooth scrolling for anchor links
     * @param {Event} e - Click event
     */
    handleSmoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - CONFIG.scrollOffset;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Update URL without triggering scroll
            if (history.pushState) {
                history.pushState(null, null, targetId);
            }
        }
    },

    /**
     * Update active navigation item based on current page
     */
    updateActiveNavigation() {
        const navLinks = document.querySelectorAll('.nav-menu a');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href');

            // Handle different page matching scenarios
            if (linkPage === currentPage ||
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage === 'index.html' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    },

    /**
     * Handle window resize events
     */
    handleResize() {
        const screenSize = Utils.getScreenSize();
        document.body.setAttribute('data-screen-size', screenSize);
        
        // Update navigation after resize
        setTimeout(() => {
            this.updateActiveNavigation();
        }, 100);
    }
};

// ===== ANIMATIONS MODULE =====
const Animations = {
    init() {
        this.observeElements();
        this.initializeCounters();
    },

    /**
     * Set up intersection observer for scroll animations
     */
    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Trigger specific animations based on element type
                    if (entry.target.classList.contains('skill-item')) {
                        this.animateSkillItem(entry.target);
                    }
                    
                    if (entry.target.classList.contains('project-card')) {
                        this.animateProjectCard(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.card, .skill-item, .project-card').forEach(el => {
            observer.observe(el);
        });
    },

    /**
     * Animate skill items with stagger effect
     * @param {Element} skillItem - Skill item element
     */
    animateSkillItem(skillItem) {
        const icon = skillItem.querySelector('i');
        if (icon) {
            setTimeout(() => {
                icon.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 200);
            }, 100);
        }
    },

    /**
     * Animate project cards
     * @param {Element} projectCard - Project card element
     */
    animateProjectCard(projectCard) {
        projectCard.style.transform = 'translateX(-20px)';
        projectCard.style.opacity = '0';
        
        setTimeout(() => {
            projectCard.style.transition = 'all 0.5s ease';
            projectCard.style.transform = 'translateX(0)';
            projectCard.style.opacity = '1';
        }, 100);
    },

    /**
     * Initialize any counter animations
     */
    initializeCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            this.animateCounter(counter, target);
        });
    },

    /**
     * Animate counter from 0 to target value
     * @param {Element} element - Counter element
     * @param {number} target - Target number
     */
    animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }
};

// ===== PERFORMANCE MODULE =====
const Performance = {
    init() {
        this.lazyLoadImages();
        this.preloadCriticalResources();
    },

    /**
     * Implement lazy loading for images
     */
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    },

    /**
     * Preload critical resources
     */
    preloadCriticalResources() {
        // Preload critical fonts
        const fontLinks = [
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
        ];

        fontLinks.forEach(href => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = href;
            document.head.appendChild(link);
        });
    }
};

// ===== ERROR HANDLING =====
const ErrorHandler = {
    init() {
        window.addEventListener('error', this.handleError.bind(this));
        window.addEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
    },

    /**
     * Handle JavaScript errors
     * @param {ErrorEvent} event - Error event
     */
    handleError(event) {
        console.error('JavaScript Error:', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
            error: event.error
        });
        
        // In production, you might want to send this to an error tracking service
        // this.reportError(event);
    },

    /**
     * Handle unhandled promise rejections
     * @param {PromiseRejectionEvent} event - Promise rejection event
     */
    handlePromiseRejection(event) {
        console.error('Unhandled Promise Rejection:', event.reason);
        
        // Prevent the default browser behavior
        event.preventDefault();
    }
};

// ===== PROJECTS CAROUSEL MODULE =====
const ProjectsCarousel = {
    init() {
        this.currentIndex = 0;
        this.projects = document.querySelectorAll('.project-item');
        this.indicators = document.querySelectorAll('.indicator');

        if (this.projects.length > 0) {
            this.startAutoSlide();
            this.bindEvents();
        }
    },

    bindEvents() {
        // Click events for indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

        // Pause on hover
        const carousel = document.querySelector('.projects-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoSlide());
            carousel.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    },

    goToSlide(index) {
        // Remove active class from current items
        this.projects[this.currentIndex].classList.remove('active');
        this.indicators[this.currentIndex].classList.remove('active');

        // Update current index
        this.currentIndex = index;

        // Add active class to new items
        this.projects[this.currentIndex].classList.add('active');
        this.indicators[this.currentIndex].classList.add('active');
    },

    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.projects.length;
        this.goToSlide(nextIndex);
    },

    startAutoSlide() {
        this.pauseAutoSlide(); // Clear any existing interval
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 4000); // Change slide every 4 seconds
    },

    pauseAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    }
};

// ===== MAIN APPLICATION =====
const App = {
    /**
     * Initialize the application
     */
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', this.start.bind(this));
        } else {
            this.start();
        }
    },

    /**
     * Start the application
     */
    start() {
        try {
            // Initialize all modules
            Navigation.init();
            Animations.init();
            Performance.init();
            ErrorHandler.init();
            ProjectsCarousel.init();

            // Set initial screen size
            document.body.setAttribute('data-screen-size', Utils.getScreenSize());

            // Add loaded class to body
            document.body.classList.add('loaded');

            console.log('HowellCho Portfolio Website initialized successfully');

        } catch (error) {
            console.error('Failed to initialize application:', error);
        }
    }
};

// ===== INITIALIZE APPLICATION =====
App.init();
