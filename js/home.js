
const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
        return;
    }

    const balanceTk = document.getElementById('add_money').value;
    const blc = parseFloat(balanceTk);
    const pin = document.getElementById('add_pin').value;
    const ammount = document.getElementById('balance').innerText;
    const ammountTk = parseFloat(ammount);
    if (pin === '12345') {
        const newBalance = ammountTk + blc;
        document.getElementById('balance').innerText = newBalance

        form.reset();
    }
    else {
        alert('add money failed.please try again');
    }

})