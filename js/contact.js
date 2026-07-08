/*=========================================
        CONTACT HERO
=========================================*/

const contactContent = document.querySelector(".contact-hero-content");
const contactCards = document.querySelectorAll(".contact-info-card");

const contactObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            if(entry.target.classList.contains("contact-hero-content")){

                entry.target.classList.add("show");

            }else{

                const index = [...contactCards].indexOf(entry.target);

                setTimeout(()=>{

                    entry.target.classList.add("show");

                }, index * 180);

            }

            contactObserver.unobserve(entry.target);

        }

    });

},{

    threshold:0.25

});

contactObserver.observe(contactContent);

contactCards.forEach((card)=>{

    contactObserver.observe(card);

});



/*=========================================
        CONTACT FORM VALIDATION
=========================================*/

const contactForm = document.getElementById("contactForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const service = document.getElementById("service");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const serviceError = document.getElementById("serviceError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

/*==========================
      PHONE ONLY NUMBERS
==========================*/

phone.addEventListener("input", function(){

    this.value = this.value.replace(/\D/g,"");

});

/*==========================
      FORM SUBMIT
==========================*/

contactForm.addEventListener("submit",function(e){

    e.preventDefault();

    nameError.textContent="";
    emailError.textContent="";
    phoneError.textContent="";
    serviceError.textContent="";
    messageError.textContent="";
    successMessage.textContent="";

    let valid=true;

    /*==========================
            NAME
    ==========================*/

    const namePattern=/^[A-Za-z ]+$/;

    if(fullName.value.trim()===""){

        nameError.textContent="Please enter your name.";

        valid=false;

    }

    else if(fullName.value.trim().length<3){

        nameError.textContent="Name must contain at least 3 letters.";

        valid=false;

    }

    else if(!namePattern.test(fullName.value.trim())){

        nameError.textContent="Only letters and spaces are allowed.";

        valid=false;

    }

    /*==========================
            EMAIL
    ==========================*/

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim()===""){

        emailError.textContent="Please enter your email.";

        valid=false;

    }

    else if(!emailPattern.test(email.value.trim())){

        emailError.textContent="Please enter a valid email address.";

        valid=false;

    }

    /*==========================
            PHONE
    ==========================*/

    if(phone.value.trim()===""){

        phoneError.textContent="Please enter your phone number.";

        valid=false;

    }

    else if(phone.value.length!==10){

        phoneError.textContent="Phone number must contain exactly 10 digits.";

        valid=false;

    }

    /*==========================
            SERVICE
    ==========================*/

    if(service.value===""){

        serviceError.textContent="Please select a service.";

        valid=false;

    }

    /*==========================
            MESSAGE
    ==========================*/

    if(message.value.trim()===""){

        messageError.textContent="Please enter your message.";

        valid=false;

    }

    else if(message.value.trim().length<20){

        messageError.textContent="Message should contain at least 20 characters.";

        valid=false;

    }

    /*==========================
            SUCCESS
    ==========================*/

    if(valid){

        successMessage.textContent="🎉 Thank you! Your inquiry has been submitted successfully.";

        contactForm.reset();

    }

    /*==========================
      REMOVE MESSAGE AFTER 3s
    ==========================*/

    setTimeout(()=>{

        nameError.textContent="";
        emailError.textContent="";
        phoneError.textContent="";
        serviceError.textContent="";
        messageError.textContent="";
        successMessage.textContent="";

    },3000);

});



/*=========================================
        CUSTOM DROPDOWN
=========================================*/

const dropdown = document.getElementById("serviceDropdown");
const selected = dropdown.querySelector(".dropdown-selected");
const list = dropdown.querySelector(".dropdown-list");
const items = dropdown.querySelectorAll(".dropdown-list li");
const selectedText = document.getElementById("selectedService");
const hiddenInput = document.getElementById("service");

/* Open / Close */

selected.addEventListener("click", function (e) {

    e.stopPropagation();

    list.classList.toggle("show");

    selected.classList.toggle("active");

});

/* Select Item */

items.forEach(item => {

    item.addEventListener("click", function () {

        selectedText.textContent = this.textContent;

        hiddenInput.value = this.dataset.value;

        list.classList.remove("show");

        selected.classList.remove("active");

    });

});

/* Close Outside */

document.addEventListener("click", function (e) {

    if (!dropdown.contains(e.target)) {

        list.classList.remove("show");

        selected.classList.remove("active");

    }

});


/*=========================================
        VISIT STUDIO ANIMATION
=========================================*/

const studioItems = document.querySelectorAll(
".studio-image, .studio-info"
);

const studioObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            studioObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.25
});

studioItems.forEach((item)=>{

    studioObserver.observe(item);

});


/*=========================================
        FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach((faq)=>{

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*=========================================
        FAQ SCROLL ANIMATION
=========================================*/

const faqObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            faqObserver.unobserve(entry.target);

        }

    });

},{

    threshold:0.2

});

faqItems.forEach((item)=>{

    faqObserver.observe(item);

});