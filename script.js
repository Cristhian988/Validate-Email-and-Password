const form = document.querySelector("form"),
      emailField = form.querySelector(".email-field"),
      emailInput = emailField.querySelector(".email"),
      passField = form.querySelector(".create-password"),
      passInput = passField.querySelector(".password"),
      cPassField = form.querySelector(".confirm-password"),
      cPassInput = cPassField.querySelector(".cPassword");

    //   Email Validation
    function checkEmail(){
        const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!emailInput.value.match(emaiPattern)){
            return emailField.classList.add("invalid")//adding invalid class if email value do not matched with email pattern
        }
        emailField.classList.remove("invalid")//remove invalid class if email value matched with emaiPattern
    }

    // Hide and show password
    const eyeIcons = document.querySelectorAll(".show-hide")

    eyeIcons.forEach((eyeIcon) => {
        eyeIcon.addEventListener("click", () => {
            const pInput = eyeIcon.parentElement.querySelector("input")
            if(pInput.type === "password"){ 
            eyeIcon.classList.replace("bx-hide", "bx-show")
            return pInput.type ="text"
        }
            eyeIcon.classList.replace("bx-show", "bx-hide")
            return pInput.type ="password"
        })
    })

    // Calling Funtion on Form Submit
    form.addEventListener("submit", (e) =>{
        e.preventDefault();//Preventing form Submitting
        checkEmail()

        // calling function on key up
        emailInput.addEventListener("keyup", checkEmail)
    })