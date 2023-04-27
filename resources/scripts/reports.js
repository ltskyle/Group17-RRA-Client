const reportsURL = 'https://localhost:7202/api/report'
const TopTherapist = 'https://localhost:7202/api/report/GetTopTherapists'
const TopRatedTherapist = 'https://localhost:7202/api/report/GetTopRated'
let app = document.getElementById('id')


async function TopServices() {
    await fetch(reportsURL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            makeTable(data)
        })
}

async function TopTherapists() {
    await fetch(TopTherapist)
        .then(function (retruned) {
            return retruned.json()
        })
        .then(function (data) {
            console.log(data)
            TopScheduledTherapists(data)
        })
}

async function TopRated() {
    await fetch(TopRatedTherapist)
        .then(function (retruned) {
            return retruned.json()
        })
        .then(function (data) {
            console.log(data)
            TopRatedTable(data)
        })
}

const makeTable = (top5) => {
    document.getElementById('id').innerHTML = ''
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
    th1.appendChild(document.createTextNode('Type Of Service'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 60
    th2.appendChild(document.createTextNode('Total'))
    tr.appendChild(th2)

    top5.forEach((service) => {
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)

        let td1 = document.createElement('TD')
        td1.width = 200
        td1.appendChild(document.createTextNode(`${service.typeOfService}`))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 60
        td2.appendChild(document.createTextNode(`${service.count}`))
        tr.appendChild(td2)
    })
    app.appendChild(table)
}

async function TopScheduledTherapists(data){
    document.getElementById('id').innerHTML = ''
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
    th1.appendChild(document.createTextNode('Therapist Name'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 60
    th2.appendChild(document.createTextNode('Total'))
    tr.appendChild(th2)

    data.forEach((therpaist) => {
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)

        let td1 = document.createElement('TD')
        td1.width = 200
        td1.appendChild(document.createTextNode(`${therpaist.therapistName}`))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 60
        td2.appendChild(document.createTextNode(`${therpaist.count}`))
        tr.appendChild(td2)
    })
    app.appendChild(table)
};

async function TopRatedTable(data){
    document.getElementById('id').innerHTML = ''
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
    th1.appendChild(document.createTextNode('Therapist Name'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 60
    th2.appendChild(document.createTextNode('Average'))
    tr.appendChild(th2)

    data.forEach((therpaist) => {
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)

        let td1 = document.createElement('TD')
        td1.width = 200
        td1.appendChild(document.createTextNode(`${therpaist.therapistName}`))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 60
        td2.appendChild(document.createTextNode(`${therpaist.score}`))
        tr.appendChild(td2)
    })
    app.appendChild(table)
};