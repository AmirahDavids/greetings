window.addEventListener("DOMContentLoaded", function () {

    // these are refernces to the elements on the screen
    var inputBox = document.getElementById("inputElement")
    var greetBtn = document.getElementById("greetButton")
    var message = document.getElementById("msg")
    var total = document.getElementById("counter")

    // this is getting the users from local storage
    var stored = JSON.parse(localStorage['greetedUsers']);
    
    //this the instance of the greet factory with stored--
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
});