//creates input and output interface
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate points based on speed
function checkSpeed(speed) {
    const speedLimit = 70; 
    const maximumPoints = 12; 

    
    if (speed <= speedLimit) {
        console.log("Ok"); 
    } else {
        
        const excessSpeed = speed - speedLimit; 
        const Points = Math.floor(excessSpeed / 5); 

        // Print the total number of demerit points
        console.log(`Points: ${Points}`);

        // Check if the demerit points exceed the maximum points for license suspension
        if (Points > maximumPoints) {
            console.log("License suspended"); 
        }
    }
}


//prompt for speed input
rl.question('Enter the speed of the car: ', (input) => {
    const speed = parseFloat(input); 

    // Check if the input is a valid number
    if (isNaN(speed)) {
        console.log('Invalid input. Please enter a valid number for speed.'); //prompt for input again
    } else {
        checkSpeed(speed); 
    }

    rl.close(); // Close the readline interface
});