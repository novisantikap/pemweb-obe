// Mengimpor fungsi dari file utils.js (Konsep ES Modules)
import { ringkasStok } from './utils.js';

// Data produk SIPENSTOK UMKM - Bakpao Suka-Suka (Array of Objects)
const stokBakpao = [
  { id: 1, nama: 'Bakpao Ayam Spesial', kategori: 'Ayam', jumlah: 12, kondisi: 'Tersedia', lokasi: 'Kampung 4' },
  { id: 2, nama: 'Bakpao Kacang Hijau', kategori: 'Kacang', jumlah: 18, kondisi: 'Tersedia', lokasi: 'Kampung 4' },
  { id: 3, nama: 'Bakpao Cokelat Lumer', kategori: 'Cokelat', jumlah: 25, kondisi: 'Tersedia', lokasi: 'Kampung 4' },
  { id: 4, nama: 'Bakpao Kacang Tanah', kategori: 'Kacang', jumlah: 4, kondisi: 'Hampir Habis', lokasi: 'Kampung 4' }
];

// 1. Menggunakan filter: Mengambil data menu bakpao yang 'Tersedia'
const menuTersedia = stokBakpao.filter(item => item.kondisi === 'Tersedia');

// 2. Menggunakan map: Mengambil daftar nama menu produknya saja
const daftarMenu = stokBakpao.map(({ nama }) => nama);

// 3. Menggunakan reduce: Menghitung total keseluruhan jumlah stok harian
const totalStokHarian = stokBakpao.reduce((total, item) => total + item.jumlah, 0);

// --- PENGERJAAN LATIHAN E ---
console.log("=== LAPORAN STOK SIPENSTOK UMKM ===");

// Latihan 1: Filter berdasarkan lokasi cabang tertentu
const menuKampung4 = stokBakpao.filter(item => item.lokasi === 'Kampung 4');
console.log("1. Menu di Cabang Kampung 4:", menuKampung4);

// Latihan 2: Mencari menu produk berdasarkan id menggunakan find
const cariMenuId = stokBakpao.find(item => item.id === 2);
console.log("2. Detail Produk ID 2:", cariMenuId);

// Latihan 3: Destructuring dan template literal untuk rincian produk
console.log("3. Rincian Status Stok Menu:");
stokBakpao.forEach(item => {
  const { nama, kategori, jumlah, kondisi } = item; // Destructuring
  console.log(`- Menu: ${nama} [Varian: ${kategori}] | Stok: ${jumlah} pcs | Status: ${kondisi}`);
});

// Menampilkan hasil uji coba pengolahan data utama
console.log("=== UJI COBA DASAR ===");
console.table(menuTersedia);
console.log("Daftar Nama Menu:", daftarMenu);
console.log("Total Stok Harian:", totalStokHarian);

// Menampilkan statistik ringkas dari modul utils.js
console.log("=== STATISTIK RINGKASAN STOK (UTILS) ===");
console.log("Ringkasan Data Stok:", ringkasStok(stokBakpao));

