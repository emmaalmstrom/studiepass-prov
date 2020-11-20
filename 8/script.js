const knappen = document.getElementById("my-button")
knappen.addEventListener('click', function() {
    console.log('Goodbye!')
    const rubrik = document.getElementById('headline')
    rubrik.innerText = 'Goodbye!'
})
 