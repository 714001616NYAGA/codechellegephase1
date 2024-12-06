// Import the readline module for input
const readline = require('readline');

// Create an interface for input-output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate PAYE tax based on the gross salary
function calculatePAYE(grossSalary) {
    let PAYE;

    if (grossSalary <= 24000) {
        PAYE = (grossSalary * 0.10); 
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        PAYE = (grossSalary  * 0.25); 
    } else if (grossSalary > 32333 && grossSalary <= 50000) {
        PAYE = (grossSalary * 0.30);
    } else if (grossSalary > 50000 && grossSalary <= 80000) {
        PAYE = (grossSalary * 0.325);
    } else {
        PAYE = (grossSalary * 0.35);
    }

    return PAYE; // Return the calculated tax
}

// Function to calculate NHIF deductions based on gross salary
function calculateNHIF(grossSalary) {
    if (grossSalary <= 6000) return 150;
    else if (grossSalary < 8000) return 300;
    else if (grossSalary < 12000) return 400;
    else if (grossSalary < 15000) return 500;
    else if (grossSalary < 20000) return 600;
    else if (grossSalary < 25000) return 750;
    else if (grossSalary < 30000) return 850;
    else if (grossSalary < 35000) return 900;
    else if (grossSalary < 40000) return 950;
    else if (grossSalary < 45000) return 1000;
    else if (grossSalary < 50000) return 1100;
    else if (grossSalary < 60000) return 1200;
    else if (grossSalary < 70000) return 1300;
    else if (grossSalary < 80000) return 1400;
    else if (grossSalary < 90000) return 1500;
    else if (grossSalary < 100000) return 1600;
    else return 1700; 
}

// Function to calculate NSSF deductions 
function calculateNSSF(grossSalary) {
    let NSSF = (grossSalary * 0.06) ;
    return NSSF;
}

// Function to calculate gross salary
function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits; 
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const netSalary = grossSalary - (paye + nhif + nssf); // Net salary calculation
    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        netSalary: netSalary
    };
}

// Function to get user input and calculate net salary
function getUserInput() {
    rl.question('Enter your basic salary (Ksh): ', (basicSalary) => {
        rl.question('Enter your benefits (Ksh): ', (benefits) => {
            const salaryDetails = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));

            console.log(`\nGross Salary: Ksh ${salaryDetails.grossSalary.toFixed(2)}`);
            console.log(`PAYE: Ksh ${salaryDetails.paye.toFixed(2)}`);
            console.log(`NHIF: Ksh ${salaryDetails.nhif.toFixed(2)}`);
            console.log(`NSSF: Ksh ${salaryDetails.nssf.toFixed(2)}`);
            console.log(`Net Salary: Ksh ${salaryDetails.netSalary.toFixed(2)}`);
            rl.close();
        });
    });
}
getUserInput();
