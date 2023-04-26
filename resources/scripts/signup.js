const clientURL = 'https://localhost:7202/api/client'
let user = JSON.parse(localStorage.getItem('myUser'))

function check(){
    var input = document.getElementById('repeatPassword')
    if (input.value != document.getElementById('password').value) {
        alert('Passwords must match!')
    } else {
        input.setCustomValidity('')
    }
}

const createClient = async () => {
    let addClient
    let e = document.getElementById('state')
    let value = e.value
    addClient = {
        ClientEmail: document.getElementById('email').value,
        ClientPassword: document.getElementById('password').value,
        ClientPhoneNum: document.getElementById('phone').value,
        ClientFirstName: document.getElementById('fname').value,
        ClientLastName: document.getElementById('lname').value,
        ClientCity: document.getElementById('city').value,
        ClientState: value,
        ClientZipCode: document.getElementById('zipcode').value,
        ClientAddress: document.getElementById('address').value,
    }
    await fetch(clientURL, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(addClient),
    })
    window.location.replace('login.html')
}