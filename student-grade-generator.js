//create input and output interface

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//function to determine grade 
function getGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 49) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}
//function to prompt user for marks
function promptForMarks() {
    rl.question('Please enter student marks (0-100): ', (input) => {
        const marks = parseInt(input, 10);

        //validation of the input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log('Invalid input. Please enter a number between 0 and 100.');
            promptForMarks(); // Prompt again for valid input
        } else {
            const grade = getGrade(marks);

            //output the grade
            console.log(`The grade for marks ${marks} is: ${grade}`);
            rl.close(); // Close the readline interface
        }
    });
}

//call function to start the process
promptForMarks();