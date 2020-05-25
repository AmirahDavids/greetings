window.addEventListener("DOMContentLoaded", function () {

    var inputBox = document.getElementById("inputElement")
    var greetBtn = document.getElementById("greetButton")
    var message = document.getElementById("msg")
    var total = document.getElementById("counter")
    var resetBtn = document.getElementById("resetButton")

    // this is getting the users from local storage
    // using a ternary operator    (localStorage['greetedUsers']) ? true : false;
    var stored = localStorage['greetedUsers'] ? JSON.parse(localStorage['greetedUsers']) : {};

    //this the instance of the greet factory with stored users
    var greetFactory = GreetFactory(stored);

    window.addEventListener("load", function () {
        total.innerHTML = greetFactory.getGreetCount();
    });

    // this is the greet buttons event handler 
    greetBtn.addEventListener("click", function () {
        var input = inputBox.value;
        var radioBtn = document.querySelector("input[name='selector']:checked");
        if (radioBtn) {
            var language = radioBtn.value;
            var name = greetFactory.getNameFromInput(input)
            if (name !== "") {
                message.innerHTML = greetFactory.greetUser(name, language)
                total.innerHTML = greetFactory.getGreetCount();
                localStorage['greetedUsers'] = JSON.stringify(greetFactory.getAllUsers());

            } else {
                message.innerHTML = `no name entered.`
            }
        } else {
            message.innerHTML = `no language selected.`
        }
    });

    // this is the greet buttons event handler 
    resetBtn.addEventListener("click", function () {
        greetFactory.resetBtn();
        location.reload();
    });
});