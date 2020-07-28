const toggler = document.getElementById("toggle-icon");
const body = document.body
const darkmode = document.getElementById("darkmode");
const lightmode = document.getElementById("lightmode");

toggler.addEventListener("click", function(){
    (darkmode.setAttribute("href", "css/style.css"));
});
