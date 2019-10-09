$( document ).ready(function() {
    document.getElementById("dvConteudo").style.display = "none";
  })
    
        var visibilidade = false; //Variável que vai manipular o botão Exibir/ocultar
        
        function exibir(){
            document.getElementById("dvConteudo").style.display = "block";
        }
        
        function ocultar(){
            document.getElementById("dvConteudo").style.display = "none";
        }
        
        function ocultarExibir(){ // Quando clicar no botão.
        
            if(visibilidade){//Se a variável visibilidade for igual a true, então...
                document.getElementById("dvConteudo").style.display = "none";//Ocultamos a div
                visibilidade = false;//alteramos o valor da variável para falso.
            }else{//ou se a variável estiver com o valor false..
                document.getElementById("dvConteudo").style.display = "block";//Exibimos a div..
                visibilidade = true;//Alteramos o valor da variável para true.
            }
        }