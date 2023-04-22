const appointmentsURL = 'https://localhost:7202/api/appointments'
// let user = JSON.parse(localStorage.getItem('myUser'))


async function whosAppointments() {
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
    th1.width = 200
    th1.appendChild(document.createTextNode('Appointment Date'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 60
    th2.appendChild(document.createTextNode('Type Of Service'))
    tr.appendChild(th2)

    let th3 = document.createElement('TH')
    th3.width = 60
    th3.appendChild(document.createTextNode('Client Last Name'))
    tr.appendChild(th3)

    let th4 = document.createElement('TH')
    th4.width = 60
    th4.appendChild(document.createTextNode('City'))
    tr.appendChild(th4)

    let th5 = document.createElement('TH')
    th5.width = 60
    th5.appendChild(document.createTextNode('State'))
    tr.appendChild(th5)

    let th6 = document.createElement('TH')
    th6.width = 60
    th6.appendChild(document.createTextNode('Zipcode'))
    tr.appendChild(th6)

    appointments.forEach((appointment) => {
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)

        let td1 = document.createElement('TD')
        td1.width = 200
        td1.appendChild(document.createTextNode(`${appointment.appointmentDate}`))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 60
        td2.appendChild(document.createTextNode(`${appointment.typeOfService}`))
        tr.appendChild(td2)

        let td3 = document.createElement('TD')
        td3.width = 60
        td3.appendChild(document.createTextNode(`${appointment.clientLastName}`))
        tr.appendChild(td3)

        let td4 = document.createElement('TD')
        td4.width = 60
        td4.appendChild(document.createTextNode(`${appointment.appointmentCity}`))
        tr.appendChild(td4)

        let td5 = document.createElement('TD')
        td5.width = 60
        td5.appendChild(document.createTextNode(`${appointment.appointmentState}`))
        tr.appendChild(td5)

        let td6 = document.createElement('TD')
        td6.width = 60
        td6.appendChild(document.createTextNode(`${appointment.appointmentZipCode}`))
        tr.appendChild(td6)
    })
    app.appendChild(table)
}