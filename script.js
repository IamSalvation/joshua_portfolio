// ============================================
// PROGRESS BAR ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) navLinks.classList.remove('show');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// TYPEWRITER EFFECT
// ============================================
const subtitle = document.getElementById('typewriterText');
const originalText = 'Virtual Assistant · Full-Stack Developer · AI-Driven Automation · Executive Operations';
subtitle.textContent = '';
let charIndex = 0;

function typeWriter() {
    if (charIndex < originalText.length) {
        subtitle.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 30);
    }
}
setTimeout(typeWriter, 1200);

// ============================================
// GLOW TRAIL
// ============================================
const glowTrail = document.getElementById('glowTrail');
let glowTimeout;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return;
    glowTrail.style.left = e.clientX + 'px';
    glowTrail.style.top = e.clientY + 'px';
    glowTrail.classList.add('active');

    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(() => {
        glowTrail.classList.remove('active');
    }, 3000);
});

document.addEventListener('mouseleave', () => {
    glowTrail.classList.remove('active');
});

// ============================================
// CUSTOM CURSOR
// ============================================
const customCursor = document.getElementById('customCursor');
let cursorTimeout;

if (customCursor) {
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
        customCursor.classList.add('active');

        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
            customCursor.classList.remove('active');
        }, 2000);
    });

    document.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
    });

    document.querySelectorAll('a, .btn, .portfolio-card, .service-card, .testimonial-card, .cert-card, .connect-card, .contact-card, .gallery-card')
        .forEach(el => {
            el.addEventListener('mouseenter', () => {
                customCursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                customCursor.classList.remove('hover');
            });
        });
}

// ============================================
// PARTICLES (Hero)
// ============================================
function createParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    if (window.innerWidth < 768) return;

    const particleCount = 30;
    const colors = ['rgba(0,188,212,0.6)', 'rgba(0,188,212,0.3)', 'rgba(77,208,225,0.4)'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 10;
        const drift = (Math.random() - 0.5) * 200;
        const opacity = Math.random() * 0.3 + 0.1;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${Math.random() * 100}%;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --drift: ${drift}px;
            --opacity: ${opacity};
            animation-delay: ${delay}s;
        `;

        container.appendChild(particle);
    }
}

// ============================================
// ABOUT BUBBLE RISE EFFECT
// ============================================
function createAboutBubbles() {
    const container = document.getElementById('aboutBubblesContainer');
    if (!container) return;
    if (window.innerWidth < 768) return;

    const bubbleCount = 25;
    const sizes = [15, 25, 35, 45, 55, 70, 85];

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'about-bubble';
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const duration = Math.random() * 14 + 10;
        const delay = Math.random() * 15;
        const left = Math.random() * 100;
        const opacity = Math.random() * 0.12 + 0.03;

        bubble.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --opacity: ${opacity};
            animation-delay: ${delay}s;
        `;

        container.appendChild(bubble);
    }
}

// ============================================
// ABOUT IMAGE MOUSE TILT EFFECT
// ============================================
const aboutImageWrapper = document.getElementById('aboutImageWrapper');
const aboutImageFrame = document.getElementById('aboutImageFrame');
const aboutImageGlow = document.getElementById('aboutImageGlow');

if (aboutImageWrapper && aboutImageFrame) {
    let tiltTimeoutId = null;

    aboutImageWrapper.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;

        const rect = aboutImageWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 12;
        const rotateX = ((centerY - y) / centerY) * 12;

        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;

        aboutImageFrame.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        aboutImageFrame.classList.add('tilt-active');
        aboutImageFrame.classList.remove('tilt-reset');

        aboutImageGlow.style.setProperty('--glow-x', glowX + '%');
        aboutImageGlow.style.setProperty('--glow-y', glowY + '%');

        clearTimeout(tiltTimeoutId);
    });

    aboutImageWrapper.addEventListener('mouseleave', () => {
        if (window.innerWidth <= 768) return;

        aboutImageFrame.classList.remove('tilt-active');
        aboutImageFrame.classList.add('tilt-reset');
        aboutImageFrame.style.transform = 'rotateX(0deg) rotateY(0deg)';

        aboutImageGlow.style.setProperty('--glow-x', '50%');
        aboutImageGlow.style.setProperty('--glow-y', '50%');

        tiltTimeoutId = setTimeout(() => { }, 700);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            aboutImageFrame.style.transform = 'rotateX(0deg) rotateY(0deg)';
            aboutImageFrame.classList.remove('tilt-active');
            aboutImageFrame.classList.remove('tilt-reset');
        }
    });
}

