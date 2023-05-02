const btn_menu_hamburguer = document.querySelector(".btn_menu_mobile");
const menu_hamburguer_area = document.querySelector(".div_mobile");
const hamburguer_icon = document.querySelector(".hamburguer");

function display_hamburguer() {

  if(menu_hamburguer_area.style.opacity == 0) {
    menu_hamburguer_area.style.opacity = 100;
    hamburguer_icon.innerText = "close"
  }else{
    menu_hamburguer_area.style.opacity = 0;
    hamburguer_icon.innerText = "menu"
  }
}

btn_menu_hamburguer.addEventListener("click", display_hamburguer)