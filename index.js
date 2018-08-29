var modal = document.getElementById('modal');
var modal_content =document.getElementById('modal-content');


function displayModal(){
    modal.style.display = 'flex';
    modal_content.style.top = '0px';
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
        modal_content.style.top = '-1000px';
        modal.style.display = "none";
    }
}