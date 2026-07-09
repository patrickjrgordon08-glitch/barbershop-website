// ======================
// file: js/main.js
// Vintage Barbershop Project
// =====================
// ----- DOM Element -----
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");
const nav = document.getElementById("nav");
const siteHeader = document.querySelector(".site-header");


// ----- Modal Elements ----
const serviceModal = document.getElementById("serviceModal");
const serviceModalOverlay = document.getElementById("serviceModalOverlay");
const serviceModalClose = document.getElementById("serviceModalClose");
const serviceModalTitle = document.getElementById("serviceTitle");
const serviceModalList = document.getElementById("serviceModalList");

// ---- Services Data (array of Objects) -----
const services = [
    {
        id: 1,
        title: "classic haircuts",
        image: "assets/images/feature-1.jpg",
        alt: "Classice Haircuts",
        description:"Timeless cuts with modern precision-tailores to your style.",
        price:25,popular: true,
        detals: [
            "Consultation woith your barber before cut begins.",
            "Hair sectioning and shape-up based on your preferred style.",
            "Profesional clippers, trimmers, and share used for precision.",
            "Hairline cleanup and finishing touches included.",
        ],
    },
    {
        id: 2,
        title: "Beard Trim",
        image: "assets/images/feature-4.jpeg",
        alt: "Beard Trim",
        description: "Sharp and line-up, and refine your beard for a clean finish.",
        price: 15,
        popular: false,
        details: [
            "beard assessment and shaping based on face structure.",
            "line-up around cheeks, jawline, and neckline.",
            "trimmers and details tools used for crisp edges.",
            "conditioning beard product maybe apploed for softness.",
            "Final symmetry check for a polished finish.",
        ],
    },
    {
        id: 3,
        title: "Straight Razor Shave",
        image: "assets/images/feature-3.jpg",
         alt: "Straight Razor Shave",
         description: "Hot towel, smooth shave, and classic barbershop experience.",
         price: 30,
         details: [
            "Hot towel prep to soften facial hair and open pores.",
            "Premium shaving cream or lather applies to protect your skin.",
            "Straight razor shave performed with careful detailing.",
            "Second hot towel maybe used for comfort and cleanup.",
            "Af,tershave or soothing skin product applied after service.",
         ]
    },
    {
        id: 4,
        title: "Fade & Style",
        image: "assets/images/feature-2.jpg",
         alt: "Fade Haircut",
         Description: " A clean fade with finishing deatil for a sharp, modern look.",
         price: 35,
         popular: false,
         detsils: [
            "Style consultation before clippers begins",
            "fade blended to your preferred level and finish",
            "detailing around temples, neckline, and beard area if needed",
            "Scissors and clipper-over-comb maybe used for TextTrackCue.",
            "Styling product added to complet the final look.",
         ],
    },
    {
        id: 5,
        title: "Kids Cut",
        image: "assets/images/feature-1.jpg",
        alt: "Kids Haircut",
        description: "clean, comfortabel haircut servoce for younger clients.",
        price: 20,
        popular: false,
        details: [
            "simple consultation with child and parent if needed.",
            "Age appropriate haircuts with comfort in mind.",
            "careful clipper and scissors work for a clean finish",
            "light cleanup around the neckline and ear.",
            "Styles neatly before leaving thr chair.",
        ],
    },
    {
        id: 6,
        title: "Head Shave",
        image: "assets/images/feature-3.jpg",
         alt: "Kids Head Shave",
          description: "Smooth head shave with classic barbershop treatment",
          price: 28,
          popular: true,
          details: [
            "Scalp prep with warm towel treatment.",
            "Protective shavev product applies before razor work.",
            "Close shave performed for a smooth finish.",
            "Scalp cleaned and checked for even consistency.",
            "Moisturizing scalp product applied after the shave.",
          ],
    },
];
// -------  Sevices Data (Array of Objects) --------

