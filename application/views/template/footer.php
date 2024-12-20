<footer style="background-color: #800000; color: white; padding: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div style="text-align: center; flex: 1; padding: 20px;">
            <img src="asset/logo/logokab.png" alt="Logo Kabupaten Malang" style="width: 100px; height: auto; margin-bottom: 10px;">
            <h2 style="margin: 10px 0;">MALANGKAB.GO.ID</h2>
            <p style="font-weight: bold; margin: 0; font-size: 10px;">IKUTI WEBSITE RESMI KAMI</p>
            <div style="margin: 10px 0;">
                <a href="https://www.facebook.com/malang.kab/" target="_blank" style="margin: 0 10px;">
                    <img src="asset/logo/iconfb.png" alt="Facebook" style="width: 24px; height: 24px;">
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2Fpemkab_malang" target="_blank" style="margin: 0 10px;">
                    <img src="asset/logo/icontwt.png" alt="Twitter" style="width: 24px; height: 24px;">
                </a>
                <a href="https://www.instagram.com/malangkab/" target="_blank" style="margin: 0 10px;">
                    <img src="asset/logo/iconig.png" alt="Instagram" style="width: 24px; height: 24px;">
                </a>
                <a href="https://www.youtube.com/user/HumasKabMalang" target="_blank" style="margin: 0 10px;">
                    <img src="asset/logo/iconyt.png" alt="YouTube" style="width: 24px; height: 24px;">
                </a>
            </div>
        </div>

        <!-- Google Map -->
            <div style="flex: 1; padding: 10px;">
                <section id="google-map" class="gmap" style="height: 200px; padding: 8px; background-color: #ffff; border-radius: auto;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505586.2137401174!2d112.34258649763929!3d-8.112448278464868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6209b5dfc70d9%3A0x3027a76e352bdb0!2sMalang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1568328190680!5m2!1sid!2sid" frameborder="0" style="width: 100%; height: 100%; border:0;" allowfullscreen="" id="fitvid0"></iframe>
                </section>
            </div>
        </div>

    <div style="border-top: 3px solid #650303; margin-top: 20px; padding-top: 10px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
    
        <p style="margin: 0; text-align: left;">
            <span style="font-weight: bold; font-size: larger;">WEBSITE RESMI PEMERINTAH KABUPATEN MALANG</span><br/>
            <span style="font-size: 9px;">Copyright &copy; 2019 All Rights Reserved by Dinas Komunikasi dan Informatika</span><br/>
            <span style="margin: 0; font-size: 9px;">Kabupaten Malang</span>
        </p>
        
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; gap: 15px;">
            <li><a href="https://goo.gl/maps/xyz" style="color: white; text-decoration: none; font-weight: none;">Jl. Agus Salim, Kiduldalem, Kec. Klojen,<br/> 
            Kota Malang, Jawa Timur 65143</a></li>
        </ul>
    </div>
</footer>

<!-- Media Queries for Mobile Responsiveness -->
<style>
    @media (max-width: 768px) {
        footer {
            padding: 10px;
        }
        footer div {
            flex: 100%;
        }
        footer img {
            width: 80px;
        }
        footer h2 {
            font-size: 16px;
        }
        footer p {
            font-size: 8px;
        }
        footer ul {
            flex-direction: column;
            align-items: flex-start;
        }
        footer iframe {
            height: 150px;
        }
    }

    @media (max-width: 480px) {
        footer {
            padding: 8px;
        }
        footer div {
            padding: 5px;
        }
        footer img {
            width: 60px;
        }
        footer h2 {
            font-size: 14px;
        }
        footer p {
            font-size: 7px;
        }
    }
</style>

<script>
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
        let links = document.querySelectorAll('a'); // Seleksi semua elemen <a>
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
</script>
