const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const school = "UNB";
  const e = new Intern("Name", 1, "sample@1.com", school);
  expect(e.internSchool).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
  const school = "Intern";
  const e = new Intern("Name", 1, "sample@1.com", "UNB");
  expect(e.getRole()).toBe(school);
});

test("Can get school via getSchool()", () => {
  const school = "UNB";
  const e = new Intern("Name", 1, "sample@1.com", school);
  expect(e.getSchool()).toBe(school);
});