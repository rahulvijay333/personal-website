var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name  is required';
        return false;
    }

    nameError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required'
        return false;
    }

    emailError.innerHTML = '<i class = "fas fa-check-circle"></i>'
    return true;

}


function validateSubject() {
    var subject = document.getElementById('subject').value;
    var required = 10;
    var left = required - subject.length;

    if (left > 0) {

        subjectError.innerHTML = left + ' More characters required';
        return false;

    }

    subjectError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;





}

function validateMessage() {

    var message = document.getElementById('message').value;

    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' More characters required';
        return false;
    }
    messageError.innerHTML = '<i class = "fas fa-check-circle"></i>';
    return true;

}

function validateSubmission() {
    if (!validateName() || !validateEmail() || !validateMessage() || !validateSubject()) {
        subjectError.style.display = 'block'
        submitError.innerHTML = 'Please fill all input fields';
        return false;
    }


}