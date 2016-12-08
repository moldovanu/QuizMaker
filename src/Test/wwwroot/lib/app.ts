//function addAnswer(divName) {

//    console.log("Inside the addAnswer function!");
//    console.log("passing - " + divName);
//    let newDiv = document.createElement('div');
//    newDiv.innerHTML = <label><input type="checkbox" > True < /label>

//    console.log("new div - " + newDiv);
//    console.log("element divName = " + document.getElementById(divName));
//    document.getElementById(divName).appendChild(newDiv);
//}



class Question {

  public  questionDescr: string;
  public arrayOfAnswers = [];

    constructor(question:string) {
        this.questionDescr = question;
    }
}

class Answer {

    public option: string;
    public isTrue: boolean;

    constructor(option: string, isTrue: boolean) {
        this.option = option;
        this.isTrue = isTrue;
    }
}

let allQuestions = [];
console.log("created allQuestions array: " + allQuestions);

//let answers = [];
//let questionDescription = "";
let answerDescription = "";
let checkBox = false;



//grabbing data from the quiz form
function createQuestion() {

    let questionDescription = (<HTMLInputElement>document.getElementById("questionDescr")).value;
    let question = new Question(questionDescription);

    for (let i = 1; i <= 4; i++) {
        let answer = new Answer('', false);
        answerDescription = (<HTMLInputElement>document.getElementById("answer"+ i)).value;
        checkBox = (<HTMLInputElement>document.getElementById("answerTrue"+i)).checked;
        answer.isTrue = checkBox;
        answer.option = answerDescription;
        question.arrayOfAnswers.push(answer);
    }

    for (let entry of question.arrayOfAnswers) {
        console.log(entry);
    }

    console.log("full object", question);

    console.log("pushing Question to local storage");
    localStorage.setItem('question'+ Date.now(), JSON.stringify(question));
    
    //pushing existing data from the localstorage into an array of question objects


    alert ("Question submited. Add another question or take the quiz.")
        
    console.log("Question objects extracted from LocalStorage: \n");
    for (let entry of allQuestions) {
        console.log(entry);
    }
}


function populateQuiz() {

//extracting data from localstorage
    for (let i = 0; i < localStorage.length; i++) {
        let question = localStorage.getItem(localStorage.key(i));
        question = JSON.parse(question);
        allQuestions.push(question);
    }



}




//let answer = new Answer("option 1", true);

//answers.push(answer);

//question.arrayOfAnswers = answers;














