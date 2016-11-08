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
var answers = [];
var questionDescription = "";
var answerOption = "";
var answerIsTrue = false;
function createQuestion() {
    console.log("Inside createQuestion");
    questionDescription = document.getElementById("questionDescr").value;
    console.log("Question description, grabbed from form: " + questionDescription);
    var question = new Question(questionDescription);
    console.log("created a new Question object w/h the description above: ", question);
    allQuestions.push(question);
    console.log("updated allQuestions array: " + allQuestions);
}
//let answer = new Answer("option 1", true);
//answers.push(answer);
//question.arrayOfAnswers = answers;
//# sourceMappingURL=app.js.map