// ============================================
// 3D TILT ON CARDS
// ============================================
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.setProperty('--rotateX', rotateX + 'deg');
        card.style.setProperty('--rotateY', rotateY + 'deg');
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    });
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: width 0.6s ease, height 0.6s ease;
        `;
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.style.width = '300px';
            ripple.style.height = '300px';
        }, 10);
        setTimeout(() => {
            ripple.remove();
        }, 700);
    });
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// SMOOTH SECTION TRANSITIONS (Intersection Observer)
// ============================================
const hiddenSections = document.querySelectorAll('.section-hidden');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

hiddenSections.forEach(section => {
    sectionObserver.observe(section);
});

// ============================================
// STAGGERED CARD ENTRANCE
// ============================================
const revealCards = document.querySelectorAll('.reveal-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealCards.forEach(card => {
    revealObserver.observe(card);
});

// ============================================
// STATS COUNTER
// ============================================
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            const duration = 2000;
            const startTime = performance.now();
            const startValue = 0;

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                entry.target.textContent = current;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    entry.target.textContent = target;
                }
            }
            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ============================================
// GALLERY CAROUSEL (Image-Based Auto-Slide)
// ============================================
let currentGalleryIndex = 0;
const galleryCards = document.querySelectorAll('.gallery-card');
const galleryTrack = document.getElementById('galleryTrack');
const galleryPrevBtn = document.getElementById('galleryPrev');
const galleryNextBtn = document.getElementById('galleryNext');
const galleryDotsContainer = document.getElementById('galleryDots');

let galleryItemsPerView = getGalleryItemsPerView();
const totalGalleryCards = galleryCards.length;
let galleryAutoSlideInterval;

function getGalleryItemsPerView() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

function updateGalleryCarousel() {
    galleryItemsPerView = getGalleryItemsPerView();
    const maxIndex = Math.max(0, totalGalleryCards - galleryItemsPerView);
    if (currentGalleryIndex > maxIndex) currentGalleryIndex = maxIndex;
    const gap = 20;
    const cardWidth = galleryCards[0]?.offsetWidth || 280;
    const offset = currentGalleryIndex * (cardWidth + gap);
    galleryTrack.style.transform = `translateX(-${offset}px)`;

    const totalDots = Math.ceil(totalGalleryCards / galleryItemsPerView);
    const dots = galleryDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === Math.floor(currentGalleryIndex / galleryItemsPerView));
    });
}

function createGalleryDots() {
    const totalDots = Math.ceil(totalGalleryCards / galleryItemsPerView);
    galleryDotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            const newIndex = i * galleryItemsPerView;
            currentGalleryIndex = Math.min(newIndex, totalGalleryCards - galleryItemsPerView);
            updateGalleryCarousel();
            resetGalleryAutoSlide();
        });
        galleryDotsContainer.appendChild(dot);
    }
}

function goToGalleryNext() {
    const maxIndex = Math.max(0, totalGalleryCards - galleryItemsPerView);
    if (currentGalleryIndex + galleryItemsPerView < totalGalleryCards) {
        currentGalleryIndex += galleryItemsPerView;
    } else {
        currentGalleryIndex = 0;
    }
    updateGalleryCarousel();
}

function goToGalleryPrev() {
    const maxIndex = Math.max(0, totalGalleryCards - galleryItemsPerView);
    if (currentGalleryIndex - galleryItemsPerView >= 0) {
        currentGalleryIndex -= galleryItemsPerView;
    } else {
        currentGalleryIndex = maxIndex;
    }
    updateGalleryCarousel();
}

function startGalleryAutoSlide() {
    if (galleryAutoSlideInterval) clearInterval(galleryAutoSlideInterval);
    galleryAutoSlideInterval = setInterval(goToGalleryNext, 4000);
}

function resetGalleryAutoSlide() {
    if (galleryAutoSlideInterval) {
        clearInterval(galleryAutoSlideInterval);
        startGalleryAutoSlide();
    }
}

if (galleryPrevBtn) galleryPrevBtn.addEventListener('click', () => { goToGalleryPrev(); resetGalleryAutoSlide(); });
if (galleryNextBtn) galleryNextBtn.addEventListener('click', () => { goToGalleryNext(); resetGalleryAutoSlide(); });

let galleryResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(galleryResizeTimeout);
    galleryResizeTimeout = setTimeout(() => {
        const newItemsPerView = getGalleryItemsPerView();
        if (newItemsPerView !== galleryItemsPerView) {
            createGalleryDots();
            currentGalleryIndex = 0;
            updateGalleryCarousel();
            resetGalleryAutoSlide();
        } else {
            updateGalleryCarousel();
        }
    }, 200);
});

createGalleryDots();
updateGalleryCarousel();
startGalleryAutoSlide();

// ============================================
// GALLERY DETAIL MODAL
// ============================================
const galleryData = {
    calendar: {
        title: "Calendar Management",
        subtitle: "Cross-Time Zone Scheduling & Time-Leak Protection",
        description: "I build frictionless scheduling architectures that eliminate double-bookings, protect your focus time, and ensure you never miss an important meeting. My approach includes:",
        details: [
            "Calendar Architecture Design",
            "Meeting Prep & Brief Compilation",
            "Time-Leak Protection",
            "Cross-Time Zone Coordination",
            "Standardized Meeting Templates"
        ],
        tag: "Executive Operations"
    },
    file: {
        title: "File Management",
        subtitle: "Structured Google Drive Architecture & Organization",
        description: "I design and implement organized file systems that make finding documents instant, secure sensitive data, and create a single source of truth for your business.",
        details: [
            "Google Drive Architecture",
            "Folder Structure Design",
            "File Naming Conventions",
            "Access Control & Permissions",
            "Document Version Control"
        ],
        tag: "Data Organization"
    },
    project: {
        title: "Project Tracker",
        subtitle: "Trello, Asana & Notion Project Tracking Systems",
        description: "I build customized project tracking systems that give you complete visibility into progress, deadlines, and team accountability.",
        details: [
            "Trello Board Setup",
            "Asana Workflow Design",
            "Notion Database Architecture",
            "Progress Tracking",
            "Deadline Management"
        ],
        tag: "Project Management"
    },
    booking: {
        title: "Booking & Scheduling",
        subtitle: "Calendly Integration & Client Booking Systems",
        description: "I create frictionless booking systems that make it easy for clients to schedule appointments while keeping your calendar organized and protected.",
        details: [
            "Calendly Integration",
            "Booking Page Design",
            "Automated Reminders",
            "Client Management",
            "Scheduling Workflows"
        ],
        tag: "Client Management"
    },
    zapier: {
        title: "Zapier Workflow Automation",
        subtitle: "Automated Workflows Connecting Your Favorite Apps",
        description: "I build powerful automations that connect your tools, eliminate manual data entry, and create seamless workflows across your entire tech stack.",
        details: [
            "Workflow Design",
            "App Integration",
            "Automation Setup",
            "Error Handling",
            "Process Optimization"
        ],
        tag: "Automation"
    },
    docs: {
        title: "Google Docs & Sheets",
        subtitle: "Professional Document & Advanced Spreadsheet Architecture",
        description: "I create professional documents and advanced spreadsheet systems that track metrics, analyze data, and provide actionable insights.",
        details: [
            "Document Design",
            "Spreadsheet Architecture",
            "Data Visualization",
            "Formula & Function Setup",
            "Template Creation"
        ],
        tag: "Documentation"
    },
    email: {
        title: "Email Management",
        subtitle: "Inbox Architecture, Filtering & Response Loop Management",
        description: "I transform chaotic inboxes into pristine communication systems with bulletproof response loops, ensuring no message gets missed.",
        details: [
            "Inbox Architecture Design",
            "Email Filtering & Rules",
            "Response Loop Management",
            "Priority Tiers",
            "Daily Email Review Systems"
        ],
        tag: "Inbox Management"
    },
    travel: {
        title: "Travel Itinerary",
        subtitle: "Hassle-Free Itinerary Coordination & Booking Management",
        description: "I handle all aspects of travel coordination — from booking flights and accommodations to creating detailed itineraries that keep your trips stress-free.",
        details: [
            "Itinerary Planning",
            "Flight & Accommodation Booking",
            "Travel Documentation",
            "Timeline Coordination",
            "Expense Tracking"
        ],
        tag: "Travel Management"
    },
    research: {
        title: "Research & Data Entry",
        subtitle: "Detailed Research, Data Collection & Accurate Entry",
        description: "I conduct thorough research and maintain accurate data entry systems that support informed decision-making and operational excellence.",
        details: [
            "Market Research",
            "Data Collection",
            "Accurate Data Entry",
            "Data Validation",
            "Report Generation"
        ],
        tag: "Data & Research"
    },
    damilola: {
        title: "Damilola's Portfolio",
        subtitle: "VA Coach Website",
        description: "A professional coaching website built for Damilola Adebayo, featuring service sections, testimonials, and Calendly booking integration.",
        details: [
            "Custom HTML/CSS/JS Development",
            "Responsive Design",
            "Calendly Integration",
            "SEO Optimization",
            "Fast Loading Times"
        ],
        tag: "Web Development"
    },
    wendy: {
        title: "Wendy's Portfolio",
        subtitle: "AI Workflow Designer",
        description: "An AI-powered portfolio showcasing Wendy's expertise in workflow design, with interactive elements and a modern aesthetic.",
        details: [
            "AI-Enhanced Design",
            "Interactive Elements",
            "Modern Aesthetic",
            "Responsive Layout",
            "Workflow Showcase"
        ],
        tag: "Web Development"
    },
    roseline: {
        title: "Roseline's Portfolio",
        subtitle: "Customer Support Specialist",
        description: "A professional portfolio for Roseline featuring her customer support services, packages, and client testimonials.",
        details: [
            "Service Package Display",
            "Testimonial Showcase",
            "Contact Integration",
            "Professional Design",
            "Responsive Layout"
        ],
        tag: "Web Development"
    }
};

const galleryModal = document.getElementById('galleryModal');
const galleryModalContent = document.getElementById('galleryModalContent');
const galleryModalClose = document.getElementById('galleryModalClose');

document.querySelectorAll('.gallery-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const key = this.dataset.gallery;
        const data = galleryData[key];
        if (!data) return;

        galleryModalContent.innerHTML = `
            <h2>${data.title}</h2>
            <p class="modal-subtitle">${data.subtitle}</p>
            <div class="modal-body">
                <p>${data.description}</p>
                <ul>
                    ${data.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
                <div class="modal-tag">${data.tag}</div>
            </div>
        `;

        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeGalleryModal() {
    galleryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

galleryModalClose.addEventListener('click', closeGalleryModal);

galleryModal.addEventListener('click', function (e) {
    if (e.target === this) {
        closeGalleryModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeGalleryModal();
    }
});

// ============================================
// TESTIMONIALS CAROUSEL (Auto-Slide)
// ============================================
let currentTestimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialTrack = document.getElementById('testimonialTrack');
const testimonialPrevBtn = document.getElementById('testimonialPrev');
const testimonialNextBtn = document.getElementById('testimonialNext');
const testimonialDotsContainer = document.getElementById('testimonialDots');

let testimonialItemsPerView = getTestimonialItemsPerView();
const totalTestimonialCards = testimonialCards.length;
let testimonialAutoSlideInterval;

function getTestimonialItemsPerView() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

function updateTestimonialCarousel() {
    testimonialItemsPerView = getTestimonialItemsPerView();
    const maxIndex = Math.max(0, totalTestimonialCards - testimonialItemsPerView);
    if (currentTestimonialIndex > maxIndex) currentTestimonialIndex = maxIndex;
    const gap = 20;
    const cardWidth = testimonialCards[0]?.offsetWidth || 280;
    const offset = currentTestimonialIndex * (cardWidth + gap);
    testimonialTrack.style.transform = `translateX(-${offset}px)`;

    const totalDots = Math.ceil(totalTestimonialCards / testimonialItemsPerView);
    const dots = testimonialDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === Math.floor(currentTestimonialIndex / testimonialItemsPerView));
    });
}

function createTestimonialDots() {
    const totalDots = Math.ceil(totalTestimonialCards / testimonialItemsPerView);
    testimonialDotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            const newIndex = i * testimonialItemsPerView;
            currentTestimonialIndex = Math.min(newIndex, totalTestimonialCards - testimonialItemsPerView);
            updateTestimonialCarousel();
            resetTestimonialAutoSlide();
        });
        testimonialDotsContainer.appendChild(dot);
    }
}

function goToTestimonialNext() {
    const maxIndex = Math.max(0, totalTestimonialCards - testimonialItemsPerView);
    if (currentTestimonialIndex + testimonialItemsPerView < totalTestimonialCards) {
        currentTestimonialIndex += testimonialItemsPerView;
    } else {
        currentTestimonialIndex = 0;
    }
    updateTestimonialCarousel();
}

function goToTestimonialPrev() {
    const maxIndex = Math.max(0, totalTestimonialCards - testimonialItemsPerView);
    if (currentTestimonialIndex - testimonialItemsPerView >= 0) {
        currentTestimonialIndex -= testimonialItemsPerView;
    } else {
        currentTestimonialIndex = maxIndex;
    }
    updateTestimonialCarousel();
}

function startTestimonialAutoSlide() {
    if (testimonialAutoSlideInterval) clearInterval(testimonialAutoSlideInterval);
    testimonialAutoSlideInterval = setInterval(goToTestimonialNext, 4000);
}

function resetTestimonialAutoSlide() {
    if (testimonialAutoSlideInterval) {
        clearInterval(testimonialAutoSlideInterval);
        startTestimonialAutoSlide();
    }
}

if (testimonialPrevBtn) testimonialPrevBtn.addEventListener('click', () => { goToTestimonialPrev(); resetTestimonialAutoSlide(); });
if (testimonialNextBtn) testimonialNextBtn.addEventListener('click', () => { goToTestimonialNext(); resetTestimonialAutoSlide(); });

let testimonialResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(testimonialResizeTimeout);
    testimonialResizeTimeout = setTimeout(() => {
        const newItemsPerView = getTestimonialItemsPerView();
        if (newItemsPerView !== testimonialItemsPerView) {
            createTestimonialDots();
            currentTestimonialIndex = 0;
            updateTestimonialCarousel();
            resetTestimonialAutoSlide();
        } else {
            updateTestimonialCarousel();
        }
    }, 200);
});

createTestimonialDots();
updateTestimonialCarousel();
startTestimonialAutoSlide();

// ============================================
// CASE STUDY MODAL
// ============================================
const caseStudies = {
    webdev: {
        title: "Full-Stack Web Development & Portfolio Design",
        subtitle: "Building Damilola Adebayo's Professional VA Coach Website",
        problem: "Damilola needed a professional coaching website that would establish her credibility as a VA coach and attract high-quality clients. The site needed to showcase her services, testimonials, and allow potential clients to book consultations easily.",
        process: "I built a fully responsive, modern portfolio website using HTML, CSS, and JavaScript. The site features a professional layout, service sections, testimonial carousel, and Calendly booking integration. I also ensured SEO optimization and fast loading times.",
        result: "✅ Launched within 48 hours\n✅ Mobile-responsive design\n✅ Integrated Calendly booking system\n✅ Client received multiple booking inquiries within the first week",
        tools: ["HTML5", "CSS3", "JavaScript", "Calendly API", "GitHub Pages"]
    },
    inbox: {
        title: "High-Volume Inbox & Corporate Correspondence",
        subtitle: "Structuring Communication for a Fast-Growing Consultancy",
        problem: "A premium training consultancy was drowning in 200+ daily emails, with critical messages getting lost and response times exceeding 48 hours. This was damaging client relationships and causing operational drag.",
        process: "I architected a complete inbox management system with priority tiers, automated filtering, and structured response templates. I also implemented a daily email review system to ensure zero missed messages.",
        result: "✅ Response times reduced from 48 hours to 2 hours\n✅ 100% email accountability achieved\n✅ Client satisfaction scores increased by 40%",
        tools: ["Gmail", "Filters & Labels", "Response Templates", "Email Tracking"]
    },
    calendar: {
        title: "Cross-Time Zone Calendar Optimization",
        subtitle: "Fixing Time-Leaks for a Global Executive",
        problem: "A corporate executive with teams across 3 continents was losing 10+ hours weekly to scheduling conflicts, double-bookings, and time-zone confusion.",
        process: "I redesigned the entire calendar architecture, implemented time-zone blocking, created standardized meeting templates, and established a frictionless scheduling process across all time zones.",
        result: "✅ 10+ hours saved weekly\n✅ Zero double-bookings\n✅ Executive regained focus time for strategic work",
        tools: ["Google Calendar", "Calendly", "Time Zone Management", "Meeting Templates"]
    },
    data: {
        title: "Pristine Data & Sheet Architecture",
        subtitle: "Building a Single Source of Truth for Pardee Food Nigeria",
        problem: "Pardee Food Nigeria was managing 50+ trucks daily with manual spreadsheet tracking, leading to data errors, reconciliation issues, and operational inefficiencies.",
        process: "I designed and implemented a structured data architecture with validation rules, automated calculations, and real-time tracking. I also trained the team on proper data entry protocols.",
        result: "✅ 100% zero-error data tracking achieved\n✅ Real-time visibility into operations\n✅ Reconciliation time reduced by 70%",
        tools: ["Google Sheets", "Data Validation", "Automated Formulas", "Training"]
    },
    presentation: {
        title: "Executive Presentation Design",
        subtitle: "Transforming Data into Boardroom-Ready Presentations",
        problem: "A client had complex operational data that was difficult to present to executive stakeholders. The raw data was overwhelming and didn't effectively communicate the insights needed for decision-making.",
        process: "I translated the raw data into polished, professional slide decks with clear visualizations, executive summaries, and actionable recommendations. Each presentation was tailored to boardroom standards.",
        result: "✅ Boardroom-ready presentations delivered\n✅ Complex data simplified for decision-makers\n✅ Executive buy-in achieved on key decisions",
        tools: ["PowerPoint", "Data Visualization", "Canva", "Design Principles"]
    },
    ai: {
        title: "AI, Graphics & Content Automation",
        subtitle: "Scaling Brand Presence with AI-Driven Workflows",
        problem: "A growing brand needed to scale their content creation and social media presence but lacked the resources to produce consistent, high-quality content at scale.",
        process: "I implemented AI-driven content workflows using ChatGPT, Canva automation, and scheduling tools to create a consistent content pipeline. I also designed professional graphics and brand assets.",
        result: "✅ Content production increased by 300%\n✅ Consistent brand presence across platforms\n✅ 40% increase in engagement rates",
        tools: ["ChatGPT", "Canva", "Content Automation", "Social Media Tools"]
    }
};

const modalOverlay = document.getElementById('caseModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.case-study-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const caseKey = this.dataset.case;
        const study = caseStudies[caseKey];
        if (!study) return;

        modalContent.innerHTML = `
            <h2>${study.title}</h2>
            <p class="modal-subtitle">${study.subtitle}</p>

            <div class="modal-section">
                <h3><i class="fas fa-exclamation-triangle" style="color:var(--teal);"></i> The Challenge</h3>
                <p>${study.problem}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-cogs" style="color:var(--teal);"></i> What I Did</h3>
                <p>${study.process}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-chart-line" style="color:var(--teal);"></i> The Outcome</h3>
                <div class="modal-result">
                    <p>${study.result.replace(/\n/g, '<br>')}</p>
                </div>
            </div>

            <div class="modal-section" style="margin-bottom:0;">
                <h3><i class="fas fa-tools" style="color:var(--teal);"></i> Tools Used</h3>
                <div class="modal-tags">
                    ${study.tools.map(tool => `<span>${tool}</span>`).join('')}
                </div>
            </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// CONTACT FORM
// ============================================
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        // Formspree will handle the submission
        // This is just a visual feedback enhancement
        const btn = this.querySelector('.btn-submit');
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;

        // The form will submit normally to Formspree
        // If you want to prevent default and handle via AJAX, uncomment below
        // e.preventDefault();
        // ... AJAX code here
    });
}

// ============================================
// BACK TO TOP
// ============================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// PRELOAD IMAGES & PERFORMANCE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Preload critical images (already preloaded via HTML link tags)
    // This is a fallback for browsers that might not support preload links
    const criticalImages = [
        './assets/joshua.png',
        './assets/og-image.jpg'
    ];

    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Ensure lazy loading for gallery images
    document.querySelectorAll('.gallery-image img').forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
        }
    });
});

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createAboutBubbles();

    let particleTimeout;
    let bubbleTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(particleTimeout);
        clearTimeout(bubbleTimeout);
        particleTimeout = setTimeout(() => {
            const container = document.getElementById('particlesContainer');
            if (container) container.innerHTML = '';
            createParticles();
        }, 500);
        bubbleTimeout = setTimeout(() => {
            const container = document.getElementById('aboutBubblesContainer');
            if (container) container.innerHTML = '';
            createAboutBubbles();
        }, 500);
    });
});

console.log('🚀 Joshua Obiora · Architecture over Hustle');