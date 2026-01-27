


const form = document.querySelector('form');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
        return;
    }

    const phoneNumber = document.getElementById('number').value;
    const pinNumber = document.getElementById('pin').value;
    if (phoneNumber === '01336134504' && pinNumber === '123456789') {
        window.location.href = './home page/home.html'
    }
    else {
        alert('you are wrong enter phone number or pin number');
    }

})




const pinInput = document.getElementById('pin');
const togglePin = document.getElementById('togglePin');

togglePin.onclick = function () {
    if (pinInput.type === 'password') {
        pinInput.type = 'text';
        togglePin.innerHTML = '<i class="fa-solid fa-eye"></i>';
    } else {
        pinInput.type = 'password';
        togglePin.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
};

