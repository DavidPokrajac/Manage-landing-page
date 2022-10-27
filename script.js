document.addEventListener("DOMContentLoaded", () => {

    let inputText = document.querySelector("input[type='text']");
    let emailValueArray;
    let emailErrorWarning = document.createElement("span");
    let footerContainer = document.querySelector("footer section");
    footerContainer.append(emailErrorWarning);

    inputText.addEventListener("keyup", (e) => {
        console.log(e.target.value);
        emailValueArray = e.target.value;

        console.log(emailValueArray);
        for(let i = 0; i < emailValueArray.length; i += 1) {
            if(emailValueArray.startsWith("@") || emailValueArray[i] !== "@") {
                inputText.style.color = "hsl(12, 88%, 59%)";
                inputText.style.border = "2px solid hsl(12, 88%, 59%)";
                emailErrorWarning.textContent = "Please insert a valid email";
                emailErrorWarning.classList.add("email-error-warning");
            } else {
                emailErrorWarning.textContent = "";
                inputText.style.border = "";
                inputText.style.color = "";
            }
        }

        if(emailValueArray.length === 0) {
            emailErrorWarning.textContent = "";
            inputText.style.border = "";
            inputText.style.color = "";
        }

    })

})