const products = [
    // Okunrin (Men's Traditional / Native)
    { id: 'men-4', title: 'Slim Fit Chinos', price: 0.00, image: 'MALE/DSC02786.jpg', category: 'okunrin' },
    { id: 'men-5', title: 'Utility Cargo Pants', price: 0.00, image: 'MALE/DSC02826.jpg', category: 'okunrin' },
    { id: 'men-6', title: 'Oxford Button Down', price: 0.00, image: 'MALE/DSC02848.jpg', category: 'okunrin' },
    { id: 'men-8', title: 'Modern Blazer', price: 0.00, image: 'MALE/DSC02884.jpg', category: 'okunrin' },
    { id: 'men-12', title: 'Linen Summer Shirt', price: 0.00, image: 'MALE/DSC07970.jpg', category: 'okunrin' },
    { id: 'men-13', title: 'Tailored Trousers', price: 0.00, image: 'MALE/DSC07991.jpg', category: 'okunrin' },
    { id: 'men-18', title: 'Corduroy Overshirt', price: 0.00, image: 'MALE/DSC08149.jpg', category: 'okunrin' },

    // Gents (Men's Casual / Western)
    { id: 'men-1', title: "Essential Men's Tee", price: 0.00, image: 'MALE/DSC02569.jpg', category: 'gents' },
    { id: 'men-2', title: 'Classic Polo Shirt', price: 0.00, image: 'MALE/DSC02585.jpg', category: 'gents' },
    { id: 'men-3', title: 'Urban Denim Jacket', price: 0.00, image: 'MALE/DSC02785 1.jpg', category: 'gents' },
    { id: 'men-7', title: 'Quilted Vest', price: 0.00, image: 'MALE/DSC02879.jpg', category: 'gents' },
    { id: 'men-9', title: 'Fleece Hoodie', price: 0.00, image: 'MALE/DSC02886.jpg', category: 'gents' },
    { id: 'men-10', title: 'Bomber Jacket', price: 0.00, image: 'MALE/DSC02934.jpg', category: 'gents' },
    { id: 'men-11', title: 'Graphic Streetwear Tee', price: 0.00, image: 'MALE/DSC02937.jpg', category: 'gents' },
    { id: 'men-14', title: 'Knitted Sweater', price: 0.00, image: 'MALE/DSC08027.jpg', category: 'gents' },

    // Women's Collection
    { id: 'women-1', title: 'Signature Silk Blouse', price: 0.00, image: 'FEMALE/FEMALE/DSC00001.jpg', category: 'women' },
    { id: 'women-2', title: 'Evening Grace Gown', price: 0.00, image: 'FEMALE/FEMALE/DSC03146.jpg', category: 'women' },
    { id: 'women-3', title: 'Summer Breeze Dress', price: 0.00, image: 'FEMALE/FEMALE/DSC03218.jpg', category: 'women' },
    { id: 'women-4', title: 'Chic Wrap Skirt', price: 0.00, image: 'FEMALE/FEMALE/DSC03222.jpg', category: 'women' },
    { id: 'women-5', title: 'Boho Maxi Dress', price: 0.00, image: 'FEMALE/FEMALE/DSC04056.jpg', category: 'women' },
    { id: 'women-6', title: 'Cashmere Cardigan', price: 0.00, image: 'FEMALE/FEMALE/DSC04114.jpg', category: 'women' },
    { id: 'women-7', title: 'Pleated Midi Skirt', price: 0.00, image: 'FEMALE/FEMALE/DSC04128 1.jpg', category: 'women' },
    { id: 'women-9', title: 'High Waist Jeans', price: 0.00, image: 'FEMALE/FEMALE/DSC04470.jpg', category: 'women' },
    { id: 'women-11', title: 'Floral Kimono', price: 0.00, image: 'FEMALE/FEMALE/DSC09671.jpg', category: 'women' },
    { id: 'women-12', title: 'Velvet Slip Dress', price: 0.00, image: 'FEMALE/FEMALE/DSC09775.jpg', category: 'women' },
    { id: 'women-14', title: 'Linen Blazer', price: 0.00, image: 'FEMALE/FEMALE/DSC09892.jpg', category: 'women' },
    { id: 'women-15', title: 'Ruffled Top', price: 0.00, image: 'FEMALE/FEMALE/DSC09915.jpg', category: 'women' },

    // Accessories Collection
    // Men's Accessories
    { id: 'men-15', title: 'Canvas Belt', price: 0.00, image: 'MALE/DSC08065.jpg', category: 'accessories' },
    { id: 'men-16', title: 'Leather Wallet', price: 0.00, image: 'MALE/DSC08109.jpg', category: 'accessories' },
    { id: 'men-17', title: 'Aviator Sunglasses', price: 0.00, image: 'MALE/DSC08113.jpg', category: 'accessories' },
    { id: 'men-18-acc', title: 'Duffel Bag', price: 0.00, image: 'MALE/DSC08149.jpg', category: 'accessories' },
    // Women's Accessories
    { id: 'women-8', title: 'Structured Tote Bag', price: 0.00, image: 'FEMALE/FEMALE/DSC04149.jpg', category: 'accessories' },
    { id: 'women-10', title: 'Gold Hoop Earrings', price: 0.00, image: 'FEMALE/FEMALE/DSC04487.jpg', category: 'accessories' },
    { id: 'women-13', title: 'Silk Neck Scarf', price: 0.00, image: 'FEMALE/FEMALE/DSC09887.jpg', category: 'accessories' },
    { id: 'women-16', title: 'Leather Sandals', price: 0.00, image: 'FEMALE/FEMALE/DSC09933.jpg', category: 'accessories' },
    { id: 'women-17', title: 'Statement Necklace', price: 0.00, image: 'FEMALE/FEMALE/DSC09957.jpg', category: 'accessories' },
    { id: 'women-18', title: 'Canvas Sun Hat', price: 0.00, image: 'FEMALE/FEMALE/DSC09992.jpg', category: 'accessories' },

    // Riyah Kids Collection
    { id: 'kids-1', title: "Boy's Kaftan Set (Ages 2-14)", price: 0.00, image: 'imgs/riyah_kids_boy_kaftan.png', category: 'kids' },
    { id: 'kids-2', title: "Girl's Ankara Dress (Ages 2-14)", price: 0.00, image: 'imgs/riyah_kids_girl_ankara_dress.png', category: 'kids' }
];

window.catalogData = products;
