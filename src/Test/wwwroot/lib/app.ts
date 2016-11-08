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
let answers = [];

//function createQuestion() {

    console.log("Inside createQuestion");
    console.log((<HTMLInputElement>document.getElementById("questionDescr")).value);

    let description = (<HTMLInputElement>document.getElementById("questionDescr")).value;

let question = new Question(description);

    allQuestions.push(question);
//}





//let answer = new Answer("option 1", true);

//answers.push(answer);

//question.arrayOfAnswers = answers;














