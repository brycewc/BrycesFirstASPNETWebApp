//Program description: Calculates and displays both a final percentage and a letter grade using the "Grade Calculator" form entries based on the weights listed in the syllabus.
$('#gradeForm').submit(function () {
    iHomework = $('#homework').val(); //50
    iGroupProject = $('#groupProject').val(); //10
    iQuizzes = $('#quizzes').val(); //10
    iExams = $('#exams').val(); //20
    iIntex = $('#intex').val(); //10

    //Determines final grade percentage based on weight from the syllabus
    iFinalGrade = ((iHomework * .5) + (iGroupProject * .1) + (iQuizzes * .1) + (iExams * .2) + (iIntex * .1));

    //if statement to determine letter grade
    sLetterGrade = "";
    if (iFinalGrade >= 94) {
        sLetterGrade = "A";
    }
    else if (iFinalGrade >= 90) {
        sLetterGrade = "A-";
    }
    else if (iFinalGrade >= 87) {
        sLetterGrade = "B+";
    }
    else if (iFinalGrade >= 84) {
        sLetterGrade = "B";
    }
    else if (iFinalGrade >= 80) {
        sLetterGrade = "B-";
    }
    else if (iFinalGrade >= 77) {
        sLetterGrade = "C+";
    }
    else if (iFinalGrade >= 74) {
        sLetterGrade = "C";
    }
    else if (iFinalGrade >= 70) {
        sLetterGrade = "C-";
    }
    else if (iFinalGrade >= 67) {
        sLetterGrade = "D+";
    }
    else if (iFinalGrade >= 64) {
        sLetterGrade = "D";
    }
    else if (iFinalGrade >= 60) {
        sLetterGrade = "D-";
    }
    else {
        sLetterGrade = "E";
    }

    //Output
    alert("You got a " + sLetterGrade + " in IS 413 with a " + iFinalGrade + "%");
});