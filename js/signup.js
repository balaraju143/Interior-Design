/*=========================================
        SIGNUP PAGE
=========================================*/

const signupForm = document.getElementById("signupForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");

const successMessage = document.getElementById("successMessage");

const strengthFill = document.getElementById("strengthFill");
const strengthText = document.getElementById("strengthText");

const roleInput = document.getElementById("userRole");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirm = document.getElementById("toggleConfirm");

const typeCards = document.querySelectorAll(".type-card");

/*=========================================
        ACCOUNT TYPE
=========================================*/

typeCards.forEach(card=>{

    card.addEventListener("click",()=>{

        typeCards.forEach(item=>item.classList.remove("active"));

        card.classList.add("active");

        roleInput.value=card.dataset.role;

    });

});

/*=========================================
        PASSWORD TOGGLE
=========================================*/

togglePassword.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

    }else{

        password.type="password";

        togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';

    }

});

toggleConfirm.addEventListener("click",()=>{

    if(confirmPassword.type==="password"){

        confirmPassword.type="text";

        toggleConfirm.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

    }else{

        confirmPassword.type="password";

        toggleConfirm.innerHTML='<i class="fa-solid fa-eye"></i>';

    }

});

/*=========================================
        PASSWORD STRENGTH
=========================================*/

password.addEventListener("input",()=>{

    let strength=0;

    if(password.value.length>=8) strength++;

    if(/[A-Z]/.test(password.value)) strength++;

    if(/[a-z]/.test(password.value)) strength++;

    if(/[0-9]/.test(password.value)) strength++;

    if(/[^A-Za-z0-9]/.test(password.value)) strength++;

    if(strength<=2){

        strengthFill.style.width="33%";
        strengthFill.style.background="#ff4d4d";
        strengthText.textContent="Weak Password";

    }

    else if(strength<=4){

        strengthFill.style.width="66%";
        strengthFill.style.background="#ff9800";
        strengthText.textContent="Medium Password";

    }

    else{

        strengthFill.style.width="100%";
        strengthFill.style.background="#28a745";
        strengthText.textContent="Strong Password";

    }

});

/*=========================================
        SIGNUP VALIDATION
=========================================*/

signupForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    nameError.textContent="";
    emailError.textContent="";
    passwordError.textContent="";
    confirmError.textContent="";
    successMessage.textContent="";

    fullName.style.borderColor="#2b2b2b";
    email.style.borderColor="#2b2b2b";
    password.style.borderColor="#2b2b2b";
    confirmPassword.style.borderColor="#2b2b2b";

    let valid=true;

    /*=========================
            NAME
    =========================*/

    const namePattern=/^[A-Za-z ]+$/;

    if(fullName.value.trim()===""){

        nameError.textContent="Please enter your full name.";

        fullName.style.borderColor="#c81111";

        valid=false;

    }

    else if(!namePattern.test(fullName.value.trim())){

        nameError.textContent="Only letters and spaces are allowed.";

        fullName.style.borderColor="#c81111";

        valid=false;

    }

    else if(fullName.value.trim().length<3){

        nameError.textContent="Minimum 3 characters required.";

        fullName.style.borderColor="#c81111";

        valid=false;

    }

    else{

        fullName.style.borderColor="#28a745";

    }

    /*=========================
            EMAIL
    =========================*/

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim()===""){

        emailError.textContent="Please enter your email.";

        email.style.borderColor="#c81111";

        valid=false;

    }

    else if(!emailPattern.test(email.value.trim())){

        emailError.textContent="Please enter a valid email.";

        email.style.borderColor="#c81111";

        valid=false;

    }

    else{

        email.style.borderColor="#28a745";

    }

    /*=========================
            PASSWORD
    =========================*/

    const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if(password.value===""){

        passwordError.textContent="Please enter your password.";

        password.style.borderColor="#c81111";

        valid=false;

    }

    else if(!passwordPattern.test(password.value)){

        passwordError.textContent="Use 8+ chars with uppercase, lowercase, number & special character.";

        password.style.borderColor="#c81111";

        valid=false;

    }

    else{

        password.style.borderColor="#28a745";

    }

    /*=========================
        CONFIRM PASSWORD
    =========================*/

    if(confirmPassword.value===""){

        confirmError.textContent="Please confirm your password.";

        confirmPassword.style.borderColor="#c81111";

        valid=false;

    }

    else if(password.value!==confirmPassword.value){

        confirmError.textContent="Passwords do not match.";

        confirmPassword.style.borderColor="#c81111";

        valid=false;

    }

    else{

        confirmPassword.style.borderColor="#28a745";

    }

    /*=========================
            SUCCESS
    =========================*/

    if(valid){

        successMessage.textContent="🎉 Account created successfully! Redirecting to Login...";

        successMessage.style.color="#28a745";

        signupForm.reset();

        strengthFill.style.width="0";

        strengthText.textContent="Password Strength";

        setTimeout(()=>{

            window.location.href="login.html";

        },2000);

    }

    /*=========================
        CLEAR MESSAGES
    =========================*/

    setTimeout(()=>{

        nameError.textContent="";
        emailError.textContent="";
        passwordError.textContent="";
        confirmError.textContent="";
        successMessage.textContent="";

    },3000);

});