function menuPage() {
    // This section is for the #content div
    const content = document.getElementById('content');

    // Clear existing content and class
    content.innerHTML = '';
    content.className = '';

    // Apply the grid layout
    content.classList.add('menupage');
    
    // Create and append new elements for the menu page
    const menuItems = document.createElement('div');
    menuItems.classList.add('menuitems');

    const title = document.createElement('h2');
    title.textContent = "DAILY MENUS";

    const titleExplanation = document.createElement('p');
    titleExplanation.textContent = "Two tasting menus are offered daily:";

    const tastingMenuNames = document.createElement('ul');
    tastingMenuNames.className = 'no-bullets';
    
    const tastingMenuItem1 = document.createElement('li');
    tastingMenuItem1.textContent = "CHEF's TASTING MENU";
    tastingMenuNames.appendChild(tastingMenuItem1);
    
    const tastingMenuItem2 = document.createElement('li');
    tastingMenuItem2.textContent = "SEASONAL TASTING MENU";
    tastingMenuNames.appendChild(tastingMenuItem2);

    // Append title, paragraph, and list of tasting menus
    menuItems.appendChild(title);
    menuItems.appendChild(titleExplanation);
    menuItems.appendChild(tastingMenuNames);
    
    // Create div for picture of the right side of the page
    const menuPicture = document.createElement('div');
    menuPicture.classList.add('menupicture');

    // Append everything to content
    content.appendChild(menuItems);
    content.appendChild(menuPicture);
}

export { menuPage };