
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
            type:"input",
            message: "Describe your project ?",
            name: "describe"
        },
        {
            type: "input",
            message: "how many contributors in your project?",
            name: "contributers"
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
            message: "what is your GitHub URL?",
            name: "GitHubURL"
        }
    ]
    )
}
inqPromise = promptUser();
inqPromise.then(function(userInput){

    let html = `
    ${userInput.name}
    ${userInput.describe}.
    ${userInput.contributers} 
    ${userInput.challenging}
    ${userInput.learn}
    ${userInput.GitHubURL}
        
    ` ;
    let writePromise = writeFileAsync("ReadMe.md" , md);
    writePromise.then(function() {
        console.log("successfully wrote out to ReadMe.md");
    }) .catch(function(err) {
        console.log("problem with writing file ReadMe.md")
        console.log(err);
    }) .catch(function(err) {
        console.log("problem with inquirer.prompt");
        console.log(err);
    })
    }); 