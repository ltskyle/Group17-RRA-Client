const therapistURL = 'https://localhost:7202/api/therapist'
let user = JSON.parse(localStorage.getItem('myUser'))

function check() {
    var input = document.getElementById('repeatPassword')
    if (input.value != document.getElementById('password').value) {
        alert('Passwords must match!')
    } else {
        input.setCustomValidity('')
    }
}
    
const createTherapist = async () => {
    let addTherapist
    addTherapist = {
        TherapistEmail: document.getElementById('email').value,
        TherapistPassword: document.getElementById('password').value,
        TherapistPhoneNum: document.getElementById('phone').value,
        TherapistFirstName: document.getElementById('fname').value,
        TherapistLastName: document.getElementById('lname').value,
        TherapistBio: document.getElementById('bio-box').value,
        TherapistRating: 0
    }
    await fetch(therapistURL, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(addTherapist),
    })
    window.location.replace('CreateTherapist.html')
}