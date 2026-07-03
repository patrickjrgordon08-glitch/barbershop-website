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

