document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.tablinks').click();
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// OPCIONES
const cards = document.querySelectorAll('.card');
cards.forEach((button) => { // Cambié 'buttons' a 'button' para mejor claridad
    button.addEventListener('click', () => {
        window.location.href = '/views/detalles.html'
    });
});

const backToHome = document.querySelector('.back-arrow');
backToHome.addEventListener('click', () => {
    window.location.href = '/views/index.html'
})
