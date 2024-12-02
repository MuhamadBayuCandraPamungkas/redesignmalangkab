if ('speechSynthesis' in window) {
    console.log('Speech Synthesis API didukung.');

    // Variabel untuk menyimpan objek SpeechSynthesisUtterance yang aktif
    let utterance = null;

    // Fungsi untuk membaca teks yang diberikan
    function speakText(text) {
        if (utterance) {
            speechSynthesis.cancel();
        }
        utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID'; // Bahasa Indonesia
        speechSynthesis.speak(utterance);
    }

    // Event listener untuk mendeteksi teks yang dipilih pengguna
    document.addEventListener('mouseup', () => {
        let selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            speakText(selectedText);
        }
    });

    // Membaca teks link saat hover
    let links = document.querySelectorAll('a,h2,p'); 
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            let linkText = link.innerText.trim();
            if (linkText) {
                speakText(linkText);
            }
        });
    });

    // Membaca menu aksesibilitas saat hover
    let accessibilityButtons = document.querySelectorAll('.accessibility-tools button');
    accessibilityButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            let buttonText = button.innerText.trim();
            if (buttonText) {
                speakText(buttonText);
            }
        });
    });

    // Hentikan semua suara saat halaman di-refresh atau di-restart
    window.addEventListener('beforeunload', () => {
        speechSynthesis.cancel();
    });
} else {
    console.error('Speech Synthesis API tidak didukung di browser ini.');
}
