//busca um elemento no html e salva em uma variável
let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

//funcao que vai abrir e fechar o menu
function abrefechamenu(){

// se o menu esta fechado
if(menu.classList.contains("menu-fechado")){
    //abrir o menu
    menu.classList.remove("menu-fechado")
    //mostra o icone
    iconeX.style.display = "inline"
    // esconder o icone barras
    iconebarras.style.display = "none"
}

//senão
else{
//fechar o menu
menu.classList.add("menu-fechado")

//esconder icone x
iconeX.style.display = "none"

//mostrar icone barras 
iconebarras.style.display = "inline"

}

}

onresize = () => {
    menu.classList.remove = ("menu-fechado")

    //mostrar icone x
iconeX.style.display = "inline"

//esconder icone barras
iconebarras.style.display = "none"
}

