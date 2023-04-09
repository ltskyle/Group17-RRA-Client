const adminURL = 'https://localhost:7202/api/admin'
const therapistURL = 'https://localhost:7202/api/therapist'
const clientURL = 'https://localhost:7202/api/client'
let login

const getLogin = async () => {
    let isAdmin
    let isClient
    let isTherapist
    let loginForm = document.getElementById('login-btn')
    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault()
        login = {
            email: event.target.elements.username.value,
            password: event.target.elements.password.value,
        }
    })
    await fetch(adminURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if (
                data.find((data) => data.adminEmail == login.email) &&
                data.find((data) => data.adminPassword == login.password)
            ) {isAdmin = true}
            else {isAdmin = false}
            if (isAdmin) {
                window.location.replace('Admin.html')
            }  
        })
    await fetch(therapistURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            console.log(login)
            if (
                data.find((data) => data.therapistEmail == login.email) &&
                data.find((data) => data.therapistPassword == login.password)
            ) {
                isTherapist = true
            } else {
                isTherapist = false
            }
            if (isTherapist) {
                window.location.replace('TherapistLogin.html')
            }
        })
    await fetch(clientURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if (
                data.find((data) => data.clientEmail == login.email) &&
                data.find((data) => data.clientPassword == login.password)
            ) {
                isClient = true
            } else {
                alert("Account does not exist. Try again or sign up!")
                isClient = false
            }
            if (isClient) {
                window.location.replace('ClientLogin.html')
            }
        })

}

