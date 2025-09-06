// Authentication JavaScript

// Global variables
let isAuthenticated = false;
let currentUser = null;

// DOM elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const successModal = document.getElementById('successModal');

// Initialize authentication
document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
    setupEventListeners();
    checkAuthState();
});

function initializeAuth() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('locality_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        isAuthenticated = true;
    }
}

function setupEventListeners() {
    // Login form
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        setupPasswordToggle('passwordToggle', 'password');
    }

    // Signup form
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
        setupPasswordToggle('passwordToggle', 'password');
        setupPasswordToggle('confirmPasswordToggle', 'confirmPassword');
        setupPasswordStrength();
        setupFormValidation();
    }

    // Forgot password form
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    }

    // Real-time validation
    setupRealTimeValidation();
}

function setupPasswordToggle(toggleId, inputId) {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    
    if (toggle && input) {
        toggle.addEventListener('click', function() {
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            
            const icon = toggle.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    }
}

function setupPasswordStrength() {
    const passwordInput = document.getElementById('password');
    const strengthBar = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');
    const strengthContainer = document.getElementById('passwordStrength');

    if (passwordInput && strengthBar && strengthText) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            const strength = calculatePasswordStrength(password);
            
            // Remove all strength classes
            strengthContainer.className = 'password-strength';
            
            if (password.length > 0) {
                strengthContainer.classList.add(`strength-${strength.level}`);
                strengthBar.style.width = `${strength.percentage}%`;
                strengthText.textContent = strength.text;
            } else {
                strengthBar.style.width = '0%';
                strengthText.textContent = 'Password strength';
            }
        });
    }
}

function calculatePasswordStrength(password) {
    let score = 0;
    let feedback = [];

    // Length check
    if (password.length >= 8) score += 1;
    else feedback.push('at least 8 characters');

    // Lowercase check
    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('lowercase letters');

    // Uppercase check
    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('uppercase letters');

    // Number check
    if (/\d/.test(password)) score += 1;
    else feedback.push('numbers');

    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
    else feedback.push('special characters');

    if (score <= 1) {
        return { level: 'weak', percentage: 25, text: 'Weak password' };
    } else if (score <= 2) {
        return { level: 'fair', percentage: 50, text: 'Fair password' };
    } else if (score <= 3) {
        return { level: 'good', percentage: 75, text: 'Good password' };
    } else {
        return { level: 'strong', percentage: 100, text: 'Strong password' };
    }
}

function setupFormValidation() {
    const inputs = document.querySelectorAll('.form-input, .form-select');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

function setupRealTimeValidation() {
    // Email validation
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value && !isValidEmail(this.value)) {
                showFieldError(this, 'Please enter a valid email address');
            } else {
                clearFieldError(this);
            }
        });
    });

    // Phone validation
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            if (this.value && !isValidPhone(this.value)) {
                showFieldError(this, 'Please enter a valid phone number');
            } else {
                clearFieldError(this);
            }
        });
    }

    // Confirm password validation
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordInput = document.getElementById('password');
    
    if (confirmPasswordInput && passwordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            if (this.value && this.value !== passwordInput.value) {
                showFieldError(this, 'Passwords do not match');
            } else {
                clearFieldError(this);
            }
        });
    }
}

// Form Handlers
function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = formData.get('rememberMe');

    // Validate form
    if (!validateLoginForm(email, password)) {
        return;
    }

    // Show loading state
    setButtonLoading('loginBtn', true);

    // Simulate API call
    setTimeout(() => {
        if (authenticateUser(email, password)) {
            showNotification('Login successful! Welcome back!', 'success');
            
            // Redirect to dashboard or home
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
            showNotification('Invalid email or password. Please try again.', 'error');
            setButtonLoading('loginBtn', false);
        }
    }, 2000);
}

function handleSignup(e) {
    e.preventDefault();
    
    const formData = new FormData(signupForm);
    const userData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        location: formData.get('location'),
        terms: formData.get('terms'),
        newsletter: formData.get('newsletter')
    };

    // Validate form
    if (!validateSignupForm(userData)) {
        return;
    }

    // Show loading state
    setButtonLoading('signupBtn', true);

    // Simulate API call
    setTimeout(() => {
        if (createUser(userData)) {
            showSuccessModal();
            setButtonLoading('signupBtn', false);
        } else {
            showNotification('Failed to create account. Please try again.', 'error');
            setButtonLoading('signupBtn', false);
        }
    }, 2000);
}

