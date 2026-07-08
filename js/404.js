/*=========================================
        404 PAGE ANIMATION
=========================================*/

window.addEventListener("load",()=>{

    const card=document.querySelector(".error-card");

    card.animate(

        [

            {

                opacity:0,

                transform:"translateY(80px) scale(.9)"

            },

            {

                opacity:1,

                transform:"translateY(0) scale(1)"

            }

        ],

        {

            duration:1000,

            easing:"ease-out",

            fill:"forwards"

        }

    );

});