import { Bowerman } from "../characters/Bowerman";
import { Magician } from "../characters/Magician";
import { Team } from "../team";

test("add character on team", () => {
  const team = new Team();
  const bowerman = new Bowerman("John");

  team.add(bowerman);

  expect(team.members).toEqual(new Set([bowerman]));
});

test("error add character twice on team", () => {
  const team = new Team();
  const bowerman = new Bowerman("John");

  team.add(bowerman);
  expect(() => team.add(bowerman)).toThrow(
    "This character is already on the team."
  );
});

test("addAll characters on team", () => {
  const team = new Team();
  const bowerman = new Bowerman("John");
  const magician = new Magician("Max");

  team.addAll(bowerman, magician, bowerman);

  expect(team.members).toEqual(new Set([bowerman, magician]));
});

test("toArray characters on team", () => {
  const team = new Team();
  const bowerman = new Bowerman("John");
  const magician = new Magician("Max");

  team.addAll(bowerman, magician);

  expect(team.toArray()).toEqual([bowerman, magician]);
});
