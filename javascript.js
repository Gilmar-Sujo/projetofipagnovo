// AREAS DE ACTUACAO
(function () {
  console.log('script.js carregado');

  // Mensagem UI para confirmar que o JS correu
  const dbg = document.getElementById('debugMsg');
  if (dbg) dbg.textContent = 'Debug: script executado com sucesso (JS funciona).';

  // Parallax leve
  const parallax = document.getElementById('parallaxBanner');
  if (parallax) {
    window.addEventListener('scroll', function () {
      const offset = Math.round(window.scrollY * 0.12);
      parallax.style.backgroundPosition = `50% ${30 + offset}px`;
    });
    console.log('Parallax inicializado');
  } else {
    console.warn('Elemento #parallaxBanner não encontrado');
  }

  // Verifica carregamento da imagem (usando Image() para suportar file://)
  const imgPath = 'images/quelimane09.jpg';
  const img = new Image();
  img.onload = function () { console.log('Imagem encontrada:', imgPath); };
  img.onerror = function () { console.warn('Imagem NÃO encontrada em', imgPath); };
  img.src = imgPath;
})();
