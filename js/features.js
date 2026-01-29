document.getElementById('money-add')
    .addEventListener('click', function () {
        document.getElementById('moneyAdd').classList.remove('hidden')
        document.getElementById('cashOut').classList.add('hidden')
    })

document.getElementById('cash_Out')
    .addEventListener('click', function () {
        document.getElementById('cashOut').classList.remove('hidden')
        document.getElementById('moneyAdd').classList.add('hidden')
    })