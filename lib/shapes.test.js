const { Shape, Triangle, Circle, Square } = require('./shapes');


describe('Triangle Class', () => {
    test('render() returns correct SVG string with shape color', () => {
      // Create a Triangle instance with specific values
      const triangle = new Triangle(488, 182, "blue");
      // Set the color of the triangle
      triangle.setColor("blue");
      
      // Define the expected SVG code
      const expectedSvg = '<polygon points="0,182 244,0 488,182" fill="blue" />';
      
      // Compare the generated SVG code with the expected SVG code
      expect(triangle.render()).toEqual(expectedSvg);
    });
  });
  
  describe('Circle Class', () => {
    test('render() returns correct SVG string with shape color', () => {
      const circle = new Circle(100);
      circle.setColor("green");
      const expectedSvg = '<circle cx="100" cy="100" r="100" fill="green" />';
      expect(circle.render()).toEqual(expectedSvg);
    });
  
  });
  
  describe('Square Class', () => {
    test('render() returns correct SVG string with shape color', () => {
      const square = new Square(200);
      square.setColor("red");
      const expectedSvg = '<rect width="200" height="200" fill="red" />';
      expect(square.render()).toEqual(expectedSvg);
    });

  });