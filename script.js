document.addEventListener("DOMContentLoaded", function () {

    // 1. Reveal animation for website sections
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.1
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        // Fallback for older browsers
        revealElements.forEach(function (element) {
            element.classList.add("revealed");
        });

    }


    // 2. Mobile navigation menu
    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuButton.setAttribute("aria-expanded", isOpen);

        });

        // Close menu after selecting a link
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });

        });

    }

});
