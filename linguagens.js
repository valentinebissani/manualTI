var modo = 0;

function modoEscuro() {
    if (modo == 0) {
        document.querySelectorAll('.alterar').forEach(function(element) {
            element.classList.remove("claro");
            element.classList.add("escuro");
        });

        document.querySelectorAll('.alterar2').forEach(function(element) {
            element.classList.remove("claro");
            element.classList.add("escuro2");
        });

        document.getElementById("textmode").innerHTML = "Modo claro";
        modo = 1;
    } else {
        document.querySelectorAll('.alterar').forEach(function(element) {
            element.classList.remove("escuro");
            element.classList.add("claro");
        });

        document.querySelectorAll('.alterar2').forEach(function(element) {
            element.classList.remove("escuro2");
            element.classList.add("claro");
        });

        document.getElementById("textmode").innerHTML = "Modo escuro";
        modo = 0;
    }
}





