const scheduleURL = 'https://localhost:7202/api/schedule'
let app = document.getElementById('app')

async function getVal() {
    const input = document.querySelector('input')
    const date = input.value
    await fetch(scheduleURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            makeTable(data, date)
        })
}

const makeTable = (dates, datePicked) => {
    let table = document.createElement('TABLE')
    table.border = '.5'
    table.id = 'songTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'songTableBody'
    table.appendChild(tableBody)

    let tr = document.createElement('TR')
    tableBody.appendChild(tr)

    let th1 = document.createElement('TH')
    th1.width = 100
    th1.appendChild(document.createTextNode('Date'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 120
    th2.appendChild(document.createTextNode('Time Frame'))
    tr.appendChild(th2)

    let th3 = document.createElement('TH')
    th3.width = 250
    th3.appendChild(document.createTextNode('Type of Service'))
    tr.appendChild(th3)

    let th4 = document.createElement('TH')
    th4.width = 250
    th4.appendChild(document.createTextNode('Therapist Name'))
    tr.appendChild(th4)

    let th5 = document.createElement('TH')
    th5.width = 100
    th5.appendChild(document.createTextNode('Choose'))
    tr.appendChild(th5)

    dates.forEach((date) => {
        if (date.date == datePicked) {
            let tr = document.createElement('TR')
            tableBody.appendChild(tr)

            let td1 = document.createElement('TD')
            td1.width = 100
            td1.appendChild(document.createTextNode(`${date.date}`))
            tr.appendChild(td1)

            let td2 = document.createElement('TD')
            td2.width = 120
            td2.appendChild(document.createTextNode(`${date.timeFrame}`))
            tr.appendChild(td2)

            let td3 = document.createElement('TD')
            td3.width = 250
            td3.appendChild(document.createTextNode(`${date.typeOfService}`))
            tr.appendChild(td3)

            let td4 = document.createElement('TD')
            td4.width = 250
            td4.appendChild(document.createTextNode(`${date.therapistName}`))
            tr.appendChild(td4)

            let btn = document.createElement('BUTTON')
            btn.className = 'btn-info'
            btn.class = "accept"
            btn.id = `${date.scheduleID}`
            btn.style = 'margin: 5px'
            btn.onclick = () => {
                console.log(date.scheduleID)
            }
            btn.width = 100
            btn.appendChild(document.createTextNode('Accept'))
            tr.appendChild(btn)
        }
    })
    app.appendChild(table)
}