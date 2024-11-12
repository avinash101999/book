document.addEventListener('DOMContentLoaded', () => {
    // Location finder function
    function findLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        alert("Latitude: " + position.coords.latitude + "\nLongitude: " + position.coords.longitude);
    }

    // Add event listener to location finder button
    document.querySelector('.location-finder button').addEventListener('click', findLocation);

    // Toggle category function
    function toggleCategory(categoryId) {
        const category = document.getElementById(categoryId);
        if (category.style.display === "none" || category.style.display === "") {
            category.style.display = "block";
        } else {
            category.style.display = "none";
        }
    }

    // Add event listeners to service categories
    const categories = document.querySelectorAll('.service-category');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const subcategory = category.querySelector('.subcategory');
            if (subcategory.style.display === "none" || subcategory.style.display === "") {
                subcategory.style.display = "block";
            } else {
                subcategory.style.display = "none";
            }
        });
    });

    // Form submission function
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();

        var formData = new FormData(this);
        var data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('https://script.google.com/macros/s/AKfycbxcM5IzxmdT_b3K4AqyxZbJUwGniYSaJ_ixwhqdu3LGWMwxYa712YMvRw0rMExx_y5Gfg/exec', {
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
