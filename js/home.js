/*=========================================
            HERO SLIDER
=========================================*/

const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".hero-dot");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");

let currentSlide = 0;

let autoSlide;

/*=========================================
        SHOW SLIDE
=========================================*/

function showSlide(index){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });

    dots.forEach((dot)=>{

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}

/*=========================================
        NEXT SLIDE
=========================================*/

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

/*=========================================
        PREVIOUS SLIDE
=========================================*/

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

/*=========================================
        BUTTON EVENTS
=========================================*/

nextBtn.addEventListener("click",()=>{

    nextSlide();

    resetAutoSlide();

});

prevBtn.addEventListener("click",()=>{

    prevSlide();

    resetAutoSlide();

});

/*=========================================
        DOT EVENTS
=========================================*/

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide = index;

        showSlide(currentSlide);

        resetAutoSlide();

    });

});

/*=========================================
        AUTO SLIDER
=========================================*/

function startAutoSlide(){

    autoSlide = setInterval(()=>{

        nextSlide();

    },5000);

}

/*=========================================
        RESET TIMER
=========================================*/

function resetAutoSlide(){

    clearInterval(autoSlide);

    startAutoSlide();

}

/*=========================================
        START
=========================================*/

showSlide(currentSlide);

startAutoSlide();


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(".reveal-left, .reveal-right");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.2
});

revealElements.forEach((el)=>{

    observer.observe(el);

});


/*=========================================
        PROJECT REVEAL
=========================================*/

const revealItems = document.querySelectorAll(".reveal-up");

const projectObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.2
});

revealItems.forEach(item=>{

    projectObserver.observe(item);

});

/*=========================================
        SCROLL REVEAL
=========================================*/
/*=========================================
        MATERIALS SECTION
=========================================*/

document.querySelectorAll(
".materials-section .reveal-left, .materials-section .reveal-up, .materials-section .reveal-right"
).forEach(item=>{

    item.classList.add("active");

});
/*=========================================
        PROCESS TIMELINE
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const processCards=document.querySelectorAll(".timeline-content");

    processCards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            const number=card.querySelector("span");

            number.style.transform="rotate(360deg) scale(1.08)";

            number.style.transition=".8s cubic-bezier(.25,1,.5,1)";

        });

        card.addEventListener("mouseleave",()=>{

            const number=card.querySelector("span");

            number.style.transform="rotate(0deg) scale(1)";

        });

    });

});

const video = document.getElementById("studioVideo");
const playBtn = document.getElementById("playVideo");

playBtn.addEventListener("click", () => {

    if(video.paused){

        video.play();

        playBtn.style.display = "none";

    }

});
