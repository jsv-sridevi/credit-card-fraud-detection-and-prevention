const verificationForm = document.getElementById('verification-form');
const statusMessage = document.getElementById('status-message');

verificationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const emailOtp = document.getElementById('email-otp').value;
  const mobileOtp = document.getElementById('mobile-otp').value;

  // Send OTPs to the server for verification
  fetch('/verify-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ emailOtp, mobileOtp }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Verification failed');
      }
    })
    .then((data) => {
      if (data.success) {
        statusMessage.textContent = 'Verification successful!';
        // Redirect to the protected page or perform other actions upon successful verification
      } else {
        statusMessage.textContent = data.error || 'Invalid OTPs';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      statusMessage.textContent = 'An error occurred. Please try again.';
    });
});
