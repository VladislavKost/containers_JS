import { ErrorRepository } from "../errorRepository";

test("translate error exist", () => {
  const errorRepository = new ErrorRepository([
    [408, "This character is already on the team."],
  ]);

  expect(errorRepository.translate(408)).toBe(
    "This character is already on the team."
  );
});

test("translate error absent", () => {
  const errorRepository = new ErrorRepository([
    [408, "This character is already on the team."],
  ]);

  expect(errorRepository.translate(405)).toBe("Unknown error");
});
