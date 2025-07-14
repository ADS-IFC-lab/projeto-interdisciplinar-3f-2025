let currentKey = 'title';
    const exemplos = [
      { title: 'F1 Dashboard', author: 'João Pedro Gonçalves', date: '2025-07-01', instagram: 'joao_pedro.psd', github: 'jpdevr/Projeto-F1', linkedin: 'jpdevr324', desc: 'Projeto sobre informações da F1', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj90mQiRZ5jPg9jNGz969LtkJ_cmzyL55ZpAgrXS_tQh2RpVsdcE7n_Wmfh4TgudIOXWDurraa4oDNli8Wg9Cmz3fD-s-3X34N_R-vj01b5EB9u4NWVPF_BKelT2ZsuMnGvFfcgnLQTSreHO3Jd55s7ONhDZS3o8N5cVDevapksIh9hlRNxBBlmT8GEmUFa/s600/Ferrari-SF-25%20%2810%29.jpg', profileImage: 'https://media.licdn.com/dms/image/v2/D4D03AQG6JE0-tqoAYw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711491641690?e=1757548800&v=beta&t=MP3B75BjfcH3HdaYD4WhcK4nPE4ElEkM6F9b0gC8gjk' },
      
      { title: 'Flash', author: 'Pedro Henrique Haupt', date: '2025-07-01', instagram: 'pedroh4upt', github: 'Predox/Flash', linkedin: 'pedro-haupt', desc: 'Editor de Imagens', image: '../resources/Flash.jpg', profileImage: 'https://media.licdn.com/dms/image/v2/D4E03AQE168CTqtokCg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728492783886?e=1757548800&v=beta&t=S1O9fiitij4wEzCo5pLF2LvBD37L4zSjuVPZIbgc2vo' },

      { title: 'Arquimedes', author: 'Laura Urba e Andressa Antunes', date: '2025-07-11', instagram: 'urbalaura', github: 'LauraUrba/Arquimedes-Site-1', linkedin: 'https://www.linkedin.com/in/laura-urba-antunes-1a57791b7/', desc: 'Venda e troca de livros fisicos de fantasia.', image: 'https://i.postimg.cc/gJksh9Yp/Arquimedes-Image.png', profileImage: 'https://avatars.githubusercontent.com/u/200081969?v=4' },

      { title: 'Arquimedes', author: 'Laura Urba e Andressa Antunes', date: '2025-07-11', instagram: 'ndrssz', github: 'AndressasAntunes/arquimedes-site-main', linkedin: 'https://www.linkedin.com/in/andressa-dos-santos-antunes-76208b256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', desc: 'Venda e troca de livros fisicos de fantasia.', image: 'https://i.postimg.cc/gJksh9Yp/Arquimedes-Image.png', profileImage: 'https://avatars.githubusercontent.com/u/205540208?v=4' },

      { title: 'Joga Aonde', author: 'Yuri Bargas', date: '2025-03-05', instagram: 'yuri.barg', github: 'YoriBarg/Interdisciplinar-2', linkedin: 'UserELink', desc: 'Dados sobre Jogos de futebol', image: 'https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/06/botafogo_x_psg_-scaled-aspect-ratio-512-320.jpg', profileImage: 'https://avatars.githubusercontent.com/u/211418723?v=4' },

      { title: 'Controle++', author: 'Samuel Dolberth', date: '2025-07-13', instagram: 'grenouillesalee', github: 'samueldolberth/controlemais', linkedin: 'UserELink', desc: 'Gestão de Estoque', image: 'https://i.postimg.cc/tgRHgX7z/banner-header.png', profileImage: 'https://avatars.githubusercontent.com/u/153951997?v=4&size=64' },

      { title: 'Agência de viagens', author: 'Cesar Augusto Cordeiro', date: '2025-07-13', instagram: 'cesar.cordeiroo', github: 'C-Augusto-1/Projeto-interdisciplinar', linkedin: 'UserELink', desc: 'Extenção para agência de viagens.', image: 'https://images.pexels.com/photos/104826/aircraft-holiday-sun-tourism-104826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', profileImage: 'https://avatars.githubusercontent.com/u/211418825?v=4&size=64' }

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
                <div class="popup-item"><i class="fab fa-instagram"></i><a href="https://instagram.com/${p.instagram}" target="_blank">${p.instagram}</a></div>
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
      const ig = document.getElementById('igLink'); ig.href = `https://instagram.com/${p.instagram}`; ig.innerHTML = `<i class="fab fa-instagram"></i>${p.instagram}`;
      const user = document.getElementById('profileLink'); user.innerHTML = `<img class="modal-profile" src="${p.profileImage}">`;
      document.getElementById('modalBackdrop').classList.add('active');
    }
    function closeModal(e) { e.stopPropagation(); document.getElementById('modalBackdrop').classList.remove('active'); }
    window.addEventListener('click', e => { if (!e.target.closest('.sort')) document.getElementById('sortOptions').classList.remove('active'); });
    renderCards(exemplos);