const fs = require('fs');
const path = require('path');

const { Triangle, Circle, Square } = require('./lib/shapes');
const shapeGen = require('./lib/shapeGen');

async function main() {
    const userInput = await shapeGen.getUserInput();

    let svgCode = '';

    if (userInput.shape === 'circle') {
        const circle = new Circle(100, userInput.backgroundColor);
        svgCode = circle.render();
    } else if (userInput.shape === 'triangle') {
        const triangle = new Triangle(488, 182, userInput.backgroundColor);
        svgCode = triangle.render();
    } else if (userInput.shape === 'square') {
        const square = new Square(200, userInput.backgroundColor);
        svgCode = square.render();
    }

    const svgText = `<text x="60" y="110" font-size="50px" fill=${userInput.textColor}> ${userInput.text}</text>`
    const examplesFolderPath = path.join(__dirname, 'examples');

    if (!fs.existsSync(examplesFolderPath)) {
        fs.mkdirSync(examplesFolderPath);
    }
    const svgWrapper = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgCode}${svgText}</svg>`;

    // save result to examples folder
    const svgFilePath = path.join(examplesFolderPath, 'logo.svg');
    fs.writeFileSync(svgFilePath, svgWrapper);

    console.log(`SVG file generated and saved as "${svgFilePath}"`);



}

//initiate main function
main();