/*=========================================
        LOGIN PAGE
=========================================*/

const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

const togglePassword = document.getElementById("togglePassword");

const roleInput = document.getElementById("userRole");

const typeCards = document.querySelectorAll(".type-card");

/*=========================================
        ACCOUNT TYPE
=========================================*/

typeCards.forEach(card=>{

    card.addEventListener("click",()=>{

        typeCards.forEach(item=>{

            item.classList.remove("active");

        });

        card.classList.add("active");

        roleInput.value = card.dataset.role;

    });

});

/*=========================================
        SHOW PASSWORD
=========================================*/

togglePassword.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

    }

    else{

        password.type="password";

        togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';

    }

});

/*=========================================
        LIVE EMAIL VALIDATION
=========================================*/

email.addEventListener("input",()=>{

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim()===""){

        emailError.textContent="";

        return;

    }

    if(emailPattern.test(email.value.trim())){

        emailError.textContent="";

        email.style.borderColor="#28a745";

    }

    else{

        emailError.textContent="Please enter a valid email.";

        email.style.borderColor="#c81111";

    }

});

/*=========================================
        LIVE PASSWORD
=========================================*/

password.addEventListener("input",()=>{

    if(password.value.length>=8){

        passwordError.textContent="";

        password.style.borderColor="#28a745";

    }

    else{

        passwordError.textContent="Minimum 8 characters required.";

        password.style.borderColor="#c81111";

    }

});

/*=========================================
        LOGIN
=========================================*/

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    emailError.textContent="";

    passwordError.textContent="";

    successMessage.textContent="";

    email.style.borderColor="#2b2b2b";

    password.style.borderColor="#2b2b2b";

    let valid=true;

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim()===""){

        emailError.textContent="Email is required.";

        email.style.borderColor="#c81111";

        valid=false;

    }

    else if(!emailPattern.test(email.value.trim())){

        emailError.textContent="Enter a valid email address.";

        email.style.borderColor="#c81111";

        valid=false;

    }

    if(password.value.trim()===""){

        passwordError.textContent="Password is required.";

        password.style.borderColor="#c81111";

        valid=false;

    }

    else if(password.value.length<8){

        passwordError.textContent="Password must be at least 8 characters.";

        password.style.borderColor="#c81111";

        valid=false;

    }

    if(valid){

        successMessage.textContent="Login successful! Redirecting...";

        successMessage.style.color="#28a745";

        setTimeout(()=>{

            if(roleInput.value==="admin"){

                window.location.href="admin-dashboard.html";

            }

            else{

                window.location.href="client-dashboard.html";

            }

        },2000);

    }

    setTimeout(()=>{

        emailError.textContent="";

        passwordError.textContent="";

        successMessage.textContent="";

    },3000);

});


/*=========================================
        HIDE LOADER INITIALLY
=========================================*/
/*=========================================
        PREMIUM LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    const progressBar = document.querySelector(".loader-progress-fill");

    const loadingCount = document.getElementById("loading-count");

    let progress = 0;

    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {

        progress++;

        progressBar.style.width = progress + "%";

        loadingCount.textContent = progress + "%";

        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                loader.classList.add("hide");

                document.body.style.overflow = "auto";

            }, 300);

        }

    }, 25);

});