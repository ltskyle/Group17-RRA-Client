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

    let th5 = document.createElement('TH')
    th5.width = 190
    th5.appendChild(document.createTextNode('Status'))
    tr.appendChild(th5)

    appointments.forEach((appointment) => {
        if(user.clientFirstName == appointment.clientFirstName && user.clientLastName == appointment.clientLastName && appointment.completed == 'false' && appointment.appointmentAcceptance != "NotAccepted")
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

            var element = document.createElement('p')
            var text = document.createTextNode('Not Complete')
            element.appendChild(text)
            tr.appendChild(element)
        }
        else if (
            user.clientFirstName == appointment.clientFirstName &&
            user.clientLastName == appointment.clientLastName &&
            appointment.completed == 'true' &&
            appointment.rating == 0 &&
            appointment.appointmentAcceptance != 'NotAccepted'
        ) {
            let tr = document.createElement('TR')
            tableBody.appendChild(tr)

            let td1 = document.createElement('TD')
            td1.width = 150
            td1.appendChild(
                document.createTextNode(`${appointment.appointmentDate}`)
            )
            tr.appendChild(td1)

            let td2 = document.createElement('TD')
            td2.width = 100
            td2.appendChild(document.createTextNode(`${appointment.timeFrame}`))
            tr.appendChild(td2)

            let td3 = document.createElement('TD')
            td3.width = 200
            td3.appendChild(
                document.createTextNode(`${appointment.typeOfService}`)
            )
            tr.appendChild(td3)

            let td4 = document.createElement('TD')
            td4.width = 200
            td4.appendChild(
                document.createTextNode(`${appointment.therapistName}`)
            )
            tr.appendChild(td4)

            var array = [1, 2, 3, 4, 5]
            var selectList = document.createElement('select')
            selectList.id = `${appointment.appointmentID}`
            tr.appendChild(selectList)

            for (var i = 0; i < array.length; i++) {
                var option = document.createElement('option')
                option.value = array[i]
                option.text = array[i]
                selectList.appendChild(option)
            }

            let btn = document.createElement('BUTTON')
            btn.className = 'btn-info'
            btn.class = 'accept'
            btn.id = `${appointment.appointmentID}`
            btn.style = 'margin: 5px'
            btn.onclick = () => {
                let rate = document.getElementById(
                    `${appointment.appointmentID}`
                ).value
                SaveRating(rate, appointment.appointmentID)
            }
            btn.width = 100
            btn.appendChild(document.createTextNode('Confirm Rating'))
            tr.appendChild(btn)
        } else if (
            user.clientFirstName == appointment.clientFirstName &&
            user.clientLastName == appointment.clientLastName &&
            appointment.completed == 'true' &&
            appointment.rating != 0 &&
            appointment.appointmentAcceptance != 'NotAccepted'
        ) {
            let tr = document.createElement('TR')
            tableBody.appendChild(tr)

            let td1 = document.createElement('TD')
            td1.width = 150
            td1.appendChild(
                document.createTextNode(`${appointment.appointmentDate}`)
            )
            tr.appendChild(td1)

            let td2 = document.createElement('TD')
            td2.width = 100
            td2.appendChild(document.createTextNode(`${appointment.timeFrame}`))
            tr.appendChild(td2)

            let td3 = document.createElement('TD')
            td3.width = 200
            td3.appendChild(
                document.createTextNode(`${appointment.typeOfService}`)
            )
            tr.appendChild(td3)

            let td4 = document.createElement('TD')
            td4.width = 200
            td4.appendChild(
                document.createTextNode(`${appointment.therapistName}`)
            )
            tr.appendChild(td4)

            var element = document.createElement('p')
            var text = document.createTextNode('Rated')
            element.appendChild(text)
            tr.appendChild(element)
        }
    })
    app.appendChild(table)
}

const SaveRating = async (rate, id) => {
    const newUrl = `https://localhost:7202/api/appointments/${id}`
    await fetch(appointmentsURL)
        .then(function (response) {
            return response.json()
        })
        .then(async function (data) {
            let appointment
            let finding
            finding = data.find((data) => data.appointmentID == id)
            appointment = {
                AppointmentID: finding.appointmentID,
                TypeOfService: finding.typeOfService,
                Rating: rate,
                AppointmentAcceptance: finding.appointmentAcceptance,
                Completed: finding.completed,
                AppointmentDate: finding.appointmentDate,
                AppointmentCity: finding.appointmentCity,
                AppointmentState: finding.appointmentState,
                AppointmentZipCode: finding.appointmentZipCode,
                TherapistName: finding.therapistName,
                ClientFirstName: finding.clientFirstName,
                ClientLastName: finding.clientLastName,
                TimeFrame: finding.timeFrame,
                ClientAddress: finding.clientAddress,
            }

            await fetch(newUrl, {
                method: 'PUT',
                headers: {
                    accept: '*/*',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(appointment),
            })
            location.reload()
        })
}