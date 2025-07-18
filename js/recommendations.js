document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recommendForm');
  const searchInput = document.getElementById('searchInput');
  const recipientInput = document.getElementById('recipientInput');
  const pointsInput = document.getElementById('pointsInput');

  const tabs = ['sent', 'accepted', 'rejected', 'ignored'];

  function loadRecs() {
    return Storage.load('recommendations');
  }

  function saveRecs(recs) {
    Storage.save('recommendations', recs);
  }

  function renderTabs() {
    const recs = loadRecs();
    const now = Date.now();
    tabs.forEach(tab => {
      const container = document.getElementById(tab);
      container.innerHTML = '';
      recs.filter(r => {
        if (tab === 'sent') return r.status === 'sent';
        if (tab === 'accepted') return r.status === 'accepted';
        if (tab === 'rejected') return r.status === 'rejected';
        if (tab === 'ignored') return r.status === 'ignored' || (r.status === 'sent' && now - r.timestamp > 604800000);
        return false;
      }).forEach((r, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
          <p><strong>${r.title}</strong> ➡️ ${r.to} | Bet: ${r.points} pts</p>
          <p>Status: ${r.status}</p>
        `;

        if (tab === 'accepted' && !r.rating) {
          const likeBtn = document.createElement('button');
          likeBtn.textContent = 'Liked';
          likeBtn.onclick = () => updateRating(index, 'liked');
          const dislikeBtn = document.createElement('button');
          dislikeBtn.textContent = 'Disliked';
          dislikeBtn.onclick = () => updateRating(index, 'disliked');
          div.append(likeBtn, dislikeBtn);
        }

        if (tab === 'sent' && now - r.timestamp > 604800000) {
          r.status = 'ignored';
          saveRecs(recs);
          renderTabs();
        }

        container.appendChild(div);
      });
    });
  }

  function updateRating(index, rating) {
    const recs = loadRecs();
    recs[index].rating = rating;
    recs[index].status = 'accepted';
    saveRecs(recs);
    renderTabs();
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const title = searchInput.value.trim();
    const to = recipientInput.value.trim();
    const points = parseInt(pointsInput.value.trim());
    if (!title || !to || isNaN(points) || points < 1) return;

    const newRec = {
      title,
      to,
      points,
      timestamp: Date.now(),
      status: 'sent',
    };

    const recs = loadRecs();
    recs.push(newRec);
    saveRecs(recs);

    searchInput.value = '';
    recipientInput.value = '';
    pointsInput.value = '';

    renderTabs();
  });

  tabs.forEach(t => {
    document.querySelector(`[onclick="showTab('${t}')"]`).addEventListener('click', () => {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.getElementById(t).classList.add('active');
    });
  });

  renderTabs();
});
