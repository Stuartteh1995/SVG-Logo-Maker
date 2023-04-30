import inquirer from 'inquirer';
import fs from 'fs';
import getShapeSVG from './shapes.mjs';

// Rest of the code...

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

inquirer.prompt(questions).then((response) => {
  const svgContent = generateSVG(response);

  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Generated logo.svg');
    }
  });
});

function generateSVG({ text, textColor, shape, shapeColor }) {
  const shapeSVG = getShapeSVG(shape, shapeColor);
  const textSVG = `<text x="150" y="120" text-anchor="middle" font-size="24" fill="${textColor}">${text}</text>`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  ${textSVG}
</svg>`;
}

