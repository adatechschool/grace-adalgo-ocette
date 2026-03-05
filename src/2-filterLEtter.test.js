import { describe, test, expect, vi, beforeEach } from "vitest";
import { filterLetter } from "./2-filterLEtter";

describe("filterLetter", () => {
  const letterCallback = vi.fn((e) => `${e} is a letter`);
  const notLetterCallback = vi.fn((e) => `${e} is NOT a letter`);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("calls letter callback if argument is not a number", () => {
    filterLetter("a", letterCallback, notLetterCallback);
    expect(letterCallback).toHaveBeenCalledWith("a");
  });

  test("calls notLetter callback if argument is a number", () => {
    filterLetter("8", letterCallback, notLetterCallback);
    expect(notLetterCallback).toHaveBeenCalledWith("8");
  });

  test("calls letter callback for special characters", () => {
    filterLetter("@", letterCallback, notLetterCallback);
    expect(letterCallback).toHaveBeenCalledWith("@");
  });
});
