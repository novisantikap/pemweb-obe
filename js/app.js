// Mengimpor fungsi dari file utils.js (Konsep ES Modules)
import { ringkasStok } from './utils.js';

// Data produk SIPENSTOK UMKM - Bakpao Suka-Suka (Array of Objects)
const stokBakpao = [
  { id: 1, nama: 'Bakpao Ayam Spesial', kategori: 'Ayam', jumlah: 12, kondisi: 'Tersedia', lokasi: 'Kampung 4', gambar: 'bakpao-ayam.png', harga: 'Rp8.000' },
  { id: 2, nama: 'Bakpao Kacang Hijau', kategori: 'Kacang', jumlah: 18, kondisi: 'Tersedia', lokasi: 'Kampung 4', gambar: 'bakpao-kacang-hijau.png', harga: 'Rp6.000' },
  { id: 3, nama: 'Bakpao Cokelat', kategori: 'Cokelat', jumlah: 25, kondisi: 'Tersedia', lokasi: 'Kampung 4', gambar: 'bakpao-cokelat.png', harga: 'Rp6.000' },
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

        // Tombol Detail pada setiap kartu
        const btnDetail = document.createElement('button');
        btnDetail.textContent = 'Lihat Detail';
        btnDetail.className = 'btn-detail';
        btnDetail.dataset.id = item.id;
        btnDetail.style.cssText = 'display: block; margin-top: 0.75rem; padding: 0.4rem 0.8rem; background-color: #f59e0b; color: white; border: none; border-radius: 0.375rem; cursor: pointer; font-weight: 600; width: 100%;';

        // Container Detail Tersembunyi (Muncul di bawah kartu saat diklik)
        const detailContainer = document.createElement('div');
        detailContainer.className = 'detail-container';
        detailContainer.style.cssText = 'display: none; margin-top: 0.75rem; padding: 0.75rem; background: rgba(0,0,0,0.03); border-radius: 0.375rem; font-size: 0.9rem; border-left: 3px solid #f59e0b;';
        detailContainer.innerHTML = `
            <p><strong>Kategori:</strong> ${item.kategori}</p>
            <p><strong>Lokasi Outlet:</strong> ${item.lokasi}</p>
            <p><strong>Status Stok:</strong> ${item.kondisi}</p>
        `;

        cardBody.append(title, price, badge, btnDetail, detailContainer);
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
// LATIHAN 2: EVENT DELEGATION UNTUK TOMBOL DETAIL (TOGGLE DI BAWAH)
// ==========================================
if (daftar) {
    daftar.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('btn-detail')) {
            const cardBody = e.target.closest('.card-body');
            const detailContainer = cardBody.querySelector('.detail-container');
            
            if (detailContainer) {
                if (detailContainer.style.display === 'none') {
                    detailContainer.style.display = 'block';
                    e.target.textContent = 'Tutup Detail';
                    e.target.style.backgroundColor = '#c0392b'; // Merah saat dibuka
                } else {
                    detailContainer.style.display = 'none';
                    e.target.textContent = 'Lihat Detail';
                    e.target.style.backgroundColor = '#f59e0b'; // Oranye semula
                }
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


// ==========================================
// MODUL 6: FORM VALIDASI & ACCESSIBILITY
// ==========================================
const formPesanan = document.querySelector('#form-pesanan');
const formStatus = document.querySelector('#form-status');

function validateForm(data) {
  const errors = {};
  
  const nama = String(data.get('nama') ?? '').trim();
  const menu = String(data.get('menu') ?? '');
  const jumlah = Number(data.get('jumlah'));
  const telepon = String(data.get('telepon') ?? '').trim();
  const tanggalInput = new Date(data.get('tanggal'));
  
  const hariIni = new Date();
  hariIni.setHours(0, 0, 0, 0);

  if (nama === '') {
    errors.nama = 'Nama pembeli tidak boleh kosong.';
  } else if (nama.length < 3) {
    errors.nama = 'Nama pembeli minimal 3 karakter.';
  }

  if (menu === '') {
    errors.menu = 'Silakan pilih salah satu menu bakpao.';
  }

  if (isNaN(data.get('jumlah')) || data.get('jumlah') === '') {
    errors.jumlah = 'Jumlah pesanan tidak boleh kosong.';
  } else if (!Number.isInteger(jumlah) || jumlah < 1) {
    errors.jumlah = 'Jumlah pesanan harus bilangan bulat minimal 1 pcs.';
  }

  if (telepon === '') {
    errors.telepon = 'Nomor WhatsApp tidak boleh kosong.';
  } else if (telepon.length < 10) {
    errors.telepon = 'Nomor WhatsApp minimal 10 digit.';
  }

  if (data.get('tanggal') === '') {
    errors.tanggal = 'Tanggal pesanan harus diisi.';
  } else if (tanggalInput > hariIni) {
    errors.tanggal = 'Tanggal pesanan tidak boleh melebihi hari ini.';
  }

  return errors;
}

if (formPesanan) {
  // Memberikan warna latar belakang soft pada pembungkus form
  const formWrapper = formPesanan.closest('div');
  if (formWrapper) {
    formWrapper.style.backgroundColor = '#fdf6e2'; 
    formWrapper.style.border = '1px solid #f2e3c6'; 
  }

  formPesanan.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(formPesanan);
    const errors = validateForm(data);

    document.querySelectorAll('.error').forEach(el => el.textContent = '');
    formPesanan.querySelectorAll('[aria-invalid="true"]').forEach(el => el.removeAttribute('aria-invalid'));

    if (Object.keys(errors).length > 0) {
      for (const [field, message] of Object.entries(errors)) {
        const errorElement = document.querySelector(`#error-${field}`);
        if (errorElement) errorElement.textContent = message;
        formPesanan.elements[field]?.setAttribute('aria-invalid', 'true');
      }

      const firstField = Object.keys(errors)[0];
      formPesanan.elements[firstField]?.focus();
      
      formStatus.style.color = '#c0392b';
      formStatus.textContent = 'Periksa kembali data pesanan yang belum valid.';
      return;
    }

    // Jika valid, tampilkan pesan sukses dengan warna soft estetik (tidak hijau terang)
    formStatus.style.color = '#856404';
    formStatus.innerHTML = `
        <strong>Pesanan Berhasil Disimpan!</strong><br>
        - Nama: ${data.get('nama')}<br>
        - Menu: ${data.get('menu')}<br>
        - Jumlah: ${data.get('jumlah')} Pcs<br>
        - No. WA: ${data.get('telepon')}<br>
        - Tanggal: ${data.get('tanggal')}
    `;
    
    formPesanan.reset();
  });
}