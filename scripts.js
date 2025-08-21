window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Funcionalidad para mostrar/ocultar todas las empresas
document.addEventListener('DOMContentLoaded', function() {
  const verMasBtn = document.getElementById('verMasEmpresas');
  const todasEmpresas = document.getElementById('todasEmpresas');
  
  if (verMasBtn && todasEmpresas) {
    verMasBtn.addEventListener('click', function() {
      if (todasEmpresas.style.display === 'none') {
        todasEmpresas.style.display = 'block';
        verMasBtn.textContent = 'Ver menos empresas';
        verMasBtn.classList.remove('btn-outline-dorado');
        verMasBtn.classList.add('btn-dorado');
      } else {
        todasEmpresas.style.display = 'none';
        verMasBtn.textContent = 'Ver todas las empresas';
        verMasBtn.classList.remove('btn-dorado');
        verMasBtn.classList.add('btn-outline-dorado');
      }
    });
  }
});

