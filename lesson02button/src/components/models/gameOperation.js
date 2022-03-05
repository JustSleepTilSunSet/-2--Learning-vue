/**
 * 1. Anti - duplicate number.
 * hint: 找副本問題
 */
function isValidQuestion(question){
    question = question.split('');
    question.sort();
    for(let [index, data] of question.entries()){
        let checkingArray = question.slice(index+1,question.length);
        if(checkingArray.indexOf(data)!=-1){
            console.log('Invalid question');
            return false;
        }
    }
    console.log(`Valid question.`);
    return true;
}

function guessResult(guess, question){
    let resultTable = {
        "A":0,
        "B":0
    }

    guess = guess.split('');
    question = question.split('');
    for(let guessIndex =0 ; guessIndex<guess.length;guessIndex++){
        for(let questionIndex = 0 ; questionIndex<question.length;questionIndex++){
            if(guess[guessIndex] == question[questionIndex]){
                if(guessIndex==questionIndex){
                    resultTable.A++;
                }else{
                    resultTable.B++;
                }
            }
        }
    }
    return resultTable;
}
export { 
        isValidQuestion as isValidQuestion,
        guessResult as guessResult
};