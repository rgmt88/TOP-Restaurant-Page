function setupPage() {
    window.onload = function() {
        
        // This section is for the #content div
        const content = document.getElementById('content');
        const h2Element = document.createElement('h2');
        h2Element.textContent = 'WELCOME TO OUR WORLD';
        content.appendChild(h2Element);

        // This section is for creating and appending the footer
        const footer = document.createElement('footer');
        footer.id = 'footer';
        const footerText = document.createElement('h5');
        footerText.textContent = '274 W 11th St New York, NY 10014';
        footer.appendChild(footerText);

        const footerLinks = document.createElement('h6');
        footerLinks.innerHTML = 'Terms & Conditions | Privacy Policy';
        footer.appendChild(footerLinks);

        document.body.appendChild(footer);
    };
}

export { setupPage };

