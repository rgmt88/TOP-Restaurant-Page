import './style.css';

import { setupPage } from './pageload';

import { menuPage } from './menu';

import { contactPage } from './contact';

document.addEventListener('DOMContentLoaded', () => {
    setupPage();
    
    const homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', setupPage);
    
    const menuButton = document.getElementById('menuButton');
    menuButton.addEventListener('click', menuPage);

    const contactButton = document.getElementById('contactButton');
    contactButton.addEventListener('click', contactPage);
})

