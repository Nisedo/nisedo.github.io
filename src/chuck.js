let quotesDiv3 = document.getElementById("quotes")
fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json())
    .then(value => {
        quotesDiv3.innerHTML += `<br>`
        quotesDiv3.innerHTML += `<p><em>"${value.value}"</em></p>`
        quotesDiv3.innerHTML += `<p>Chuck Norris</p>`
    })