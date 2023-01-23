const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Bamidele";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const test1 = 100;
  const e = new Employee("Bamidele", test1 );
  expect(e.id).toBe(test1);
});

test("Can set email via constructor argument", () => {
  const test1  = "sample@01.com";
  const e = new Employee("Bamidele", 1, test1 );
  expect(e.email).toBe(test1 );
});

test("Can get name via getName()", () => {
  const test1  = "Bamidele";
  const e = new Employee(test1 );
  expect(e.getName()).toBe(test1 );
});

test("Can get id via getId()", () => {
  const test1  = 100;
  const e = new Employee("Bamidele", test1 );
  expect(e.getId()).toBe(test1 );
});

test("Can get email via getEmail()", () => {
  const test1 = "sample@01.com";
  const e = new Employee("Bamidele", 1, test1 );
  expect(e.getEmail()).toBe(test1 );
});

test('getRole() should return "Employee"', () => {
  const test1  = "Employee";
  const e = new Employee("Bamidele", 1, "sample@01.com");
  expect(e.getRole()).toBe(test1 );
});