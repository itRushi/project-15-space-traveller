// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with glass-effect class
document.querySelectorAll('.glass-effect').forEach(element => {
    observer.observe(element);
});

// Continuous Animation for Boxes
function animateBoxes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                box.style.transform = 'translateY(0)';
            }, 1000);
        }, index * 200);
    });
}

// Run box animation every 5 seconds
setInterval(animateBoxes, 5000);

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Image Gallery Lightbox
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${item.src}" alt="${item.alt}">
                <button class="close-lightbox">&times;</button>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
            lightbox.remove();
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});

// Add CSS for lightbox
const style = document.createElement('style');
style.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 11px;
    }
    
    .close-lightbox {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

// Add animation class to elements when they come into view
const animatedElements = document.querySelectorAll('.animated-text');
animatedElements.forEach(element => {
    observer.observe(element);
});

// Coupon Copy Functionality
function copyCoupon(code) {
    navigator.clipboard.writeText(code).then(() => {
        const message = document.createElement('div');
        message.className = 'copy-notification';
        message.textContent = 'Coupon code copied!';
        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy coupon code:', err);
    });
}

// Book Magic Animation
function playBookMagic() {
    const book = document.getElementById('magicBook');
    const message = document.getElementById('magicMessage');
    if (!book || !message) return;
    // Reset
    book.classList.remove('open');
    message.classList.remove('visible');
    // Start animation
    setTimeout(() => {
        book.classList.add('open');
    }, 100);
    // Show message after animation
    setTimeout(() => {
        message.classList.add('visible');
    }, 1800);
    // Reset after animation
    setTimeout(() => {
        book.classList.remove('open');
        message.classList.remove('visible');
    }, 4200);
}

// Magic 3D Book Animation
function playBook3DMagic() {
    const book = document.getElementById('magic3DBook');
    if (!book) return;
    book.classList.remove('open');
    setTimeout(() => {
        book.classList.add('open');
    }, 100);
    setTimeout(() => {
        book.classList.remove('open');
    }, 3200);
}

// Tree Book-Butterfly Animation with Rotating Messages
const treeMessages = [
    "Books help you grow and fly!",
    "Every book is a new adventure!",
    "Reading plants the seeds of wisdom.",
    "Let your imagination take flight!",
    "A good book is a friend for life.",
    "Open a book, open your mind!"
];
let treeMessageIndex = 0;

function playTreeBookButterfly() {
    const book = document.getElementById('bookFruit');
    const butterfly = document.getElementById('butterfly');
    const message = document.getElementById('treeMiniMessage');
    if (!book || !butterfly || !message) return;
    // Set the next message
    message.textContent = treeMessages[treeMessageIndex];
    treeMessageIndex = (treeMessageIndex + 1) % treeMessages.length;
    // Reset
    book.classList.remove('falling', 'hide');
    butterfly.classList.remove('show');
    message.classList.remove('visible');
    // Start falling
    setTimeout(() => {
        book.classList.add('falling');
    }, 100);
    // Hide book, show butterfly
    setTimeout(() => {
        book.classList.add('hide');
        butterfly.classList.add('show');
    }, 1400);
    // Show message after butterfly flies
    setTimeout(() => {
        message.classList.add('visible');
    }, 3200);
    // Reset after animation
    setTimeout(() => {
        book.classList.remove('falling', 'hide');
        butterfly.classList.remove('show');
        message.classList.remove('visible');
    }, 5200);
}

// Updated Book Delivery Animation Logic with Dynamic Messages
const deliveryMessages = [
    "Your book is on the way! Enjoy reading!",
    "A world of knowledge is heading your way!",
    "Get ready to dive into a new adventure!",
    "Your book delivery is in progress!",
    "Books open doors to new worlds!"
];

function startBookDeliveryAnimation() {
    const truck = document.querySelector('.delivery-truck');
    const message = document.getElementById('deliveryMessage');

    // Start truck animation
    truck.style.animationPlayState = 'running';

    // Create bubbles
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random() * 2}s`;
        document.querySelector('.delivery-anim-container').appendChild(bubble);

        // Remove bubble after animation
        setTimeout(() => bubble.remove(), 5000);
    }

    // Show a random message after 5 seconds
    const randomMessage = deliveryMessages[Math.floor(Math.random() * deliveryMessages.length)];
    setTimeout(() => {
        message.textContent = randomMessage;
        message.style.display = 'block';
    }, 5000);

    // Hide message after 10 seconds
    setTimeout(() => {
        message.style.display = 'none';
    }, 10000);
}