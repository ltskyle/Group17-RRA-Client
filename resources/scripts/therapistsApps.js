const appointmentsURL = 'https://localhost:7202/api/appointments'
let app = document.getElementById('id')
let user = JSON.parse(localStorage.getItem('myUser'))

async function Appointments() {
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
    let table = document.createElement('TABLE')
    table.border = '.5'
    table.id = 'appointmentTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'songTableBody'
    table.appendChild(tableBody)

    let tr = document.createElement('TR')
    tableBody.appendChild(tr)

    let th1 = document.createElement('TH')
    th1.width = 250
    th1.appendChild(document.createTextNode('Date'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 250
    th2.appendChild(document.createTextNode('Time Frame'))
    tr.appendChild(th2)

    let th3 = document.createElement('TH')
    th3.width = 100
    th3.appendChild(document.createTextNode('Type of Service'))
    tr.appendChild(th3)

    let th4 = document.createElement('TH')
    th4.width = 100
    th4.appendChild(document.createTextNode('Client Name'))
    tr.appendChild(th4)

    let th5 = document.createElement('TH')
    th5.width = 215
    th5.appendChild(document.createTextNode('Client Address'))
    tr.appendChild(th5)

    let th6 = document.createElement('TH')
    th6.width = 215
    th6.appendChild(document.createTextNode('Status'))
    tr.appendChild(th6)

    console.log(user)
    appointments.forEach((a) => {
        if (a.therapistName == user.therapistFirstName + ' ' + user.therapistLastName) {
            let tr = document.createElement('TR')
            tableBody.appendChild(tr)

            let td1 = document.createElement('TD')
            td1.width = 250
            td1.appendChild(document.createTextNode(`${a.appointmentDate}`))
            tr.appendChild(td1)

            let td2 = document.createElement('TD')
            td2.width = 250
            td2.appendChild(document.createTextNode(`${a.timeFrame}`))
            tr.appendChild(td2)

            let td3 = document.createElement('TD')
            td3.width = 100
            td3.appendChild(document.createTextNode(`${a.typeOfService}`))
            tr.appendChild(td3)

            let td4 = document.createElement('TD')
            td4.width = 100
            td4.appendChild(
                document.createTextNode(
                    `${a.clientFirstName}` + ' ' + `${a.clientLastName}`
                )
            )
            tr.appendChild(td4)

            let td5 = document.createElement('TD')
            td5.width = 100
            td5.appendChild(
                document.createTextNode(
                    `${a.clientFirstName}` + ' ' + `${a.clientLastName}`
                )
            )
            tr.appendChild(td5)

            // let ftbn = document.createElement('BUTTON')
            // ftbn.className = 'btn-info'
            // ftbn.id = `${s.songID}`
            // ftbn.style = 'margin: 5px'
            // ftbn.onclick = () => {
            //     favorite(s.songID)
            // }
            // ftbn.width = 70
            // ftbn.appendChild(document.createTextNode('Favorite'))
            // tr.appendChild(ftbn)

            // let dbtn = document.createElement('BUTTON')
            // dbtn.className = 'btn-info'
            // dbtn.id = `${s.songID}`
            // dbtn.style = 'margin: 5px'
            // dbtn.onclick = () => {
            //     deleteSong(s.songID)
            // }
            // dbtn.width = 70
            // dbtn.appendChild(document.createTextNode('Delete'))
            // tr.appendChild(dbtn)

            // let ebtn = document.createElement('BUTTON')
            // ebtn.className = 'btn-info'
            // ebtn.id = `${s.songID}`
            // ebtn.style = 'margin: 5px'
            // ebtn.onclick = () => {
            //     $('#editSong').modal('show')
            //     editSong(s.songID)
            // }
            // ebtn.width = 70
            // ebtn.appendChild(document.createTextNode('Edit'))
            // tr.appendChild(ebtn)
        }
    })
    app.appendChild(table)
}