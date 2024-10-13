document.addEventListener("DOMContentLoaded", function() {
    const foodImages = document.querySelectorAll(".Recipe");
    const searchInput = document.getElementById('search');

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
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();


        foodImages.forEach(recipe => {
            const recipeName = recipe.querySelector('h3').textContent.toLowerCase();
            if (recipeName.includes(filter)) {
                recipe.style.display = '';
            } else {
                recipe.style.display = 'none';
            }
        });
    });
});
