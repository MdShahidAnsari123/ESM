document.addEventListener('DOMContentLoaded', function() {
    // Initialize the shopping cart
    const cart = {
        items: [],
        addItem: function(item) {
            this.items.push(item);
            this.updateCart();
        },
        removeItem: function(itemId) {
            this.items = this.items.filter(item => item.id !== itemId);
            this.updateCart();
        },
        updateItem: function(itemId, quantity) {
            const item = this.items.find(item => item.id === itemId);
            if (item) {
                item.quantity = quantity;
                this.updateCart();
            }
        },
        updateCart: function() {
            // Logic to update the cart display
            this.renderCart();
        },
        renderCart: function() {
            const cartContainer = document.getElementById('cart-container');
            cartContainer.innerHTML = ''; // Clear existing cart items
            this.items.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <span>${item.name}</span>
                    <span>${item.price}</span>
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="item-quantity">
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                `;
                cartContainer.appendChild(cartItem);
            });
            this.updateCartSummary();
        },
        updateCartSummary: function() {
            const total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const summaryContainer = document.getElementById('cart-summary');
            summaryContainer.innerHTML = `Total: $${total.toFixed(2)} | Items: ${this.items.length}`;
        }
    };

    // Event listeners for adding items to the cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.dataset.id;
            const itemName = this.dataset.name;
            const itemPrice = parseFloat(this.dataset.price);
            const itemQuantity = 1; // Default quantity
            cart.addItem({ id: itemId, name: itemName, price: itemPrice, quantity: itemQuantity });
        });
    });

    // Event delegation for removing items and updating quantities
    document.getElementById('cart-container').addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item')) {
            const itemId = event.target.dataset.id;
            cart.removeItem(itemId);
        }
    });

    document.getElementById('cart-container').addEventListener('input', function(event) {
        if (event.target.classList.contains('item-quantity')) {
            const itemId = event.target.dataset.id;
            const quantity = parseInt(event.target.value);
            cart.updateItem(itemId, quantity);
        }
    });
});