console.log("Hello world!");
icon = document.getElementsByClassName("ham-icon")[0];
menu = document.getElementById("menu");
close = document.querySelectorAll("close");
icon.onclick = (e) => {
  e.preventDefault();
  if (menu.classList.contains("menu")) {
    menu.classList.remove("menu");
   
    console.log("clicado1");
  } else {
    menu.classList.add("menu");

  }
  console.log("clicado");
};
