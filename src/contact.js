function contactPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.className = '';

    content.classList.add('contactpage');

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'CONTACT'

    // Phone
    const phoneLink = document.createElement('a');
    phoneLink.href = 'tel:+12123336699';
    phoneLink.textContent = '+ 1 212 333 6699'
    const h3Phone = document.createElement('h3');
    h3Phone.appendChild(phoneLink);

    // Email
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:info@silvia-roberto.com'
    emailLink.textContent = 'info@silvia-roberto.com'
    const h3Email = document.createElement('h3');
    h3Email.appendChild(emailLink);

    // Address
    const h3Address = document.createElement('h3');
    const addressLink = document.createElement('a');
    const addressText = '274 W 11th St New York, NY 10014';
    addressLink.href = 'https://maps.app.goo.gl/5h9MSRHt8ZZmXSnh9';
    addressLink.textContent = addressText;
    h3Address.appendChild(addressLink);

    // Hours
    const h2Hours = document.createElement('h2');
    h2Hours.textContent = 'DAILY HOURS';
    const hoursInfo = document.createElement('p');
    hoursInfo.innerHTML = '<strong>Lunch:</strong> Tuesday - Sunday: 12:00pm - 3:00pm<br><strong>Dinner:</strong> Tuesday - Sunday: 5:00pm - 10:00pm'

    // const h3Lunch = document.createElement('h3');
    // h3Lunch.textContent = 'lunch';
    // const h3LunchTime = document.createElement('h3');
    // h3LunchTime.textContent = 'tuesday - sunday: 12:00pm - 3:00pm';

    // const h3Dinner = document.createElement('h3');
    // h3Dinner.textContent = 'dinner';
    // const h3DinnerTime = document.createElement('h3');
    // h3DinnerTime.textContent = 'tuesday - sunday: 5:00pm - 10:00pm';

    content.appendChild(contactTitle);
    content.appendChild(h3Phone);
    content.appendChild(h3Email);
    content.appendChild(h3Address);
    content.appendChild(h2Hours);
    content.appendChild(hoursInfo);
}

export { contactPage };