const scheduleURL = 'https://localhost:7202/api/schedule'

function handleOnLoad(){
    createDate()
}

function getScheduleInfo(){
    document.getElementById('stuff').insertAdjacentHTML(
        'afterbegin',
        `
        <div id="newDate">
        <p id="get-info-header">Enter information for selected date!</p>
        <div align="center">
        <form id="addDate">
          <input type="text" id="TypeOfService" placeholder="Type Of Service">
          <input type="text" id="TherapistName" placeholder="Therapist Name">
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