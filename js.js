// document.getElementById('contactForm').addEventListener("submit",function(e){
//     e.preventDefault();

//     document.querySelectorAll(".error").forEach(e1=> e1.innerText=" ");
//     let isValid =true;

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();


//     const namePattern  = /^[A-Za-z\s]{2,}$/;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const textPattern = /^.{5,}$/;

//     if(namePattern.test(name)){
//         document.getElementById("nameError").innerText="Please enter a valid name";
//         isValid=false;
//     }

//     if(emailPattern.test(email)){
//         document.getElementById("emailError").innerText="Please enter a valid email address";
//         isValid=false;
//     }

//     if(textPattern.test(message)){
//         document.getElementById("subjectError").innerText="Subject must be aleast 5 minimum characters";
//         isValid=false;
//     }

//     if(!isValid){
        
//     }
// })




// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("contactForm");
//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const messageInput = document.getElementById("message");
//   const submitBtn = form.querySelector("button[type='submit']");

//   const nameError = document.getElementById("nameError");
//   const emailError = document.getElementById("emailError");
//   const subjectError = document.getElementById("subjectError");

//   // Validation functions
//   function validateName() {
//     const regex=/^[A-Za-z\s]{2,}$/;
//     const name = nameInput.value.trim();
//     if (name.length < 2 || !regex.test(name) && nameInput) {
//       if(name.length <2){
//         nameError.textContent = "Name must be at least 2 characters.";
//       }
//       else{
//         nameError.textContent="Name should not include numbers or special characters."
//       }
//       return false;
//     }

//     nameError.textContent = "";
//     return true;
//   }

//   function validateEmail() {
//     const email = emailInput.value.trim();
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!regex.test(email)) {
//       emailError.textContent = "Enter a valid email address.";
//       return false;
//     }
//     emailError.textContent = "";
//     return true;
//   }

//   function validateMessage() {
//     const message = messageInput.value.trim();
//     if (message.length < 5) {
//       subjectError.textContent = "Message must be at least 5 characters.";
//       return false;
//     }
//     subjectError.textContent = "";
//     return true;
//   }

//   // Form validation controller
//   function validateForm() {
//     const isNameValid = validateName();
//     const isEmailValid = validateEmail();
//     const isMessageValid = validateMessage();

//     submitBtn.disabled = !(isNameValid && isEmailValid && isMessageValid);
//   }

//   // Attach input listeners
//   [nameInput, emailInput, messageInput].forEach((input) => {
//     input.addEventListener("input", validateForm);
//   });

//   // Prevent default if form invalid
//   form.addEventListener("submit", function (e) {
//     validateForm();
//     if (submitBtn.disabled) {
//       e.preventDefault();
//     }
//   });

//   // Initial disable
//   validateForm();
// });



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const submitBtn = form.querySelector("button[type='submit']");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");

  // Track if fields have been touched
  const touched = {
    name: false,
    email: false,
    message: false
  };

  function validateName() {
    const regex = /^[A-Za-z\s]{2,}$/;
    const name = nameInput.value.trim();
    const isValid = name.length >= 2 && regex.test(name);

    if (touched.name) {
      if (!isValid) {
        nameError.textContent = name.length < 2
          ? "Name must be at least 2 characters."
          : "Name should not include numbers or special characters.";
      } else {
        nameError.textContent = "";
      }
    }
    return isValid;
  }

  function validateEmail() {
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);

    if (touched.email) {
      emailError.textContent = isValid ? "" : "Enter a valid email address.";
    }
    return isValid;
  }

  function validateMessage() {
    const message = messageInput.value.trim();
    const isValid = message.length >= 5;

    if (touched.message) {
      subjectError.textContent = isValid ? "" : "Message must be at least 5 characters.";
    }
    return isValid;
  }

  function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    submitBtn.disabled = !(isNameValid && isEmailValid && isMessageValid);
  }

  // Mark field as touched on blur
  nameInput.addEventListener("blur", () => {
    touched.name = true;
    validateForm();
  });

  emailInput.addEventListener("blur", () => {
    touched.email = true;
    validateForm();
  });

  messageInput.addEventListener("blur", () => {
    touched.message = true;
    validateForm();
  });

  // Re-validate on input
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", validateForm);
  });

  form.addEventListener("submit", function (e) {
    touched.name = touched.email = touched.message = true;
    validateForm();
    if (submitBtn.disabled) {
      e.preventDefault();
    }
  });

  validateForm(); // Initial disable
});
