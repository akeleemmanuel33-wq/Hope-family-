document.getElementById("call-btn").addEventListener("click", function() {
    window.location.href = "tel:+2348059827095";
});

document.getElementById("pay-btn").addEventListener("click", function() {
    // Opay payment integration API
    // Replace with your own API credentials and implementation
    var amount = document.getElementById("amount").value;
    var paymentGatewayUrl = "(link unavailable)";
    var paymentGatewayApiKey = "YOUR_API_KEY_HERE";

    // Make API request to initiate payment
    fetch(paymentGatewayUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + paymentGatewayApiKey
        },
        body: JSON.stringify({
            "amount": amount,
            "recipient": "8059827095",
            "payment_method": "debit_card"
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle payment response
        console.log(data);
    })
    .catch(error => {
        // Handle payment error
        console.error(error);
    });
});
function toggleMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
}