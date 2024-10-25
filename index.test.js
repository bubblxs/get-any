import { it } from "node:test";
import assert from "node:assert";

import "./index.js";

it("should not throw any errors", () => {
    const arr = [1, 2, 3];

    for (let i = 0; i < 1_000_000; i++) {
        assert(typeof arr.getAny() === "number");
    }
});

it("should return undefined", () => {
    const arr = [];

    for (let i = 0; i < 1_000_000; i++) {
        assert(typeof arr.getAny() === "undefined");
    }
});