function GreetFactory(stored) {

    var userMap = stored || {};

    function greetUser(name, language) {
        addUser(name);
        switch (language) {
            case "english":
                return `Hello, ${name}`;
            case "french":
                return `Bonjour, ${name}`;
            case "afrikaans":
                return `Hallo, ${name}`;
            default:
                return `Hallo, ${name}`;
        }
    }

    function addUser(userName) {
        if (userMap[userName] === undefined) {
            userMap[userName] = 0;
        }
    }

    function getGreetCount() {
        return Object.keys(userMap).length;
    }

    function getNameFromInput(textBoxValue) {
        // pattern to match against input
        var regularExpression = /[^A-Za-z]/g;
        // check if name is not empty string
        if (textBoxValue !== "") {
            // using regular expression to take out numbers and special characters from input
            var lettersOnly = textBoxValue.replace(regularExpression, "")
            // convert letters into name
            var name = lettersOnly.charAt(0).toUpperCase() + lettersOnly.slice(1).toLowerCase()
            return name;
        }
        return "";
    }

    function getAllUsers(){
        return userMap;
    }

    return {
        greetUser,
        getGreetCount,
        getNameFromInput,
        getAllUsers
    }
}

































