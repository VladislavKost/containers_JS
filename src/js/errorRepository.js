export class ErrorRepository {
  constructor(errors) {
    this.errors = new Map(errors);
  }

  translate(code) {
    return this.errors.has(code) ? this.errors.get(code) : "Unknown error";
  }
}

export const errorRepository = new ErrorRepository([
  [408, "This character is already on the team."],
]);
