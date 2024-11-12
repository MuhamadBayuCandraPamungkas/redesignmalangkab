
    // Periksa apakah browser mendukung Speech Synthesis API
    if ('speechSynthesis' in window) {
        console.log('Speech Synthesis API didukung.');

        // Membaca pesan "Selamat Datang" saat halaman dibuka
        let welcomeMessage = new SpeechSynthesisUtterance("Selamat datang di website resmi pemerintah kabupaten malang.");
        welcomeMessage.lang = 'id-ID'; // Bahasa Indonesia
        speechSynthesis.speak(welcomeMessage);

        // Variabel untuk menyimpan objek SpeechSynthesisUtterance yang aktif
        let utterance = null;

        // Event listener untuk mendeteksi teks yang dipilih pengguna
        document.addEventListener('mouseup', () => {
            // Hentikan suara yang sedang diputar
            if (utterance) {
                speechSynthesis.cancel();
            }

            // Ambil teks yang dipilih pengguna
            let selectedText = window.getSelection().toString().trim();
            if (selectedText) {
                // Membaca teks yang dipilih
                utterance = new SpeechSynthesisUtterance(selectedText);
                utterance.lang = 'id-ID'; // Bahasa Indonesia
                speechSynthesis.speak(utterance);
            }
        });

        // Menghentikan semua suara saat halaman di-refresh atau di-restart
        window.addEventListener('beforeunload', () => {
            speechSynthesis.cancel();
        });

        // Event listener untuk otomatis membaca teks saat hover pada link
        let links = document.querySelectorAll('a,h2,p'); // Seleksi semua elemen <a>
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                // Hentikan suara yang sedang diputar
                if (utterance) {
                    speechSynthesis.cancel();
                }

                // Membaca teks link saat hover
                let linkText = link.innerText.trim();
                if (linkText) {
                    utterance = new SpeechSynthesisUtterance(linkText);
                    utterance.lang = 'id-ID'; // Bahasa Indonesia
                    speechSynthesis.speak(utterance);
                }
            });
        });
    } else {
        console.error('Speech Synthesis API tidak didukung di browser ini.');
    }
