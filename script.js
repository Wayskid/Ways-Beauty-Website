

const container = document.querySelector(".container");
const burger = document.querySelector(".burger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mainBody = document.querySelector(".mainBody");
const mainBody1 = document.querySelector(".mainBody1");
const mainBody2 = document.querySelector(".mainBody2");
const arrow = document.querySelector(".arrow");
const showcase = document.querySelector(".showcase");
const search = document.querySelector(".search");
const navbar = document.querySelector(".navbar");
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");
const cross = document.querySelector(".cross");
const glow = document.querySelector(".glow");

arrow.addEventListener("click", () => {
    
        mainBody.classList.toggle("showMainBody2");
        mainBody2.classList.toggle("displayMain2");
})

burger.addEventListener("click", () => {

        bar1.classList.toggle("cross");
        bar2.classList.toggle("cross");
        bar3.classList.toggle("cross");
        showcase.classList.toggle("showShowcase");
        container.classList.toggle("removeCon");
        navbar.classList.toggle("showNavbar");
        facebook.classList.toggle("showFacebook");
        twitter.classList.toggle("showTwitter");
        instagram.classList.toggle("showIG");
        search.classList.toggle("showSearch");
        mainBody.classList.toggle("hideMainBody");
        burger.classList.toggle("purpleBurger");
        arrow.classList.toggle("hideArrow");

        
});

arrow.addEventListener("click", () => {

})

