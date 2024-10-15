document.addEventListener("DOMContentLoaded", function() {
    const foodImages = document.querySelectorAll(".Recipe");
    const searchInput = document.getElementById('search');
    const noResults = document.getElementById('no-results');
    const recipesec = document.getElementById('scroller');
    const gotorecipe = document.getElementById('recipe-button');
    const loader = document.querySelector('.loader');

    // Display the loader initially
    loader.style.display = 'none';

    // Hide the loader when the page is fully loaded
    window.addEventListener('load', function() {
        loader.style.display = 'none';
    });

    gotorecipe.addEventListener('click',function () {
        recipesec.scrollIntoView({behavior:'smooth'});

    });

    foodImages.forEach(image => {
        image.addEventListener("click", () => {
            const recipePath = image.getAttribute("recipe-page");
            if (recipePath) {
                window.location.href = recipePath;
            } else {
                console.error("Recipe path not found for this.");
            }
        });
        image.style.cursor = "pointer";
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        let found = false;

        foodImages.forEach(recipe => {
            const recipeName = recipe.querySelector('h3').textContent.toLowerCase();
            if (recipeName.includes(filter)) {
                recipe.style.display = '';
                found = true;
            } else {
                recipe.style.display = 'none';
            }
        });

        if (!found) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    });
});