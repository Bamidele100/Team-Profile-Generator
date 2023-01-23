const Manager = require("../lib/Manager");


test("Can set office number via constructor argument", () => {
  const managerValue = 100;
  const e = new Manager("name", 1, "sample@1.com", managerValue);
  expect(e.officeNumber).toBe(managerValue);
});

test('getRole() should return "Manager"', () => {
  const roleValue = "Manager";
  const e = new Manager("name", 1, "sample@1.com", 100);
  expect(e.getRole()).toBe(roleValue);
});

test("Can get office number via getOffice()", () => {
  const offNumber = 100;
  const e = new Manager("name", 1, "sample@1.com", offNumber);
  expect(e.getOfficeNumber()).toBe(offNumber);
});