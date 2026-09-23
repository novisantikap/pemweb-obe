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
