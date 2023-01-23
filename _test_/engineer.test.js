const Engineer = require("../lib/Engineer");


test("Get GitHUb account", () => {
  const github = "Bamidele100";
  const e = new Engineer("name", 2, "bamideletalabi01@gmail.com", github);
  expect(e.githubUsername).toBe(github);
});

test("getRole() should return \"Engineer\"", () => {
  const role = "Engineer";
  const e = new Engineer("name", 2, "bamideletalabi01@gmail.com", "Bamidele100");
  expect(e.getRole()).toBe(role);
});

test("Can get GitHub username via getGithub()", () => {
  const github= "Bamidele100";
  const e = new Engineer("name", 2, "bamideletalabi01@gmail.com", github);
  expect(e.getGithub()).toBe(github);
});