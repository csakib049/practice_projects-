import { getDifficulty } from "./practice";
import { describe, it, expect } from "vitest";

describe("getDifficulty", () => {
  it("returns Beginner below 100", () => {
    expect(getDifficulty(23)).toBe("Beginner");
  });

  it("returns Intermediate at 100", () => {
    expect(getDifficulty(100)).toBe("Intermediate");
  });

  it("returns Intermediate below 1000", () => {
    expect(getDifficulty(999)).toBe("Intermediate");
  });

  it("returns Advanced at 1000", () => {
    expect(getDifficulty(1000)).toBe("Advanced");
  });
});