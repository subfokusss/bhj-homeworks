document.addEventListener('DOMContentLoaded', function() {
    const productQuantityControls = document.querySelectorAll('.product__quantity-control');
    const cart = document.querySelector('.cart');

    productQuantityControls.forEach(function(control) {
        control.addEventListener('click', function() {
            const product = this.closest('.product');
            const productId = product.dataset.id;
            const quantityValue = product.querySelector('.product__quantity-value');
            let quantity = parseInt(quantityValue.textContent);

            if (this.classList.contains('product__quantity-control_dec')) {
                if (quantity > 1) {
                    quantity--;
                    quantityValue.textContent = quantity;
                }
            }
            else if (this.classList.contains('product__quantity-control_inc')) {
                quantity++;
                quantityValue.textContent = quantity;
            }
        });
    });

    const addToCartButtons = document.querySelectorAll('.product__add');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const product = this.closest('.product');
            const productId = product.dataset.id;
            const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
            const cartProduct = cart.querySelector(`.cart_product[data-id="${productId}"]`);

            if (cartProduct) {
                const cartProductCount = cartProduct.querySelector('.cart_product-count');
                const currentCount = parseInt(cartProductCount.textContent);
                cartProductCount.textContent = currentCount + quantity;
            } else {
                const cartProductTemplate = document.createElement('div');
                cartProductTemplate.classList.add('cart_product');
                cartProductTemplate.dataset.id = productId;

                const productImage = product.querySelector('.product__image').cloneNode(true);
                cartProductTemplate.appendChild(productImage);

                const productCount = document.createElement('div');
                productCount.classList.add('cart_product-count');
                productCount.textContent = quantity;
                cartProductTemplate.appendChild(productCount);

                cart.appendChild(cartProductTemplate);
            }
        });
    });
});