const appointmentsURL = 'https://localhost:7202/api/appointments'
let user = JSON.parse(localStorage.getItem('myUser'))

function HandleOnLoad(){
    YourAppointments()
}

async function YourAppointments() {
    await fetch(appointmentsURL)
        .then(function (response) {
            return response.json()
        })
        .then(async function (data) {
            console.log(data)
            makeTable(data)
        })
}

const makeTable = (appointments) => {
    console.log(appointments)
    let table = document.createElement('TABLE')
    table.border = '.5'
    table.id = 'songTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'songTableBody'
    table.appendChild(tableBody)

    let tr = document.createElement('TR')
    tableBody.appendChild(tr)

    let th1 = document.createElement('TH')
    th1.width = 150
    th1.appendChild(document.createTextNode('Appointment Date'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 100
    th2.appendChild(document.createTextNode('Time Frame'))
    tr.appendChild(th2)

    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Type Of Service'))
    tr.appendChild(th3)

    let th4 = document.createElement('TH')
    th4.width = 200
    th4.appendChild(document.createTextNode('Therapist Name'))
    tr.appendChild(th4)

    appointments.forEach((appointment) => {
        if(user.clientFirstName == appointment.clientFirstName && user.clientLastName == appointment.clientLastName && appointment.completed == 'false')
        {
            let tr = document.createElement('TR')
            tableBody.appendChild(tr)

            let td1 = document.createElement('TD')
            td1.width = 150
            td1.appendChild(document.createTextNode(`${appointment.appointmentDate}`))
            tr.appendChild(td1)

            let td2 = document.createElement('TD')
            td2.width = 100
            td2.appendChild(document.createTextNode(`${appointment.timeFrame}`))
            tr.appendChild(td2)

            let td3 = document.createElement('TD')
            td3.width = 200
            td3.appendChild(document.createTextNode(`${appointment.typeOfService}`))
            tr.appendChild(td3)

            let td4 = document.createElement('TD')
            td4.width = 200
            td4.appendChild(document.createTextNode(`${appointment.therapistName}`))
            tr.appendChild(td4)
        }
    })
    app.appendChild(table)
}