function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;

    var correct = 0; 
        if (question1 == "Releases energy at a reasonable rate and produced minimal pollution") {
            correct++;
        }
        if(question2 == "False") {
            correct++;
        }
        if (question3 == "Sulfur") {
            correct++;
        }
        if (question4 == "True") {
            correct++;
        }
        if(question5 == "Nucleon") {
            correct++;
        }
        if (question6 == "Half life") {
            correct++;
        }
        if (question7 == "6CO2 + 6H2O --> C6H12O6 + 6O2") {
            correct++;
        }

        if(question8 == "Ethanol produced from fermentation by plants which absorb CO2 in growing"){
            correct++;
        }
        if (question9 == "The trapping of the sun's warmth in a planet's lower atmosphere, due to the greater transparency of the atmosphere to visible radiation from the sun than to infrared radiation emitted from the planet's surface.") {
            correct++;
        }
        if (question10 == "True") {
            correct++;
        }

    var pictures = ["img/win.gif", "img/okay.jpg", "img/Books.gif"];    
    var messages = ["awesome you did great!!!", "Hey you did okay but not good enough but...", "Sorry you need to hit the books again"];
    
     var score;
        if (correct < 5)
        {
        score = 2;
        }
        if (correct > 4  && correct < 8)
        {
         score = 1;
        }
        if (correct > 8)
        {
        score = 0;
        }

document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("message").innerHTML = messages [score];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
document.getElementById("picture").src = pictures [score]; 
}
