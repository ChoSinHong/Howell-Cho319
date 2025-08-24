// Portfolio page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentImageIndex = 0;
    let currentImages = [];

    // Portfolio data
    const portfolioData = {
        'travel-1': {
            src: 'assets/images/portfolio/travel-1.jpg',
            title: 'Travel Photography',
            description: 'Capturing beautiful moments during my travels around the world.'
        },
        'creative-1': {
            src: 'assets/images/portfolio/creative-1.jpg',
            title: 'Creative Photography',
            description: 'Artistic and experimental photography work exploring light and composition.'
        },
        'personal-1': {
            src: 'assets/images/portfolio/personal-1.jpg',
            title: 'Personal Moments',
            description: 'Capturing life\'s precious moments and memories.'
        },
        'design-1': {
            src: 'assets/images/portfolio/design-1.jpg',
            title: 'Digital Design',
            description: 'UI/UX and graphic design projects for various clients.'
        },
        'art-1': {
            src: 'assets/images/portfolio/art-1.jpg',
            title: 'Digital Art',
            description: 'Personal artistic expressions and digital art experiments.'
        },
        'travel-2': {
            src: 'assets/images/portfolio/travel-2.jpg',
            title: 'Adventure Travel',
            description: 'Exploring new places and documenting adventures.'
        },
        'lifestyle-1': {
            src: 'assets/images/portfolio/lifestyle-1.jpg',
            title: 'Lifestyle Photography',
            description: 'Documenting everyday life and experiences.'
        },
        'video-1': {
            src: 'assets/images/portfolio/video-1.jpg',
            title: 'Video Production',
            description: 'Short films and creative video content production.'
        },
        'nature-1': {
            src: 'assets/images/portfolio/nature-1.jpg',
            title: 'Nature Photography',
            description: 'Beautiful landscapes and natural scenes.'
        }
    };

    // Open lightbox function
    window.openLightbox = function(imageId) {
        const imageData = portfolioData[imageId];
        if (imageData) {
            lightboxImage.src = imageData.src;
            lightboxTitle.textContent = imageData.title;
            lightboxDescription.textContent = imageData.description;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Set current image index
            currentImages = Object.keys(portfolioData);
            currentImageIndex = currentImages.indexOf(imageId);
        }
    };

    // Close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Navigate lightbox
    function navigateLightbox(direction) {
        if (direction === 'next') {
            currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        }
        
        const imageId = currentImages[currentImageIndex];
        const imageData = portfolioData[imageId];
        
        lightboxImage.src = imageData.src;
        lightboxTitle.textContent = imageData.title;
        lightboxDescription.textContent = imageData.description;
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => navigateLightbox('prev'));
    lightboxNext.addEventListener('click', () => navigateLightbox('next'));

    // Close lightbox when clicking outside
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (lightbox.style.display === 'flex') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigateLightbox('prev');
                    break;
                case 'ArrowRight':
                    navigateLightbox('next');
                    break;
            }
        }
    });

    // Lazy loading for portfolio images
    const portfolioImages = document.querySelectorAll('.portfolio-image img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    portfolioImages.forEach(img => {
        imageObserver.observe(img);
    });

    // Animate portfolio items on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
            }
        });
    }, {
        threshold: 0.1
    });

    portfolioItems.forEach(item => {
        animateOnScroll.observe(item);
    });
});

// CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
    
    @keyframes slideInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .portfolio-image img {
        transition: opacity 0.3s ease;
        opacity: 0;
    }
    
    .portfolio-image img.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);
