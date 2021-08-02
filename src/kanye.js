let quotesDiv = document.getElementById("quotes")
fetch("https://api.kanye.rest")
    .then(res => res.json())
    .then(quote => {
        quotesDiv.innerHTML += `<br>`
        quotesDiv.innerHTML += `<p><em>"${quote.quote}"</em></p>`
        quotesDiv.innerHTML += `<p>Kanye West</p>`
    })