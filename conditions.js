function validateAlphabets(input) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(input);
}

function validateEmail(email) {
    var regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

function validateJobRole(jobRole) {
    return jobRole !== "Select your Job Role...";
}

function validateCity(city) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(city);
}

function validatePincode(pincode) {
    var regex = /^\d{6}$/;
    return regex.test(pincode);
}

function validateDate(date) {
    return date !== "";
}

function validateCV(cv) {
    return cv !== "";
}

function validateForm() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var jobRole = document.getElementById("jobRole").value;
    var Address = document.getElementById("Address").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pinCode").value;
    var date = document.getElementById("date").value;
    var cv = document.getElementById("cv").value;

    // Check if any fields are empty
    if (firstName === "") {
        alert("Please enter First Name.");
        return false; 
    }

    if (lastName === "") {
        alert("Please enter Last Name.");
        return false;
    }

    if (!validateAlphabets(firstName) || !validateAlphabets(lastName)) {
        alert("First Name and Last Name should only contain alphabets.");
        return false;
    }


    if (email === "") {
        alert("Please enter your Email address.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Please check your entered email address. Enter a valid email.");
        return false;
    }

    if (jobRole === "Select your Job Role...") {
        alert("Please select a Job Role.");
        return false;
    }

    if (!validateJobRole(jobRole)) {
        alert("Please select a valid job role.");
        return false;
    }

    if (Address === "") {
        alert("Please fill in the Address.");
        return false;
    }

    if (city === "") {
        alert("Please enter your City.");
        return false;
    }

    if (!validateCity(city)) {
        alert("City name must contain only alphabets.");
        return false;
    }

    if (pincode === "") {
        alert("Please enter your PinCode.");
        return false;
    }

    if (!validatePincode(pincode)) {
        alert("Pincode enter a valid 6 digit pincode.");
        return false;
    }


    if (date === "") {
        alert("Please select the date.");
        return false;
    }

    if (cv === "") {
        alert("upload your CV please.");
        return false;
    }

    alert("Form submitted successfully!");
    
    return true; // Allow form submission
}
