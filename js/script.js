document.addEventListener("DOMContentLoaded", function () {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");

    if (navbarPlaceholder) {
        fetch("nav.html")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to load navbar");
                }
                return response.text();
            })
            .then((html) => {
                navbarPlaceholder.innerHTML = html;

                // Highlight the active navbar link AFTER inserting the navbar
                const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
                const currentPath = window.location.pathname;

                navLinks.forEach((link) => {
                    if (link.getAttribute("href") === currentPath.split("/").pop()) {
                        link.classList.add("active");
                    }
                });
            })
            .catch((error) => {
                console.error(error);
                navbarPlaceholder.innerHTML = "<p>Error loading navbar</p>";
            });
    }
    
});
