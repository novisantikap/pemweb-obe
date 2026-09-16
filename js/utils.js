// js/utils.js - Modul untuk fungsi ringkasan data stok UMKM
export function ringkasStok(data) {
  if (!Array.isArray(data)) {
    throw new TypeError('Data harus berupa array');
  }
  return {
    totalJenisMenu: data.length,
    totalKeseluruhanStok: data.reduce((sum, item) => sum + item.jumlah, 0),
    menuHampirHabis: data.filter(item => item.kondisi !== 'Tersedia').length
  };
}

