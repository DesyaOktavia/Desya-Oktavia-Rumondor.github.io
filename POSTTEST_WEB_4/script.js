document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
  
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      setTimeout(() => target.removeAttribute('tabindex'), 1000);
    });
  });
  
  function buatModal() {
    const latar = document.createElement('div');
    Object.assign(latar.style, {
      position: 'fixed',
      inset: '0',
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px'
    });
  
    const bungkus = document.createElement('div');
    Object.assign(bungkus.style, {
      maxWidth: '920px',
      maxHeight: '90vh',
      overflow: 'auto',
      textAlign: 'center'
    });
  
    const gambar = document.createElement('img');
    Object.assign(gambar.style, {
      maxWidth: '100%',
      maxHeight: '80vh',
      borderRadius: '6px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
    });
  
    const teks = document.createElement('div');
    Object.assign(teks.style, {
      marginTop: '10px',
      color: '#fff',
      fontSize: '0.95rem'
    });
  
    bungkus.appendChild(gambar);
    bungkus.appendChild(teks);
    latar.appendChild(bungkus);
  
    function buka(src, judul) {
      gambar.src = src;
      teks.textContent = judul || '';
      document.body.appendChild(latar);
      document.body.style.overflow = 'hidden';
    }
  
    function tutup() {
      if (latar.parentNode) latar.remove();
      document.body.style.overflow = '';
    }
  
    latar.addEventListener('click', e => { if (e.target === latar) tutup(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') tutup(); });
  
    return { buka };
  }
  
  const modal = buatModal();
  
  document.querySelectorAll('.koleksi-item img').forEach(gambar => {
    let teksAlt = gambar.alt || '';
    if (!teksAlt) {
      const judul = gambar.closest('.koleksi-item')?.querySelector('h3');
      if (judul) teksAlt = judul.textContent.trim();
    }
  
    gambar.classList.add('koleksi-thumb');
    gambar.tabIndex = 0;
  
    gambar.addEventListener('click', () => modal.buka(gambar.src, teksAlt));
    gambar.addEventListener('keydown', e => {
      if (e.key === 'Enter') modal.buka(gambar.src, teksAlt);
    });
  });
  
  (function tampilkanBuku() {
    const item = document.querySelectorAll('.koleksi-item');
    const batas = 3;
  
    if (item.length <= batas) return;
  
    for (let i = batas; i < item.length; i++) {
      item[i].style.display = 'none';
    }
  
    const tombol = document.createElement('button');
    tombol.textContent = 'Lihat Lebih Banyak';
    Object.assign(tombol.style, {
      marginTop: '20px',
      padding: '8px 14px',
      cursor: 'pointer',
      borderRadius: '6px',
      border: '1px solid #ccc',
      background: '#f5f5f5',
      fontWeight: '600'
    });
  
    const induk = item[0].parentNode;
    induk.appendChild(tombol);
  
    let terbuka = false;
  
    tombol.addEventListener('click', () => {
      terbuka = !terbuka;
  
      for (let i = batas; i < item.length; i++) {
        item[i].style.display = terbuka ? 'block' : 'none';
      }
  
      tombol.textContent = terbuka ? 'Lihat Lebih Sedikit' : 'Lihat Lebih Banyak';
    });
  })();