let user = JSON.parse(localStorage.getItem('myUser'))
console.log(user)

function TherapistWelcome() {
    document.getElementById('welcome-div').insertAdjacentHTML(
        'afterbegin',
        `
        <h1 id="welcome">Welcome back, ${user.therapistFirstName}!</h1>
        `
    )
}

