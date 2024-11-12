

function increaseText() {
    document.body.style.fontSize = "larger";
}

function decreaseText() {
    document.body.style.fontSize = "smaller";
}

function grayscale() {
    document.querySelector('.main-content').style.filter = "grayscale(100%)";
}

function highContrast() {
    document.querySelector('.main-content').style.filter = "contrast(200%)";
}

function negativeContrast() {
    document.querySelector('.main-content').style.filter = "invert(100%)";
}

function lightBackground() {
    const currentBgColor = document.body.style.backgroundColor;
    
    if (currentBgColor === "rgb(245, 245, 245)") {  // Warna #f5f5f5 dalam RGB
        document.body.style.backgroundColor = "#222"; // Background gelap
        document.body.style.color = "#fff";           // Teks putih
    } else {
        document.body.style.backgroundColor = "#f5f5f5"; // Background terang
        document.body.style.color = "#000";               // Teks hitam
    }
}

function underlineLinks() {
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.textDecoration = 'underline';
    });
}

function readableFont() {
    document.body.style.fontFamily = 'Arial, sans-serif';
}

function resetSettings() {
    // Reset semua perubahan pada main-content
    document.querySelector('.main-content').style = '';
    
    // Reset underline pada semua link
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.textDecoration = '';
    });
}

function toggleAccessibilityMenu() {
    const menu = document.querySelector(".accessibility-tools"); // Menggunakan .accessibility-tools sesuai dengan HTML
    
    // Jika menu saat ini tersembunyi, tampilkan; jika sudah tampil, sembunyikan
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

function addEffect(button) {
    button.classList.add('effect'); // Tambahkan kelas 'effect' untuk efek visual
    setTimeout(() => {
        button.classList.remove('effect'); // Hapus kelas 'effect' setelah 300ms
    }, 300); // Durasi harus sesuai dengan CSS transition duration
}

