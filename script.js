// Highlight Active Page in Navbar
window.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop();
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Form Validation for Contact Page
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
                event.preventDefault();
            }
        });
    }
});

// Dark/Light Mode Toggle
document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeButton = document.createElement("button");
    toggleThemeButton.textContent = "Toggle Dark Mode";
    toggleThemeButton.classList.add("btn", "btn-dark", "theme-toggle");
    document.body.prepend(toggleThemeButton);

    toggleThemeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});

// Fade-in Animation on Scroll
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => observer.observe(element));
});

// Modal Pop-ups for Project Previews
document.addEventListener("DOMContentLoaded", function() {
    const projectLinks = document.querySelectorAll(".project a");
    projectLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const modal = document.createElement("div");
            modal.classList.add("modal-overlay");
            modal.innerHTML = `
                <div class="modal-content">
                    <h2>Project Preview</h2>
                    <p>Loading project details...</p>
                    <button class="close-modal">Close</button>
                </div>
            `;
            document.body.appendChild(modal);
            modal.querySelector(".close-modal").addEventListener("click", () => modal.remove());
        });
    });
});
