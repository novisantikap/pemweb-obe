// Mengimpor fungsi dari file utils.js (Konsep ES Modules)
import { ringkasStok } from './utils.js';

// Data produk SIPENSTOK UMKM - Bakpao Suka-Suka (Array of Objects)
const stokBakpao = [
  { id: 1, nama: 'Bakpao Ayam Spesial', kategori: 'Ayam', jumlah: 12, kondisi: 'Tersedia', lokasi: 'Kampung 4', gambar: 'bakpao-ayam.png', harga: 'Rp8.000' },
  { id: 2, nama: 'Bakpao Kacang Hijau', kategori: 'Kacang', jumlah: 18, kondisi: 'Tersedia', lokasi: 'Kampung 4', gambar: 'bakpao-kacang-hijau.png', harga: 'Rp6.000' },
  { id: 3, nama: 'Bakpao Cokelat Lumer', kategori: 'Cokelat', jumlah: 25, kondisi: 'Tersedia', lokasi: 'Kampung 4', gambar: 'bakpao-cokelat.png', harga: 'Rp6.000' },
  { id: 4, nama: 'Bakpao Kacang Tanah', kategori: 'Kacang', jumlah: 4, kondisi: 'Hampir Habis', lokasi: 'Kampung 4', gambar: 'bakpao-kacang-tanah.png', harga: 'Rp6.000' }
];

// Pengolahan data dasar
const menuTersedia = stokBakpao.filter(item => item.kondisi === 'Tersedia');
const daftarMenu = stokBakpao.map(({ nama }) => nama);
const totalStokHarian = stokBakpao.reduce((total, item) => total + item.jumlah, 0);

console.log("=== LAPORAN STOK SIPENSTOK UMKM ===");
console.table(menuTersedia);
console.log("Statistik Ringkasan Stok (Utils):", ringkasStok(stokBakpao));

// ==========================================
// MODUL 5: DOM, EVENT, & DYNAMIC RENDERING
// ==========================================

const daftar = document.querySelector('#daftar-alat');
const tombolFilter = document.querySelectorAll('[data-filter]');

// Fungsi renderItems menggunakan createElement
function renderItems(items) {
    if (!daftar) return;
    daftar.replaceChildren(); // Membersihkan container

    for (const item of items) {
        const article = document.createElement('article');
        article.className = 'card';

        // Gambar Produk (.png)
        const img = document.createElement('img');
        img.src = item.gambar;
        img.alt = item.nama;
        img.className = 'card-img';
        img.onerror = function() { this.style.display = 'none'; };

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h3');
        title.textContent = item.nama;

        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = item.harga;

        const badge = document.createElement('span');
        badge.className = item.kondisi === 'Tersedia' ? 'badge badge-success' : 'badge badge-danger';
        badge.textContent = `Sisa Stok: ${item.jumlah} Pcs`;
        if (item.kondisi === 'Hampir Habis') {
            badge.textContent += ' (Hampir Habis)';
        }

        // LATIHAN 2: Tombol Detail pada setiap kartu
        const btnDetail = document.createElement('button');
        btnDetail.textContent = 'Lihat Detail';
        btnDetail.className = 'btn-detail';
        btnDetail.dataset.id = item.id;
        btnDetail.style.cssText = 'display: block; margin-top: 0.75rem; padding: 0.4rem 0.8rem; background-color: #f59e0b; color: white; border: none; border-radius: 0.375rem; cursor: pointer; font-weight: 600; width: 100%;';

        cardBody.append(title, price, badge, btnDetail);
        article.append(img, cardBody);
        daftar.append(article);
    }
}

// Event Listener untuk Tombol Filter
tombolFilter.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        const hasil = filter === 'Semua'
            ? stokBakpao
            : stokBakpao.filter(item => item.kondisi === filter);
        
        renderItems(hasil);
    });
});


// ==========================================
// LATIHAN 1: PENCARIAN BERDASARKAN NAMA (EVENT INPUT)
// ==========================================
const searchInput = document.querySelector('#search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase();
        const hasilPencarian = stokBakpao.filter(item => 
            item.nama.toLowerCase().includes(keyword)
        );
        renderItems(hasilPencarian);
    });
}


// ==========================================
// LATIHAN 2: EVENT DELEGATION UNTUK TOMBOL DETAIL
// ==========================================
if (daftar) {
    daftar.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-detail')) {
            const idProduk = Number(e.target.dataset.id);
            const produkDipilih = stokBakpao.find(item => item.id === idProduk);
            
            if (produkDipilih) {
                alert(`Detail Produk:\n- Nama: ${produkDipilih.nama}\n- Kategori: ${produkDipilih.kategori}\n- Harga: ${produkDipilih.harga}\n- Sisa Stok: ${produkDipilih.jumlah} Pcs\n- Lokasi: ${produkDipilih.lokasi}`);
            }
        }
    });
}


// ==========================================
// LATIHAN 3: LOCALSTORAGE UNTUK JUMLAH ITEM PER HALAMAN
// ==========================================
const limitSelect = document.querySelector('#limit-select');
const savedLimit = localStorage.getItem('itemsLimit') ?? '5';

if (limitSelect) {
    limitSelect.value = savedLimit;

    limitSelect.addEventListener('change', (e) => {
        const selectedLimit = e.target.value;
        localStorage.setItem('itemsLimit', selectedLimit);
        const limitedData = stokBakpao.slice(0, Number(selectedLimit));
        renderItems(limitedData);
    });

    // Render awal berdasarkan localstorage limit
    const initialData = stokBakpao.slice(0, Number(savedLimit));
    renderItems(initialData);
} else {
    renderItems(stokBakpao);
}


// ==========================================
// MODUL 5: WEB STORAGE (PREFERENSI TEMA)
// ==========================================
const themeButton = document.querySelector('#theme-button');
const savedTheme = localStorage.getItem('theme') ?? 'light';
document.documentElement.dataset.theme = savedTheme;

if (themeButton) {
    themeButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme;
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem('theme', nextTheme);
    });
}

