// Sample business data for Nadiad
const businesses = [
    // Restaurants
    {
        id: 1,
        name: "Sardar Restaurant",
        category: "restaurants",
        address: "Station Road, Nadiad",
        rating: 4.5,
        reviews: 128,
        description: "Authentic Gujarati thali and North Indian cuisine. Family-owned restaurant serving delicious meals for over 30 years.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=200&fit=crop",
        phone: "+91 98765 43210",
        hours: "7:00 AM - 11:00 PM",
        coordinates: { lat: 22.6938, lng: 72.8614 }
    },
    {
        id: 2,
        name: "Cafe Corner",
        category: "restaurants",
        address: "College Road, Nadiad",
        rating: 4.6,
        reviews: 94,
        description: "Cozy cafe serving fresh coffee, sandwiches, and desserts. Perfect for students and professionals.",
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=200&fit=crop",
        phone: "+91 98765 43214",
        hours: "6:00 AM - 11:00 PM",
        coordinates: { lat: 22.6932, lng: 72.8608 }
    },
    {
        id: 3,
        name: "Pizza Palace",
        category: "restaurants",
        address: "Market Area, Nadiad",
        rating: 4.3,
        reviews: 76,
        description: "Fresh wood-fired pizzas, pasta, and Italian cuisine. Family-friendly restaurant with outdoor seating.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=200&fit=crop",
        phone: "+91 98765 43218",
        hours: "11:00 AM - 11:00 PM",
        coordinates: { lat: 22.6940, lng: 72.8615 }
    },
    {
        id: 4,
        name: "Gujarati Thali House",
        category: "restaurants",
        address: "Gandhi Road, Nadiad",
        rating: 4.7,
        reviews: 156,
        description: "Traditional Gujarati thali with unlimited servings. Authentic home-style cooking with fresh ingredients.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=200&fit=crop",
        phone: "+91 98765 43219",
        hours: "12:00 PM - 3:00 PM, 7:00 PM - 10:00 PM",
        coordinates: { lat: 22.6935, lng: 72.8612 }
    },
    {
        id: 5,
        name: "Sai Vadapav",
        category: "restaurants",
        address: "Mercury 2 Complex, College Road, Opp. Naoroyb Colony, Nadiad",
        rating: 4.6,
        reviews: 189,
        description: "Famous vadapav joint in Nadiad! Known for delicious, spicy vadapav, samosas, and other street snacks. A must-visit for food lovers.",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=200&fit=crop",
        phone: "+91 98986 56077",
        hours: "12:30 PM - 11:00 PM",
        coordinates: { lat: 22.6914, lng: 72.8634 }
    },

    // Shopping
    {
        id: 6,
        name: "Nadiad Electronics",
        category: "shopping",
        address: "Gandhi Road, Nadiad",
        rating: 4.2,
        reviews: 89,
        description: "Complete electronics store with latest gadgets, home appliances, and repair services.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
        phone: "+91 98765 43211",
        hours: "9:00 AM - 9:00 PM",
        coordinates: { lat: 22.6940, lng: 72.8616 }
    },
    {
        id: 7,
        name: "Fashion Hub",
        category: "shopping",
        address: "Market Street, Nadiad",
        rating: 4.3,
        reviews: 67,
        description: "Trendy clothing store for men, women, and children. Latest fashion at affordable prices.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop",
        phone: "+91 98765 43213",
        hours: "10:00 AM - 10:00 PM",
        coordinates: { lat: 22.6942, lng: 72.8618 }
    },
    {
        id: 8,
        name: "Book World",
        category: "shopping",
        address: "Library Road, Nadiad",
        rating: 4.7,
        reviews: 112,
        description: "Educational books, novels, and stationery. Also provides book binding and printing services.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
        phone: "+91 98765 43216",
        hours: "9:00 AM - 8:00 PM",
        coordinates: { lat: 22.6930, lng: 72.8605 }
    },
    {
        id: 9,
        name: "DMart Nadiad",
        category: "dmart",
        address: "Highway Road, Nadiad",
        rating: 4.4,
        reviews: 234,
        description: "One-stop shopping destination for groceries, household items, and daily essentials. Great deals and quality products.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop",
        phone: "+91 98765 43220",
        hours: "8:00 AM - 10:00 PM",
        coordinates: { lat: 22.6950, lng: 72.8625 }
    },
    {
        id: 10,
        name: "Mobile Zone",
        category: "shopping",
        address: "Station Road, Nadiad",
        rating: 4.1,
        reviews: 98,
        description: "Latest smartphones, accessories, and mobile repair services. Authorized dealer for major brands.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=200&fit=crop",
        phone: "+91 98765 43221",
        hours: "10:00 AM - 9:00 PM",
        coordinates: { lat: 22.6938, lng: 72.8614 }
    },

    // Healthcare
    {
        id: 11,
        name: "Dr. Patel's Clinic",
        category: "healthcare",
        address: "Hospital Road, Nadiad",
        rating: 4.8,
        reviews: 156,
        description: "General physician with 25+ years of experience. Specializes in family medicine and preventive care.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop",
        phone: "+91 98765 43212",
        hours: "8:00 AM - 8:00 PM",
        coordinates: { lat: 22.6935, lng: 72.8610 }
    },
    {
        id: 12,
        name: "Nadiad Dental Care",
        category: "healthcare",
        address: "College Road, Nadiad",
        rating: 4.6,
        reviews: 89,
        description: "Complete dental care services including cleaning, filling, root canal, and cosmetic dentistry.",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=200&fit=crop",
        phone: "+91 98765 43222",
        hours: "9:00 AM - 7:00 PM",
        coordinates: { lat: 22.6932, lng: 72.8608 }
    },
    {
        id: 13,
        name: "Apollo Pharmacy",
        category: "healthcare",
        address: "Gandhi Road, Nadiad",
        rating: 4.3,
        reviews: 67,
        description: "24/7 pharmacy with prescription medicines, health supplements, and medical equipment.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=200&fit=crop",
        phone: "+91 98765 43223",
        hours: "24 Hours",
        coordinates: { lat: 22.6940, lng: 72.8616 }
    },

    // Services
    {
        id: 14,
        name: "Auto Repair Center",
        category: "services",
        address: "Industrial Area, Nadiad",
        rating: 4.4,
        reviews: 78,
        description: "Complete auto repair and maintenance services. Expert mechanics for all vehicle types.",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08c3?w=400&h=200&fit=crop",
        phone: "+91 98765 43215",
        hours: "8:00 AM - 7:00 PM",
        coordinates: { lat: 22.6945, lng: 72.8620 }
    },
    {
        id: 15,
        name: "Fitness First Gym",
        category: "services",
        address: "Sports Complex, Nadiad",
        rating: 4.5,
        reviews: 145,
        description: "Modern gym with latest equipment and professional trainers. Group classes and personal training available.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
        phone: "+91 98765 43217",
        hours: "5:00 AM - 11:00 PM",
        coordinates: { lat: 22.6948, lng: 72.8622 }
    },
    {
        id: 16,
        name: "Nadiad Bank",
        category: "services",
        address: "Station Road, Nadiad",
        rating: 4.2,
        reviews: 112,
        description: "Full-service banking with ATM, loans, deposits, and digital banking services.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop",
        phone: "+91 98765 43224",
        hours: "9:00 AM - 4:00 PM (Mon-Fri), 9:00 AM - 1:00 PM (Sat)",
        coordinates: { lat: 22.6938, lng: 72.8614 }
    },

    // Salons
    {
        id: 17,
        name: "Style Studio Salon",
        category: "salon",
        address: "Market Street, Nadiad",
        rating: 4.6,
        reviews: 134,
        description: "Professional hair styling, cutting, coloring, and beauty treatments. Experienced stylists and modern equipment.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=200&fit=crop",
        phone: "+91 98765 43225",
        hours: "9:00 AM - 8:00 PM",
        coordinates: { lat: 22.6942, lng: 72.8618 }
    },
    {
        id: 18,
        name: "Beauty Parlor & Spa",
        category: "salon",
        address: "College Road, Nadiad",
        rating: 4.4,
        reviews: 98,
        description: "Complete beauty services including facials, manicure, pedicure, bridal makeup, and spa treatments.",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=200&fit=crop",
        phone: "+91 98765 43226",
        hours: "10:00 AM - 7:00 PM",
        coordinates: { lat: 22.6932, lng: 72.8608 }
    },
    {
        id: 19,
        name: "Men's Grooming Center",
        category: "salon",
        address: "Gandhi Road, Nadiad",
        rating: 4.3,
        reviews: 76,
        description: "Specialized men's grooming services including haircuts, beard styling, shaving, and facial treatments.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=200&fit=crop",
        phone: "+91 98765 43227",
        hours: "8:00 AM - 9:00 PM",
        coordinates: { lat: 22.6940, lng: 72.8616 }
    },

    // Cinema
    {
        id: 20,
        name: "CineMax Multiplex",
        category: "cinema",
        address: "Highway Road, Nadiad",
        rating: 4.5,
        reviews: 189,
        description: "Modern multiplex with 4 screens showing latest Bollywood and Hollywood movies. Comfortable seating and great sound.",
        image: "https://images.unsplash.com/photo-1489599808412-8d8b8b8b8b8b?w=400&h=200&fit=crop",
        phone: "+91 98765 43228",
        hours: "10:00 AM - 11:00 PM",
        coordinates: { lat: 22.6950, lng: 72.8625 }
    },
    {
        id: 21,
        name: "Raj Talkies",
        category: "cinema",
        address: "Station Road, Nadiad",
        rating: 4.1,
        reviews: 87,
        description: "Traditional single-screen cinema showing regional Gujarati movies and popular Bollywood films.",
        image: "https://images.unsplash.com/photo-1489599808412-8d8b8b8b8b8b?w=400&h=200&fit=crop",
        phone: "+91 98765 43229",
        hours: "12:00 PM - 10:00 PM",
        coordinates: { lat: 22.6938, lng: 72.8614 }
    },

    // Additional Services
    {
        id: 22,
        name: "Nadiad Courier Service",
        category: "services",
        address: "Industrial Area, Nadiad",
        rating: 4.2,
        reviews: 65,
        description: "Reliable courier and parcel delivery services across India. Fast and secure shipping solutions.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
        phone: "+91 98765 43230",
        hours: "9:00 AM - 6:00 PM",
        coordinates: { lat: 22.6945, lng: 72.8620 }
    },
    {
        id: 23,
        name: "Photo Studio",
        category: "services",
        address: "Market Street, Nadiad",
        rating: 4.7,
        reviews: 123,
        description: "Professional photography services for weddings, portraits, events, and passport photos.",
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=200&fit=crop",
        phone: "+91 98765 43231",
        hours: "10:00 AM - 7:00 PM",
        coordinates: { lat: 22.6942, lng: 72.8618 }
    },
    {
        id: 24,
        name: "Computer Repair Center",
        category: "services",
        address: "College Road, Nadiad",
        rating: 4.3,
        reviews: 89,
        description: "Computer and laptop repair services, software installation, and IT support for home and office.",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop",
        phone: "+91 98765 43232",
        hours: "9:00 AM - 7:00 PM",
        coordinates: { lat: 22.6932, lng: 72.8608 }
    },
    {
        id: 25,
        name: "Travel Agency",
        category: "services",
        address: "Station Road, Nadiad",
        rating: 4.4,
        reviews: 78,
        description: "Complete travel solutions including flight bookings, hotel reservations, and tour packages.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=200&fit=crop",
        phone: "+91 98765 43233",
        hours: "9:00 AM - 6:00 PM",
        coordinates: { lat: 22.6938, lng: 72.8614 }
    }
];

