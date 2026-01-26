const addMoneyBtn = document.getElementById("addMoneyBtn");
const cashBtn = document.getElementById("cash");

const addForm = document.getElementById("formBox");
const cashForm = document.getElementById("form");

// ====================
// Toggle Forms
// ====================

// Add Money button
addMoneyBtn.addEventListener("click", function () {
    const isVisible = window.getComputedStyle(addForm).display === "block";

    addForm.style.display = isVisible ? "none" : "block"; // toggle clicked form
    cashForm.style.display = "none";                      // hide other form
});

// Cash Out button
cashBtn.addEventListener("click", function () {
    const isVisible = window.getComputedStyle(cashForm).display === "block";

    cashForm.style.display = isVisible ? "none" : "block"; // toggle clicked form
    addForm.style.display = "none";                        // hide other form
});

// ====================
// Add Money Submit
// ====================
document.getElementById('submitBtn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // ✅ Get elements
        const addMoney = document.getElementById('inputAmount');
        const addPin = document.getElementById('inputPin');

        // ✅ Get values for calculation
        const addMoneyNumber = parseFloat(addMoney.value);
        const addPinValue = addPin.value;

        if (addPinValue === '12345' && addMoneyNumber > 0) {
            const balanceEl = document.getElementById('balance');
            const balanceNumber = parseFloat(balanceEl.innerText);

            // ✅ Update balance
            balanceEl.innerText = balanceNumber + addMoneyNumber;

            // ✅ Clear inputs
            addMoney.value = '';
            addPin.value = '';

            alert("Money added successfully!");
        } else {
            alert('Failed! please try again');
        }
    });



document.getElementById('cashOutBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const agentInput = document.getElementById('inputNumber');
    const amountInput = document.getElementById('cashOutAmount');
    const pinInput = document.getElementById('cashOutPin');

    const agent = agentInput.value;
    const amount = parseFloat(amountInput.value);
    const pin = pinInput.value;
    const balanceEl = document.getElementById('balance');
    const balance = parseFloat(balanceEl.innerText);

    if (pin === '12345' && amount > 0) {
        if (amount <= balance) {
            balanceEl.innerText = balance - amount;

            // Clear inputs
            agentInput.value = '';
            amountInput.value = '';
            pinInput.value = '';

            alert("Cash out successful!");
        } else {
            alert("Failed! Not enough balance.");
        }
    } else {
        alert("Failed! Wrong pin or invalid amount.");
    }
});