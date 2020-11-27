//Listen to click event
const element = document.querySelector("#btnExpense");

//init value  of expense at 0
let toatalExpense = 0;

// onButtonClick add inputAmount to TotalExpense
    function AddExpenseToTotal(){
        //read value from inputAmount
        const inputElement = document.querySelector("#inputAmount");
        const textAmount = inputElement.value;
        console.log({textAmount});
        //convert it to number
        const expense = parseInt(textAmount, 10);
        console.log({expense});
        //add that value to toatalExpense
    }

//Listen to click event
element.addEventListener("click", AddExpenseToTotal, false);