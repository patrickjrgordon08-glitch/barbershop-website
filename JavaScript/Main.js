// ======================
// file: js/main.js
// Vintage Barbershop Project
// =====================
// ----- DOM Element -----
const yearE1 = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn")
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById=("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementByid("phoneLink");
const heading = document.getElementById("heading");

// ----- helpers / Functions -----
//UpdATE FOOTER YEAR AUTOMATICALLY
const setCurrentYear = () => {
    const now = new Date();
    yearE1.textContent = now.getFullYear();
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
       if (event,target,tagName === "A") {
        closeMobileMenu();
       }
    });
}

//4) CTA Button: "Book Now" (placeholder behavior)
if (ctaBtn) {
ctaBtn,addEventListener("click", () => {
    updateHeadingText("Booking Coming Next - Great Choice!");
});
}

// 5) Call Button: try to use the phone number in the footer
if (callBtn) {
    callBtn.addEventListener ("click", () => {
        //If you later set phonelink href to tel: this will work perfectly.
        //for now, this is a beginner- friemdly placeholder.
        if (phoneLink) {
            updateHeadingText("call us at" + phoneLink.textContent);
        } else {
                updateHeadingText("Call Feature Coming Soon")
            }
        });
    }

