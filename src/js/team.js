import { errorRepository } from "./errorRepository";

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error (errorRepository.translate(408))
        } else {
            this.members.add(character)
        }
    }

    addAll(...characters) {
        for (const character of characters) {
            this.members.add(character)
        }
    }

    toArray() {
        return Array.from(this.members);
    }
}