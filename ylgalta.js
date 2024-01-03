document.addEventListener('DOMContentLoaded', function () {
        const turulDropdown = document.querySelector('.turul');
        const products = document.querySelectorAll('.product_page article');
        turulDropdown.addEventListener('change', function () {
            const selectedCategory = turulDropdown.value;
            products.forEach(function (product) {
                const category = product.classList.contains(selectedCategory) || selectedCategory === 'none';
                product.style.display = category ? 'block' : 'none';
            });
        });
    });