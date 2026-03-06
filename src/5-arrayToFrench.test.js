// TODO: test arrayToFrench function with one, two and multiple words

import { describe, expect, test } from "vitest";
import { arrayToFrench } from "./5-arrayToFrench";

describe("arrayToFrench", () => {
  test("one word", () => {
    expect(arrayToFrench(["jaune"])).toBe("jaune");
  });

  test("two words", () => {
    expect(arrayToFrench(["jaune", "violet"])).toBe("jaune et violet");
  });

  test("multiple words", () => {
    expect(arrayToFrench(["bleu", "rose", "jaune", "violet"])).toBe(
      "bleu, rose, jaune et violet",
    );
  });
});
