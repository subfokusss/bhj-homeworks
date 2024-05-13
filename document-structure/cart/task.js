document.addEventListener('DOMContentLoaded', function() {
    const productQuantityControls = document.querySelectorAll('.product__quantity-control');
    const cartProductsContainer = document.querySelector('.cart__products'); // Контейнер для товаров в корзине

    productQuantityControls.forEach(function(control) {
        control.addEventListener('click', function() {
            const product = this.closest('.product');
            const quantityValue = product.querySelector('.product__quantity-value');
            let quantity = parseInt(quantityValue.textContent);

            if (this.classList.contains('product__quantity-control_dec') && quantity > 1) {
                quantityValue.textContent = --quantity;
            } else if (this.classList.contains('product__quantity-control_inc')) {
                quantityValue.textContent = ++quantity;
            }
        });
    });

    const addToCartButtons = document.querySelectorAll('.product__add');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const product = this.closest('.product');
            const productId = product.dataset.id;
            const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
            const cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${productId}"]`);

            if (cartProduct) {
                const cartProductCount = cartProduct.querySelector('.cart__product-count');
                cartProductCount.textContent = parseInt(cartProductCount.textContent) + quantity;
            } else {
                const productImageSrc = product.querySelector('.product__image').src;
                const cartProductHTML = `
                    <div class="cart__product" data-id="${productId}">
                        <img class="cart__product-image" src="${productImageSrc}">
                        <div class="cart__product-count">${quantity}</div>
                    </div>
                `;
                cartProductsContainer.insertAdjacentHTML('beforeend', cartProductHTML);
            }
        });
    });
});