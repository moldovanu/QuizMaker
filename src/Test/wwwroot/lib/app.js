//function addAnswer(divName) {
//    console.log("Inside the addAnswer function!");
//    console.log("passing - " + divName);
//    let newDiv = document.createElement('div');
//    newDiv.innerHTML = <label><input type="checkbox" > True < /label>
//    console.log("new div - " + newDiv);
//    console.log("element divName = " + document.getElementById(divName));
//    document.getElementById(divName).appendChild(newDiv);
//}
var Question = (function () {
    function Question(question) {
        this.arrayOfAnswers = [];
        this.questionDescr = question;
    }
    return Question;
}());
var Answer = (function () {
    function Answer(option, isTrue) {
        this.option = option;
        this.isTrue = isTrue;
    }
    return Answer;
}());
var allQuestions = [];
console.log("created allQuestions array: " + allQuestions);
//let answers = [];
//let questionDescription = "";
var answerDescription = "";
var checkBox = false;
//grabbing data from the quiz form
function createQuestion() {
    var questionDescription = document.getElementById("questionDescr").value;
    var question = new Question(questionDescription);
    for (var i = 1; i <= 4; i++) {
        var answer = new Answer('', false);
        answerDescription = document.getElementById("answer" + i).value;
        checkBox = document.getElementById("answerTrue" + i).checked;
        answer.isTrue = checkBox;
        answer.option = answerDescription;
        question.arrayOfAnswers.push(answer);
    }
    for (var _i = 0, _a = question.arrayOfAnswers; _i < _a.length; _i++) {
        var entry = _a[_i];
        console.log(entry);
    }
    console.log("full object", question);
    console.log("pushing Question to local storage");
    localStorage.setItem('question' + Date.now(), JSON.stringify(question));
    //pushing existing data from the localstorage into an array of question objects
    alert("Question submited. Add another question or take the quiz.");
    console.log("Question objects extracted from LocalStorage: \n");
    for (var _b = 0, allQuestions_1 = allQuestions; _b < allQuestions_1.length; _b++) {
        var entry = allQuestions_1[_b];
        console.log(entry);
    }
}
function populateQuiz() {
    //extracting data from localstorage
    for (var i = 0; i < localStorage.length; i++) {
        var question = localStorage.getItem(localStorage.key(i));
        question = JSON.parse(question);
        allQuestions.push(question);
    }
}
//let answer = new Answer("option 1", true);
//answers.push(answer);
//question.arrayOfAnswers = answers;
//# sourceMappingURL=app.js.map