// Global variables
let currentFilter = 'all';
let displayedBusinesses = 6;
let allBusinesses = [...businesses];

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchInput = document.getElementById('searchInput');
const filterTabs = document.querySelectorAll('.filter-tab');
const businessesGrid = document.getElementById('businessesGrid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Setup event listeners
    setupEventListeners();
    
    // Render initial businesses
    renderBusinesses();
    
    // Initialize map
    initializeMap();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup scroll animations
    setupScrollAnimations();
}

function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            setActiveFilter(category);
            filterBusinesses(category);
        });
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function setActiveFilter(category) {
    filterTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        }
    });
    currentFilter = category;
}

function filterBusinesses(category) {
    if (category === 'all') {
        allBusinesses = [...businesses];
    } else {
        allBusinesses = businesses.filter(business => business.category === category);
    }
    displayedBusinesses = 6;
    renderBusinesses();
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        allBusinesses = [...businesses];
    } else {
        allBusinesses = businesses.filter(business => 
            business.name.toLowerCase().includes(searchTerm) ||
            business.description.toLowerCase().includes(searchTerm) ||
            business.address.toLowerCase().includes(searchTerm) ||
            business.category.toLowerCase().includes(searchTerm)
        );
    }
    
    displayedBusinesses = 6;
    renderBusinesses();
}

