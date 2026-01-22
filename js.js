// js.js
// Handles input formatting for card number and CVV fields

document.addEventListener('DOMContentLoaded', function() {
    // Card number formatting (16 digits, grouped by 4)
    var cardInput = document.querySelector('input[name="card_number"]');
    if (cardInput) {
        cardInput.addEventListener('input', function() {
            let value = this.value.replace(/[^0-9]/g, '').slice(0, 16);
            let formatted = value.replace(/(.{4})/g, '$1 ').trim();
            this.value = formatted;
        });
    }

    // CVV formatting (3 digits only)
    var cvvInput = document.querySelector('input[name="cvv"]');
    if (cvvInput) {
        cvvInput.addEventListener('input', function() {
            let value = this.value.replace(/[^0-9]/g, '').slice(0, 3);
            this.value = value;
        });
    }

    // Show selected dish on orders.html
    var params = new URLSearchParams(window.location.search);
    var dish = params.get('dish');
    var price = params.get('price');
    if (dish) {
        var dishDisplay = document.getElementById('selected-dish');
        if (dishDisplay) {
            dishDisplay.textContent = 'You selected: ' + dish;
            dishDisplay.style.display = 'block';
        }
        var priceDisplay = document.getElementById('selected-price');
        if (priceDisplay && price) {
            priceDisplay.textContent = 'Price: ₦' + price;
            priceDisplay.style.display = 'block';
        }
        var thankYouMsg = document.getElementById('thank-you-msg');
        if (thankYouMsg) {
            thankYouMsg.textContent = 'Thank you for choosing ' + dish + '! Please proceed to payment to complete your order.';
        }
    }
});
