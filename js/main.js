document.addEventListener('DOMContentLoaded', () => {
  const dummyUser = {
    points: 325,
    score: '89%',
    rank: 12
  };

  document.getElementById('points').innerText = dummyUser.points;
  document.getElementById('score').innerText = dummyUser.score;
  document.getElementById('rank').innerText = `#${dummyUser.rank}`;
});
