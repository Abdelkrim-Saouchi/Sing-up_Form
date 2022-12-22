const pswInputs = Array.from(document.querySelectorAll('.error'));
const span = document.querySelector(".input-div span");

pswInputs.forEach(pswInput => {
    pswInput.addEventListener("input", ()=> {
        if(pswInputs[0].value !== pswInputs[1].value) {
            span.style.visibility = "visible";
            pswInputs[0].setCustomValidity("Passwords do not match");
            pswInputs[1].setCustomValidity("Passwords do not match");
        }
        else {
            span.style.visibility = "hidden";
            pswInputs[0].setCustomValidity("");
            pswInputs[1].setCustomValidity("");
        }
    });
})
