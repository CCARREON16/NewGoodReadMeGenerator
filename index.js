
let fs = require("fs");
let util = require("util");
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser () {
    return inquirer.prompt(
    [
        {
            type: "input",
            message: "what is your name of your project?",
            name: "name"
        },
        {
            type: "input",
            message: "Who is the Author of your project?",
            name: "name"
        },
        {
            type: "input",
            message: "What license did you use?",
            name: "license"
        },
        
        {
            type:"input",
            message: "Describe your project ?",
            name: "describe"
        },
        {
            type: "input",
            message: "What was the motivation for your project?",
            name: "Motivation"
        },
        {
            type: "input",
            message: "what was the challenging part about this project ?",
            name: "challenging"
        },
        {
            type: "input",
            message: "what did you learn from this project ?",
            name: "Learn"
        },
        {
            type: "input",
            message: "What makes this project Standout?",
            name: "Standout"
        },
        {
            type: "input",
            message: "what is your GitHub username?",
            name: "username"
        }
    ]
    )
}
inqPromise = promptUser();
inqPromise.then(function(userInput){

    let md = `
    Project Name - ${userInput.name}
    Author - ${userInput.name}
    License - ${userInput.license}

    Table of contents
    
    *Describe
    *Motivation
    *Challenge
    *Learn
    *Standout
    *Username 
    
    
    
    Describe- ${userInput.describe}
    Motivation- ${userInput.Motivation} 
    Challenge- ${userInput.challenging}
    Learn- ${userInput.Learn}
    Standout- ${userInput.Standout}
    Username- ${userInput.username}



        
    ` ;
    let writePromise = writeFileAsync("ReadMe2.md" , md);
    writePromise.then(function() {
        console.log("successfully wrote out to ReadMe2.md");
    }) .catch(function(err) {
        console.log("problem with writing file ReadMe2.md")
        console.log(err);
    }) .catch(function(err) {
        
        console.log("problem with inquirer.prompt");
        console.log(err);
    });
    }); 