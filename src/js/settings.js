const settings = {
  theme: ["dark", "light", "gray"],
  music: ["trance", "pop", "rock", "chillout", "off"],
  difficulty: ["easy", "normal", "hard", "nightmare"],
};

export class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    this.userSettings = new Map();
  }

  setUserCustomSettings(key, value) {
    if (settings[key] && settings[key].includes(value)) {
      if (this.userSettings.has(key)) {
        this.userSettings.delete(key);
      }
      this.userSettings.set(key, value);
    }
  }

  getSettings() {
    const result = new Map();
    this.defaultSettings.forEach((value, key) => {
      result.set(
        key,
        this.userSettings.has(key)
          ? this.userSettings.get(key)
          : this.defaultSettings.get(key)
      );
    });
    return result;
  }
}
