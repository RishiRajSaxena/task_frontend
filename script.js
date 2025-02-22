// Function to toggle fields and calculate total
function toggleFields(box) {
    // Remove active class from all boxes and hide extra fields
    document.querySelectorAll('.box').forEach(b => {
        b.classList.remove('active');
        b.querySelector('.extra-fields').style.display = 'none';
    });

    // Add active class to clicked box
    box.classList.add('active');

    // Ensure the radio button inside is checked
    box.querySelector('input[type="radio"]').checked = true;

    // Show the extra fields for the selected box
    box.querySelector('.extra-fields').style.display = 'block';

    // Update the total price
    updateTotal();
}

// Function to update the total price
function updateTotal() {
    let total = 0;

    // Loop through each box and check the selected radio button
    document.querySelectorAll('.box').forEach(box => {
        const radio = box.querySelector('input[type="radio"]');
        const priceText = box.querySelector('.price');
        const price = parseFloat(priceText.textContent.replace('$', '').replace(' USD', ''));

        // If the radio button is checked, add its price to the total
        if (radio.checked) {
            total += price;
        }
    });

    // Select the div that displays the total price and update it
    const totalElement = document.querySelector('.price-delivery div:nth-child(2)');
    totalElement.textContent = `Total : $${total.toFixed(2)} USD`;
}
