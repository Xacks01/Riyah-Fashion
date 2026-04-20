// Riyah Fashion Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header with Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.padding = '0';
            header.style.boxShadow = 'none';
        }
    });

    // 2. Category Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('#shop-grid .product-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            // Simple animation for filtering
            productCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // 3. Add to Cart Animation / Notification
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartIcon = document.querySelector('.fa-cart-shopping');

    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Visual feedback on button
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
            btn.style.backgroundColor = '#10B981'; // Green
            
            // Shake cart icon
            cartIcon.classList.add('fa-bounce');
            setTimeout(() => cartIcon.classList.remove('fa-bounce'), 1000);

            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
            }, 2000);
            
            // Simple notification (alert replaced with smooth toast later if needed)
            console.log('Product added to cart');
        });
    });

    // 4. Smooth Scrolling for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 5. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            // Change icon to X if active
            const icon = hamburger.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }
});
