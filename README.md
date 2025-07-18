# 📚 RecConnect

**RecConnect** is a social recommendation platform where users can send and receive book/movie recommendations, bet points on how confident they are, and track success over time. This MVP version runs entirely in the browser using `localStorage` — no backend required!

![RecConnect Screenshot](assets/logo.png)

---

## 🔧 Features

- ✅ Send recommendations to friends with confidence point betting
- ✅ Accept, reject, or ignore recommendations
- ✅ Earn points for correct predictions (liked content)
- ✅ Track stats on your profile: total points, score %, relationship scores
- ✅ See global and friend leaderboards
- ✅ All data persists using `localStorage`

---

## 📁 Project Structure

```
/
├── index.html               # Dashboard with total points, rank, score
├── recommendations.html     # Recommendation workflow (send + manage)
├── leaderboard.html         # Global & friends leaderboard
├── friends.html             # Add/remove friends
├── user.html                # Personal profile with stats
├── css/
│   └── style.css            # Site-wide styling
├── js/
│   ├── main.js              # Logic for homepage stats
│   ├── recommendations.js   # Core recommendation logic
│   └── storage.js           # Simple wrapper for localStorage
├── assets/
│   └── logo.png             # Placeholder logo image
```

---

## 🚀 How to Use

1. **Clone or upload** the contents of this project to your GitHub repository.
2. Go to your repo’s **Settings > Pages**, and set:
   - **Source**: `main`
   - **Folder**: `/ (root)`
3. Visit your live site:
   ```
   https://<your-username>.github.io/<your-repo-name>/
   ```

---

## 🛠 Tech Stack

- HTML, CSS, JavaScript
- LocalStorage (for state persistence)
- GitHub Pages (for free hosting)

---

## 🔮 Future Features

- 🔐 User authentication
- 🗂️ Shared backend database
- 🔔 Notifications for new recommendations
- 📊 Enhanced analytics + charts

---

## 📬 Contributions

Feel free to fork this repo and suggest improvements! PRs welcome.

---

## © 2025 RecConnect Team

Built for learning, experimenting, and connecting through great stories. 🎬📖
