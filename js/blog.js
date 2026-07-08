/*=========================================
        JOURNAL HERO ANIMATION
=========================================*/

const journalItems = document.querySelectorAll(
".journal-content, .journal-image"
);

const journalObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            journalObserver.unobserve(entry.target);

        }

    });

},{

    threshold:0.25

});

journalItems.forEach((item)=>{

    journalObserver.observe(item);

});


/*=========================================
        FEATURED JOURNAL
=========================================*/

const journalCards = document.querySelectorAll(".journal-card");

const journalCardObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const index=[...journalCards].indexOf(entry.target);

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index*180);

            journalCardObserver.unobserve(entry.target);

        }

    });

},{

    threshold:.2

});

journalCards.forEach((card)=>{

    journalCardObserver.observe(card);

});

/* Pause slider while dragging */

const slider=document.querySelector(".journal-slider");
const track=document.querySelector(".journal-track");

slider.addEventListener("mouseenter",()=>{

    track.style.animationPlayState="paused";

});

slider.addEventListener("mouseleave",()=>{

    track.style.animationPlayState="running";

});

/*=========================================
        EDITOR TIMELINE
=========================================*/

const editorItems = document.querySelectorAll(".editor-item");

const editorObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            editorObserver.unobserve(entry.target);

        }

    });

},{

    threshold:0.25

});

editorItems.forEach((item)=>{

    editorObserver.observe(item);

});

/*=========================================
        NEWSLETTER SECTION
=========================================*/

const newsletterContent = document.querySelector(".newsletter-content");
const galleryImages = document.querySelectorAll(".newsletter-gallery img");

const newsletterObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            if(entry.target.classList.contains("newsletter-content")){

                entry.target.classList.add("show");

            }else{

                const index = [...galleryImages].indexOf(entry.target);

                setTimeout(()=>{

                    entry.target.classList.add("show");

                },index*180);

            }

            newsletterObserver.unobserve(entry.target);

        }

    });

},{threshold:.25});

newsletterObserver.observe(newsletterContent);

galleryImages.forEach((img)=>{

    newsletterObserver.observe(img);

});

/*=========================================
        NEWSLETTER VALIDATION
=========================================*/

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("newsletterEmail");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");

newsletterForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailError.textContent = "";
    successMessage.textContent = "";

    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){

        emailError.textContent = "Please enter your email address.";

        setTimeout(() => {

            emailError.textContent = "";

        }, 3000);

        return;
    }

    if(!emailPattern.test(email)){

        emailError.textContent = "Please enter a valid email address.";

        setTimeout(() => {

            emailError.textContent = "";

        }, 3000);

        return;
    }

    successMessage.textContent = "🎉 Thank you for subscribing to our Design Journal!";

    emailInput.value = "";

    setTimeout(() => {

        successMessage.textContent = "";

    }, 3000);

});