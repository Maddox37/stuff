function showsection(x){ //Easy funciton for change of section into the webpage
    document.querySelectorAll('.section').forEach(xx => {
        xx.classList.remove('active')
    }
)
document.getElementById(x).classList.add('active')
}
