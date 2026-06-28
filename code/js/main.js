(function () { // This function runs when the page is fully loaded, it is an IIFE and does not need explicit calling.
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // gets the current page name from the URL, defaulting to 'index.html' if the path is empty
    const navLinks = document.querySelectorAll('.panel a'); // finds every a tag within the navigation panel

    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (!href) return; // skips any links without a href attribute

        const linkPage = href.split('/').pop(); // splits the href and gets the page name
        if (linkPage === currentPage) {
            link.classList.add('active'); // adds active class to the matching link
            link.setAttribute('aria-current', 'page'); // allows screen readers to identify the current page assisting the blind or visually impaired users
        }
    });
})();
