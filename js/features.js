document.getElementById('money-add')
    .addEventListener('click', function () {
        document.getElementById('moneyAdd').classList.remove('hidden');
        document.getElementById('cashOut').classList.add('hidden');
        document.getElementById('transaction').classList.add('hidden');
    })

document.getElementById('cash_Out')
    .addEventListener('click', function () {
        document.getElementById('cashOut').classList.remove('hidden');
        document.getElementById('moneyAdd').classList.add('hidden');
        document.getElementById('transaction').classList.add('hidden');
    })
document.getElementById('transaction-btn')
    .addEventListener('click', function () {
        document.getElementById('transaction').classList.remove('hidden');
        document.getElementById('moneyAdd').classList.add('hidden');
        document.getElementById('cashOut').classList.add('hidden');
    })





// function showSectionById(id) {
//     document.getElementById('moneyAdd').classList.add('hidden')
//     document.getElementById('cashOut').classList.add('hidden')
//     document.getElementById('transaction').classList.add('hidden')
//     document.getElementById(id).classList.remove('hidden')

// }