function handleForgotPassword(e) {
    e.preventDefault();
    
    const formData = new FormData(forgotPasswordForm);
    const email = formData.get('resetEmail');

    if (!email || !isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Simulate API call
    setTimeout(() => {
        showNotification('Password reset link sent to your email', 'success');
        closeForgotPassword();
    }, 1500);
}

// Validation Functions
function validateLoginForm(email, password) {
    let isValid = true;

    if (!email || !isValidEmail(email)) {
        showFieldError(document.getElementById('email'), 'Please enter a valid email address');
        isValid = false;
    }

    if (!password || password.length < 6) {
        showFieldError(document.getElementById('password'), 'Password must be at least 6 characters');
        isValid = false;
    }

    return isValid;
}

function validateSignupForm(userData) {
    let isValid = true;

    // First name validation
    if (!userData.firstName || userData.firstName.length < 2) {
        showFieldError(document.getElementById('firstName'), 'First name must be at least 2 characters');
        isValid = false;
    }

    // Last name validation
    if (!userData.lastName || userData.lastName.length < 2) {
        showFieldError(document.getElementById('lastName'), 'Last name must be at least 2 characters');
        isValid = false;
    }

    // Email validation
    if (!userData.email || !isValidEmail(userData.email)) {
        showFieldError(document.getElementById('email'), 'Please enter a valid email address');
        isValid = false;
    }

    // Phone validation
    if (!userData.phone || !isValidPhone(userData.phone)) {
        showFieldError(document.getElementById('phone'), 'Please enter a valid phone number');
        isValid = false;
    }

    // Password validation
    if (!userData.password || userData.password.length < 8) {
        showFieldError(document.getElementById('password'), 'Password must be at least 8 characters');
        isValid = false;
    }

    // Confirm password validation
    if (userData.password !== userData.confirmPassword) {
        showFieldError(document.getElementById('confirmPassword'), 'Passwords do not match');
        isValid = false;
    }

    // Location validation
    if (!userData.location) {
        showFieldError(document.getElementById('location'), 'Please select your location');
        isValid = false;
    }

    // Terms validation
    if (!userData.terms) {
        showFieldError(document.getElementById('terms'), 'You must agree to the terms and conditions');
        isValid = false;
    }

    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    switch (fieldName) {
        case 'firstName':
        case 'lastName':
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
            break;
        case 'email':
            if (!isValidEmail(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
            break;
        case 'phone':
            if (!isValidPhone(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
            break;
        case 'password':
            if (value.length < 8) {
                isValid = false;
                errorMessage = 'Password must be at least 8 characters';
            }
            break;
        case 'confirmPassword':
            const password = document.getElementById('password').value;
            if (value !== password) {
                isValid = false;
                errorMessage = 'Passwords do not match';
            }
            break;
    }

    if (isValid) {
        clearFieldError(field);
        field.classList.add('success');
        field.classList.remove('error');
    } else {
        showFieldError(field, errorMessage);
    }

    return isValid;
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function showFieldError(field, message) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    
    field.classList.add('error');
    field.classList.remove('success');
}

function clearFieldError(field) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
    
    field.classList.remove('error');
}

function setButtonLoading(buttonId, loading) {
    const button = document.getElementById(buttonId);
    if (button) {
        if (loading) {
            button.classList.add('loading');
            button.disabled = true;
        } else {
            button.classList.remove('loading');
            button.disabled = false;
        }
    }
}

// Authentication Functions
function authenticateUser(email, password) {
    // Simulate user authentication
    const users = getStoredUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            location: user.location,
            joinDate: user.joinDate
        };
        
        isAuthenticated = true;
        localStorage.setItem('locality_user', JSON.stringify(currentUser));
        return true;
    }
    
    return false;
}

function createUser(userData) {
    // Check if user already exists
    const users = getStoredUsers();
    if (users.find(u => u.email === userData.email)) {
        showNotification('An account with this email already exists', 'error');
        return false;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        password: userData.password, // In real app, this would be hashed
        location: userData.location,
        newsletter: userData.newsletter === 'on',
        joinDate: new Date().toISOString()
    };

    // Store user
    users.push(newUser);
    localStorage.setItem('locality_users', JSON.stringify(users));

    // Auto-login
    currentUser = {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
        location: newUser.location,
        joinDate: newUser.joinDate
    };
    
    isAuthenticated = true;
    localStorage.setItem('locality_user', JSON.stringify(currentUser));

    return true;
}

function getStoredUsers() {
    const users = localStorage.getItem('locality_users');
    return users ? JSON.parse(users) : [];
}

function checkAuthState() {
    if (isAuthenticated && currentUser) {
        // Update UI for authenticated user
        updateAuthUI();
    }
}

function updateAuthUI() {
    // This function can be used to update the main website UI
    // when user is authenticated
    console.log('User authenticated:', currentUser);
}

// Modal Functions
function showForgotPassword() {
    if (forgotPasswordModal) {
        forgotPasswordModal.classList.add('show');
    }
}

function closeForgotPassword() {
    if (forgotPasswordModal) {
        forgotPasswordModal.classList.remove('show');
        forgotPasswordForm.reset();
    }
}

function showSuccessModal() {
    if (successModal) {
        successModal.classList.add('show');
    }
}

function closeSuccessModal() {
    if (successModal) {
        successModal.classList.remove('show');
    }
}

// Navigation Functions
function goToDashboard() {
    closeSuccessModal();
    window.location.href = 'index.html';
}

function goToHome() {
    closeSuccessModal();
    window.location.href = 'index.html';
}

// Social Login Functions
function loginWithGoogle() {
    showNotification('Google login coming soon!', 'info');
    // Implement Google OAuth
}

function loginWithFacebook() {
    showNotification('Facebook login coming soon!', 'info');
    // Implement Facebook OAuth
}

function signupWithGoogle() {
    showNotification('Google signup coming soon!', 'info');
    // Implement Google OAuth
}

function signupWithFacebook() {
    showNotification('Facebook signup coming soon!', 'info');
    // Implement Facebook OAuth
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
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
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-circle';
        case 'info': return 'info-circle';
        default: return 'info-circle';
    }
}

// Logout Function
function logout() {
    currentUser = null;
    isAuthenticated = false;
    localStorage.removeItem('locality_user');
    showNotification('You have been logged out', 'info');
    window.location.href = 'index.html';
}

// Export functions for use in other scripts
window.authFunctions = {
    isAuthenticated: () => isAuthenticated,
    currentUser: () => currentUser,
    logout: logout,
    showNotification: showNotification
};
