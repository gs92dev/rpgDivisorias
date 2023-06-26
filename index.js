console.log("Hello world!");
icon = document.getElementsByClassName("ham-icon")[0];
menu = document.getElementById("menu");
icon.onclick = (e) => {
  e.preventDefault();
  if (menu.classList.contains("menu")) {
    menu.remove(menu);
    console.log("clicado1");
  }
  console.log("clicado");
};
