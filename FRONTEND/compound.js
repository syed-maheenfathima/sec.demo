// Function to calculate compound interest
function calculateCompoundInterest(P, r, n, t) {
    const amount = P * Math.pow((1 + r / n), n * t);
    const compoundInterest = amount - P;
    return {
        amount: amount.toFixed(2),
        compoundInterest: compoundInterest.toFixed(2)
    };
}

// Example usage
let principal = 100;     // Principal amount
let rate = 2;          // Annual interest rate (5%)
let timesCompounded = 4;  // Quarterly compounding
let time = 3;             // Time in years

const result = calculateCompoundInterest(principal, rate, timesCompounded, time);

console.log("Total Amount: " + result.amount);
console.log("Compound Interest: " + result.compoundInterest);
