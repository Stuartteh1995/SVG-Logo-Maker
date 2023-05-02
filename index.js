//creating a const for npm's and other constant that are define else where 
const inquirer = require ('inquirer');
const fs = require ('fs/promises');
//importing the shapes from other file.
const {Circle, Triangle, Square} = require ('./lib/shapes');

//creating the prompts for user to input answers
const questions = [
  {
    type: 'input',
    message: 'Enter up to three characters:',
    name: 'text',
    validate: (input) => input.length <= 3 || 'Text must be up to three characters.',
  },
  {
    type: 'input',
    message: 'Enter the text color:',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Choose a shape:',
    name: 'shape',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    message: 'Enter the shape color:',
    name: 'shapeColor',
  },
];

//after user inputs prompts it is than send to fs to create a new file 
inquirer.prompt(questions).then(async (response) => {
  const svgContent = generateSVG(response);

  try {
    await fs.writeFile('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error(err);
  }
});

//creating the SVG file with the user inputs 
function generateSVG({ text, textColor, shape, shapeColor }) {
  const shapeSVG = getShapeSVG(shape, shapeColor);
  const textSVG = `<text x="150" y="120" text-anchor="middle" font-size="24" fill="${textColor}">${text}</text>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  ${textSVG}
</svg>`;
}

//getting the shapes that have been define in another file
function getShapeSVG(shape, color) {
  let shapeInstance;

  switch (shape) {
    case 'circle':
      shapeInstance = new Circle();
      break;
    case 'triangle':
      shapeInstance = new Triangle();
      break;
    case 'square':
      shapeInstance = new Square();
      break;
    default:
      return '';
  }
//define the color
  shapeInstance.setColor(color);
  return shapeInstance.render();
}
