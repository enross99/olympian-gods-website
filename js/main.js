// begin Carousel
// assign variables
let divInfo = document.querySelectorAll('.div-info');
let readMore = document.querySelectorAll('.read-more');
let divs = document.querySelectorAll('audio');

// function to hide all divs
function hideAll() {
  divInfo.forEach(function(el) {
    el.style.display = 'none';
  });
}

// run that function right away
hideAll();

// when read more is clicked, make the suitable div appear
readMore.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

divs.forEach(function(el) {
  el.pause();
  el.currentTime = 0;
});


    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'read-zeus':
        document.querySelector('#zeus')
        	.style.display = 'block';
        break;
      case 'read-poseidon':
        document.querySelector('#poseidon')
        .style.display = 'block';
        break;
      case 'read-hades':
        document.querySelector('#hades')
        .style.display = 'block';
        break;
      case 'read-hades':
        document.querySelector('#hades')
        .style.display = 'block';
        break;
      case 'read-hera':
        document.querySelector('#hera')
        .style.display = 'block';
        break;
      case 'read-demeter':
        document.querySelector('#demeter')
        	.style.display = 'block';
        break;
      case 'read-aph':
        document.querySelector('#aph')
        .style.display = 'block';
        break;
      case 'read-athena':
        document.querySelector('#athena')
        .style.display = 'block';
        break;
      case 'read-ares':
        document.querySelector('#ares')
        .style.display = 'block';
        break;
      case 'read-heph':
        document.querySelector('#heph')
        .style.display = 'block';
        break;
      case 'read-hermes':
        document.querySelector('#hermes')
        .style.display = 'block';
        break;
      case 'read-apollo':
        document.querySelector('#apollo')
        .style.display = 'block';
        break;
      case 'read-artemis':
        document.querySelector('#artemis')
        .style.display = 'block';
        break;
      case 'read-ares':
        document.querySelector('#ares')
        .style.display = 'block';
        break;
      case 'read-dionysus':
        document.querySelector('#dionysus')
        .style.display = 'block';
        break;
      case 'read-hestia':
        document.querySelector('#hestia')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

  } // end of function for clicking

}); // end of forEach()

// end carousel

// begin quiz: base code from https://jsfiddle.net/macloo/e839csoL/

// global vars
let message = "";
let score = 0;
let notDone = 0;
let done = 0;
let total = 0;
let answerList = [];

// make all the answer buttons work
const anyButton = document.querySelectorAll('#answer-buttons .butt');
anyButton.forEach(function(e) {
  // run the function named main on click
  e.addEventListener('click', main);
});
// this is the Start or Next button only
const singleButton = document.querySelector('#other-buttons .butt');
// run the function named control on click
singleButton.addEventListener('click', control);

// this runs only once
function setup() {
  total = questions.length;
  notDone = total;
  message = "Test your trivia knowledge!";
  document.querySelector("#answer-buttons").classList.add('hide');
  document.querySelector("#other-buttons .butt").textContent = "Start";
  writeResults();
}

// this runs when any answer button is clicked
function main() {
  if (done !== total) {
    if (this.textContent === questions[done].answer) {
      // answer is correct
      score++;
      message = "Correct!";
    } else {
      // answer is wrong
      message = "Sorry, the correct answer was: " + questions[done].answer;
    }
    done++
    notDone--;
    document.querySelector("#other-buttons").classList.remove('hide');
    document.querySelector("#answer-buttons").classList.add('hide');
    writeResults();
  }
}

// for the Start and Next button
function control() {
  if (done !== total) {
    document.querySelector("#other-buttons .butt").textContent = "Next";
    document.querySelector("#answer-buttons").classList.remove('hide');
    loadNewQuestion();
  } else {
    message = "You're all done! Thanks for playing!";
  }
  document.querySelector("#other-buttons").classList.add('hide');
  writeResults();
}

// get question and answers from the array named questions
function loadNewQuestion() {
  message = questions[done].question;
  answerList = [questions[done].answer,
    questions[done].wrong_answer_1,
    questions[done].wrong_answer_2
  ];
  answerList = shuffle(answerList);
}

function writeResults() {
  document.querySelector("#narration").textContent = message;
  document.querySelector("#score").textContent = score;
  document.querySelector("#notDone").textContent = notDone;
  document.querySelector("#done").textContent = done;
  // use current contents of answerList to write text
  // into the buttons
  for (let i = 0; i < answerList.length; i++) {
    anyButton[i].textContent = answerList[i];
  }
}

// shuffle all items in an array
function shuffle(sourceArray) {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (sourceArray.length - i));
    let temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

// array holds all info about each question - any number
// of questions can be used
const questions = [{
    question: "Who is Hades married to?",
    answer: "Persephone",
    wrong_answer_1: "Demeter",
    wrong_answer_2: "Hera"
  },
  {
    question: "Which of the Kronos and Rhea's children were not eaten by Cronos?",
    wrong_answer_1: "Poseidon",
    wrong_answer_2: "Hades",
    answer: "Zeus"
  },
  {
    question: "Which Olympian has the same name in Roman mythology?",
    answer: "Apollo",
    wrong_answer_1: "Zeus",
    wrong_answer_2: "Aphrodite"
  },
  {
    question: "Which god is sometimes referred to as Bacchus?",
    wrong_answer_1: "Ares",
    wrong_answer_2: "Hephaestus",
    answer: "Dionysus"
  },
  {
    question: "Who is the mother of Persephone?",
    wrong_answer_1: "Aphrodite",
    wrong_answer_2: "Hera",
    answer: "Demeter"
  },
]; // end of questions array

setup();
