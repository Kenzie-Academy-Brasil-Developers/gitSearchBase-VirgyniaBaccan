function returnHome() {
    const button = document.querySelector("button")
    button.addEventListener('click', () => {
        localStorage.clear()
        open('http://127.0.0.1:5500/index.html', '_blank')
        
    })
}

returnHome()