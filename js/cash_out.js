const cashForm = document.getElementById('cash_out_form')
cashForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!cashForm.checkValidity()) {
        return;
    }

    const balanceTk = document.getElementById('balance').innerText;
    const balanceNumber = parseFloat(balanceTk);

    const cashOut = document.getElementById('cash_out').value;
    const cashNumber = parseFloat(cashOut);

    const pinNumber = document.getElementById('cash_out_pin').value;
    if (isNaN(cashNumber) || cashNumber <= 0) {
        alert('সঠিক পরিমাণ লিখুন');
        return;
    }

    if (cashNumber > balanceNumber) {
        alert('পর্যাপ্ত ব্যালেন্স নেই');
        return;
    }


    if (pinNumber === '123456789') {
        const newBalance = balanceNumber - cashNumber;
        document.getElementById('balance').innerText = newBalance;

        cashForm.reset();

        const para = document.createElement('para');
        para.innerText = `Cash Out: ${cashNumber} Tk. Balance: ${newBalance}`;
        document.getElementById('transaction').appendChild(para);

    }
    else {
        alert('Cash out failed.Please try again')
    }

})


const pinInput = document.getElementById('cash_out_pin');
const tPin = document.getElementById('tPin');

tPin.onclick = function () {
    if (pinInput.type === 'password') {
        pinInput.type = 'text';
        tPin.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
        pinInput.type = 'password';
        tPin.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
};






