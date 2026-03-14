document.addEventListener('DOMContentLoaded', () => {
    // Make navbar dark when scrolling away from top
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(28, 61, 122, 0.9)'; // Navy blue
            navbar.style.padding = '15px 5%';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.position = 'fixed';
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.padding = '20px 5%';
            navbar.style.backdropFilter = 'none';
            navbar.style.position = 'absolute';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle hamburger to close (X) icon logic if needed visually
            const svg = menuIcon.querySelector('svg');
            if (navLinks.classList.contains('active')) {
                svg.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
            } else {
                svg.innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
            }
        });

        // Close menu when a link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (menuIcon.querySelector('svg')) {
                    menuIcon.querySelector('svg').innerHTML = '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
                }
            });
        });
    }

    // Load all static sections
    loadActivities();
    loadEvents();
    loadExecomPhotos();
    loadContact();

    // Lightbox Logic
    initLightbox();
});

// ─────────────────────────────────────────────────────────────────────────────
// STATIC DATA — Populated from the original database
// Images are served from the /uploads/ folder
// ─────────────────────────────────────────────────────────────────────────────

const STATIC_ACTIVITIES = [
    {
        id: 7,
        title: "MATHS ESCAPE  CARNIVAL ",
        description: "Mathescape Carnival was held on February 5, 2026, at the Physics Lab-G02. The five-round team event \ntested participants' logical thinking, problem-solving skills, and teamwork. Teams of two competed \nenthusiastically for a prize pool of ₹2,500, making the program engaging and successful. Abhijith \nShylajan and Anvin M J (S2 CSE) secured the first prize, while Lino Shyjan and George Joy (S2 EEE) \nsecured the second prize at the Mathescape Carnival.",
        images: [
            "/uploads/1772246905287.png",
            "/uploads/1772246905299.png",
            "/uploads/1772246905374.png",
            "/uploads/1772246905344.png",
            "/uploads/1772246905349.png",
            "/uploads/1772246905311.png"
        ]
    },
    {
        id: 6,
        title: "CHAKRAVYUHA  4.0 ",
        description: "The Chakravyuha 4.0 Quiz Competition was conducted on 23 January 2026 at the ECE Mini Seminar Hall \nas part of the Mathematics Day Celebration. The event tested participants' knowledge, logical thinking, and \nproblem-solving abilities through a series of challenging rounds. The First Prize was secured by Saurav S \n(ECE-B, S4) and Joyal Joseph (ECE-B, S4), while the Second Prize was awarded to Abhirami B. Nair (ECE-A, S2) and Achuth K. P. (ECE-A, S2).",
        images: [
            "/uploads/1772246396750.png",
            "/uploads/1772246396784.png",
            "/uploads/1772246396835.png",
            "/uploads/1772246396798.png",
            "/uploads/1772246396815.png",
            "/uploads/1772246396759.png"
        ]
    },
    {
        id: 5,
        title: "VEDIC  MATHEMATICS",
        description: "A session on Vedic Mathematics was conducted on 23 January 2026 at the ECE Mini Seminar Hall as \npart of the Mathematics Day Celebration. The class, handled by the chief guest, Mr. P. Devraj, Director of \nCosmic Maths Foundation, was highly engaging and interactive. The session introduced participants to \nquick calculation techniques and the relevance of traditional mathematical methods in modern learning. \nThree students also came forward to share their feedback, expressing that the class was informative and beneficial.",
        images: [
            "/uploads/1772246030845.png",
            "/uploads/1772246030866.png",
            "/uploads/1772246030929.png",
            "/uploads/1772246030910.png",
            "/uploads/1772246030915.png",
            "/uploads/1772246030903.png"
        ]
    },
    {
        id: 4,
        title: "LOGO LAUNCH",
        description: "The official logo for the mathematics club, was launched on 23 January 2026 during the Mathematics \nDay Celebration at the ECE Mini Seminar Hall by the chief guest, Mr. P. Devraj, Director of Cosmic \nMaths Foundation. On this occasion, the winner of the Logo Designing Competition, Basil Saji (CSE A, S2), was awarded the prize.",
        images: [
            "/uploads/1772245635022.png",
            "/uploads/1772245635064.png",
            "/uploads/1772245635070.png"
        ]
    }
];

