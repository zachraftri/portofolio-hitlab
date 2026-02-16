// Fungsi untuk toggle dark mode
function warnaberubah() {
    // Toggle class 'dark-mode' di body
    document.body.classList.toggle('dark-mode');
    
    // Simpan status dark mode di localStorage
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    // Ubah teks button
    const button = document.getElementById('modeBtn');
    button.textContent = isDark ? 'Light' : 'Dark';
}

// Load preferensi dark mode saat halaman pertama kali load
window.addEventListener('DOMContentLoaded', function() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.getElementById('modeBtn').textContent = 'Light';
    }
});
