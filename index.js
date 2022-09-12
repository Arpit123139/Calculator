let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');          // to get all the buttons
console.log(buttons)
let screenValue = '';


for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(typeof(buttonText))
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screenValue=screen.value
            screen.value = eval(screenValue);
        }
        else {

            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

screen.addEventListener('keydown',(k)=>{
    
    console.log(k)
    if(k.key=="="){

        
        screenValue=screen.value
        screen.value = eval(screenValue);

    }
})