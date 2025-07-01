
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()

    const login = [
        document.querySelector('#email'),
        document.querySelector('#senha')
    ]

    console.log(login)
})

