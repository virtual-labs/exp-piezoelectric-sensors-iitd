/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. The user may plot the time domain data in _______ to visualize the free damped oscillations more minutely.", ///// Write the question inside double quotes
            answers: {
                a: "Html", ///// Write the option 1 inside double quotes
                b: "MS Word", ///// Write the option 2 inside double quotes
                c: "Powerpoint", ///// Write the option 1 inside double quotes
                d: "Excel", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },  

        {
            question: "2. The surface strain fluctuates between _____ and tension", ///// Write the question inside double quotes
            answers: {
                a: "Sensor", ///// Write the option 1 inside double quotes
                b: "Compression", ///// Write the option 2 inside double quotes
                c: "Cantilever beam", ///// Write the option 1 inside double quotes
                d: "Electrodes", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "3. From the frequency plot, the user can identify the natural frequency of the ____", ///// Write the question inside double quotes
            answers: {
                a: "Domain", ///// Write the option 1 inside double quotes
                b: "Voltage", ///// Write the option 2 inside double quotes
                c: "PZT patch", ///// Write the option 1 inside double quotes
                d: "Beam", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "4. The wires from the PZT patch are connected to", ///// Write the question inside double quotes
            answers: {
                a: "Hammer", ///// Write the option 1 inside double quotes
                b: "Digital multi meter", ///// Write the option 2 inside double quotes
                c: "Concrete block", ///// Write the option 1 inside double quotes
                d: "Aluminium Cantilever", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "5. This virtual experiment simulates vibrations of a cantilever beam under external excitation induced using a", ///// Write the question inside double quotes
            answers: {
                a: "PZT patch", ///// Write the option 1 inside double quotes
                b: "Digital multi meter", ///// Write the option 2 inside double quotes
                c: "Concrete block", ///// Write the option 1 inside double quotes
                d: "Hammer", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        // {
        //     question: "6. What is the apparatus required for the determination of split tensile strength of hardened concrete?", ///// Write the question inside double quotes
        //     answers: {
        //         a: "CTM", ///// Write the option 1 inside double quotes
        //         b: "Rebound hammer", ///// Write the option 2 inside double quotes
        //         c: "VICAT", ///// Write the option 1 inside double quotes
        //         d: "flexural testing machine", ///// Write the option 2 inside double quotes
        //     },
        //     correctAnswer: "a" ///// Write the correct option inside double quotes
        // },

        


    // {
    //   question: "<img src='images/8.PNG'><br>Identify the location of Secondary electron detector",  ///// Write the question inside double quotes
    //   answers: {
    //     a: "<img src='images/1b.png'>",                  ///// Write the option 1 inside double quotes
    //     b: "<img src='images/1a.png'>",                  ///// Write the option 2 inside double quotes
    //     c: "<img src='images/1c.PNG'>",      },
    //   correctAnswer: "c"                ///// Write the correct option inside double quotes
    // },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
