
const menuItems = [
    // Appetizers
    {
        id: '1',
        name: 'Paneer Tikka',
        description: 'Marinated cottage cheese cubes grilled to perfection, served with mint chutney',
        price: 180,
        image: 'src/assets/Paneer Tikka.jpg',
        category: 'appetizers',
        dietary: ['vegetarian']
    },
    {
        id: '2',
        name: 'Tandoori Prawns',
        description: 'Juicy prawns marinated in Indian spices and cooked in a clay oven',
        price: 240,
        image: 'src/assets/Tandoori Prawns.jpg',
        category: 'appetizers'
    },
    {
        id: '3',
        name: 'Aloo Tikki Chaat',
        description: 'Crispy potato patties topped with yogurt, chutneys, and spices',
        price: 160,
        image: 'src/assets/Aloo Tikki Chaat.jpg',
        category: 'appetizers',
        dietary: ['vegetarian']
    },

    // Main Courses
    {
        id: '4',
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken pieces, served with naan',
        price: 650,
        image: 'src/assets/Butter Chicken.jpg',
        category: 'mains'
    },
    {
        id: '5',
        name: 'Hyderabadi Biryani',
        description: 'Fragrant basmati rice layered with spiced chicken and caramelized onions',
        price: 420,
        image: 'src/assets/Hyderabadi Biryani.jpg',
        category: 'mains'
    },
    {
        id: '6',
        name: 'Mutton Rogan Josh',
        description: 'Kashmiri-style slow-cooked mutton curry with rich aromatic spices',
        price: 380,
        image: 'src/assets/Mutton Rogan Josh.jpg',
        category: 'mains'
    },
    {
        id: '7',
        name: 'Paneer Butter Masala',
        description: 'Cottage cheese cubes in a rich buttery tomato gravy',
        price: 480,
        image: 'src/assets/Paneer Butter Masala.jpg',
        category: 'mains',
        dietary: ['vegetarian']
    },

    // Desserts
    {
        id: '8',
        name: 'Gulab Jamun',
        description: 'Soft khoya dumplings soaked in fragrant sugar syrup',
        price: 140,
        image: 'src/assets/Gulab Jamun.jpg',
        category: 'desserts',
        dietary: ['vegetarian']
    },
    {
        id: '9',
        name: 'Rasmalai',
        description: 'Spongy paneer discs soaked in sweet saffron milk',
        price: 120,
        image: 'src/assets/Rasmalai.jpg',
        category: 'desserts',
        dietary: ['vegetarian']
    },
    {
        id: '10',
        name: 'Kesar Pista Kulfi',
        description: 'Traditional Indian frozen dessert flavored with saffron and pistachios',
        price: 130,
        image: 'src/assets/Kesar Pista Kulfi.jpg',
        category: 'desserts',
        dietary: ['vegetarian']
    },

    // Beverages
    {
        id: '11',
        name: 'Masala Chai',
        description: 'Spiced Indian tea brewed with milk, ginger, and cardamom',
        price: 60,
        image: 'src/assets/Masala Chai.jpg',
        category: 'beverages'
    },
    {
        id: '12',
        name: 'Mango Lassi',
        description: 'Refreshing yogurt-based drink blended with ripe mango pulp',
        price: 80,
        image: 'src/assets/Mango Lassi.jpg',
        category: 'beverages'
    },
    {
        id: '13',
        name: 'Filter Coffee',
        description: 'Strong South Indian coffee brewed with fresh ground beans',
        price: 70,
        image: 'src/assets/FilterCoffee.jpg',
        category: 'beverages'
    }
];


// Global variables
let currentFilter = 'all';
let userRating = 0;

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const reviewForm = document.getElementById('reviewForm');
const userRatingElement = document.getElementById('userRating');
const toast = document.getElementById('toast');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems();
    setupEventListeners();
    setupInteractiveRating();
});

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            setActiveFilter(category);
            filterMenuItems(category);
        });
    });

    // Review form submission
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleReviewSubmission();
    });
}

// Set active filter button
function setActiveFilter(category) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    currentFilter = category;
}

// Filter menu items
function filterMenuItems(category) {
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    renderMenuItems(filteredItems);
}

// Render menu items
function renderMenuItems(items = menuItems) {
    menuGrid.innerHTML = '';
    
    items.forEach(item => {
        const menuCard = createMenuCard(item);
        menuGrid.appendChild(menuCard);
    });
}

// Create menu card element
function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.setAttribute('data-category', item.category);
    
    const dietaryTags = item.dietary ? 
        item.dietary.map(diet => `<span class="tag">${diet}</span>`).join('') : '';
    
    card.innerHTML = `
        <div class="menu-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="menu-content">
            <div class="menu-header">
                <h3 class="menu-name">${item.name}</h3>
                <span class="menu-price">$${item.price}</span>
            </div>
            <p class="menu-description">${item.description}</p>
            ${dietaryTags ? `<div class="menu-tags">${dietaryTags}</div>` : ''}
        </div>
    `;
    
    return card;
}

