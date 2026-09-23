# SIPENSTOK UMKM - Bakpao Suka-Suka
Proyek web interaktif untuk pendataan dan manajemen stok harian **Bakpao Suka-Suka Kampung 4 Tarakan**, dikembangkan untuk memenuhi tugas praktikum **Pemrograman Web** (Kurikulum OBE).

## Informasi Mahasiswa
- **Nama:** Novi Santika Pratiwi
- **NPM:** 2440304019
- **Mata Kuliah:** Pemrograman Web 
- **Program Studi:** Teknik Komputer

## Fitur Utama (Modul 5: DOM, Event, & Web Storage)
1. **Dynamic DOM Rendering:** Merender kartu produk, gambar, harga, dan status stok secara dinamis menggunakan `createElement` dan `replaceChildren`.
2. **Interactive Filtering:** Menyaring data produk berdasarkan kondisi stok (*Semua, Tersedia, Hampir Habis*) secara *real-time*.
3. **Live Search Input:** Fitur pencarian menu bakpao berdasarkan nama menggunakan *event input*.
4. **Event Delegation:** Penanganan interaksi tombol "Lihat Detail" pada setiap kartu produk melalui *event delegation*.
5. **Theme Preference (Web Storage):** Fitur tombol ganti tema (*Dark / Light Mode*) yang preferensinya disimpan secara persisten menggunakan `localStorage`.
6. **Pagination / Limit Storage:** Pengaturan jumlah item per halaman (5/10/20) yang terintegrasi dengan memori *browser*.

## Teknologi yang Digunakan
* **HTML5** (Struktur & Aksesibilitas)
* **CSS3** (Flexbox, CSS Grid, & Custom Variables / Dark Theme)
* **JavaScript (ES Modules)** (Logika interaktif, DOM API, & Web Storage)
* **Laragon 5** (Local Server Environment)

## Cara Menjalankan Proyek
1. Pastikan **Laragon 5** sudah terinstal dan layanan **Apache** dalam kondisi *Running*.
2. Letakkan folder proyek di dalam direktori `C:\laragon\www\pemweb-obe\`.
3. Buka browser dan akses melalui URL: `http://localhost/pemweb-obe/`.

## 📝 Dokumentasi Alur Event & Interaksi (Tugas OBE Modul 5)

Proyek ini mengimplementasikan tiga interaksi bermakna berbasis DOM dan Event:

1. **Filter Kategori Stok (`click` event)**
   - **Alur:** Pengguna mengklik tombol filter (Semua, Tersedia, Hampir Habis). *Event listener* menangkap atribut `data-filter`, lalu menyaring data array `stokBakpao` menggunakan metode `.filter()`. Fungsi `renderItems()` dipanggil untuk memperbarui tampilan kartu produk secara dinamis tanpa *reload* halaman.

2. **Pencarian Menu Real-Time (`input` event)**
   - **Alur:** Pengguna mengetik nama produk pada kotak pencarian (`#search-input`). *Event* `input` membaca ketikan secara langsung, mengubahnya ke huruf kecil, lalu mencocokkannya dengan data produk menggunakan `.includes()`. Daftar menu langsung menyaring hasil di layar secara *real-time*.

3. **Ganti Tema & Web Storage (`click` event & `localStorage`)**
   - **Alur:** Pengguna mengklik tombol ganti tema. Skrip mengubah atribut `data-theme` pada elemen HTML (Dark/Light mode) dan menyimpannya secara persisten menggunakan `localStorage.setItem()`. Saat halaman dimuat ulang (*reload*), preferensi tema dipulihkan kembali dari memori browser.

   