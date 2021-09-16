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
            question: "1.The user may plot the time domain data in ______ to visualize the free damped oscillations more minutely.", ///// Write the question inside double quotes
            answers: {
                a: "Html", ///// Write the option 1 inside double quotes
                b: "MS Word", ///// Write the option 2 inside double quotes
                c: "Powerpoint", ///// Write the option 1 inside double quotes
                d: "Excel", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },  

        {
            question: "2. Lorem ipsum is placeholder text commonly used in the graphic", ///// Write the question inside double quotes
            answers: {
                a: "Data Required", ///// Write the option 1 inside double quotes
                b: "Data Required", ///// Write the option 2 inside double quotes
                c: "Data Required", ///// Write the option 1 inside double quotes
                d: "Data Required", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "3. Lorem ipsum is placeholder text commonly used in the graphic", ///// Write the question inside double quotes
            answers: {
                a: "Data Required", ///// Write the option 1 inside double quotes
                b: "Data Required", ///// Write the option 2 inside double quotes
                c: "Data Required", ///// Write the option 1 inside double quotes
                d: "Data Required", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "4. Lorem ipsum is placeholder text commonly used in the graphic", ///// Write the question inside double quotes
            answers: {
                a: "Data Required", ///// Write the option 1 inside double quotes
                b: "Data Required", ///// Write the option 2 inside double quotes
                c: "Data Required", ///// Write the option 1 inside double quotes
                d: "Data Required", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "5. Lorem ipsum is placeholder text commonly used in the graphic", ///// Write the question inside double quotes
            answers: {
                a: "Data Required", ///// Write the option 1 inside double quotes
                b: "Data Required", ///// Write the option 2 inside double quotes
                c: "Data Required", ///// Write the option 1 inside double quotes
                d: "Data Required", ///// Write the option 2 inside double quotes
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
