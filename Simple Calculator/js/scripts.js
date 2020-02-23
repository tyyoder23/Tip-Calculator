var display = document.querySelector('#display');
var displayString = display.value;
var mathFunc;
var numArr = [];
var displayInt = parseFloat(displayString);
var newString;
var lastInput;


// Calculator button event listeners

document.getElementById('clear-btn').addEventListener('click', function(e) {
    display.value = 0;
    mathFunc;
    numArr = [];
});

document.getElementById('delete-btn').addEventListener('click', function(e) {
    
    displayString = display.value;
    
    newDisplayString = displayString.slice(0, - 1);
        
    display.value = newDisplayString;
    
    if (!display.value) {
        display.value = 0;
        }
    
});

document.getElementById('square-btn').addEventListener('click', function(e) {
    

    displayString = display.value;
    
    var displaySquaredInt = parseFloat(displayString) * parseFloat(displayString);
    display.value = displaySquaredInt.toString();
    
});


document.getElementById('squareRoot-btn').addEventListener('click', function(e) {
    
    displayString = display.value;
    var displaySquareRootInt = Math.sqrt(displayString);
    display.value = displaySquareRootInt.toString();
    
});



document.getElementById('divide-btn').addEventListener('click', function(e) {
    divideNum();
});

document.getElementById('7-btn').addEventListener('click', function(e) {
    appendNumber(e);
});

document.getElementById('8-btn').addEventListener('click', function(e) {
    appendNumber(e);
});

document.getElementById('9-btn').addEventListener('click', function(e) {
    appendNumber(e);
});

document.getElementById('multiply-btn').addEventListener('click', function(e) {
    multiplyNum();
});

document.getElementById('4-btn').addEventListener('click', function(e) {
    appendNumber(e);
});

document.getElementById('5-btn').addEventListener('click', function(e) {
    appendNumber(e);
});

document.getElementById('6-btn').addEventListener('click', function(e) {
    appendNumber(e);
});


document.getElementById('subtract-btn').addEventListener('click', function(e) {
    subtractNum();
});


document.getElementById('1-btn').addEventListener('click', function(e) {
    appendNumber(e);
});


document.getElementById('2-btn').addEventListener('click', function(e) {
    appendNumber(e);
});


document.getElementById('3-btn').addEventListener('click', function(e) {
    appendNumber(e);
});

document.getElementById('add-btn').addEventListener('click', function(e) {
   
  addNum();
    
});

document.getElementById('plus/minus-btn').addEventListener('click', function(e) {
    
    displayString = display.value;
    
    if (displayString.charAt(0) === "-") {
            newString = displayString.substr(1); 
            display.value = newString;
        
        } else {
            newString = "-" + displayString;
            display.value = newString;
        }
        
    
    
    
});

document.getElementById('0-btn').addEventListener('click', function(e) {
    appendNumber(e);
});

document.getElementById('decimal-btn').addEventListener('click', function(e) {
    
    appendNumber(e);
});




document.getElementById('equals-btn').addEventListener('click', function(e) {
    
    if (mathFunc === "+") {
        addNum();
        }
    else if (mathFunc === "-") {
        subtractNum();
        }
    else if (mathFunc === "*") {
        multiplyNum();
             }
    else if (mathFunc = "/") {
        divideNum();
             }

   
});

// This function adds a new number to the number strng in the display

function appendNumber (e) {

    if(display.textContent === 0 || display.value === "0" || display.value === -0 && e.target.textContent !== ".") {
           
        
        display.value = e.target.textContent;
    
          
       }
    else if (display.value === -0 || display.value === "-0") {
             display.value = "-" + e.target.textContent;
             }
    else {
            display.value += e.target.textContent;

       
    }
    
}

// Math Functions

function addNum () {
    
    if (numArr.length > 0 && mathFunc === "+") {
         
       mathFunc = "+";
       numArr.push(display.value);
        
       newInt = parseFloat(numArr[numArr.length - 2]) + parseFloat(numArr[numArr.length - 1]);
        
       display.value = newInt.toString();
        
    }
        
  else if (mathFunc !== "+") {
  
      
      var lastNum = numArr[numArr.length];
      numArr = [];
      numArr.push(lastNum);
      mathFunc = "+";
       numArr.push(display.value);
       display.value = 0; 
  }
    
     else {
       mathFunc = "+";
       numArr.push(display.value);
       display.value = 0;
       
   }
}

function subtractNum () {
       if (numArr.length > 0 && mathFunc === "-") {
        
      mathFunc = "-";
           
      numArr.push(display.value);
        
       newInt = parseFloat(numArr[numArr.length - 2]) - parseFloat(numArr[numArr.length - 1]);
        
       display.value = newInt.toString();
        
   } 
    
      else if (mathFunc !== "-") {

      
      var lastNum = numArr[numArr.length];
      numArr = [];
      numArr.push(lastNum);
      mathFunc = "-";
       numArr.push(display.value);
       display.value = 0; 
  }
    
    
    else {
       mathFunc = "-";
       numArr.push(display.value);
       display.value = 0;
       
   }
}

function multiplyNum () {
       if (numArr.length > 0 && mathFunc === "*") {
        
        mathFunc = "*";   
           
       numArr.push(display.value);
        
       newInt = parseFloat(numArr[numArr.length - 2]) * parseFloat(numArr[numArr.length - 1]);
        
       display.value = newInt.toString();
        
   }
    
    else if (mathFunc !== "*") {

      
      var lastNum = numArr[numArr.length];
      numArr = [];
      numArr.push(lastNum);
      mathFunc = "*";
       numArr.push(display.value);
       display.value = 0; 
  }
    
    
    else {
       mathFunc = "*";
       numArr.push(display.value);
       display.value = 0;
       
   }
}

function divideNum () {
       if (numArr.length > 0 && mathFunc === "/") {
        
        mathFunc = "/";   
           
       numArr.push(display.value);
        
       newInt = parseFloat(numArr[numArr.length - 2]) / parseFloat(numArr[numArr.length - 1]);
        
       display.value = newInt.toString();
        
   } 
    
    
    else if (mathFunc !== "/") {

      
      var lastNum = numArr[numArr.length];
      numArr = [];
      numArr.push(lastNum);
      mathFunc = "/";
       numArr.push(display.value);
       display.value = 0; 
  }
    
    
    else {
       mathFunc = "/";
       numArr.push(display.value);
       display.value = 0;
       
   }
}
