// code that picks a random number between 1 and 100:

// Global Variables:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let count = 0;


function check() {
    count++;
    document.querySelector('#num-guesses').innerHTML = 
    'Number of guesses so far: ' + count;


    // count = count +1;
    // count+= 1;
    // your code here.
    // 1. Get the number they've entered from the dom.
    // store that in a variable.
    let guess = document.querySelector('#guess').value;
    
    // 2. Convert guess to a number
    guess = Number(guess);
    // 3. Check if they won :
    //      * if guess ==== secret -> You win!
    //      * if guess < secret -> To low!
    //      * otherwise: To high! 
    if (guess === secret) {
        console.log('You win!');
        document.querySelector('#message').textContent = 'You Win!';
        document.querySelector('#celebrate').className = '';
        // ^ Displays minion
    } else if (guess < secret) {
        console.log('To low!');
        document.querySelector('#message').innerHTML = 'To Low!';
        document.querySelector('#celebrate').className = 'hide';
    } else {
        console.log('To high!');
        document.querySelector('#message').textContent = 'To High!';
        document.querySelector('#celebrate').className = 'hide';
    }

}