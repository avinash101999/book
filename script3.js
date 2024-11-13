document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu function
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    // Add event listener to menu icon
    document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

    // Hide menu when clicking outside
    document.addEventListener('click', (event) => {
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = document.querySelector('.menu-icon');
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Form submission function
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var formData = new FormData(this);
        var data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('https://script.google.com/macros/s/AKfycbwqwZ32GmR15z4M5Y0oYSQAUN3HKi_aPhPAegNoDAeDud9NbLKRvKCiyTc67mRYEoYZ/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.status === 'success') {
                alert(result.message);
            } else {
                alert('There was an error submitting your booking.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your booking.');
        });
    });
});
