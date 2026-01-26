document.getElementById('btn-add-money').addEventListener('click', function (even) {
    even.preventDefault();

    const addMoneyInput = document.getElementById('add-money-input').value;
    const pinNumber = document.getElementById('pin-number').value;
    if (pinNumber === '1234') {
        console.log('adding success money');

        const Balance = document.getElementById('balance').innerText;
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(Balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);


        document.getElementById('balance').innerText = newBalance;

    }
    else {
        alert('wrong pin')
    }
})