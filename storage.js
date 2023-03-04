const storage = {
  get: (key, defaultValue = null) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  },
  set: (key, value) => localStorage.setItem(key,JSON.stringify(value)),
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear()
}

storage.set("chibumps", "Became Good a developer");
console.log(storage.get("chibumps"));
