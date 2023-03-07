
// const desktopQuery = window.matchMedia("(min-width:900px)");
// const mobileQuery = window.matchMedia("(max-width:900px)");
const blueBkgClr = document.querySelector(".blueBkgClr");
const burger = document.querySelector(".burger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const navLinks = document.querySelector(".navLinks");
const section = document.querySelector("section");
const sec1 = document.querySelector(".sec1");
const sec2 = document.querySelector(".sec2");
// const arrow = document.querySelector(".arrow");
const showcase = document.querySelector(".showcase");
const search = document.querySelector(".search");
const footer = document.querySelector(".footer");
const arrow = document.querySelector(".footer>:nth-child(2)");
// const twitter = document.querySelector(".twitter");
// const instagram = document.querySelector(".instagram");
// const bkgVideo = document.querySelector(".bkgVideo");
// const mobileMenu = document.querySelector(".mobileMenu");



// arrow.addEventListener("click", () => {
    
//         mainBody1.classList.toggle("hideMainBody1");
//         mainBody2.classList.toggle("displayMain2");
// })


burger.addEventListener("click", () => {
// if (desktopQuery.matches){
        

        bar1.classList.toggle("changeColorBurger");
        bar2.classList.toggle("changeColorBurger");
        bar3.classList.toggle("changeColorBurger");
        blueBkgClr.classList.toggle("closeBlue");
        footer.classList.toggle("changeColorSocials");
        navLinks.classList.toggle("changeColorNavLinks")
        // twitter.classList.toggle("showTwitter");
        // instagram.classList.toggle("showIG");
        search.classList.toggle("show");
        section.classList.toggle("closeSection");
        arrow.classList.toggle("hideArrow");
        // mainBody2.classList.toggle("hideMain");
        // bkgVideo.classList.toggle("bkgVideoBlur");
        // arrow.classList.toggle("hideArrow");
        showcase.classList.toggle("revealShowcase");

        
// }else if(mobileQuery.matches){

//         bar1.classList.toggle("cross");
//         bar2.classList.toggle("cross");
//         bar3.classList.toggle("cross");
//         mobileMenu.classList.toggle("showMobileMenu");
//         blueBkgClr.classList.toggle("open");
//         navbar.classList.toggle("showNavbar");
//         facebook.classList.toggle("showFacebook");
//         twitter.classList.toggle("showTwitter");
//         instagram.classList.toggle("showIG");
//         search.classList.toggle("showSearch");
//         mainBody1.classList.toggle("hideMain");
//         mainBody2.classList.toggle("hideMain");
//         bkgVideo.classList.toggle("bkgVideoBlur");
//         arrow.classList.toggle("hideArrow");
        
// }
})

arrow.addEventListener("click", ()=>{
        sec1.classList.toggle("moveSec1")
        sec2.classList.toggle("moveSec2")
})




