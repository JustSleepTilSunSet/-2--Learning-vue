//Default value.
let basicTemplate = 1234;
let {isValidQuestion}= require('./gameOperation');
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function generateQuestion(){
    basicTemplate = getRandomInt(8999)+1000;
    return basicTemplate;
}

/**
 * for single player.
 */
function getQuestion(){
    let question = generateQuestion();
    console.log('question ',question);
    console.log('isValidQuestion ', isValidQuestion((question+"")));
    return question;
}

/**
 * for multiple players.
 */
function getInstance(){
    //1. 宣告個人化答案。
    class personalQuestion {
        constructor(question){
            this.question = question;
        }
    }

    //2. 產生個人化答案實例。
    return new personalQuestion(basicTemplate);
}
// exports.getQuestion = getQuestion;
export {
    getQuestion as getQuestion,
    generateQuestion as generateQuestion
}
// export { getQuestion as getQuestion, getInstance as getInstance };