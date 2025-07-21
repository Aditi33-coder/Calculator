let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let evaluated = false; // track if "=" was just pressed

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btn = e.target.innerHTML;

        if (btn === '=') {
            try {
                string = eval(string).toString();
                input.value = string;
                evaluated = true;
            } catch {
                input.value = "Error";
                string = "";
                evaluated = true;
            }
        } 
        
        else if (btn === 'AC') {
            string = "";
            input.value = string;
            evaluated = false;
        } 
        
        else if (btn === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
            evaluated = false;
        } 
        
        else {
            if (evaluated) {
                if (['+', '-', '*', '/', '%'].includes(btn)) {
                    string += btn; // continue from result
                } else {
                    string = btn; // start fresh
                }
                evaluated = false;
            } else {
                string += btn;
            }
            input.value = string;
        }
    });
});
