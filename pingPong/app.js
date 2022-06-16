// NAVIGATION AND DEFAULT VALUES
const displayScore = document.querySelector('#scores');
const p1IncBtn = document.querySelector('#playerOne');
const p2IncBtn = document.querySelector('#playerTwo');
const resetBtn = document.querySelector('#reset');
const winningScore = document.querySelector('#winningScore');
winningScore.value = 5;


// VARIABLES
const scores = [0, 0];

// HELPER FUNCTIONS
const updateScore = function() {
    displayScore.textContent = `${scores[0]} to ${scores[1]}`
}

const toggleButtons = function() {
    if (p1IncBtn.disabled === true) {
        p1IncBtn.disabled = false;
        p2IncBtn.disabled = false;
    } else {
        p1IncBtn.disabled = true;
        p2IncBtn.disabled = true;
    }
}

const winCheck = function() {
    if (scores.some(el => el === parseInt(winningScore.value))) {
        console.log('win')
        toggleButtons();
    }
}

const setScore = function(winAt) {
    winningScore.value = winAt;
}
// DEFAULT SCORE
setScore(5);

// EVENT LISTENERS

winningScore.addEventListener('input', function(){
    setScore(this.value);
    console.log(winningScore.value)
    if (p1IncBtn.disabled) {
        toggleButtons();
    }
})

p1IncBtn.addEventListener('click', () => {
    scores[0]++;
    updateScore();
    winCheck();
})

p2IncBtn.addEventListener('click', () => {
    scores[1]++;
    updateScore();
    winCheck();
})

resetBtn.addEventListener('click', () => {
    scores[0] = 0; 
    scores[1] = 0;
    updateScore();
    toggleButtons();

})