// Setup interactive rating system
function setupInteractiveRating() {
    const stars = userRatingElement.querySelectorAll('i');
    
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', function() {
            highlightStars(index + 1);
        });
        
        star.addEventListener('click', function() {
            userRating = index + 1;
            setStarRating(userRating);
        });
    });
    
    userRatingElement.addEventListener('mouseleave', function() {
        setStarRating(userRating);
    });
}

// Highlight stars on hover
function highlightStars(rating) {
    const stars = userRatingElement.querySelectorAll('i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.className = 'fas fa-star';
            star.classList.add('active');
        } else {
            star.className = 'far fa-star';
            star.classList.remove('active');
        }
    });
}

// Set star rating permanently
function setStarRating(rating) {
    const stars = userRatingElement.querySelectorAll('i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.className = 'fas fa-star';
            star.classList.add('active');
        } else {
            star.className = 'far fa-star';
            star.classList.remove('active');
        }
    });
}

// Handle review form submission
function handleReviewSubmission() {
    const name = document.getElementById('reviewerName').value.trim();
    const comment = document.getElementById('reviewComment').value.trim();
    
    // Validation
    if (!userRating || !name || !comment) {
        showToast('Please fill in all fields', 'Rating, name, and comment are required.', 'error');
        return;
    }
    
    // Create new review object
    const newReview = {
        id: Date.now().toString(),
        customerName: name,
        rating: userRating,
        comment: comment,
        date: new Date().toISOString().split('T')[0]
    };
    
    // Add review to page (in a real app, this would be sent to a server)
    addReviewToPage(newReview);
    
    // Show success message
    showToast('Review submitted!', 'Thank you for your feedback. Your review will be published shortly.', 'success');
    
    // Reset form
    resetReviewForm();
}

// Add new review to the page
function addReviewToPage(review) {
    const reviewsGrid = document.querySelector('.reviews-grid');
    const reviewCard = createReviewCard(review);
    reviewsGrid.insertBefore(reviewCard, reviewsGrid.firstChild);
    
    // Update rating summary (simplified)
    updateRatingSummary();
}

// Create review card element
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    
    const starIcons = Array.from({length: 5}, (_, index) => {
        const starClass = index < review.rating ? 'fas fa-star' : 'far fa-star';
        return `<i class="${starClass}"></i>`;
    }).join('');
    
    card.innerHTML = `
        <div class="review-header">
            <div class="reviewer-info">
                <h4 class="reviewer-name">${review.customerName}</h4>
                <p class="review-date">${formatDate(review.date)}</p>
            </div>
            <div class="star-rating" data-rating="${review.rating}">
                ${starIcons}
                <span class="rating-value">${review.rating.toFixed(1)}</span>
            </div>
        </div>
        <p class="review-comment">${review.comment}</p>
    `;
    
    return card;
}

// Update rating summary
function updateRatingSummary() {
    const allReviews = document.querySelectorAll('.review-card');
    const totalReviews = allReviews.length;
    
    let totalRating = 0;
    allReviews.forEach(card => {
        const rating = parseFloat(card.querySelector('.star-rating').getAttribute('data-rating'));
        totalRating += rating;
    });
    
    const averageRating = totalRating / totalReviews;
    
    const ratingScore = document.querySelector('.rating-score');
    const ratingCount = document.querySelector('.rating-count');
    
    if (ratingScore && ratingCount) {
        ratingScore.textContent = averageRating.toFixed(1);
        ratingCount.textContent = `(${totalReviews} reviews)`;
    }
}

// Reset review form
function resetReviewForm() {
    document.getElementById('reviewerName').value = '';
    document.getElementById('reviewComment').value = '';
    userRating = 0;
    setStarRating(0);
}

// Show toast notification
function showToast(title, description, type = 'success') {
    const toastTitle = toast.querySelector('.toast-title');
    const toastDescription = toast.querySelector('.toast-description');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastTitle.textContent = title;
    toastDescription.textContent = description;
    
    // Set icon based on type
    if (type === 'success') {
        toastIcon.className = 'toast-icon success fas fa-check-circle';
    } else if (type === 'error') {
        toastIcon.className = 'toast-icon error fas fa-exclamation-circle';
    }
    
    // Show toast
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 4 seconds
    setTimeout(() => {
        hideToast();
    }, 4000);
}

// Hide toast notification
function hideToast() {
    toast.classList.remove('show');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 300);
}

// Handle responsive menu card layout
function handleResize() {
    // Additional responsive handling if needed
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
        // Any additional responsive logic
    });
}

// Window resize event
window.addEventListener('resize', handleResize);

// Initialize on load
handleResize();