document.getElementById('btn_login')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const phoneNumber = document.getElementById('number').value;
        const pinNumber = document.getElementById('pin').value;
        if (phoneNumber === '01840158154' && pinNumber === '12345') {
            window.location.href = './home page/home.html'
        }
        else {
            alert('wrong phone number or pin number')
        }
    })