# SIPENSTOK UMKM - Bakpao Suka-Suka
Repositori ini dikembangkan untuk memenuhi penugasan praktikum **Pemrograman Web**, khususnya **Modul 4: JavaScript Modern (ES6+), Modules, dan Dasar Async/Error Handling**. Proyek ini berfokus pada penerapan logika pemrograman modern untuk mendata dan mengelola inventaris stok produk kuliner UMKM lokal secara terstruktur.

## Informasi Mahasiswa
- **Nama:** Novi Santika Pratiwi
- **NPM:** 2440304019
- **Mata Kuliah:** Pemrograman Web 
- **Program Studi:** Teknik Komputer

## Teknologi & Fitur yang Digunakan
* **HTML5 & CSS3**: Struktur antarmuka web dan penataan gaya visual katalog produk.
* **JavaScript Modern (ES6+)**:
  * *Arrow Functions* (`=>`) untuk efisiensi penulisan fungsi.
  * *Array Methods* (`filter`, `map`, `reduce`, `find`, `forEach`) untuk pengolahan data inventaris.
  * *Destructuring & Template Literals* untuk penyusunan string dinamis.
* **ES Modules (`import`/`export`)**: Pemisahan logika program modular antara berkas utama (`app.js`) dan berkas utilitas pendukung (`utils.js`).
* **Error Handling Dasar**: Mekanisme penanganan galat menggunakan pengecekan tipe data (`Array.isArray`) dan pelemparan galat kustom (`TypeError`).
* **Git Version Control**: Manajemen kontrol versi dan riwayat rekam jejak pengembangan kode sumber (*commit*).

## Struktur Direktori Proyek
```text
pemweb-obe/
│
├── js/
│   ├── app.js       # Berkas utama logika JavaScript & pemanggilan modul
│   └── utils.js     # Berkas modul fungsi statistik stok dan error handling
│
├── index.html       # Berkas antarmuka utama web
├── styles.css       # Berkas penataan gaya visual
└── README.md        # Dokumentasi proyek


## Cara Menjalankan Proyek
1. Pastikan peladen lokal Laragon (Apache) sudah aktif menyala.
2. Tempatkan direktori proyek ini ke dalam folder direktori peladen lokal (misalnya laragon/www/pemweb-obe/).
3. Buka peramban web (browser) dan akses tautan:
   http://localhost/pemweb-obe/
4. Tekan F12 atau klik kanan lalu pilih Inspect, kemudian arahkan ke tab Console dan Network untuk melihat hasil eksekusi logika pengolahan data serta      verifikasi pemuatan modul JavaScript.

