var answer = 0
var guess = 0
var attempts = 0
function HoL() {
    if (attempts == 0)
        answer = Math.floor(Math.random() * 100) + 1;
    guess = document.getElementById("guess").value;
    if (guess > 100 || guess < 1 || isNaN(guess)) {
        document.getElementById("field").innerHTML = "That is not a valid input.";
    }
    else if (guess < answer)    {
    attempts += 1;
    document.getElementById("field").innerHTML = "The answer is higher than " + guess + "!";
    }
    else if (guess > answer)    {
    attempts += 1;
    document.getElementById("field").innerHTML = "The answer is lower than " + guess + "!";
    }
    else    {
    attempts += 1;
    document.getElementById("field").innerHTML = "Correct! The answer is " + answer + "! You took " + attempts + " attempt(s). Input another number to start a new round!";
    attempts = 0;
    }
}
