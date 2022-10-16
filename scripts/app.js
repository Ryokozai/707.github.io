//scripts/app.js-welcome

//menu buttons
/*const menuToggle = document.querySelector('.toggle')
const box = document.querySelector('.box')

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active')
	box.classList.toggle('active')
});*/

 //MODAL SCRIPT POP UP
 const btns = document.querySelectorAll("[data-target]");
 const close_modals = document.querySelectorAll(".close-modal");
 const overlay = document.getElementById("overlay");

 btns.forEach((btn) => {
	 btn.addEventListener("click", () => {
		 document.querySelector(btn.dataset.target).classList.add("active");
		 overlay.classList.add("active");
	 });
 });

 close_modals.forEach((btn) => {
	 btn.addEventListener("click", () => {
		 const modal = btn.closest(".modal");
		 modal.classList.remove("active");
		 overlay.classList.remove("active");
	 });
 });

 window.onclick = (event) => {
	 if (event.target == overlay) {
		 const modals = document.querySelectorAll(".modal");
		 modals.forEach((modal) => modal.classList.remove("active"));
		 overlay.classList.remove("active");
	 }
 };


  /*OPACITY SCROLL*/
    //USER INTRO
    /*$(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 500){
            $(".pfp").css({"opacity" : "1", "animation-duration" : "1s", "animation-delay" : "2s",
            "animation-timing-function" : "ease", "animation-fill-mode" : "forwards", "animation-name" : "fadein"})
            }
            else {
                $(".pfp").css({"opacity" : "0"})
            }
        })
    });*/

    //VISIONARY
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 520){
            $(".title").css({"opacity" : "1"})
            }
            else {
                $(".title").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 535){
            $(".tip-1").css({"opacity" : "1"})
            }
            else {
                $(".tip-1").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 570){
            $(".line1").css({"opacity" : "1"})
            }
            else {
                $(".line1").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 595){
            $(".hor1").css({"opacity" : "1"})
            }
            else {
                $(".hor1").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 630){
            $(".line2").css({"opacity" : "1"})
            }
            else {
                $(".line2").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 655){
            $(".hor2").css({"opacity" : "1"})
            }
            else {
                $(".hor2").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 690){
            $(".line3").css({"opacity" : "1"})
            }
            else {
                $(".line3").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 715){
            $(".hor3").css({"opacity" : "1"})
            }
            else {
                $(".hor3").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 750){
            $(".line4").css({"opacity" : "1"})
            }
            else {
                $(".line4").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 775){
            $(".hor4").css({"opacity" : "1"})
            }
            else {
                $(".hor4").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 810){
            $(".line5").css({"opacity" : "1"})
            }
            else {
                $(".line5").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 875){
            $(".eye").css({"opacity" : "1"})
            }
            else {
                $(".eye").css({"opacity" : "0"})
            }
        })
    });

    //GALLERY

    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1500){
            $(".gallery").css({"opacity" : "1"})
            }
            else {
                $(".gallery").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1525){
            $(".tip-2").css({"opacity" : "1"})
            }
            else {
                $(".tip-2").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1575){
            $(".line6").css({"opacity" : "1"})
            }
            else {
                $(".line6").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1620){
            $(".hor5").css({"opacity" : "1"})
            }
            else {
                $(".hor5").css({"opacity" : "0"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1700){
            $(".pic1").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic1").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1750){
            $(".pic2").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic2").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1800){
            $(".pic3").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic3").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1900){
            $(".pic4").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic4").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1950){
            $(".pic5").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic5").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 2000){
            $(".pic6").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic6").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 2100){
            $(".pic7").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic7").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 2150){
            $(".pic8").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic8").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 2200){
            $(".pic9").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic9").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 2250){
            $(".pic10").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic10").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 2300){
            $(".pic11").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic11").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 2350){
            $(".pic12").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".pic12").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 2450){
            $(".gem").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".gem").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    //OUTRO
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 3165){
            $(".outro").css({"opacity" : "1", "transition" : "1s ease"})
            }
            else {
                $(".outro").css({"opacity" : "0", "transition" : "1s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 3185){
            $(".end").css({"opacity" : "1", "transition" : "1.5s ease"})
            }
            else {
                $(".end").css({"opacity" : "0", "transition" : "1.5s ease"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 3215){
            $(".social").css({"opacity" : "1", "transform" : "scale(0.9)", "transition-delay" : "500ms"})
            }
            else {
                $(".social").css({"opacity" : "0", "transform" : "scale(0.7)", "transition-delay" : "100ms"})
            }
        })
    });
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 3225){
            $(".sig").css({"opacity" : "1", "letter-spacing" : "10px", "transition" : "3s ease", "transition-delay" : "500ms"})
            }
            else {
                $(".sig").css({"opacity" : "0", "letter-spacing" : "5px", "transition" : "3s ease", "transition-delay" : "100ms"})
            }
        })
    });

    

