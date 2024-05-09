
//send Email form function
function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send('service_a5re5kp', 'template_hx75jyi', parms).then(function(response) {
    console.log("Email terkirim: ", response);
    // Tampilkan alert dengan SweetAlert
    swal("Email Sent!", "Your email has been sent, I will respond soon. Please wait!", "success");
  }, function(error) {
    console.error("Gagal mengirim email: ", error);
    // Tampilkan alert dengan SweetAlert
    swal("Failed To Send Email!", "Your email failed to send, make sure you have filled out the form properly. Please try again!", "error");
  });
}

// Tambahkan event listener untuk tombol
document.getElementById("tes").addEventListener("click", function() {
  // Panggil fungsi untuk mengirim email ketika tombol ditekan
  sendMail();
});

document.getElementById("tes").addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah perilaku default dari tombol
  sendMail();
});