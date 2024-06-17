document.getElementById('pay-button').addEventListener('click', function() {
    // Get all input fields
    const cardNumber = document.getElementById('card-number').value;
    const expDate = document.getElementById('exp-date').value;
    const cvv = document.getElementById('cvv').value;
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Validate input fields
    if (cardNumber && expDate && cvv && firstName && lastName && country && city && zipCode && email && phone) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        localStorage.setItem('expiryDate', formattedDate);
        window.location.href = 'success.html';
    } else {
        alert('Please fill in all fields.');
    }
});
