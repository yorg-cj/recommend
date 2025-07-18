document.addEventListener('DOMContentLoaded', () => {
  const recs = Storage.load('recommendations');
  let totalPoints = 0;
  let liked = 0;
  let total = 0;

  recs.forEach(r => {
    if (r.status === 'sent') totalPoints -= r.points;
    if (r.status === 'accepted') {
      if (r.rating === 'liked') {
        totalPoints += r.points * 2;
        liked++;
      }
      total++;
    }
    if (['rejected', 'ignored'].includes(r.status)) {
      total++;
    }
  });

  document.getElementById('points').innerText = totalPoints;
  document.getElementById('score').innerText = total > 0 ? `${Math.round((liked / total) * 100)}%` : 'N/A';
  document.getElementById('rank').innerText = '#12';
});