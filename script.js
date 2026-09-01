const form = document.querySelector('#expense-form');

const expenseName = document.querySelector('#expense-name');
const amount = document.querySelector('#amount');
const category = document.querySelector('#category');
const date = document.querySelector('#date');


const nameError = document.querySelector('#name-error');
const amountError = document.querySelector('#amount-error');
const categoryError = document.querySelector('#category-error');
const dateError = document.querySelector('#date-error');

const expenses = [];

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
        return;
    }


    const expense = {
        name: expenseName.value,
        amount: Number(amount.value),
        category: category.value,
        date: date.value
    };

    expenses.push(expense);


    console.log(expense);

    displayExpenses();

    calculateTotal();

    form.reset();

});


function validateForm() {

    let valid = true;


    if (expenseName.value === '') {
        nameError.textContent = 'Please enter expense name';
        valid = false;
    }


    if (amount.value === '') {
        amountError.textContent = 'Please enter amount';
        valid = false;
    }

    else if (amount.value <= 0) {
        amountError.textContent = 'Amount must be greater than 0';
        valid = false;
    }


    if (category.value === '') {
        categoryError.textContent = 'Please select category';
        valid = false;
    }


    if (date.value === '') {
        dateError.textContent = 'Please select date';
        valid = false;
    }


    return valid;

}

const expenseList = document.querySelector('#expense-list');

function displayExpenses() {

    expenseList.innerHTML = '';

    expenses.forEach(function(expense){

        const expensesCard = document.createElement('div');

        expensesCard.classList.add('expense');

        expensesCard.innerHTML = `

        <div>

           <h3>${expense.name}</h3>
           <p>${expense.category} . ${expense.date}</p>
        
        </div>

        <strong>₹${expense.amount}</strong>
        
        `;

        expenseList.appendChild(expensesCard);
    });

}

const totalExpense = document.querySelector('#total-expense');

function calculateTotal() {
    let total = 0;

    expenses.forEach(function(expense){
        total = total + expense.amount;
    });

    totalExpense.textContent = `${total}`;
}



