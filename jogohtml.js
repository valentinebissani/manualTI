document.getElementById('quizForm').addEventListener('submit', function(e){
  e.preventDefault();

  var respostas = {
    q1: "p",
    q2: "href",
    q3: "h1",
    q4: "img",
    q5: "div",
    q6: "ul",
    q7: "html head body",
    q8: "a",
    q9: "head",
    q10: "form"
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
