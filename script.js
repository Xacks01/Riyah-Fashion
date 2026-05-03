// Riyah Fashion Interactivity & Mock Shopify API Setup

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
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            productCards.forEach(card => {
                if(card.classList.contains('hidden-product')) return; // Leave hidden products alone until revealed
                
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

    // 3. Smooth Scrolling for Navigation
    document.querySelectorAll('nav a, .header-icons a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetHref = this.getAttribute('href');
            if (targetHref && targetHref.includes('#')) {
                const targetId = targetHref.split('#')[1];
                if (targetId) {
                    const targetEl = document.getElementById(targetId);
                    if (targetEl) {
                        // If we are on the same page, prevent default and scroll
                        // Otherwise, let the browser handle the jump to index.html#id
                        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
                            e.preventDefault();
                            targetEl.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                }
            }
        });
    });

    // 4. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 5. New Arrivals Disappearance Logic (14 days limit)
    const newArrivalsGrid = document.querySelector('#new-arrivals-grid');
    if (newArrivalsGrid) {
        const newArrivalCards = newArrivalsGrid.querySelectorAll('.product-card');
        let visibleCount = 0;
        
        newArrivalCards.forEach(card => {
            const uploadDateAttr = card.getAttribute('data-upload-date');
            if (uploadDateAttr) {
                const uploadDate = new Date(uploadDateAttr);
                const today = new Date();
                const diffTime = Math.abs(today - uploadDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                
                if (diffDays > 14) {
                    card.style.display = 'none';
                } else {
                    visibleCount++;
                }
            } else {
                visibleCount++;
            }
        });

        if (visibleCount === 0) {
            document.querySelector('#new-arrivals').style.display = 'none';
        }
    }

    // 6. View More Products Logic
    const viewAllBtns = document.querySelectorAll('.view-all');
    viewAllBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Check if it's the shop section view all
            if(btn.closest('#shop')) {
                e.preventDefault();
                const hiddenProducts = document.querySelectorAll('.hidden-product');
                hiddenProducts.forEach(product => {
                    product.style.display = 'block';
                    product.classList.remove('hidden-product'); // Make them permanent part of the grid
                });
                btn.style.display = 'none'; // Hide the button after revealing
            }
        });
    });

    // ==========================================
    // Shopify API Mock & Cart State
    // ==========================================
    let cart = JSON.parse(localStorage.getItem('riyah_cart')) || [];
    
    const saveCart = () => {
        localStorage.setItem('riyah_cart', JSON.stringify(cart));
    };
    
    // UI Elements
    const cartIcon = document.getElementById('cartIcon');
    const cartCount = document.getElementById('cartCount');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');
    const headerCartIcon = document.querySelector('.fa-cart-shopping');

    // Toggle Cart Drawer
    const toggleCart = () => {
        if(cartDrawer && cartOverlay) {
            cartDrawer.classList.toggle('active');
            cartOverlay.classList.toggle('active');
        }
    };

    if(cartIcon) cartIcon.addEventListener('click', toggleCart);
    if(closeCart) closeCart.addEventListener('click', toggleCart);
    if(cartOverlay) cartOverlay.addEventListener('click', toggleCart);

    // Render Cart
    const renderCart = () => {
        if(!cartItemsContainer) return;
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align:center; color:#888; margin-top:20px;">Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                total += item.price * item.quantity;
                count += item.quantity;

                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-controls">
                            <button class="qty-btn minus" data-index="${index}">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-btn plus" data-index="${index}">+</button>
                            <button class="qty-btn remove" data-index="${index}" style="margin-left: auto; color: red;"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
        }

        if(cartTotalEl) cartTotalEl.innerText = `$${total.toFixed(2)}`;
        if(cartCount) cartCount.innerText = count;

        // Attach event listeners for cart item controls
        document.querySelectorAll('.qty-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => updateQuantity(e.target.dataset.index, -1));
        });
        document.querySelectorAll('.qty-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => updateQuantity(e.target.dataset.index, 1));
        });
        document.querySelectorAll('.qty-btn.remove').forEach(btn => {
            const idx = btn.closest('.qty-btn').dataset.index;
            btn.addEventListener('click', () => removeFromCart(idx));
        });
    };

    // Load cart from localStorage (Already initialized above)

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id && item.size === product.size);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        saveCart();
        renderCart();
        
        // Visual feedback
        if(headerCartIcon) {
            headerCartIcon.classList.add('fa-bounce');
            setTimeout(() => headerCartIcon.classList.remove('fa-bounce'), 1000);
        }

        // Open cart drawer automatically when item is added
        if (cartDrawer) {
            cartDrawer.classList.add('active');
            cartOverlay.classList.add('active');
        }
    };

    window.addToCart = addToCart; // Expose to window for product.html

    const updateQuantity = (index, change) => {
        if (cart[index]) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                saveCart();
                renderCart();
            }
        }
    };

    const removeFromCart = (index) => {
        cart.splice(index, 1);
        saveCart();
        renderCart();
    };

    // ==========================================
    // Quick View Modal Logic
    // ==========================================
    
    // Inject Quick View Modal into DOM if it doesn't exist
    if (!document.getElementById('quickViewOverlay')) {
        const quickViewHtml = `
            <div class="quick-view-overlay" id="quickViewOverlay">
                <div class="quick-view-modal">
                    <button class="quick-view-close" id="quickViewClose">&times;</button>
                    <div class="quick-view-img-container">
                        <img src="" alt="Product" id="qvImage">
                    </div>
                    <div class="quick-view-details">
                        <h2 class="quick-view-title" id="qvTitle">Product Title</h2>
                        <div class="quick-view-price" id="qvPrice">$0.00</div>
                        <p class="quick-view-description">Experience effortless style and maximum comfort with this premium piece. Crafted from high-quality materials to ensure everyday confidence.</p>
                        
                        <div class="quick-view-options">
                            <label style="display:block; margin-bottom:5px; font-weight:600;">Size</label>
                            <select class="quick-view-select" id="qvSize">
                                <option value="S">Small</option>
                                <option value="M">Medium</option>
                                <option value="L">Large</option>
                                <option value="XL">X-Large</option>
                            </select>
                        </div>
                        
                        <button class="btn btn-primary" id="qvAddToCartBtn" style="width: 100%;"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', quickViewHtml);
    }

    const quickViewOverlay = document.getElementById('quickViewOverlay');
    const quickViewClose = document.getElementById('quickViewClose');
    const qvAddToCartBtn = document.getElementById('qvAddToCartBtn');
    let currentQuickViewProduct = null;

    const toggleQuickView = () => {
        quickViewOverlay.classList.toggle('active');
    };

    if(quickViewClose) quickViewClose.addEventListener('click', toggleQuickView);
    if(quickViewOverlay) {
        quickViewOverlay.addEventListener('click', (e) => {
            if (e.target === quickViewOverlay) toggleQuickView();
        });
    }

    // Hero Category Navigation
    const heroCategoryLinks = document.querySelectorAll('.hero-category-link');
    heroCategoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetCategory = link.getAttribute('data-target');
            const shopSection = document.getElementById('shop');
            const filterBtn = document.querySelector(`.filter-btn[data-category="${targetCategory}"]`);
            
            if (shopSection && filterBtn) {
                // Scroll to shop
                shopSection.scrollIntoView({ behavior: 'smooth' });
                
                // Wait for scroll, then click the filter
                setTimeout(() => {
                    filterBtn.click();
                }, 800);
            }
        });
    });

    // Attach click listeners to all product cards
    const productCardsElements = document.querySelectorAll('.product-card');
    productCardsElements.forEach(card => {
        // Find product ID from image src as a fallback
        const imgSrc = card.querySelector('img').getAttribute('src');
        const product = window.catalogData.find(p => p.image === imgSrc);
        const productId = product ? product.id : null;

        // Image click leads to product page
        const img = card.querySelector('img');
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                if (productId) {
                    window.location.href = `product.html?id=${productId}`;
                    e.stopPropagation();
                }
            });
        }

        // Info click leads to product page
        const info = card.querySelector('.product-info');
        if (info) {
            info.style.cursor = 'pointer';
            info.addEventListener('click', (e) => {
                if (productId) {
                    window.location.href = `product.html?id=${productId}`;
                    e.stopPropagation();
                }
            });
        }

        // Card click still opens Quick View (if not clicking img/info)
        card.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG' || e.target.closest('.product-info')) return;
            
            e.preventDefault();

            const title = card.querySelector('h3').innerText;
            const priceText = card.querySelector('.price').innerText;
            const price = parseFloat(priceText.replace('$', ''));
            const imgUrl = card.querySelector('img').src;
            const id = productId || title.toLowerCase().replace(/\s+/g, '-');

            currentQuickViewProduct = { id, title, price, image: imgUrl, category: product ? product.category : 'all' };

            // Populate Modal
            document.getElementById('qvImage').src = imgUrl;
            document.getElementById('qvTitle').innerText = title;
            document.getElementById('qvPrice').innerText = priceText;
            
            const qvSize = document.getElementById('qvSize');
            if (qvSize) {
                if (currentQuickViewProduct.category === 'men') {
                    qvSize.innerHTML = '<option value="M">M</option><option value="L">L</option><option value="XL">XL</option><option value="XXL">XXL</option><option value="XXXL">XXXL</option>';
                } else {
                    qvSize.innerHTML = '<option value="8">8</option><option value="10">10</option><option value="12">12</option><option value="14">14</option><option value="16">16</option><option value="18">18</option><option value="20">20</option>';
                }
            }

            toggleQuickView();
        });
    });

    // Add to Cart from Quick View
    if(qvAddToCartBtn) {
        qvAddToCartBtn.addEventListener('click', () => {
            if (currentQuickViewProduct) {
                const selectedSize = document.getElementById('qvSize').value;
                const productToAdd = { ...currentQuickViewProduct, size: selectedSize };
                
                const originalText = qvAddToCartBtn.innerHTML;
                qvAddToCartBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
                qvAddToCartBtn.style.backgroundColor = '#10B981'; // Green
                
                addToCart(productToAdd);
                
                setTimeout(() => {
                    qvAddToCartBtn.innerHTML = originalText;
                    qvAddToCartBtn.style.backgroundColor = '';
                    toggleQuickView();
                    if(cartDrawer && !cartDrawer.classList.contains('active')) {
                        toggleCart();
                    }
                }, 1000);
            }
        });
    }

    // ==========================================
    // Auth Modal Logic
    // ==========================================
    const userIcon = document.getElementById('userIcon');
    const authModal = document.getElementById('authOverlay');
    const closeAuth = document.getElementById('closeAuth');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');

    const toggleAuthModal = () => {
        if(authModal) authModal.classList.toggle('active');
    };

    if(userIcon) userIcon.addEventListener('click', toggleAuthModal);
    if(closeAuth) closeAuth.addEventListener('click', toggleAuthModal);
    
    if(authModal) {
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) toggleAuthModal();
        });
    }

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            tab.classList.add('active');
            const targetFormId = tab.getAttribute('data-tab') + 'Form';
            const targetForm = document.getElementById(targetFormId);
            if(targetForm) targetForm.classList.add('active');
        });
    });

    // ==========================================
    // Checkout Functionality
    // ==========================================
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty. Add some pieces to your collection before checking out!');
                return;
            }

            // Simulate Shopify Flow
            checkoutBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            checkoutBtn.disabled = true;

            setTimeout(() => {
                alert('Proceeding to Secure Checkout. You are being redirected to our Shopify store...');
                // In a real scenario, this would be a Shopify permalink or cart redirect
                // window.location.href = 'https://riyah.myshopify.com/checkout';
                
                // For now, let's just reset and show success
                checkoutBtn.innerHTML = 'Checkout';
                checkoutBtn.disabled = false;
                cart = [];
                saveCart();
                renderCart();
                toggleCart();
                alert('Thank you for shopping with RIYAH! Your order session has been initiated.');
            }, 1500);
        });
    }

    renderCart(); // Initial render to load from localStorage
});