function renderBusinesses() {
    const businessesToShow = allBusinesses.slice(0, displayedBusinesses);
    
    if (businessesToShow.length === 0) {
        businessesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: #6b7280; margin-bottom: 1rem;"></i>
                <h3>No businesses found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    businessesGrid.innerHTML = businessesToShow.map(business => createBusinessCard(business)).join('');
    
    // Add animation to new cards
    const cards = businessesGrid.querySelectorAll('.business-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

function createBusinessCard(business) {
    const stars = generateStars(business.rating);
    
    return `
        <div class="business-card" data-category="${business.category}">
            <div class="business-image">
                <img src="${business.image}" alt="${business.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"400\" height=\"200\" viewBox=\"0 0 400 200\"><rect width=\"400\" height=\"200\" fill=\"%23f3f4f6\"/><text x=\"200\" y=\"100\" text-anchor=\"middle\" fill=\"%236b7280\" font-family=\"Arial\" font-size=\"16\">${business.name}</text></svg>'">
                <div class="business-category">${business.category.charAt(0).toUpperCase() + business.category.slice(1)}</div>
            </div>
            <div class="business-content">
                <h3 class="business-name">${business.name}</h3>
                <p class="business-address">
                    <i class="fas fa-map-marker-alt"></i>
                    ${business.address}
                </p>
                <div class="business-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">${business.rating} (${business.reviews} reviews)</span>
                </div>
                <p class="business-description">${business.description}</p>
                <div class="business-actions">
                    <button class="action-btn" onclick="viewBusinessDetails(${business.id})">
                        <i class="fas fa-eye"></i>
                        View Details
                    </button>
                    <button class="action-btn" onclick="callBusiness('${business.phone}')">
                        <i class="fas fa-phone"></i>
                        Call
                    </button>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function viewBusinessDetails(businessId) {
    const business = businesses.find(b => b.id === businessId);
    if (!business) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${business.name}</h2>
                <button class="close-modal" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${business.image}" alt="${business.name}">
                </div>
                <div class="modal-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${business.address}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-phone"></i>
                        <span>${business.phone}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-clock"></i>
                        <span>${business.hours}</span>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-star"></i>
                        <span>${business.rating} (${business.reviews} reviews)</span>
                    </div>
                    <p class="modal-description">${business.description}</p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="callBusiness('${business.phone}')">
                    <i class="fas fa-phone"></i>
                    Call Now
                </button>
                <button class="btn btn-secondary" onclick="getDirections(${business.coordinates.lat}, ${business.coordinates.lng})">
                    <i class="fas fa-directions"></i>
                    Get Directions
                </button>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            animation: slideInUp 0.3s ease;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #6b7280;
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .modal-image {
            width: 100%;
            height: 200px;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 20px;
        }
        
        .modal-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .modal-details {
            margin-bottom: 20px;
        }
        
        .detail-item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: #6b7280;
        }
        
        .detail-item i {
            width: 20px;
            color: #2563eb;
        }
        
        .modal-description {
            color: #6b7280;
            line-height: 1.6;
        }
        
        .modal-footer {
            padding: 20px;
            border-top: 1px solid #e5e7eb;
            display: flex;
            gap: 10px;
            justify-content: flex-end;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideInUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

function callBusiness(phone) {
    window.open(`tel:${phone}`, '_self');
}

function getDirections(lat, lng) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
}

function loadMoreBusinesses() {
    displayedBusinesses += 6;
    renderBusinesses();
    
    // Hide load more button if all businesses are shown
    const loadMoreBtn = document.querySelector('.load-more');
    if (displayedBusinesses >= allBusinesses.length) {
        loadMoreBtn.style.display = 'none';
    }
}

function searchBusinesses() {
    handleSearch();
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function setupSmoothScrolling() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .business-card, .about-text, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

function initializeMap() {
    // Simple map visualization
    const mapElement = document.getElementById('map');
    if (mapElement) {
        // Add some visual elements to represent Nadiad
        mapElement.innerHTML = `
            <div style="position: relative; width: 100%; height: 100%; background: linear-gradient(45deg, #e5e7eb, #d1d5db); border-radius: 15px; overflow: hidden;">
                <div style="position: absolute; top: 20px; left: 20px; background: #3b82f6; color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; font-weight: 600;">
                    Nadiad
                </div>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; background: #ef4444; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);">
                    <i class="fas fa-map-pin"></i>
                </div>
                <div style="position: absolute; bottom: 20px; right: 20px; background: rgba(0, 0, 0, 0.7); color: white; padding: 5px 10px; border-radius: 15px; font-size: 0.8rem;">
                    Gujarat, India
                </div>
            </div>
        `;
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const message = formData.get('message') || e.target.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
    e.target.reset();
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            z-index: 3000;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        }
        
        .notification-success {
            border-left: 4px solid #10b981;
        }
        
        .notification-error {
            border-left: 4px solid #ef4444;
        }
        
        .notification-info {
            border-left: 4px solid #3b82f6;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px 20px;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
        
        .notification-success .notification-content i {
            color: #10b981;
        }
        
        .notification-error .notification-content i {
            color: #ef4444;
        }
        
        .notification-info .notification-content i {
            color: #3b82f6;
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to business cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.business-card')) {
            e.target.closest('.business-card').style.transform = 'translateY(-5px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.business-card')) {
            e.target.closest('.business-card').style.transform = 'translateY(0)';
        }
    });
    
    // Add click animation to buttons
    document.addEventListener('click', function(e) {
        if (e.target.matches('.btn, .action-btn, .filter-tab')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
});

// Add scroll-based navbar styling
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});
