document.getElementById('quizForm').addEventListener('submit', function(e){
  e.preventDefault();

  var respostas = {
    q1: "select",
    q2: "where",
    q3: "order by",
    q4: "insert",
    q5: "update",
    q6: "delete",
    q7: "create database",
    q8: "create table",
    q9: "primary key",
    q10: "add column",
    q11: "drop column",
    q12: "datatype",
    q13: "relacional",
    q14: "foreign key",
    q15: "normalização",
    q16: "transaction",
    q17: "create index",
    q18: "drop index"
  };

  var acertos = 0;
  var total = 18;
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


