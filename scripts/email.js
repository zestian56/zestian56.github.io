
window.onload = function () {
    document.getElementById('mail-form').addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('default_service', 'mailtemplate', this);
        closeModal();
    });
}
