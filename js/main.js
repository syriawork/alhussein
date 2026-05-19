// ============================================
// Main JavaScript File
// ============================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initProductFilter();
    initFAQ();
    initContactForm();
    initSmoothScroll();
});

// ============================================
// Product Filter
// ============================================

function initProductFilter() {
    const filterSelect = document.getElementById('category-filter');
    const productCards = document.querySelectorAll('.product-card');

    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            const selectedCategory = this.value;

            productCards.forEach(card => {
                if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    }
}

// ============================================
// FAQ Accordion
// ============================================

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            // Close all other FAQs
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });

            // Toggle current FAQ
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// ============================================
// Contact Form
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Validate email
            if (!validateEmail(email)) {
                showMessage('البريد الإلكتروني غير صحيح', 'error');
                return;
            }

            // Validate phone
            if (!validatePhone(phone)) {
                showMessage('رقم الهاتف غير صحيح', 'error');
                return;
            }

            // In a real application, you would send this data to a server
            console.log({
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message,
                timestamp: new Date()
            });

            // Show success message
            showMessage('تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.', 'success');

            // Reset form
            contactForm.reset();
        });
    }

    function showMessage(msg, type) {
        if (formMessage) {
            formMessage.textContent = msg;
            formMessage.className = `form-message ${type}`;
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
        }
    }
}

// ============================================
// Validation Functions
// ============================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Accept various phone formats
    const phoneRegex = /^(\+?966|0)?([0-9]{9})$/;
    return phoneRegex.test(phone.replace(/[-\s]/g, ''));
}

// ============================================
// Add to Cart (Placeholder)
// ============================================

function initAddToCart() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Get product info
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const price = productCard.querySelector('.price').textContent;

            // Show notification
            showNotification(`تم إضافة ${productName} إلى السلة`);

            // Change button state
            const originalText = this.textContent;
            this.textContent = 'تم الإضافة ✓';
            this.disabled = true;

            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);

            // Log to console (in real app, would send to server)
            console.log(`Added to cart: ${productName} - ${price}`);
        });
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #28a745;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize add to cart after page load
document.addEventListener('DOMContentLoaded', function() {
    initAddToCart();
});

// ============================================
// Smooth Scroll
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

// ============================================
// Newsletter Signup
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (validateEmail(email)) {
                // Show success message
                const originalHTML = this.innerHTML;
                this.innerHTML = '<p style="color: white; font-size: 16px; margin: 0;">شكراً! تم الاشتراك بنجاح ✓</p>';

                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    emailInput.value = '';
                }, 3000);

                console.log('Newsletter signup:', email);
            } else {
                alert('البريد الإلكتروني غير صحيح');
            }
        });
    }
});

// ============================================
// Mobile Menu Toggle (if needed)
// ============================================

function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // You can add mobile menu functionality here if needed
    // This is a placeholder for future enhancement
}

// ============================================
// Scroll to top button
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 24px;
        display: none;
        z-index: 999;
        transition: all 0.3s;
    `;

    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'flex';
            scrollButton.style.alignItems = 'center';
            scrollButton.style.justifyContent = 'center';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollButton.addEventListener('hover', function() {
        this.style.backgroundColor = '#8b0000';
    });
});

// ============================================
// Animation on scroll
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const elementsToObserve = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');
    
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
});

console.log('الحسين - موقع متجر الملابس الداخلية الفاخرة');
console.log('جميع الحقوق محفوظة 2026');
