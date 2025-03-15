//JS to display an alert after clicking hobby
document.addEventListener("DOMContentLoaded", function () {
    const hobbies = document.querySelectorAll ("#hobbies li") ;

    hobbies.forEach (hobby => {
        hobby.addEventListener ("click", function () {
            alert("You clicked on: " + this.textContent);
        });
    });
});