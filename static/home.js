document.addEventListener("DOMContentLoaded", () => {
    const body = document.body,
        sidebar = document.querySelector(".sidebar"),
        toggle = document.querySelector(".toggle"),
        modeSwitch = document.querySelector(".toggle-switch"),
        modeText = document.querySelector(".mode-text"),
        home = document.querySelector(".home");

    // Hapus kelas 'close' dari sidebar saat halaman home dimuat
    sidebar.classList.remove("close");

    // Toggle sidebar ketika tombol panah ditekan
    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");

        // Cek apakah sidebar mengecil atau tidak
        const isSidebarClosed = sidebar.classList.contains("close");

        // Tampilkan atau sembunyikan tulisan Logout sesuai dengan kondisi sidebar
        const logoutButton = document.querySelector(".bottom-content li a");

        if (isSidebarClosed) {
            // Sidebar mengecil
            logoutButton.classList.add("hidden");
        } else {
            // Sidebar membesar
            logoutButton.classList.remove("hidden");
        }
    });

    // Fungsi untuk menoggle dark mode
    function toggleDarkMode() {
        // Toggle kelas 'dark' pada body
        body.classList.toggle("dark");

        // Cek apakah dark mode diaktifkan atau tidak
        const isDarkModeEnabled = body.classList.contains("dark");

        // Simpan status dark mode ke local storage
        localStorage.setItem('dark-mode', isDarkModeEnabled ? 'enabled' : 'disabled');

        // Ganti teks mode sesuai dengan kondisi
        if (isDarkModeEnabled) {
            modeText.innerText = "Light Mode";
        } else {
            modeText.innerText = "Dark Mode";
        }
    }

    // Tambahkan event listener ke tombol mode switch
    modeSwitch.addEventListener("click", toggleDarkMode);

    // Event listener untuk menghilangkan elemen home saat discroll ke bawah
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            home.style.opacity = "0";
            home.style.pointerEvents = "none"; // Agar tidak dapat di-klik
        } else {
            home.style.opacity = "1";
            home.style.pointerEvents = "auto"; // Mengembalikan ke keadaan normal
        }
    });

    // Update 29 Desember 2023
    // Event listener untuk tombol 1
    const button1 = document.getElementById("button1");
    button1.addEventListener("click", () => {
        // Logika atau tindakan yang ingin dilakukan saat tombol 1 diklik
        console.log("Button 1 clicked");
    });

    // Event listener untuk tombol 2
    const button2 = document.getElementById("button2");
    button2.addEventListener("click", () => {
        // Logika atau tindakan yang ingin dilakukan saat tombol 2 diklik
        console.log("Button 2 clicked");
    });

    // Event listener untuk tombol 3
    const button3 = document.getElementById("button3");
    button3.addEventListener("click", () => {
        // Logika atau tindakan yang ingin dilakukan saat tombol 3 diklik
        console.log("Button 3 clicked");
    });

    // Event listener untuk tombol 4
    const button4 = document.getElementById("button4");
    button4.addEventListener("click", () => {
        // Logika atau tindakan yang ingin dilakukan saat tombol 4 diklik
        console.log("Button 4 clicked");
    });

    // Event listener untuk tombol 5
    const button5 = document.getElementById("button5");
    button5.addEventListener("click", () => {
        // Logika atau tindakan yang ingin dilakukan saat tombol 5 diklik
        console.log("Button 5 clicked");
    });

    // Akhir update 29 Desember 2023
});