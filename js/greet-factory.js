function GreetFactory() {

    var users = {};

    function greetUser(name, language) {
        switch (language) {
            case "English":
                return `Hello, ${name}`
                break;
            case "French":
                return `Bonjour, ${name}`
                break;
            case "Afrikaans":
                return `Hallo, ${name}`
                break;
            default:
                return `Hallo, ${name}`
                break;
        }
    }

    function addUser(userName) {
        if (users[userName] === undefined) {
            users[userName] = 0;
            return true;
        }
        return false;
    }

    function getGreetCount() {
        return Object.keys(users).length
    }

    function validateInput(textBoxValue) {
        console.log(`this is the textbox input: ${textBoxValue}`);
        var regularExpression =  /[^A-Za-z]/g;
        var lettersOnly = textBoxValue.replace(regularExpression,"")
        console.log(`this is letters only ${lettersOnly}`);
        var name = `${lettersOnly.charAt(0).toUpperCase()}${lettersOnly.slice(1).toLowerCase()}`;
        console.log(name);
        
        return name;
    }

    return {
        greetUser,
        getGreetCount,
        validateInput
    }

}

// var i = GreetFactory();

// i.getGreetCount()

































