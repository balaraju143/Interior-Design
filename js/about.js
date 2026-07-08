/*=========================================
        STAGGER ANIMATION
=========================================*/

const cards = document.querySelectorAll(".philosophy-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const index = [...cards].indexOf(entry.target);

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index * 250);

        }

    });

},{

    threshold:0.3

});

cards.forEach((card)=>{

    observer.observe(card);

});



/*=========================================
        WHY SECTION ANIMATION
=========================================*/

const whyElements = document.querySelectorAll(
".why-image, .why-content, .why-item"
);

const whyObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            if(entry.target.classList.contains("why-item")){

                const cards = document.querySelectorAll(".why-item");

                const index = [...cards].indexOf(entry.target);

                setTimeout(()=>{

                    entry.target.classList.add("show");

                },index * 250);

            }

            else{

                entry.target.classList.add("show");

            }

            whyObserver.unobserve(entry.target);

        }

    });

},{

    threshold:.25

});

whyElements.forEach((element)=>{

    whyObserver.observe(element);

});

/*=========================================
        JOURNEY TIMELINE ANIMATION
=========================================*/

const journeyItems = document.querySelectorAll(".journey-item");

const journeyObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            const index = [...journeyItems].indexOf(entry.target);

            setTimeout(()=>{

                entry.target.classList.add("show");

            }, index * 250);

            journeyObserver.unobserve(entry.target);

        }

    });

},{

    threshold:0.25

});

journeyItems.forEach((item)=>{

    journeyObserver.observe(item);

});