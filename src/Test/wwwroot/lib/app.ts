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

let answers = [];
let questionDescription = "";
let answerOption = "";
let answerIsTrue = false;

function createQuestion() {

    console.log("Inside createQuestion");

     questionDescription = (<HTMLInputElement>document.getElementById("questionDescr")).value;
     console.log("Question description, grabbed from form: " + questionDescription);


     let question = new Question(questionDescription);

    console.log("created a new Question object w/h the description above: ", question);


    allQuestions.push(question);
    console.log("updated allQuestions array: " + allQuestions);
}





//let answer = new Answer("option 1", true);

//answers.push(answer);

//question.arrayOfAnswers = answers;














