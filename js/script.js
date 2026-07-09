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

    }, 22);

});



/*=========================================
    MOBILE MENU
=========================================*/

const menuToggle = document.getElementById("menuToggle");

const mobileMenu = document.getElementById("mobileMenu");

const overlay = document.getElementById("overlay");

const body = document.body;

/*==============================
OPEN MENU
==============================*/

function openMenu(){

    menuToggle.classList.add("active");

    mobileMenu.classList.add("active");

    overlay.classList.add("active");

    body.style.overflow = "hidden";

}

/*==============================
CLOSE MENU
==============================*/

function closeMenu(){

    menuToggle.classList.remove("active");

    mobileMenu.classList.remove("active");

    overlay.classList.remove("active");

    body.style.overflow = "";

}

/*==============================
TOGGLE MENU
==============================*/

menuToggle.addEventListener("click",()=>{

    if(mobileMenu.classList.contains("active")){

        closeMenu();

    }else{

        openMenu();

    }

});

/*==============================
OVERLAY CLOSE
==============================*/

overlay.addEventListener("click",closeMenu);

/*==============================
ESC CLOSE
==============================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeMenu();

    }

});

/*==============================
AUTO CLOSE MENU
==============================*/

const mobileLinks=document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        closeMenu();

    });

});

/*==============================
ACTIVE NAVIGATION
==============================*/

const navLinks=document.querySelectorAll(".nav-links a");

const currentPage=window.location.pathname.split("/").pop();

navLinks.forEach(link=>{

    const href=link.getAttribute("href");

    if(href===currentPage || (currentPage==="" && href==="index.html")){

        link.classList.add("active");

    }

});

/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==============================
WINDOW RESIZE
==============================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>991){

        closeMenu();

    }

});