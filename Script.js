


document.addEventListener("DOMContentLoaded", function() {

    const foodImages = document.querySelectorAll(".Recipe");

    foodImages.forEach(image => {
        image.addEventListener("click", () => {
            const recipePath = image.getAttribute("recipe-page");
            if (recipePath) {
                window.location.href =recipePath;
            } else {
                console.error("Recipe path not found for this .");
            }
        });

        image.style.cursor = "pointer";
    });
});
