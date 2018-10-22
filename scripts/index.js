const elModal = document.getElementById('modal');
const elModalContent = document.getElementById('modal-content');


function displayModal() {
    elModal.classList.add('active');
}
function closeModal() {
    elModal.classList.remove('active');
}

window.onclick = function (event) {
    if (event.target == elModal) {
        closeModal();
    }
}