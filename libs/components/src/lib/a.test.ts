import { sum } from "./a";

for (let i = 0; i < 100; i++) {
  it("returns the correct sum", () => {
    expect(sum(i, 2)).toBe(i + 2);
  });
}
