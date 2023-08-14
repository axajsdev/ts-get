import { get } from "./get";

test("get function test", () => {
  const defaultValue = "My default value";
  const obj = {
    a: {
      b: {
        c: "d",
      },
      e: "f",
    },
  };

  expect(get(obj, "a.b")).toStrictEqual({ c: "d" });
  expect(get(obj, "a.b.c")).toBe("d");
  expect(get(obj, "a.e")).toBe("f");
  expect(get(obj, "x.x.e")).toBeUndefined();
  expect(get(obj, "a.x.e", true)).toBe(true);
  expect(get(obj, "a.x.e", defaultValue)).toBe(defaultValue);
});
