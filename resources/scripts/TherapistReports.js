const reportsURL = 'https://localhost:7202/api/report'
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
