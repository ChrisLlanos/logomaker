class Shape {
    constructor(color) {
      this.color = color;
    }
  
    generateSvgCode() {
      throw new Error('generateSvgCode() method must be implemented in child class');
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return this.generateSvgCode();
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height, color) {
      super(color);
      this.base = base;
      this.height = height;
    }
  
    generateSvgCode() {
      console.log('Generating SVG code for', this.constructor.name);
      return `<polygon points="0,${this.height} ${this.base / 2},0 ${this.base},${this.height}" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    constructor(radius, color) {
      super(color);
      this.radius = radius;
    }
  
    generateSvgCode() {
      console.log('Generating SVG code for', this.constructor.name);
      return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(side, color) {
      super(color);
      this.side = side;
    }
  
    generateSvgCode() {
      console.log('Generating SVG code for', this.constructor.name);
      return `<rect width="${this.side}" height="${this.side}" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  
