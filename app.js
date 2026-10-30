// 1. Student Details
let name = "Rahul Kumar";
let rollNo = 101;
let department = "Computer Science";

// 2. Store marks in an array
let marks = [78, 85, 62, 91, 34];

// 3. Calculate Total Marks
function calculateTotal(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total = total + marks[i];
    }

    return total;
}

// 4. Calculate Percentage
function calculatePercentage(marks) {
    let total = calculateTotal(marks);
    let percentage = (total / 500) * 100;

    return percentage;
}

// 5. Find Highest Marks
function findHighest(marks) {
    let highest = marks[0];

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}

// 6. Find Lowest Marks
function findLowest(marks) {
    let lowest = marks[0];

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < lowest) {
            lowest = marks[i];
        }
    }

    return lowest;
}

// 7. Count Subjects Passed
function countPassed(marks) {
    let count = 0;

    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 40) {
            count++;
        }
    }

    return count;
}

// 8. Convert Name to Uppercase
let upperName = name.toUpperCase();
let nameLength = upperName.length;

// Bonus Challenge: Performance
function findPerformance(marks) {
    let percentage = calculatePercentage(marks);

    if (percentage >= 80) {
        return "Excellent";
    }
    else if (percentage >= 60) {
        return "Good";
    }
    else if (percentage >= 40) {
        return "Average";
    }
    else {
        return "Needs Improvement";
    }
}

// 9. Display Final Report
console.log("Student:", upperName);
console.log("Roll Number:", rollNo);
console.log("Department:", department);
console.log("Name Characters:", nameLength);
console.log("Total Marks:", calculateTotal(marks));
console.log("Percentage:", calculatePercentage(marks) + "%");
console.log("Highest Marks:", findHighest(marks));
console.log("Lowest Marks:", findLowest(marks));
console.log("Subjects Passed:", countPassed(marks));
console.log("Performance:", findPerformance(marks));