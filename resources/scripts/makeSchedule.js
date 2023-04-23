const scheduleURL = 'https://localhost:7202/api/schedule'
const therapists = 'https://localhost:7202/api/therapist'

function handleOnLoad(){
    createDate()
}

async function getScheduleInfo(){
    await fetch(therapists)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            document.getElementById('stuff').insertAdjacentHTML(
                'afterbegin',
                `
                <div id="newDate">
                <p id="get-info-header">Enter information for selected date!</p>
                <div align="center">
                <form id="addDate">
                <input type="text" id="TypeOfService" placeholder="Type Of Service">
                <select id="TherapistName" placeholder="Therapist Name">
                    <option value="" disabled selected hidden>Choose a therapist</option>
                </select>
                </form>
                </div>
                <div id="times">
                <label for="times">Choose a timeslot:</label>
                
                <select name="times" id="timePick">
                <option value=9AM-10AM>9AM-10AM</option>
                <option value=10AM-11AM>10AM-11AM</option>
                <option value=11AM-12PM>11AM-12PM</option>
                <option value=12PM-1PM>12PM-1PM</option>
                <option value=1PM-2PM>1PM-2PM</option>
                <option value=2PM-3PM>2PM-3PM</option>
                <option value=3PM-4PM>3PM-4PM</option>
                <option value=4PM-5PM>4PM-5PM</option>
                </select>
                <div class="add-btn">
                <button type="submit" id="add-btn" class="myButton" onclick="createDate()">Add</button>
                </div>
                </div>

                </div>

                `
            )
        for (i = 0; i < data.length; i++) {
            var opt = document.createElement("option");
            document.getElementById("TherapistName").innerHTML += '<option id="' + i + '">' + data[i].therapistFirstName + ' ' + data[i].therapistLastName + '</option>';
        }
    })
}


const createDate = async () => {
    let addDate
    const input = document.querySelector('input')
    let e = document.getElementById('timePick')
    let value = e.value
    addDate = {
        Date: input.value,
        TimeFrame: value,
        TypeOfService: document.getElementById('TypeOfService').value,
        TherapistName: document.getElementById('TherapistName').value,
        Accepted: 'false'
    }
    await fetch(scheduleURL, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(addDate),
    })
    location.reload()
}