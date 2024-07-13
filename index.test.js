import assert from "node:assert";
import { it } from "node:test";

import "./index.js";

it("should not throw any errors", () => {
    const arr = [1, 2, 3];

    for (let i = 0; i < 1_000; i++) {
        assert(typeof arr.getAny() === "number");
    }
});