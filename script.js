const themebutton=document.getElementById("themetoggle");
themebutton.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        themebutton.textContent="☀︎";
    }
    else{
        themebutton.textContent="⏾";
    }
});
const speech=document.getElementById("speech");
const messages=[
    "Hi! I'm Bug 🐾",
    "Welcome Human! 👤",
    "Need Coffee? ☕",
    "I guard this portfolio. 😼",
    "Scroll down ⬇️",
    "Still looking? 👀",
    "Made with  HTML 🛠️",
    "Hope you like it! 🤎",
    "I approve this website 😸",
    "Have a greate day 🩶"
];
setInterval(()=>{
    speech.textContent=
    messages[Math.floor(Math.random()*messages.length)];
},4000);
const sections=document.querySelectorAll("section");
const navlinks=document.querySelectorAll("nav ul li a");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectionTop=section.offsetTop-120;
        const sectionHeight=section.clientHeight;
        if(pageYOffset>=sectionTop){
            current=section.getAttribute("id");
        }
    });
    navlinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });
});
