
const form = document.getElementById("workshopForm");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");

const namaCount = document.getElementById("namaCount");
const previewNama = document.getElementById("previewNama");
const previewEmail = document.getElementById("previewEmail");
const previewSesi = document.getElementById("previewSesi");

const message = document.getElementById("message");

// Menghitung karakter dan menampilkan nama
nama.addEventListener("input", function() {
    namaCount.textContent = nama.value.length + "/50 karakter";
    previewNama.textContent = nama.value || "-";
});

// Menampilkan email secara langsung
email.addEventListener("input", function() {
    previewEmail.textContent = email.value || "-";
});

// Menampilkan pilihan sesi
sesi.addEventListener("change", function() {
    previewSesi.textContent = sesi.value || "-";
});

// Validasi dan proses pendaftaran
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const namaError = document.getElementById("namaError");
    const emailError = document.getElementById("emailError");
    const sesiError = document.getElementById("sesiError");

    namaError.textContent = "";
    emailError.textContent = "";
    sesiError.textContent = "";
    message.textContent = "";
    message.className = "";

    let valid = true;

    // Validasi nama
    if (nama.value.trim() === "") {
        namaError.textContent = "Nama wajib diisi!";
        valid = false;
    } else if (nama.value.trim().length < 3) {
        namaError.textContent = "Nama minimal 3 karakter!";
        valid = false;
    } else if (nama.value.length > 50) {
        namaError.textContent = "Nama maksimal 50 karakter!";
        valid = false;
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Masukkan alamat email yang valid!";
        valid = false;
    }

    // Validasi sesi
    if (sesi.value === "") {
        sesiError.textContent = "Silakan pilih sesi workshop!";
        valid = false;
    }

    // Pesan hasil pendaftaran
    if (valid) {
        message.textContent =
            "✓ Pendaftaran berhasil! Terima kasih telah mendaftar.";
        message.className = "success";
    } else {
        message.textContent =
            "Pendaftaran gagal. Silakan periksa kembali data Anda.";
        message.className = "failed";
    }
});

// Tombol reset
form.addEventListener("reset", function() {
    setTimeout(function() {
        namaCount.textContent = "0/50 karakter";

        previewNama.textContent = "-";
        previewEmail.textContent = "-";
        previewSesi.textContent = "-";

        document.getElementById("namaError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("sesiError").textContent = "";

        message.textContent = "";
        message.className = "";
    }, 0);
});
