

function increaseText() {
    document.body.style.fontSize = "larger";
}

function decreaseText() {
    document.body.style.fontSize = "smaller";
}

function grayscale() {
    document.body.style.filter = "grayscale(100%)";
}

function highContrast() {
    document.body.style.filter = "contrast(200%)";
}

function negativeContrast() {
    document.body.style.filter = "invert(100%)";
}


function lightBackground() {
    const currentBgColor = document.body.style.backgroundColor;
    
    // Toggle between light and dark backgrounds
    if (currentBgColor === "rgb(245, 245, 245)") {  // RGB for #f5f5f5 (light background)
        document.body.style.backgroundColor = "#222"; // Dark background
        document.body.style.color = "#fff";           // White text
    } else {
        document.body.style.backgroundColor = "#f5f5f5"; // Light background
        document.body.style.color = "#000";               // Black text
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
    // Reset all changes on main-content
    document.querySelector('.main-content').style = '';
    
    // Reset underline on all links
    let links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.textDecoration = '';
    });
    
    // Reset background and text color to light mode
    document.body.style.backgroundColor = "#f5f5f5"; // Light background
    document.body.style.color = "#000";               // Black text

    // Reset grayscale (remove filter)
    document.body.style.filter = ''; // Remove grayscale filter
}



// Menyesuaikan menu aksesibilitas berdasarkan ukuran layar
function adjustAccessibilityMenu() {
    const menu = document.querySelector(".accessibility-tools");
    if (window.innerWidth <= 480) {
        // Pada layar kecil, sembunyikan menu secara default
        menu.classList.add("hidden");
    } else {
        // Pada layar besar, tampilkan menu
        menu.classList.remove("hidden");
    }
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



