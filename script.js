const content = document.getElementById('container')
const number = document.getElementById('number')
const textAvaliation = document.getElementById('textAvaliation')
const textConfirmation = document.getElementById('textConfirmation')
const displayConfirmation = document.getElementById('displayConfirmation')
const loading = document.getElementById('displayLoading')
const btn = document.getElementById('btnSubmit')


function submit() {
    content.style.display = 'none'
    loading.style.display = 'flex'
    setTimeout(() => {
        loading.style.display = 'none'
        displayConfirmation.style.display = 'flex'
    }, 3000);
}

let functionNumber = function btnNumber(valueNumber) {
    console.log(valueNumber)
}

function btnNumber(valueNumber) {
    const valorNumero = valueNumber
    textConfirmation.innerHTML = `You selected ${valueNumber} of our 5`
}

function displayHome() {
    setTimeout(() => {
        displayConfirmation.style.display = 'none'
        content.style.display = 'block'
    }, 7000)
}

setTimeout(() => {
    displayHome()
}, 3000)