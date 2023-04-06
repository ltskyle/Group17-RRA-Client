
async function getVal(){
    const input = document.querySelector('input')
    console.log(input.value)
    let date = new Date(input.value)
    console.log(date.toUTCString())
}

