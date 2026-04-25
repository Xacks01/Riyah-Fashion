import re

with open('index.html', 'r') as f:
    content = f.read()

# 1. Update Navigation Links
content = content.replace('<li><a href="#">Contact</a></li>', '<li><a href="#contact-footer">Contact</a></li>')

# 2. Update Footer Contact ID
content = content.replace('<div class="footer-col">\n                    <h4>Contact Us</h4>', '<div class="footer-col" id="contact-footer">\n                    <h4>Contact Us</h4>')

# 3. Update Header Icons
header_icons_old = """            <div class="header-icons">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-user"></i>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>"""

header_icons_new = """            <div class="header-icons">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-user" id="userIcon" style="cursor: pointer;"></i>
                <div class="cart-icon-container" id="cartIcon" style="position: relative; cursor: pointer;">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <span class="cart-count" id="cartCount">0</span>
                </div>
            </div>"""
content = content.replace(header_icons_old, header_icons_new)

# 4. Add data attributes to products
# We need to find each product card, extract title, price, image and then update the button
# We'll use regex to find each card
product_card_pattern = r'(<div class="product-card"[^>]*>.*?<img src="([^"]+)".*?<h3>(.*?)</h3>.*?<p class="price">\$([\d\.]+)</p>.*?</div>)'

# Let's iterate and replace buttons
def replace_button(match):
    full_card = match.group(1)
    img_src = match.group(2)
    title = match.group(3)
    price = match.group(4)
    # create a hash or id based on title
    product_id = title.lower().replace(' ', '-').replace("'", "")
    
    # replace the button in full_card
    old_btn = '<button class="add-to-cart-btn"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>'
    new_btn = f'<button class="add-to-cart-btn" data-id="{product_id}" data-title="{title}" data-price="{price}" data-image="{img_src}"><i class="fa-solid fa-cart-plus"></i> Add to cart</button>'
    
    return full_card.replace(old_btn, new_btn)

content = re.sub(product_card_pattern, replace_button, content, flags=re.DOTALL)

# 5. Add Modals before closing body
modals_html = """
    <!-- Cart Drawer -->
    <div class="cart-overlay" id="cartOverlay"></div>
    <div class="cart-drawer" id="cartDrawer">
        <div class="cart-header">
            <h2>Your Cart</h2>
            <button class="close-cart" id="closeCart">&times;</button>
        </div>
        <div class="cart-items" id="cartItems">
            <!-- Cart items will be rendered here -->
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Subtotal</span>
                <span id="cartTotal">$0.00</span>
            </div>
            <button class="btn btn-primary checkout-btn" style="width: 100%;">Checkout</button>
        </div>
    </div>

    <!-- Auth Modal -->
    <div class="auth-overlay" id="authOverlay">
        <div class="auth-modal">
            <button class="close-auth" id="closeAuth">&times;</button>
            <div class="auth-tabs">
                <button class="auth-tab active" data-tab="login">Login</button>
                <button class="auth-tab" data-tab="signup">Sign Up</button>
            </div>
            
            <form id="loginForm" class="auth-form active">
                <h3>Welcome Back</h3>
                <input type="email" placeholder="Email Address" required>
                <input type="password" placeholder="Password" required>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Login</button>
                <a href="#" class="forgot-password" style="display: block; text-align: center; margin-top: 15px; font-size: 0.9rem; color: var(--text-muted);">Forgot Password?</a>
            </form>

            <form id="signupForm" class="auth-form" style="display: none;">
                <h3>Create Account</h3>
                <input type="text" placeholder="Full Name" required>
                <input type="email" placeholder="Email Address" required>
                <input type="password" placeholder="Password" required>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Sign Up</button>
            </form>
        </div>
    </div>
"""

content = content.replace('<script src="script.js"></script>', modals_html + '\n    <script src="script.js"></script>')

with open('index.html', 'w') as f:
    f.write(content)

print("index.html modified successfully")
