/*=========================================
        MOBILE SIDEBAR
=========================================*/

const menuToggle=document.querySelector(".menu-toggle");

const sidebar=document.querySelector(".sidebar");

const closeSidebar=document.querySelector(".close-sidebar");

const overlay=document.querySelector(".sidebar-overlay");

menuToggle.addEventListener("click",()=>{

    sidebar.classList.add("show");

    overlay.classList.add("show");

});

closeSidebar.addEventListener("click",()=>{

    sidebar.classList.remove("show");

    overlay.classList.remove("show");

});

overlay.addEventListener("click",()=>{

    sidebar.classList.remove("show");

    overlay.classList.remove("show");

});

/*=========================================
        ACTIVE MENU
=========================================*/

const menuLinks=document.querySelectorAll(".sidebar-menu li");

menuLinks.forEach(item=>{

    item.addEventListener("click",()=>{

        menuLinks.forEach(link=>{

            link.classList.remove("active");

        });

        item.classList.add("active");

    });

});

/*=========================================
        CARD REVEAL
=========================================*/

const cards=document.querySelectorAll(

".stat-card,.dashboard-card"

);

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.2

}

);

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".8s ease";

observer.observe(card);

});

/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

const text=counter.innerText;

const number=parseInt(text.replace(/\D/g,""));

if(isNaN(number)) return;

let count=0;

const speed=Math.max(10,Math.floor(number/50));

const timer=setInterval(()=>{

count+=speed;

if(count>=number){

count=number;

clearInterval(timer);

}

if(text.includes("₹")){

counter.innerHTML="₹"+count+"L";

}

else if(text.includes("%")){

counter.innerHTML=count+"%";

}

else{

counter.innerHTML=count;

}

},25);

});

/*=========================================
        CHART ANIMATION
=========================================*/

const bars=document.querySelectorAll(".chart-bars span");

bars.forEach((bar,index)=>{

const height=bar.style.height;

bar.style.height="0";

setTimeout(()=>{

bar.style.transition=".9s ease";

bar.style.height=height;

},index*120);

});

/*=========================================
        BUTTON RIPPLE
=========================================*/

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.35)";

ripple.style.transform="scale(0)";

ripple.style.animation="ripple .6s linear";

ripple.style.pointerEvents="none";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=========================================
        RIPPLE STYLE
=========================================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);

/*=========================================
        HEADER SHADOW
=========================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector(".dashboard-header");

if(window.scrollY>20){

header.style.background="#111827";

header.style.padding="20px";

header.style.borderRadius="20px";

header.style.boxShadow="0 15px 40px rgba(0,0,0,.30)";

}

else{

header.style.background="transparent";

header.style.padding="0";

header.style.boxShadow="none";

}

});

/*=========================================
        CURRENT DATE
=========================================*/

const welcome=document.querySelector(".dashboard-header p");

const today=new Date();

const options={

weekday:"long",

day:"numeric",

month:"long"

};

welcome.innerHTML=`Welcome back, Balaraju 👋 | ${today.toLocaleDateString("en-US",options)}`;


/*=========================================
        HEADER ICON REDIRECT
=========================================*/

document.querySelectorAll(".icon-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        window.location.href="404.html";

    });

});