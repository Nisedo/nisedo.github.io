let quotesDiv2 = document.getElementById("quotes")
fetch("https://api.booba.cloud")
    .then(res => res.json())
    .then(quote => {
        quotesDiv2.innerHTML += `<br>`
        quotesDiv2.innerHTML += `<p><em>"${quote.quote}"</em></p>`
        quotesDiv2.innerHTML += `<p>Booba</p>`
    })