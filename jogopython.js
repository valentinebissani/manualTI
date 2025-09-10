document.getElementById('quizForm').addEventListener('submit', function(e){
  e.preventDefault();

  var respostas = {
    q1: "print",
    q2: "#",
    q3: "def",
    q4: "[]",
    q5: "import",
    q6: "//",
    q7: "type",
    q8: "for",
    q9: ".py",
    q10: "input"
  };

  var acertos = 0;
  var total = 10;
  var resultadoTexto = "<h3>Resultado:</h3><ul>";

  for(var i=1;i<=total;i++){
    var valor = "";
    var inputRadio = document.querySelector('[name="q'+i+'"]:checked');
    var inputTexto = document.querySelector('[name="q'+i+'"]');

    if(inputRadio){
      valor = inputRadio.value;
    } else if(inputTexto){
      valor = inputTexto.value;
    }

    valor = valor.trim().toLowerCase();
    var respostaCorreta = respostas["q"+i].toLowerCase();

    if(valor === respostaCorreta){
      acertos++;
      resultadoTexto += "<li><strong>P"+i+":</strong> ✅ Correto</li>";
    } else {
      resultadoTexto += "<li><strong>P"+i+":</strong> ❌ Incorreto (Resposta correta: "+respostas["q"+i]+")</li>";
    }
  }

  resultadoTexto += "</ul><p><strong>Total de acertos:</strong> "+acertos+" de "+total+"</p>";
  document.getElementById("resultado").innerHTML = resultadoTexto;
});













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


