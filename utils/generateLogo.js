let shape = '';

const { Circle, Square, Triangle } = require('../lib/shapes')


// TODO: Create a function to generate Logo for the shape NOTE: 
function generateLogo(data) {
  if (data.shape == 'square') {
    shape = new Square(data.shapeColor)
  }
  else if (data.shape == 'circle') {
    shape = new Circle(data.shapeColor)
  } else {
    shape = new Triangle(data.shapeColor)
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

  ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`
}

module.exports = generateLogo;


//<circle cx="150" cy="100" r="80" fill="${data.shapeColor}"/>