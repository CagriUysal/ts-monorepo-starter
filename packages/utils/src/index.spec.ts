import { giveMeaningOfLife } from "./index";

describe("askForMeaningOfLife", () => {
  it("should give meaning of life", () => {
    expect(giveMeaningOfLife()).toBe(42);
  });
});
