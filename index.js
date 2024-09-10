const fs = require('fs');
const inquirer = require("inquirer");
const generateLogo = require('./utils/generateLogo')


const questions = [{
    type: "text",
    name: "text",
    message: "Please enter the text to be placed inside of the shape"
},{
    name: "textColor",
    message: "Please provide a color for your text:"
},{ 
    type: "list",
    name: "shape",
    message: "Please choose a shape:",
    choices: [`triangle`, `circle`,`square` ],
},{
    name: "shapeColor",
    message: "Please provide a color for your shape:"
}];


const writeToFile = (data) => {
    fs.writeFile(`./logo.svg`, generateLogo(data), err => {
        err ? console.error(err) : console.log('Generated logo.svg');
    })
}


const init = () => {
    inquirer
    .prompt(questions)
    .then(writeToFile); 
}
// Function call to initialize app
init();