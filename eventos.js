document.addEventListener('DOMContentLoaded', function() {
    let divElement = document.getElementById('divSaludo');

    divElement.addEventListener('click', (event) => {
        if (!event.target.matches('button')) { 
            alert('Hola! Soy el div');
        }
    });
});

