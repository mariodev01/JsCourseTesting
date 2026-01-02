let count = 0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}


function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Mostrar el conteo en el HTML
}


function checkCountValue(){
    if(count === 10){
        alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!");
    }else if (count ===  20){
        alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!");
    }
}


function resetFollow(){
    if(count > 0){
        count = 0;
        displayCount();
        alert("El conteo de seguidores ha sido restablecido");
    }
}