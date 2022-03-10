import { isMeaningOfLife } from "./index";

describe("isMeaningOfLife", () => {
  test("true meaning", () => {
    expect(isMeaningOfLife(42)).toBe(true);
  });

  test("false meaning", () => {
    expect(isMeaningOfLife(666)).toBe(false);
  });
});
