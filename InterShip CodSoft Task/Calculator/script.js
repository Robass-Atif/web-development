
const input = document.querySelector('#inputText');
let string = ""; 
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.innerHTML === '=') {
            string = eval(string);
            input.value = string;
        }
        else if(button.innerHTML==='DEL')
        {
            string=string.substring(0,string.length-1);
            input.value = string;

        } 
        else if(button.innerHTML==='AC')
        {
            string ="";
            input.value = string;

        }
        else {
            string += button.innerHTML;
            input.value = string;
        }
    });
});
