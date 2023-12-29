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
});