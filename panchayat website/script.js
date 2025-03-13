document.getElementById('document-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your document request has been submitted!');
});

document.getElementById('complaint-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your complaint has been submitted!');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

document.getElementById('scheme-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const schemeName = document.getElementById('scheme-name').value;
    const schemeEmail = document.getElementById('scheme-email').value;
    const schemeDetails = document.getElementById('scheme-details').value;

    const schemeList = document.getElementById('scheme-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${schemeName} - ${schemeDetails}`;

    schemeList.appendChild(listItem);

    alert('New scheme has been published!');

    // Reset the form
    document.getElementById('scheme-form').reset();
});