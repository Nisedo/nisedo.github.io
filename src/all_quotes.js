let quotesDiv = document.getElementById("quotes")
fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(quote => {
        quotesDiv.innerHTML += `<br>`
        quotesDiv.innerHTML += `<p style="font-size: 20px"><em>- "${quote.quote}"</em></p>`
        quotesDiv.innerHTML += `<p>Kanye West</p>`
    })

let quotesDiv2 = document.getElementById("quotes")
fetch("https://api.booba.cloud")
    .then(res => res.json())
    .then(quote => {
        quotesDiv2.innerHTML += `<br>`
        quotesDiv2.innerHTML += `<p style="font-size: 20px"><em>- "${quote.quote}"</em></p>`
        quotesDiv2.innerHTML += `<p>Booba</p>`
    })

let quotesDiv3 = document.getElementById("quotes")
fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(value => {
        quotesDiv3.innerHTML += `<br>`
        quotesDiv3.innerHTML += `<p style="font-size: 20px"><em>- "${value.value}"</em></p>`
        quotesDiv3.innerHTML += `<p>Chuck Norris</p>`
    })