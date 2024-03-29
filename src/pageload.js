function setupPage() {
        
    // This section is for the #content div
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.className = '';

    content.classList.add('pageload');

    const h2Element = document.createElement('h2');
    h2Element.textContent = 'WELCOME TO OUR WORLD';
    content.appendChild(h2Element);
}

export { setupPage };