// const services = [
//     {
//     title: "Classic Haircuts", 
//     text: "Timeless cuts with mordern precisiontailired to your style.",
//     image: "assets/images/feature-1.jpg"
// },
// {
//     title: "Beard Trim",
//     text: "Sharp and line-up your beard for a clean, sharp finish.",
//     image: "assets/images/feature-2.jpg",
// },
//     {title: "straight Razor Shave",
//     text: "Hot towel treatment with a smooth traditional shave.",
//     image: "assets/images/feature-3.jpg"
// },
// ];


const navLinks = [
    {label: "Home", href:"#hero"},
    {label: "Services", href: "#features"},
    {label: "Book", href: "#cta"},
    {label: "Contact", href: "#footer"}
];


// --- render Navigation using map methods
const renderNavigation = () => {
    //Deskstop Nav
    if (nav) {
        const navHTML = navLinks.map(link => {
            return `
            <a href="${link.href}" class="nav-link">
            ${link.label}
            </a>
            `;
        }).join("");
        nav.innerHTML = navHTML;
    };

    //Mobile Nav
if (mobileMenu) {
    const mobileHTML = navLinks.map(link => {
    return `
    <a href="${link.href}" class="mobile-link">
    ${link.label}
    </a>
    `;

    }).join("");

    mobileMenu.innerHTML = mobileHTML
};
};



// ---- Render Features Using forEach ------
//     const renderFeatures = () => {
//     if (!featureGrid) return;

//     services.forEach(service => {
//         const card = document.createElement("article");
//         card.classList.add("feature-card");

//         card.innerHTML = `
//         <img src="${service.image}" alt="${service.title}" class="feature-img" />
//         <h3 class="feature-title">${service.title}</h3
//         <p class="feature-text">${service.text}</p>
//         `;

//         featureGrid.appendChild(card);
//     });
// };

// ------ Render features using Maps -------
const renderFeaturesMap = () => {
    const cardsHTML = services.map(service => {
        return `
        <article class="feature-card">
        <img src="${service.image}" alt=${service.title}" class="feature-img"/>
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.text}</p>
        </article>
        `;
    }).join("");

    featureGrid.innerHTML = cardsHTML;
};

// ----- helpers / Functions -----
//UPDATE FOOTER YEAR AUTOMATICALLY
const setCurrentYear = () => {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
};

const handleHeaderOnScroll = () => {
    if(!siteHeader) return;

    if(window.scrollY >10) {
        siteHeader.classList.add("is-scrolled")
    } else {
        siteHeader.classList.remove("is-scrolled");
    }
};

//Toggle mobile menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {
    if (!mobileMenu) return;
    if (isMenuOpen === false) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
};

//close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};

//Reuseable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};

// ----- Event Listener -----

// 1) Set year on page load
setCurrentYear();
// renderFeatures();
renderFeaturesMap();
renderNavigation();
handleHeaderOnScroll();
// Run once on page load incase user refreshes mid-scroll
// 2) Hambuger menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
     toggleMobileMenu();   
    });
}

//3) Close mobile menu when a mobile link is clicked (event delegation)
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
       // if they clicked an <a> inside the menu, close it 
       if (event.target.tagName === "A") {
        closeMobileMenu();
       }
    });
}

//4) CTA Button: "Book Now" (placeholder behavior)
if (ctaBtn) {
ctaBtn.addEventListener("click", () => {
    updateHeadingText("Booking Coming Next - Great Choice!");
});
}

// 5) Call Button: try to use the phone number in the footer
if (callBtn) {
    callBtn.addEventListener("click", () => {
        //If you later set phonelink href to tel: this will work perfectly.
        //for now, this is a beginner- friemdly placeholder.
        if (phoneLink) {
            updateHeadingText("call us at" + phoneLink.textContent);
        } else {
                updateHeadingText("Call Feature Coming Soon");
            }
        });
    }

