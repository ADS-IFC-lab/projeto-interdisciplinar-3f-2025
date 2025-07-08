    function ordenarProjetos(tipo) {
      const grid = document.getElementById('projetos-grid');
      const cards = Array.from(grid.querySelectorAll('.card'));
      cards.sort((a, b) => {
        const aValue = a.getAttribute('data-' + tipo).toLowerCase();
        const bValue = b.getAttribute('data-' + tipo).toLowerCase();
        return aValue.localeCompare(bValue);
      });
      cards.forEach(card => grid.appendChild(card));
    }

    function showPopup(icon, autor, github, insta) {
      const popup = icon.querySelector('.user-popup');
      popup.style.display = 'block';
    }

    function hidePopup(icon) {
      const popup = icon.querySelector('.user-popup');
      popup.style.display = 'none';
    }

    function closeModal() {
      document.getElementById('modal-bg').style.display = 'none';
    }