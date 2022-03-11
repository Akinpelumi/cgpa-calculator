// CGPA SYSTEM WITH 5.0 beign the Highest Using FACTORY PATTERN DESIGN PATTERN
// Akinpelumi Akintunde
// Cactus Engineering

// declaring the fixed Grades and Weights
const A = 5, B = 4, C = 3, D = 2, E = 1, F = 0;

// initiating student Object
const student = {};

// the students grade class per course with 5 being the max number
const scoreWeight = [1, 2, 3, 4, 5]

// declaring the students weight array and then calculating the students score
const weights = [];
student.scores = scores = (scoreWeight) => {
    if (!Array.isArray(scoreWeight)) {
       return console.log('scores should be in an array format');
    }
    scoreWeight.map((score) => {
        if (score === A) {
            weights.push(score * A);
        } else if (score === B) {
            weights.push(score * B);
        } else if (score === C) {
            weights.push(score * C);
        } else if (score === D) {
            weights.push(score * D);
        } else if (score === E) {
            weights.push(score * E);
        } else {
            weights.push(score * F);
        }
    })
    return weights;
};

// claculating the expected score from all students if the student had 100%
student.expectedScores = expectedScores = (courseLegth) => {
    return A * A * parseFloat(courseLegth)
};

// claculating the students actual score
student.totalScore = totalScore = (scores) => {
    return scores.reduce((a,b) => a + b);
};

// claculating the total number of course taken by the student
student.totalCourses = totalCourses = (scores) => {
    return scores.length;
};


// determining the grade level the student falls into
const grading = (score) => {
    switch (true) {
        case (score < 1.5):
            return (`${parseFloat(score).toFixed(2)} ===>>>> You came to school to joke consider another option`)
        case (score >=1.5 && score < 2.5):
            return (`${parseFloat(score).toFixed(2)} ===>>>> Third Class`)
        case (score >=2.5 && score < 3.5):
            return(`${parseFloat(score).toFixed(2)} ===>>>> Second Class Lower Division`)
        case (score >=3.5 && score < 4.5):
            return(`${parseFloat(score).toFixed(2)} ===>>>> Second Class Upper Division`)
        case (score >=4.5 && score <= 5.0):
            return(`${parseFloat(score).toFixed(2)} ===>>>> First Class`)
        default:
            return(`${parseFloat(score).toFixed(2)} ===>>>> belongs to Invalid Calculation of Grades`)
    };
}

// function to calculate the students CPGA
function GPA(user, userProfile = {}, totalScore, expectedScores) {
    const  gradePoint = ((parseFloat(totalScore) / parseFloat(expectedScores)) * A);
    const gradeClass = grading(gradePoint)
    Object.assign(user, userProfile);
    return document.getElementById("result").innerHTML =  `
    Firstname: ${userProfile.first_name} <br>
    Lastname: ${userProfile.last_name} <br>
    Lastname: ${userProfile.department} <br>
    Lastname: ${userProfile.level} <br>
    Your CGPA is ${gradeClass}`
}

// calling the function to detarmin the students CGPA
const calculateGrade = GPA(student, 
    {
        first_name: 'Lolade',
        last_name: 'Biobaku',
        department: 'Law',
        level: 100,
        scores: scores(scoreWeight),
        totalScore: totalScore(weights),
        totalCourses: totalCourses(scoreWeight),
        expectedScore: expectedScores(totalCourses(scoreWeight)),
    }, totalScore(weights), expectedScores(scoreWeight.length)
);
console.log(student);
