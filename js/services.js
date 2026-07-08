/*=========================================
        SERVICES HERO ANIMATION
=========================================*/

const servicesHeroItems = document.querySelectorAll(
".services-hero-content, .services-hero-image"
);

const servicesHeroObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            servicesHeroObserver.unobserve(entry.target);

        }

    });

},{

    threshold:0.25

});

servicesHeroItems.forEach((item)=>{

    servicesHeroObserver.observe(item);

});

/*=========================================
        SIGNATURE SERVICES
=========================================*/

const serviceCards = document.querySelectorAll(".service-box");

const serviceObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const index=[...serviceCards].indexOf(entry.target);

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index*220);

            serviceObserver.unobserve(entry.target);

        }

    });

},{

    threshold:.25

});

serviceCards.forEach((card)=>{

    serviceObserver.observe(card);

});


/*=========================================
    BEFORE & AFTER COMPARISON
=========================================*/

const slider = document.querySelector(".comparison-slider");
const afterImage = document.querySelector(".after-image");
const wrapper = document.querySelector(".comparison-image");

let isDragging = false;

slider.addEventListener("mousedown",()=>{

    isDragging = true;

});

window.addEventListener("mouseup",()=>{

    isDragging = false;

});

window.addEventListener("mousemove",(e)=>{

    if(!isDragging) return;

    const rect = wrapper.getBoundingClientRect();

    let x = e.clientX - rect.left;

    if(x < 0) x = 0;

    if(x > rect.width) x = rect.width;

    slider.style.left = x + "px";

    afterImage.style.width = x + "px";

});

/* Mobile Touch */

slider.addEventListener("touchstart",()=>{

    isDragging = true;

});

window.addEventListener("touchend",()=>{

    isDragging = false;

});

window.addEventListener("touchmove",(e)=>{

    if(!isDragging) return;

    const rect = wrapper.getBoundingClientRect();

    let x = e.touches[0].clientX - rect.left;

    if(x < 0) x = 0;

    if(x > rect.width) x = rect.width;

    slider.style.left = x + "px";

    afterImage.style.width = x + "px";

});

/* Scroll Reveal */

const comparison = document.querySelector(".comparison-wrapper");

const comparisonObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            comparisonObserver.unobserve(entry.target);

        }

    });

},{threshold:.25});

comparisonObserver.observe(comparison);

/*=========================================
        MATERIAL SHOWCASE
=========================================*/

const materialCards = document.querySelectorAll(".material-card");

const materialObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const index=[...materialCards].indexOf(entry.target);

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index*250);

            materialObserver.unobserve(entry.target);

        }

    });

},{

    threshold:.25

});

materialCards.forEach((card)=>{

    materialObserver.observe(card);

});