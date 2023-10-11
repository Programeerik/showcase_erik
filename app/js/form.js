const form = document.querySelector(".form-contactpage");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.erroremail");
const phoneNumber = document.getElementById("phonenumber");
const phoneNumberError = document.querySelector("#phonenumber + span.error");

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "erroremail";
    } else {
        showErrorMail();
    }
});

phoneNumber.addEventListener("input", (event) => {
    if (phoneNumber.validity.valid) {
        phoneNumberError.textContent = "";
        phoneNumberError.className = "error";
    } else {
        showErrorPhoneNumber();
    }
});

const endpoint = "https://localhost:7028/api/ContactForms";

const get = async function (endpoint) {
    return await $.get(endpoint).then((result) => {
        return result;
    }).catch( e => {
        console.log(e);
    })
}

const post  = async function(endpoint,Firstname,Lastname,Email,Message) {
    const payload = {FirstName: Firstname ,LastName:Lastname,Email:Email,Message:Message}
    $.ajax({
        url: endpoint ,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(payload),
        success: async function (data, status) {
            if (status !== 400) {
                console.log(status);
            }
        }
    })
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!email.validity.valid || email.value === "") {
        showErrorMail();
        return;
    }

    const regexMail = /^\S+@\S+\.\S+$/;
    if (!regexMail.test(email.value)) {
        showErrorMail();
        return;
    }

    if (phoneNumber.value === "") {
        showErrorPhoneNumber();
        return;
    }

    const regexPhoneNumber = /^(\+31|0031|0)-?[1-9]{1}[0-9]{8}$/;
    if (!regexPhoneNumber.test(phoneNumber.value)) {
        showErrorPhoneNumber();
        return;
    }

    const number01 = document.querySelector(".number01");
    const number02 = document.querySelector(".number02");
    const solution = document.querySelector("#solution");
    const answer = Number(number01.innerHTML) + Number(number02.innerHTML);

    if (solution.value != answer) {
        alert("Wrong solution");
        return;
    }

    const Firstname = document.getElementById("firstname").value;
    const Lastname = document.getElementById("lastname").value;
    const Message = document.getElementById("message").value;
    const payload = {FirstName:Firstname,LastName:Lastname,Email:email.value,Message:Message}

    let response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    let data = await response.json();
    alert(JSON.stringify(data))
});



function showErrorMail() {
    // regex email check
    const regexMail = /^\S+@\S+\.\S+$/;

    if (email.validity.valueMissing || email.value === "") {
        // If the field is empty,
        // display the following error message.
        emailError.textContent = "You need to enter an e-mail address.";
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = "Entered value needs to be an e-mail address.";
    } else if (email.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `E-mail should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    } else if (regexMail.test(email.value)) {
        emailError.textContent = "Entered value needs to be an e-mail address.";
    }

    emailError.className = "erroremail active";
}

function showErrorPhoneNumber() {
    const regexPhoneNumber = /^(\+31|0031|0)-?[1-9]{1}[0-9]{8}$/;
     if (phoneNumber.validity.valueMissing || phoneNumber.value === "") {
        phoneNumberError.textContent = "You need to enter an phone number.";
    } else if (phoneNumber.validity.typeMismatch) {
        phoneNumberError.textContent = "Entered value needs to be an phone number.";
    } else if (phoneNumber.validity.tooShort) {
        phoneNumberError.textContent = `Phone number should be at least ${phoneNumber.minLength} characters; you entered ${phoneNumber.value.length}.`;
    } else if(regexPhoneNumber.test(phoneNumber.value)) {
        phoneNumberError.textContent = "Entered value needs to be an phone number.";
    }

    phoneNumberError.className = "error active";
}