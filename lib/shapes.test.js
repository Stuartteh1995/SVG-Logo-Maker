
// importing the shapes into the test. 
const {Triangle, Circle, Square} = require ('./shapes.js')

// testing to see if the shapes are the same as produced at the end 
describe('Triangle', () => {
  test('render method with color blue', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />');
  });
});

describe('Circle', () => {
  test('render method with color blue', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
  });
});

describe('Square', () => {
  test('render method with color blue', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" />');
  });
});

