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

    const cards = document.querySelectorAll('.card');
    const popup = document.getElementById('project-popup');

    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const authorName = document.getElementById('author-name');
    const authorGithub = document.getElementById('author-github');
    const authorLinkedin = document.getElementById('author-linkedin');


cards.forEach(card => {
  card.addEventListener('click', () => {
    const title = card.getAttribute('data-nome');
    const author = card.getAttribute('data-autor');
    const longDesc = card.getAttribute('data-desc');
    const projectImg = card.getAttribute('data-projimg');
    const devImg = card.getAttribute('data-devimg');
    const projectLink = card.getAttribute('data-link');
    const githubUrl = card.querySelector('a[href*="github.com"]').href;
    const linkedinUrl = card.querySelector('a[href*="linkedin.com"]').href;

    popupTitle.innerText = title;
    document.getElementById('author-name').innerText = author;
    document.getElementById('popup-description').innerText = longDesc;
    document.getElementById('popup-project-img').src = projectImg;
    document.getElementById('popup-dev-photo').src = devImg;
    document.getElementById('popup-project-link').href = projectLink;
    document.getElementById('author-github').href = githubUrl;
    document.getElementById('author-linkedin').href = linkedinUrl;

    popup.classList.add('open');
  });
});

    function closePopup() {
    popup.classList.remove('open');
    }

    popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
    });

    