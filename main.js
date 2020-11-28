//Listen to click event
const element = document.querySelector("#btnExpense");

//get the heading element
const headingl = document.querySelector("#headingTotal");

//get the referrence to desc element
const inputDescl = document.querySelector("#inputDesc");

//get the referrence to inputAmount element
const inputElement = document.querySelector("#inputAmount");

//get the referrence to expenseTable element
const expenseTablel = document.querySelector("#expenseTable");

//init value  of expense at 0
let toatalExpense = 0;

//set the heading element to totalExpense
headingl.textContent = toatalExpense;

// allExpenses at once place
const allExpenses = [];

    // onButtonClick add inputAmount to TotalExpense
    function AddExpenseToTotal(){
        const expenseItem = {};

        //read value from inputAmount
        const textAmount = inputElement.value;

        //read value from inputDesc
        const textDesc = inputDescl.value;

        //convert it to number
        const expense = parseInt(textAmount, 10);

        //put it in object
        expenseItem.desc = textDesc;
        expenseItem.amount = expense;
        console.log(expenseItem);
        allExpenses.push(expenseItem);
        console.clear();
        console.table(allExpenses);

        //add that value to toatalExpense
        toatalExpense = toatalExpense + expense;

        //set the heading element to totalExpense
        const someText = `Total: ${toatalExpense}`
        headingl.textContent = someText;
        
        const allExpenseHtml = allExpenses.map(expense => {
            return `<div> ${expense.amount} :: ${expense.desc} </div>`
        });

        const joinedAllExpreseHtml = allExpenseHtml.join(" ");

        console.log(joinedAllExpreseHtml);

        expenseTablel.innerHTML = allExpenseHtml;
    }

//Listen to click event
element.addEventListener("click", AddExpenseToTotal, false);