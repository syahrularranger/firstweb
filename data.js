submitData = () => {
    const input = document.getElementById('input-user')
    if (input.value.length > 15) {
        alert('Kepanjangan king')
        document.getElementById('text-display').innerHTML = 'Syahrul Tampan'
        return
    }
    document.getElementById('text-display').innerHTML = input.value
    console.log(input.value.length)
}

