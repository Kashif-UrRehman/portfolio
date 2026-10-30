// Mobile Menu Toggle Logic
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    const expanded = !mobileMenu.classList.contains("hidden");
    mobileBtn.setAttribute("aria-expanded", expanded);
});

// Close mobile menu on clicking links
document.querySelectorAll("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

// Copy Contact Details Logic
function copyContactInfo() {
    const contactText =
        "Kashif Ur Rehman | Senior SQA Engineer | Email: kashif196@hotmail.com | Phone: +923228409980 | Lahore, Pakistan";

    // Clipboard fallback strategy
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(contactText);
    } else {
        const textarea = document.createElement("textarea");
        textarea.value = contactText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    const btnText = document.getElementById("copyBtnText");
    btnText.innerText = "Copied to Clipboard!";
    setTimeout(() => {
        btnText.innerText = "Copy Contact Details";
    }, 2500);
}

// Skills Filter Logic
function filterSkills(category) {
    const cards = document.querySelectorAll(".skill-card");
    const buttons = document.querySelectorAll(".skill-btn");

    // Button styling toggle
    buttons.forEach((btn) => {
        btn.classList.remove("bg-emerald-500", "text-slate-950");
        btn.classList.add("bg-slate-800", "text-slate-300");
    });

    event.target.classList.remove("bg-slate-800", "text-slate-300");
    event.target.classList.add("bg-emerald-500", "text-slate-950");

    // Card filter animation logic
    cards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat.includes(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Modal Handlers
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

// Simulated Form Submission
function handleFormSubmit(e) {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    const successMsg = document.getElementById("formSuccess");

    submitBtn.disabled = true;
    submitBtn.innerHTML =
        '<i class="fa-solid fa-spinner animate-spin"></i> Sending...';

    setTimeout(() => {
        submitBtn.parentElement.classList.add("hidden");
        successMsg.classList.remove("hidden");
    }, 1200);
}

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("nav-scrolled");
    } else {
        header.classList.remove("nav-scrolled");
    }
});
