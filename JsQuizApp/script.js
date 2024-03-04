const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
 answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer = undefined;
    
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        const correctAnswer = quizData[currentQuiz].correct;
        const selectedLabel = document.querySelector(`label[for=${answer}]`);
        
        // Disable submit button
        submitBtn.disabled = true;
        
        if(answer === correctAnswer) {
            score++;
            selectedLabel.style.backgroundColor = 'green';
        } else {
            selectedLabel.style.backgroundColor = 'red';
        }
        
        // Fade out submit button text and color
        submitBtn.style.transition = 'color 2s, background-color 2s';
        submitBtn.style.color = 'rgba(0, 0, 0, 0)'; // Fading text color to transparent
        submitBtn.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Fading background color to transparent
        
        // Wait for 2 seconds for feedback, then reset styles and move to the next question or show results
        setTimeout(() => {
            selectedLabel.style.backgroundColor = ''; // Reset background color of the selected label
            submitBtn.style.color = ''; // Reset text color of submit button
            submitBtn.style.backgroundColor = ''; // Reset background color of submit button
            submitBtn.disabled = false; // Re-enable submit button
            submitBtn.style.transition = ''; // Reset transition
            
            currentQuiz++;
            
            if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                // Show results
                quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>`;
            }
        }, 2000);
    }
});