// Create questions
const question = [
                    'What is the name of Abraham\'s promised son?',
                    'Who is the first man created in the bible?',
                    'At what age did Jesus start preaching as recorded in the bible?'
                    ];
// Store possible answers
const possibleAnswers = [
                    ['Isaac', 'Jacob', 'Ishmael'],
                    ['Job', 'Jesus', 'Adam'],
                    [30, 33, 12]
                    ];

// Store correct answer
const answer = ['Isaac', 'Adam', '12'];

let score = 0;


//Capitalise string
function capitalise(str) {
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

// Display question and prompt input
function displayQuestions() {
    for(let i = 0; i < question.length; i++) {
        // prompt for answer
        console.log((i+1) + '. ' +  question[i]);
        // Display possible answers
        console.log(possibleAnswers[i]);
        let userAns = prompt(question[i]);
        // evaluate user answer
        if(capitalise(userAns) === answer[i]) {
            score++;
            console.log('Correct!');
        } else {
            console.log('Wrong!');
        }
        // Display score
        console.log('Score: ' + score + '/' + question.length);
    }
    console.log('Test Completed!! Your score is: ' + score + '/' + question.length);
}

displayQuestions();
