const heading = document.querySelector("#heading");
 heading.style.color = "red";
 heading.style.border = "2px solid black";
 heading.style.padding = "20px";
 heading.style.fontSize = "40px";
 heading.style.backgroundColor = "green";

 //Adding or Removing CSS classes.
 const box = document.querySelector("#box");

 box.classList.toggle("active");


 console.log(box.classList.contains("hidden"));

 const themeButton = document.querySelector("#themeButton");

 themeButton.addEventListener("click", ()=> {
    document.body.classList.toggle("dark-mode");
 });