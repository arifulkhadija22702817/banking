


const form = document.querySelector('form');
form.addEventListener("submit", function (e) {
    if (!form.checkValidity) {
        return;
    }

    e.preventDefault();

    const phoneNumber = document.getElementById('number').value;
    const pinNumber = document.getElementById('pin').value;
    if (phoneNumber === '01336134504' && pinNumber === '123456') {
        window.location.href = './home page/home.html'
    }
    else {
        alert('you are wrong enter phone number or pin number');
    }

})        