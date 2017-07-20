console.log("Let's look at our grades!")

// Requirements

// Loop over an array of student grades (values from 50-100) 
// and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log() to output the following criteria:

// 1 How many of each grade?
// 2 What is the lowest grade?
// 3 What is the highest grade?


// let A = {
//     from: 91,
//     to: 100
// }
// let B = {
//     from: 81,
//     to: 90
// }
// let C = {
//     from: 71,
//     to: 80
// }
// let D = {
//     from: 61,
//     to: 70
// }
// let F = {
//     from: 50,
//     to: 60
// }
// let SeeMe = {
//     from: 0,
//     to: 49
// }
console.log("These are the number of students who earned each of these grades:");

var scores = ["75", "59", "64", "49", "91", "77", "79", "94", "81", "61", "87", "88", "77", "89", "91", "94", "72", "65", "89", ];

// Use console.log() to output the following criteria:
// 1. How many of each grade?
let sortedScores = scores.sort();

scores.forEach(function(score) {
    if (score > 89) {
        console.log("A");
    } else if (score > 80) {
        console.log("B");
    } else if (score > 70) {
        console.log("C");
    } else if (score > 60) {
        console.log("D");
    } else {
        console.log("F");
    }
});
// 2. What is the lowest grade?
console.log("The lowest grade was a score of:");
let lowestGrade = sortedScores[0];
console.log(lowestGrade);
// 3. What is the highest grade?
console.log("The highest grade was a score of:")
let highestGrade = sortedScores[sortedScores.length - 1];
console.log(highestGrade);