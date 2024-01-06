const questions =[
{
    question:"what is  2+2?",
    options:["3","4","5" ,"6"],
    correctAnswer:1,
},
{
question:"what is  the capital of Italy?",
options:["madrid","Paris","Rome" ,"Berlin"],
correctAnswer:2,
},

{
    question:"which planet is closest to the sun ?",
    options:["mars","jupiter","venus" ,"saturn"],
    correctAnswer:2,
},

{
    question:"what is  the chemical symbol for Gold?",
    options:["Au","Ag","Hg" ,"Pb"],
    correctAnswer:0,
},
{
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
    correctAnswer: 2,
},
{
   question:"Which gas do plants absorb from the atmosphere?",
   options:["oxygen","carbon Diaoxide","Nitrogen","hydrogen"],
   correctAnswer:1
},
{
   question:"What is the currency of japan?",
   options:["yen","Doller","EUro" ,"Pound"],
   correctAnswer:0
},
{
question:"which country is Known as the land of the raising sun?",
options:["china ","korea","vietnam" ,"japan"],
correctAnswer:3
},
{
question:"what is the largest planet in our solar system?",
options:["Mars","jupiter","Venus" ,"saturn"],
correctAnswer:1
},
{
question:"what is the Freezing point of water in Faherenheit?",
options:["0°F","32°F","100°F" ,"212°F"],
correctAnswer:1
},
];



let currentQuestion = 0;
let score = 0;

const questionCounter = document.getElementById("question-counter");
const scoreCounter = document.getElementById("score");
const questionText = document.getElementById("question-text")
const options =document.querySelectorAll(".option")
const nextButton =document.getElementById("next-button")
const scoreBoard =document.querySelector(".scoreboard")
const finalScore =document.getElementById("final-score")
const restartButton =document.getElementById("restart-button")


const startQuizButton= document.getElementById("start-quiz-button")
const quizContainer = document.querySelector(".quiz-container");


startQuizButton.addEventListener("click",()=>{
    startQuizButton.parentElement.style.display="none"

      quizContainer.style.display ="block";
      loadQuestion();

 })
 nextButton.display =true
 let optionClicked =false
 
 function loadQuestion() {
    if (currentQuestion<questions.length){
        questionCounter.textContent =`Question ${currentQuestion+1}/${questions.length}`
        questionText.textContent = questions[currentQuestion].question;

        options.forEach((option,index)=>{
            option.textContent =questions[currentQuestion].options[index];
            option.style.backgroundColor ="white"
            option.style.pointerEvents ="auto"
            option.onclick =function () {
                handleOptionClick(index);
            }
        })
     nextButton.disabled =!optionClicked;
    }   else{
        showScoreboard();
    }
}


function handleOptionClick(selectedOptionIndex){
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;

    options.forEach((option)=>{
        option.style.pointerEvents ="none";
        option.onclick= null;

    })
    if(selectedOptionIndex === correctAnswerIndex){

        options[selectedOptionIndex].style.backgroundColor="green"
        score++;
      scoreCounter.textContent =`score:${score}`
     } else{
        options[selectedOptionIndex].style.backgroundColor="red"
        options[correctAnswerIndex].style.backgroundColor ="green"    
     }
     optionClicked=true;
     nextButton.disabled=false;

}
function showScoreboard() {
    scoreBoard.style.display="block"
    finalScore.textContent = score;

}
nextButton.addEventListener("click",()=>{
    currentQuestion++
    optionClicked =false;
    nextButton.disabled =true
    loadQuestion();
})

restartButton.addEventListener("click",()=>{
    currentQuestion = 0;
    score=0
    scoreCounter.style.display="none"
    loadQuestion()
    scoreCounter.textContent ="score:0"
    optionClicked =false;
})

loadQuestion();

