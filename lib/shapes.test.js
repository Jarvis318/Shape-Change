const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    const circle = new Circle();
    circle.setColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
    const circle = new Circle();
    circle.setColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150,10 290,190 10,190" fill="bisque" />';
    const triangle = new Triangle();
    triangle.setColor("bisque");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<polygon points="150,10 290,190 10,190" fill="purple" />';
    const triangle = new Triangle();
    triangle.setColor("purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect width="200" height="200" x="50" y="0" fill="dodgerblue" />';
    const square = new Square();
    square.setColor("dodgerblue");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg =
      '<rect width="200" height="200" x="50" y="0" fill="red" />';
    const square = new Square();
    square.setColor("red");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
