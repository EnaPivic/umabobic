document.addEventListener("DOMContentLoaded", function() {
    var spracheElement = document.getElementById("sprache");
    var currentLanguage = localStorage.getItem('language') || 'EN'; // Default to 'EN' if not set

    // Initialize the language display
    spracheElement.innerHTML = currentLanguage;

    function change() {
        if (currentLanguage === 'EN') {
            currentLanguage = 'DE';
        } else {
            currentLanguage = 'EN';
        }

        // Update the display and save to localStorage
        spracheElement.innerHTML = currentLanguage;
        localStorage.setItem('language', currentLanguage);
        changeLanguage(currentLanguage);
    }

    spracheElement.addEventListener("click", change);
});
