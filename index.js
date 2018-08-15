var modal = document.getElementById('modal');



function displayModal(){
    modal.style.display = "flex";
}

function sendMessage() {
    const objEmail  = {
        stNombre :document.getElementById("txtNombre").value,
        stCorreo : document.getElementById("txtCorreo").value,
        stMensaje: document.getElementById("txtMensaje").value
    }
    
    console.log(objEmail)
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}