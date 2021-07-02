document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault()

    const redirectLink = document.querySelector('#newRedirect').value

    const request = await fetch(window.location.href + 'new', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ redirectLink })
    })
        .then(async res => JSON.parse(await res.text()))
        .catch(e => console.error(e))


    document.write(`${window.location.href}r/${request.redirectName}`)
})