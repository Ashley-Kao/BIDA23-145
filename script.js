function email() {
    alert ("thank you for leaving a message");   
}
document.getElementById('form-control').addEventListener('submit', function(event) {
    const Enter email = document.getElementById('exampleInputEmail1').value;

    if (!form-control) {
        // Invalid input: Display an error message or prevent form submission
        alert('Please fill in all fields.');
        event.preventDefault(); // Prevent form submission
    }
});
