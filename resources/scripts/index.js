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
            let user =
                data.find((data) => data.clientEmail == login.email) &&
                data.find((data) => data.clientPassword == login.password)
            if (user) {
                isAdmin = true
                localStorage.setItem('myUser', JSON.stringify(user))
                window.location.replace('Admin.html')
            } else {
                isAdmin = false
            }
        })
    await fetch(therapistURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            let user =
                data.find((data) => data.clientEmail == login.email) &&
                data.find((data) => data.clientPassword == login.password)
            if (user) {
                isTherapist = true
                localStorage.setItem('myUser', JSON.stringify(user))
                window.location.replace('TherapistLogin.html')
            } else {
                isTherapist = false
            }
        })
    await fetch(clientURL)
        .then(function (response) {
            return response.json()
        })
        .then(async function (data) {
                let user =
                data.find((data) => data.clientEmail == login.email) &&
                data.find((data) => data.clientPassword == login.password)
            if(user){
                isClient = true
                localStorage.setItem('myUser', JSON.stringify(user))
                window.location.replace('ClientLogin.html')

                } else {
                    alert('Account does not exist. Try again or sign up!')
                    isClient = false
                }
        })

}

function clearStorage(){
    localStorage.clear()
}