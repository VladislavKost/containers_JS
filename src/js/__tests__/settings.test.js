import { Settings } from "../settings";

test("user settings add", () => {
  const settings = new Settings();

  settings.setUserCustomSettings("music", "pop");
  settings.setUserCustomSettings("difficulty", "hard");

  expect(settings.userSettings).toEqual(
    new Map([
      ["music", "pop"],
      ["difficulty", "hard"],
    ])
  );
});

test("user settings reset key", () => {
  const settings = new Settings();

  settings.setUserCustomSettings("music", "pop");
  settings.setUserCustomSettings("difficulty", "hard");
  settings.setUserCustomSettings("difficulty", "nightmare");

  expect(settings.userSettings).toEqual(
    new Map([
      ["music", "pop"],
      ["difficulty", "nightmare"],
    ])
  );
});

test("user settings incorrect key", () => {
  const settings = new Settings();

  settings.setUserCustomSettings("level", "high");

  expect(settings.userSettings).toEqual(new Map());
});

test("get settings", () => {
  const settings = new Settings();

  settings.setUserCustomSettings("music", "pop");
  settings.setUserCustomSettings("difficulty", "hard");

  expect(settings.getSettings()).toEqual(
    new Map([
      ["theme", "dark"],
      ["music", "pop"],
      ["difficulty", "hard"],
    ])
  );
});
