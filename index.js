console.log("Hello world!");
icon = document.getElementsByClassName("ham-icon")[0];
menu = document.getElementById("menu");
close = document.querySelectorAll("close");
icon.onclick = (e) => {
  e.preventDefault();
  if (menu.classList.contains("close")) {
    menu.classList.add("test");
    menu.classList.remove("close");
    menu.classList.remove("menu");
  } else {
    menu.classList.add("menu");
    setTimeout(() => {
      menu.classList.add("close");
    }, 2000);
  }
};
