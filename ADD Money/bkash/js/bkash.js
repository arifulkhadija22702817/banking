// -------------------------
// Elements
// -------------------------
const addMoneyBtn = document.getElementById("addMoneyBtn");
const cashBtn = document.getElementById("cash");

const addForm = document.getElementById("formBox");
const cashForm = document.getElementById("form");

// -------------------------
// Toggle Forms
// -------------------------
addMoneyBtn.addEventListener("click", function () {
    const isVisible = window.getComputedStyle(addForm).display === "block";
    addForm.style.display = isVisible ? "none" : "block";
    cashForm.style.display = "none";
});

cashBtn.addEventListener("click", function () {
    const isVisible = window.getComputedStyle(cashForm).display === "block";
    cashForm.style.display = isVisible ? "none" : "block";
    addForm.style.display = "none";
});

// -------------------------
// Add Money Submit
// -------------------------
document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const amountInput = document.getElementById('inputAmount');
    const pinInput = document.getElementById('inputPin');

    const amount = parseFloat(amountInput.value);
    const pin = pinInput.value;

    if (pin === '12345' && amount > 0) {
        const balanceEl = document.getElementById('balance');
        const balance = parseFloat(balanceEl.innerText);
        balanceEl.innerText = balance + amount;

        // Clear inputs
        amountInput.value = '';
        pinInput.value = '';

        alert("Money added successfully!");
    } else {
        alert("Failed! Wrong pin or invalid amount.");
    }
});

// -------------------------
// Cash Out Submit
// -------------------------
document.getElementById('cashOutBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const agentInput = document.getElementById('inputNumber');
    const amountInput = document.getElementById('cashOutAmount');
    const pinInput = document.getElementById('cashOutPin');

    const agent = agentInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const pin = pinInput.value;
    const balanceEl = document.getElementById('balance');
    const balance = parseFloat(balanceEl.innerText);

    // ✅ check agent + pin + amount
    if (agent === '') {
        alert("Please enter agent number!");
        return;
    }

    if (pin !== '12345') {
        alert("Wrong pin!");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Enter valid amount!");
        return;
    }

    if (amount > balance) {
        alert("Not enough balance!");
        return;
    }

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
