//Listen to click event
const element = document.querySelector("#btnExpense");

//get the heading element
const headingl = document.querySelector("#headingTotal");

//init value  of expense at 0
let toatalExpense = 0;

//set the heading element to totalExpense
headingl.textContent = toatalExpense;

// onButtonClick add inputAmount to TotalExpense
    function AddExpenseToTotal(){
        //read value from inputAmount
        const inputElement = document.querySelector("#inputAmount");
        const textAmount = inputElement.value;

        //convert it to number
        const expense = parseInt(textAmount, 10);

        //add that value to toatalExpense
        toatalExpense = toatalExpense + expense;

        //set the heading element to totalExpense
        headingl.textContent = toatalExpense;
    }

//Listen to click event
element.addEventListener("click", AddExpenseToTotal, false);