function getShapeSVG(shape, color) {
  switch (shape) {
    case 'circle':
      return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
    case 'triangle':
      return `<polygon points="150,50 100,150 200,150" fill="${color}" />`;
    case 'square':
      return `<rect x="100" y="50" width="100" height="100" fill="${color}" />`;
    default:
      return '';
  }
}

export default getShapeSVG;
