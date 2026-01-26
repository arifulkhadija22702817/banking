// document.getElementById('btn')
//     .addEventListener('click', function (event) {
//         event.preventDefault();

//         const phoneNumber = document.getElementById('pnone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;

//         if (phoneNumber === '5' && pinNumber === '1234') {
//             console.log('logged in')

//         }
//         else {
//             alert('wrong phone number or pin number')
//         }

//     })



document.getElementById('btn').addEventListener('click', function (even) {
    even.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (phoneNumber === '5' && pinNumber === '1234') {
        console.log('logged in');
        window.location.href = 'home.html';

    }
    else {
        alert('wrong');
    }
})