const STATIC_EVENTS = [
    {
        id: 6,
        title: "International Pi Day Celebration",
        date: "14/03/2026",
        location: "BSH Department",
        description: "“Mathematics is the language in which God has written the universe.” — Galileo Galilei\n\n✨This Pi Day, the Mathematics Club ASIET celebrates the beauty of π (pi)—a timeless constant that represents the harmony between mathematics, science, and the universe.\n\n🌐From the circles we draw to the technologies we build, π reminds us that mathematics is infinite in its possibilities and discoveries. Let us celebrate curiosity, logic, and the endless pursuit of knowledge that mathematics inspires.\n\nHappy Pi Day",
        image_path: "/uploads/piday_2026.png",
        link: ""
    }
];

const STATIC_EXECOM = [
    {
        id: 9,
        caption: "Faculty co-ordinators",
        image_path: "/uploads/1772245336557.jpeg"
    },
    {
        id: 8,
        caption: "Chair : Vice Chair",
        image_path: "/uploads/1772245295025.jpeg"
    },
    {
        id: 7,
        caption: "Technical Team",
        image_path: "/uploads/1772245221551.jpeg"
    },
    {
        id: 6,
        caption: "Content Team",
        image_path: "/uploads/1772245193542.jpeg"
    },
    {
        id: 5,
        caption: "Documentation Team",
        image_path: "/uploads/1772245151952.jpeg"
    },
    {
        id: 4,
        caption: "Design Team",
        image_path: "/uploads/1772245096287.jpeg"
    },
    {
        id: 3,
        caption: "Publicity Team",
        image_path: "/uploads/1772245014805.jpeg"
    },
    {
        id: 2,
        caption: "Event Team",
        image_path: "/uploads/1771735322601.jpeg"
    }
];

const STATIC_CONTACT = {
    email: "asietmathematicsclub1234@gmail.com",
    phone: "+91 7736858318",
    instagram_url: "https://www.instagram.com/mathematicsclub_asiet?igsh=MTM1aHp2MGt0eHJhdQ==",
    instagram_handle: "@mathematicsclub_asiet"
};

// ─────────────────────────────────────────────────────────────────────────────
// RENDER FUNCTIONS — No changes needed below this line
// ─────────────────────────────────────────────────────────────────────────────

function loadContact() {
    const info = STATIC_CONTACT;
    const emailEl = document.getElementById('display-email');
    const phoneEl = document.getElementById('display-phone');
    const instaLinkEl = document.getElementById('display-instagram-link');
    const instaHandleEl = document.getElementById('display-instagram-handle');

    if (emailEl) emailEl.textContent = info.email;
    if (phoneEl) phoneEl.textContent = info.phone;
    if (instaLinkEl) instaLinkEl.href = info.instagram_url;
    if (instaHandleEl) instaHandleEl.textContent = info.instagram_handle;
}

function loadActivities() {
    const container = document.getElementById('activities-container');
    if (!container) return;

    const activities = STATIC_ACTIVITIES;

    if (activities.length === 0) {
        container.innerHTML = '<p class="loading-spinner">No activities posted yet. Check back soon!</p>';
        return;
    }

    container.innerHTML = '';

    activities.forEach(activity => {
        const card = document.createElement('div');
        card.className = 'activity-card';

        const images = activity.images || [];
        const mainImageUrl = images[0] || '';

        let galleryHtml = '';
        if (images.length > 1) {
            galleryHtml = `
                <div class="activity-images-gallery">
                    ${images.map(img => `
                        <img src="${img}" alt="${escapeHtml(activity.title)}" class="gallery-thumb" onclick="this.closest('.activity-card').querySelector('.activity-img').src = this.src">
                    `).join('')}
                </div>
            `;
        }

        card.innerHTML = `
            <div class="activity-image-container cursor-pointer">
                <img src="${mainImageUrl}" alt="${escapeHtml(activity.title)}" class="activity-img" onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1_text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22400%22%20height%3D%22200%22%20fill%3D%22%23eee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20id%3D%22holder_1_text%22%20x%3D%22144.3359375%22%20y%3D%22108.5%22%3EImage%20Not%20Found%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'">
            </div>
            <div class="activity-content">
                <h3 class="activity-title">${escapeHtml(activity.title)}</h3>
                <p class="activity-desc">${escapeHtml(activity.description)}</p>
                ${galleryHtml}
            </div>
        `;

        container.appendChild(card);
    });
}

