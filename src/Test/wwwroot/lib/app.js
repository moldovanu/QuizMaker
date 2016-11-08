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
var answers = [];
//function createQuestion() {
console.log("Inside createQuestion");
console.log(document.getElementById("questionDescr").value);
var description = document.getElementById("questionDescr").value;
var question = new Question(description);
allQuestions.push(question);
//}
//let answer = new Answer("option 1", true);
//answers.push(answer);
//question.arrayOfAnswers = answers;
//# sourceMappingURL=app.js.map