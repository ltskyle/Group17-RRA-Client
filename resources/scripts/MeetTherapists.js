const TherapistURL = 'https://localhost:7202/api/therapist'


async function PopulateTherapists() {
    await fetch(TherapistURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            makeTable(data)
        })
}

function makeTable(therapists) {
    therapists.forEach((therapist) => {
        document.getElementById("TherapistCards")
        .insertAdjacentHTML("afterbegin",
        `
        <hr style="width:93%;text-align:left;margin-left:0">
        <h2 id="name">${therapist.therapistFirstName} ${therapist.therapistLastName}</h2>
        <h5>About me:</h5>
        <p id="bio">${therapist.therapistBio}.</p>`
        );
        
    })
}