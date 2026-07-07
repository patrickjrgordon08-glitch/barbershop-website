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

// -------  Sevices Data (Array of Objects) --------

const services = [
    {
    title: "Classic Haircuts", 
    text: "Timeless cuts with mordern precisiontailired to your style.",
    image: "assets/images/feature-1.jpg"
},
{
    title: "Beard Trim",
    text: "Sharp and line-up your beard for a clean, sharp finish.",
    image: "assets/images/feature-2.jpg",
},
    {title: "straight Razor Shave",
    text: "Hot towel treatment with a smooth traditional shave.",
    image: "assets/images/feature-3.jpg"
},
];

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
        siteHeader.classList.remove("is scrolled");
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

