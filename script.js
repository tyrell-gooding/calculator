
let userInput = [];
let userINputCopy = [];
let firstNumber;
let secondNumber;
let operator;
let answer;

// select all calculator buttons
let buttons = document.querySelectorAll('.calc');
// add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;
        userInput.push(buttonText);
        userINputCopy.push(buttonText)
        document.querySelector('.answer-message').innerText = userInput.join(' ');
        console.log(userInput)
    });
});
//  create keydown functinaility for keyboard input
document.addEventListener('keydown', (e) => {
    let key = e.key;
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', 'x', '/', '.', '=', '*' ].includes(key)) {
      userInput.push(key);
      document.querySelector('.answer-message').innerText = userInput.join(' ');
      if (key === '=') {
        updateCalcLine();
      }
    }
  });
// clear button thats clears the answer message
  document.querySelector('.back').addEventListener('click', () => {
    userInput = [];
    userINputCopy = [];
    document.querySelector('.answer-message').innerText = '';
  });

//   update the calculation line
function updateCalcLine() {
    console.log(userInput)
    convertToJavascriptEquation()
  determineMath()
  userInput = []
  userInput.push(answer)
};

// convert input to javaScript 
function convertToJavascriptEquation() {
    for (i = 0; i < userInput.length; i++){
        if (['+', '-', 'x', '/', '*'].includes(userInput[i])) {
            operator = userInput[i]

        firstNumber = parseFloat(userInput.slice(0, i).join(''))
        secondNumber = parseFloat(userInput.slice(i + 1).join(''))
        break;
        }
    }
}
// determine the math operators.
let determineMath = () => {
    switch (operator) {
        case '+':
            answer = firstNumber + secondNumber;
            document.querySelector('.answer-message').innerText = answer;
            break;

        case '-': 
        answer = firstNumber - secondNumber;
        document.querySelector('.answer-message').innerText = answer;
        break;
        
        case 'x': 
        answer = firstNumber * secondNumber;
        document.querySelector('.answer-message').innerText = answer;
        break;

        case '*': 
        answer = firstNumber * secondNumber;
        document.querySelector('.answer-message').innerText = answer;
        break;


        case '/': 
        if (secondNumber === 0) {
            alert("Numbers cannot be diveded by 0 please enter another number")
            return
        }
        answer = firstNumber / secondNumber;
        document.querySelector('.answer-message').innerText = answer;
        break;
    }



}


//   tried to create a history button 
  
 

