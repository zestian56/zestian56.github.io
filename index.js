const elModal = document.getElementById('modal');
const elModalContent = document.getElementById('modal-content');


function displayModal() {
    elModal.classList.add('active');
}

function sendMessage() {
    const objEmail = {
        stNombre: document.getElementById("txtNombre").value,
        stCorreo: document.getElementById("txtCorreo").value,
        stMensaje: document.getElementById("txtMensaje").value
    }

    console.log(objEmail)
}

window.onclick = function (event) {
    if (event.target == elModal) {
        elModal.classList.remove('active');
    }
}