
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
    if (pin === '123456789') {
        const newBalance = ammountTk + blc;
        document.getElementById('balance').innerText = newBalance

        form.reset();
        const p = document.createElement('p');
        p.innerText = `Added: ${blc} TK. Balance: ${newBalance}`;


        document.getElementById('transaction').appendChild(p)
    }
    else {
        alert('add money failed.please try again');
    }

})





const pin = document.getElementById('add_pin');
const togglePin = document.getElementById('togglePin');

togglePin.onclick = function () {
    if (pin.type === 'password') {
        pin.type = 'text';
        togglePin.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
        pin.type = 'password';
        togglePin.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
};
