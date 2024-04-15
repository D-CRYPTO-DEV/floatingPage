menu_btn = document.querySelector(".menu-btn");
main_flex_container = document.querySelector(".head_container")
menu_btn.addEventListener("click",()=>{
    main_flex_container.classList.toggle("head_container2");
})