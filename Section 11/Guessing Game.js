var secretnumber = 7;

var guess = prompt("Can you guess my secret number");

if(Number(guess)===secretnumber) {
   alert("YOU GOT IS RIGHT");
}
else if (Number(guess) > secretnumber) {
    alert("It is too long");
}
else {
    alert("It is too small");
}