const products = [
    // Men's Collection
    { id: 'men-1', title: 'Urban Comfort Tee', price: 35.00, image: 'MALE/DSC02569.jpg', category: 'men' },
    { id: 'men-2', title: 'Classic Polo Shirt', price: 45.00, image: 'MALE/DSC02585.jpg', category: 'men' },
    { id: 'men-3', title: 'Modern Fit Suit', price: 150.00, image: 'MALE/DSC02785 1.jpg', category: 'men' },
    { id: 'men-4', title: 'Street Edge Jacket', price: 85.00, image: 'MALE/DSC02786.jpg', category: 'men' },
    { id: 'men-5', title: 'Minimalist Hoodie', price: 55.00, image: 'MALE/DSC02826.jpg', category: 'men' },
    { id: 'men-6', title: 'Smart Casual Trousers', price: 65.00, image: 'MALE/DSC02848.jpg', category: 'men' },
    { id: 'men-7', title: 'Relaxed Denim Shirt', price: 50.00, image: 'MALE/DSC02879.jpg', category: 'men' },
    { id: 'men-8', title: 'Essential White Tee', price: 25.00, image: 'MALE/DSC02884.jpg', category: 'men' },
    { id: 'men-9', title: 'Autumn Knit Sweater', price: 70.00, image: 'MALE/DSC02886.jpg', category: 'men' },
    { id: 'men-10', title: 'Weekend Cargo Pants', price: 60.00, image: 'MALE/DSC02934.jpg', category: 'men' },
    { id: 'men-11', title: 'Signature Oxford Shirt', price: 55.00, image: 'MALE/DSC02937.jpg', category: 'men' },
    { id: 'men-12', title: 'Active Performance Shorts', price: 40.00, image: 'MALE/DSC07970.jpg', category: 'men' },
    { id: 'men-13', title: 'Premium Cotton Polo', price: 48.00, image: 'MALE/DSC07991.jpg', category: 'men' },
    { id: 'men-14', title: 'Summer Linen Shirt', price: 58.00, image: 'MALE/DSC08027.jpg', category: 'men' },
    { id: 'men-15', title: 'Technical Windbreaker', price: 95.00, image: 'MALE/DSC08065.jpg', category: 'men' },
    { id: 'men-16', title: 'Lounge Jogger Set', price: 75.00, image: 'MALE/DSC08109.jpg', category: 'men' },
    { id: 'men-17', title: 'V-Neck Basic Tee', price: 22.00, image: 'MALE/DSC08113.jpg', category: 'men' },
    { id: 'men-18', title: 'Corduroy Overshirt', price: 68.00, image: 'MALE/DSC08149.jpg', category: 'men' },

    // Women's Collection
    { id: 'women-1', title: 'Elegant Floral Dress', price: 85.00, image: 'FEMALE/FEMALE/DSC03146.jpg', category: 'women' },
    { id: 'women-2', title: 'Chic Evening Gown', price: 120.00, image: 'FEMALE/FEMALE/DSC03218.jpg', category: 'women' },
    { id: 'women-3', title: 'Urban Nomad Set', price: 95.00, image: 'FEMALE/FEMALE/DSC03222.jpg', category: 'women' },
    { id: 'women-4', title: 'Minimalist Silk Blouse', price: 75.00, image: 'FEMALE/FEMALE/DSC04056.jpg', category: 'women' },
    { id: 'women-5', title: 'Summer Breeze Skirt', price: 55.00, image: 'FEMALE/FEMALE/DSC03233.jpg', category: 'women' },
    { id: 'women-6', title: 'Professional Tailored Blazer', price: 110.00, image: 'FEMALE/FEMALE/DSC03248.jpg', category: 'women' },
    { id: 'women-7', title: 'Boho Spirit Tunic', price: 65.00, image: 'FEMALE/FEMALE/DSC03282.jpg', category: 'women' },
    { id: 'women-8', title: 'Classic High-Waist Jeans', price: 70.00, image: 'FEMALE/FEMALE/DSC03328.jpg', category: 'women' },
    { id: 'women-9', title: 'Sophisticated Wrap Dress', price: 90.00, image: 'FEMALE/FEMALE/DSC03377.jpg', category: 'women' },
    { id: 'women-10', title: 'Casual Weekend Knit', price: 60.00, image: 'FEMALE/FEMALE/DSC03399.jpg', category: 'women' },
    { id: 'women-11', title: 'Modern Sculpture Top', price: 45.00, image: 'FEMALE/FEMALE/DSC03417.jpg', category: 'women' },
    { id: 'women-12', title: 'Graceful Pleated Skirt', price: 68.00, image: 'FEMALE/FEMALE/DSC03444.jpg', category: 'women' },
    { id: 'women-13', title: 'Radiant Sun Dress', price: 78.00, image: 'FEMALE/FEMALE/DSC03473.jpg', category: 'women' },
    { id: 'women-14', title: 'Timeless Trench Coat', price: 140.00, image: 'FEMALE/FEMALE/DSC03517.jpg', category: 'women' },
    { id: 'women-15', title: 'Azure Blue Blouse', price: 52.00, image: 'FEMALE/FEMALE/DSC03544.jpg', category: 'women' },
    { id: 'women-16', title: 'Velvet Dream Nightwear', price: 85.00, image: 'FEMALE/FEMALE/DSC03569.jpg', category: 'women' },
    { id: 'women-17', title: 'Ecru Linen Trousers', price: 72.00, image: 'FEMALE/FEMALE/DSC03585.jpg', category: 'women' },
    { id: 'women-18', title: 'Petal Soft Cardigan', price: 58.00, image: 'FEMALE/FEMALE/DSC03598.jpg', category: 'women' },

];

window.catalogData = products;
