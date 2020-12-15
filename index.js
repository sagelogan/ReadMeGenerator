const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the title of your project?",
      },
      {
          type: 'input',
          name: 'description',
          message: "Please write a description of your project.",
      },
      {
        type: 'input',
        name: 'installation',
        message: "Are there any installation requirements for your project?",
        default: "no installation requirements",
        },
      {
            type: 'input',
            name: 'usage',
            message: "Are there any usage requirements for your project?",
    
        },
        {
            type: 'input',
            name: 'contribution',
            message: "Are there any contribution requirements for your project?",
    
        },
        {
            type: 'input',
            name: 'testing',
            message: "Are there any testing requirements for your project?",
    
        },
        {
            type: 'list',
            name: 'license',
            message: "Please select what type of license best suits your project",
            choices: [
              "MIT License - short and simple permissive license with conditions only requiring preservation of copyright and license notices",
              "General Public License - Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license",
              "Apache License v 2.0 - permissive license whose main conditions require preservation of copyright and license notices",
              "ISC-License - permissive license lets people do anything with your code with proper attribution and without warranty "
            ],
          },
          {
            type: 'input',
            name: 'gitHubUsername',
            message: "What is your GitHub Username?",
          },
          {
            type: 'input',
            name: 'email',
            message: "What i s your email address?",
          }

];

const licenses = [
    {
        name: "MIT License",
        url: "https://choosealicense.com/licenses/mit/",
        badge: "https://img.shields.io/badge/license-MIT-green",
    },
    {
        name:"General Public License",
        url: "https://choosealicense.com/licenses/gpl-3.0/",
        badge: "https://img.shields.io/badge/license-GPL%20v%203.0-green",
    },
    {
        name: "Apache License 2.0",
        url: "https://choosealicense.com/licenses/apache-2.0/",
        badge: "https://img.shields.io/badge/license-Apache%202.0-green",
    },
    {
        name: "ISC-License",
        url: "https://choosealicense.com/licenses/isc/",
        badge: "https://img.shields.io/badge/license-ISC-green",
    }
  ]
  
var generateReadMe = (title, description ,installation, usage, contribution, testing , license, licenseURL, licenseBadge ,gitHubUsername, email ) => {  
    return `# ${title}
  [![license](${licenseBadge})](${licenseURL})
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Test](#test)
  * [License](#license)
  ## Description 
  ${description}
  ## Installation
  ${installation}
  ## Usage 
  ${usage}
  ## Contribute
  ${contribution}
  ## Test
  ${testing}
  ## Questions
  If you have any questions, Please reach out to me.
  GitHub User Profile - https://github.com/${gitHubUsername}
  Email - ${email}
  ## License
  This application is covered under the following license: ${license}. For more information regarding this license please [Click Here](${licenseURL})
  `
  };


inquirer
.prompt(questions)
.then(answers => {
  const {title, description ,installation, usage, contribution, testing , license, licenseURL, licenseBadge, gitHubUsername, email} = answers;
  if(licenses === "MIT License - short and simple permissive license with conditions only requiring preservation of copyright and license notices"){
    license = licenses[0].name ;
    licenseURL = licenses[0].url ;
    licenseBadge = licenses[0].badge;
  } else if (licenses === "General Public License - Permissions of this strong license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license"){
    license = licenses[1].name ;
    licenseURL = licenses[1].url ;
    licenseBadge = licenses[1].badge;
  } else if(licenses === "Apache License v 2.0 - permissive license whose main conditions require preservation of copyright and license notices"){
    license = licenses[2].name ;
    licenseURL = licenses[2].url ;
    licenseBadge = licenses[2].badge;
  } else if(licenses === "ISC-License - permissive license lets people do anything with your code with proper attribution and without warranty"){
    license = licenses[3].name ;
    licenseURL = licenses[3].url ;
    licenseBadge = licenses[3].badge;
  };

  const templateReadMe = generateReadMe(title, description ,installation, usage, contribution, testing, license, licenseURL, licenseBadge ,gitHubUsername, email );

    fs.writeFile('newREADME.md', templateReadMe, (err) => {
    if (err) throw err;
    console.log('Your ReadMe has been generated!');
  });
  
}) 
.catch(error => {
  if(error) {

    console.log(error)
  } 
});