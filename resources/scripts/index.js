const adminURL = 'https://localhost:7202/api/admin'
const therapistURL = 'https://localhost:7202/api/appointments'
const clientURL = 'https://localhost:7202/api/client'
let login

const getLogin = async () => {
    let isAdmin
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
            console.log(data)
            console.log(login)
            if (
                data.find((data) => data.adminEmail == login.email) &&
                data.find((data) => data.adminPassword == login.password)
            ) {isAdmin = true}
            else {isAdmin = false}
            if (isAdmin) {
                window.location.replace('Admin.html')
            }  
        })
}

