function validateForm() {
  const name = document.getElementById("name").value.toString();
  const email = document.getElementById("email").value.toString();
  const message = document.getElementById("message").value.toString();

  // Cek apakah nama tidak kosong
  if (name.trim() === "") {
    alert("Please enter your name");
    return false;
  }

  // Cek apakah email valid
  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Cek apakah pesan tidak kosong
  if (message.trim() === "") {
    alert("Please enter your message");
    return false;
  }

}

function validateEmail(email) {
  // RegEx untuk memeriksa apakah email valid
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

//send Email form function
function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send('service_a5re5kp', 'template_hx75jyi', parms).then(function(response) {
    console.log("Email terkirim: ", response);
    // Mengosongkan nilai-nilai input setelah formulir terkirim
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    // Tampilkan alert dengan SweetAlert
    swal("Email Sent!", "Your email has been sent, I will respond soon. Please wait!", "success");
  }, function(error) {
    console.error("Gagal mengirim email: ", error);
    // Tampilkan alert dengan SweetAlert
    swal("Failed To Send Email!", "Your email failed to send, make sure you have filled out the form properly. Please try again!", "error");
  });
}

// Tambahkan event listener untuk tombol
document.getElementById("tes").addEventListener("click", function(event) {
  // Lakukan validasi sebelum mengirim email
  if (!validateForm()) {
    event.preventDefault(); // Mencegah pengiriman formulir jika validasi gagal
  } else {
    // Panggil fungsi sendMail() hanya jika validasi berhasil
    sendMail();
  }
});
