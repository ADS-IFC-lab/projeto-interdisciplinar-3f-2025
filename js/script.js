let currentKey = 'title';
    const exemplos = [
      { title: 'Projeto A', author: 'Autor01', date: '2025-07-01', instagram: 'AutorA', github: 'UserA', linkedin: 'UserALink', desc: 'Descrição do Projeto A.', image: 'https://picsum.photos/400/160?random=1', profileImage: 'https://i.pravatar.cc/36?img=1' },
      { title: 'Projeto B', author: 'Autor02', date: '2025-06-15', instagram: 'AutorB', github: 'UserB', linkedin: 'UserBLink', desc: 'Descrição do Projeto B.', image: 'https://picsum.photos/400/160?random=2', profileImage: 'https://i.pravatar.cc/36?img=2' },
      { title: 'Projeto C', author: 'Autor03', date: '2025-05-20', instagram: 'AutorC', github: 'UserC', linkedin: 'UserCLink', desc: 'Descrição do Projeto C.', image: 'https://picsum.photos/400/160?random=3', profileImage: 'https://i.pravatar.cc/36?img=3' },
      { title: 'Projeto D', author: 'Autor04', date: '2025-04-10', instagram: 'AutorD', github: 'UserD', linkedin: 'UserDLink', desc: 'Descrição do Projeto D.', image: 'https://picsum.photos/400/160?random=4', profileImage: 'https://i.pravatar.cc/36?img=4' },
      { title: 'Projeto E', author: 'Autor05', date: '2025-03-05', instagram: 'AutorE', github: 'UserE', linkedin: 'UserELink', desc: 'Descrição do Projeto E.', image: 'https://picsum.photos/400/160?random=5', profileImage: 'https://i.pravatar.cc/36?img=5' }
    ];
    function toggleSortOptions() { document.getElementById('sortOptions').classList.toggle('active'); }
    document.getElementById('sortLabel').addEventListener('click', toggleSortOptions);
    document.querySelectorAll('.sort-options li').forEach(li => li.addEventListener('click', () => { currentKey = li.dataset.key; document.getElementById('sortLabel').textContent = 'Ordenar Por: ' + li.textContent; toggleSortOptions(); }));
    document.querySelectorAll('.sort-arrows i').forEach((icon, i) => icon.addEventListener('click', () => applySort(currentKey, i === 0 ? 'asc' : 'desc')));
    function applySort(key, dir) { renderCards([...exemplos].sort((a, b) => (a[key].toLowerCase().localeCompare(b[key].toLowerCase())) * (dir === 'asc' ? 1 : -1))); }
    function renderCards(list) {
      const grid = document.getElementById('projectsGrid'); grid.innerHTML = '';
      list.forEach(p => {
        const card = document.createElement('div'); card.className = 'card'; card.onclick = () => openModal(p);
        card.innerHTML = `
          <div class="card-image"><img src="${p.image}" alt="${p.title}"></div>
          <div class="card-content">
            <div class="card-title">${p.title}</div>
            <div class="card-desc">${p.desc}</div>
            <div class="profile">
              <img src="${p.profileImage}" alt="${p.author}">
              <div class="profile-popup">
                <div class="popup-header">${p.author}</div>
                <div class="popup-item"><i class="fab fa-github"></i><a href="https://github.com/${p.github}" target="_blank">${p.github}</a></div>
                <div class="popup-item"><i class="fab fa-linkedin"></i><a href="https://linkedin.com/in/${p.linkedin}" target="_blank">${p.author}</a></div>
                <div class="popup-item"><i class="fab fa-instagram"></i><a href="https://instagram.com/${p.instagram}" target="_blank">@${p.instagram}</a></div>
              </div>
            </div>
          </div>`;
        grid.appendChild(card);
      });
    }
    function openModal(p) {
      const img = document.getElementById('modalImage'); img.src = p.image; img.alt = p.title;
      document.getElementById('modalTitle').textContent = p.title;
      document.getElementById('modalDescription').textContent = p.desc;
      const gh = document.getElementById('ghLink'); gh.href = `https://github.com/${p.github}`; gh.innerHTML = `<i class="fab fa-github"></i>${p.github}`;
      const ig = document.getElementById('igLink'); ig.href = `https://instagram.com/${p.instagram}`; ig.innerHTML = `<i class="fab fa-instagram"></i>@${p.instagram}`;
      document.getElementById('modalBackdrop').classList.add('active');
    }
    function closeModal(e) { e.stopPropagation(); document.getElementById('modalBackdrop').classList.remove('active'); }
    window.addEventListener('click', e => { if (!e.target.closest('.sort')) document.getElementById('sortOptions').classList.remove('active'); });
    renderCards(exemplos);