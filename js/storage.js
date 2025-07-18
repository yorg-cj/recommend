const Storage = {
  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  load(key, fallback = []) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};