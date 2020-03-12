const form = document.getElementById('tipForm');


// Form submit event
form.addEventListener('submit', calcTip);


// Add item

function calcTip(e){
  e.preventDefault();
    
 // Get input value of bill
 let bill = document.getElementById('billInput').value;
    
 // Get input value of tip percentage
 let tipPercentage = document.getElementById('tipPercentageInput').value;
 
 // Get input value of number splitting
 let NOSplitting = document.getElementById('NOSplitting').value;

 // Calculates Tip
 function calculateTip () {
      let tip = tipPercentage * 0.01;
      return  Math.round((bill * tip) * 100) / 100; 
}

// Calculates Bill + tip
function calculateTipAndBill () {
      return  Math.round((calculateTip() + parseInt(bill)) * 100) / 100; 
    
   
}
    
// Calculates what each person will pay
function splitBill () {
    
    return Math.round((calculateTipAndBill() / parseInt(NOSplitting)) * 100) / 100;
    
}
    


let tipResultText = document.getElementById('tipResultText');
let tipAndBillResultText = document.getElementById('tipAndBillResultText');
let eachPersonPaysText = document.getElementById('eachPersonPaysText');


    
tipResultText.textContent = 'Your tip is: $' + calculateTip();
tipAndBillResultText.textContent = 'Your bill + tip: $' +  calculateTipAndBill();
eachPersonPaysText.textContent = 'Each person will pay: $' + splitBill();
    
    
    
}