function loadEvents() {
    const container = document.getElementById('events-container');
    if (!container) return;

    const events = STATIC_EVENTS;

    if (events.length === 0) {
        container.innerHTML = '<p class="loading-spinner">No upcoming events scheduled. Stay tuned!</p>';
        return;
    }

    container.innerHTML = '';

    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';

        const imageUrl = event.image_path || 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1_text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A20pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1%22%3E%3Crect%20width%3D%22400%22%20height%3D%22200%22%20fill%3D%22%23eee%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20id%3D%22holder_1_text%22%20x%3D%22144.3359375%22%20y%3D%22108.5%22%3ENo%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

        card.innerHTML = `
            <div class="event-image-container cursor-pointer">
                <img src="${imageUrl}" alt="${escapeHtml(event.title)}" class="event-img">
                <div class="event-date-badge">${escapeHtml(event.date)}</div>
            </div>
            <div class="event-content">
                <h3 class="event-title">${escapeHtml(event.title)}</h3>
                <div class="event-info">
                    <span class="event-location">📍 ${escapeHtml(event.location)}</span>
                </div>
                <p class="event-desc">${escapeHtml(event.description)}</p>
                ${event.link ? `<a href="${event.link}" target="_blank" class="event-link-btn">Learn More</a>` : ''}
            </div>
        `;
        container.appendChild(card);
    });
}

function loadExecomPhotos() {
    const container = document.getElementById('execom-container');
    if (!container) return;

    const photos = STATIC_EXECOM;

    if (photos.length === 0) {
        container.innerHTML = '<p class="loading-spinner">No Execom photos yet. Check back soon!</p>';
        return;
    }

    container.innerHTML = '';

    photos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'execom-card cursor-pointer';
        card.innerHTML = `
            <div class="execom-img-wrapper">
                <img src="${photo.image_path}" alt="${escapeHtml(photo.caption)}" class="execom-img"
                    onerror="this.style.display='none'">
            </div>
            ${photo.caption ? `<p class="execom-caption">${escapeHtml(photo.caption)}</p>` : ''}
        `;
        container.appendChild(card);
    });
}

// Utility to prevent XSS
function escapeHtml(unsafe) {
    if (!unsafe) return '';
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (!lightbox) return;

    // Array of all images currently in the lightbox scope
    let allImages = [];
    let currentIndex = 0;

    function openLightbox(images, index) {
        allImages = images;
        currentIndex = index;
        lightboxImg.src = allImages[currentIndex].src;
        captionText.innerHTML = allImages[currentIndex].alt || '';
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        updateArrows();
    }

    function updateArrows() {
        prevBtn.style.display = allImages.length > 1 ? 'flex' : 'none';
        nextBtn.style.display = allImages.length > 1 ? 'flex' : 'none';
    }

    function navigate(dir) {
        currentIndex = (currentIndex + dir + allImages.length) % allImages.length;
        lightboxImg.src = allImages[currentIndex].src;
        captionText.innerHTML = allImages[currentIndex].alt || '';
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeBtn.onclick = closeLightbox;
    prevBtn.onclick = (e) => { e.stopPropagation(); navigate(-1); };
    nextBtn.onclick = (e) => { e.stopPropagation(); navigate(1); };

    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox();
    };

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'ArrowLeft') navigate(-1);
        }
    });

    // Delegate click to images — collect siblings from the same group
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        const isLightboxable = target.tagName === 'IMG' && (
            target.classList.contains('activity-img') ||
            target.classList.contains('event-img') ||
            target.classList.contains('execom-img') ||
            target.classList.contains('gallery-thumb')
        );
        if (!isLightboxable) return;

        // Find the parent card and collect all images in it
        const card = target.closest('.activity-card, .event-card, .execom-card');
        let siblings;
        if (card) {
            siblings = Array.from(card.querySelectorAll('img.activity-img, img.event-img, img.execom-img, img.gallery-thumb'));
        } else {
            siblings = [target];
        }

        const idx = siblings.indexOf(target) === -1 ? 0 : siblings.indexOf(target);
        openLightbox(siblings, idx);
    });
}
