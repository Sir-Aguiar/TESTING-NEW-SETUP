import { User } from "../src/TestClass";

test("should be Felipe", () => {
  const user = new User("Felipe");
  expect(user.name).toEqual("Felipe");
});
