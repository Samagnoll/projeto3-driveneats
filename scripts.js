let comida;
let vlrComida=0;

function selectionFrango0(botaoClicado) {

    const botaoSelecionadoAnteriormente = botaoClicado.parentElement.querySelector('.selecionado');

    if (botaoSelecionadoAnteriormente !== null){
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }

    botaoClicado.classList.toggle('selecionado');

    let preco = botaoClicado.querySelector('.valor-prato').innerHTML;

    const array = preco.split('');
    // console.log(preco);

    let numArray = [];
    let valor=0;

    for(let i=0;i<array.length;i++){   
        
        if (array[i] === '0' ||array[i] === '1' ||array[i] === '2' ||array[i] === '3' ||array[i] === '4' ||array[i] === '5' ||array[i] === '6' ||array[i] === '7' ||array[i] === '8' ||array[i] === '9' ||array[i] === ',' ) {
           
            if (array[i]===',') {
                numArray.push('.');
            }
            else{
                numArray.push(array[i]);
            }
        }

    } 
    
    valor= parseFloat (numArray.join("")); 

    //console.log(valor);
   
    comida = botaoClicado.querySelector('.escrito-frango').innerHTML;
    vlrComida=valor;


    comida=botaoClicado.querySelector('.escrito-frango').innerHTML
    vlrComida = Number((botaoClicado.querySelector('.valor-prato').innerHTML).replace("R$", " ").replace(",", "."));

    
    selectionPedidoFinal();

}

let bebida;
let vlrBebida=0;

function selectionBebida0(botaoClicado1) { 

    const botaoSelecionadoAnteriormente1 = botaoClicado1.parentElement.querySelector('.selecionado');

    if (botaoSelecionadoAnteriormente1 !== null){
        botaoSelecionadoAnteriormente1.classList.remove('selecionado');
    }

    botaoClicado1.classList.toggle('selecionado');

    let preco1 = botaoClicado1.querySelector('.valor-bebida').innerHTML;

    const array = preco1.split('');
    //console.log(preco1);

    let numArray1 = [];
    let valor1 = 0;

    for(let i=0;i<array.length;i++){   
        
        if (array[i] === '0' ||array[i] === '1' ||array[i] === '2' ||array[i] === '3' ||array[i] === '4' ||array[i] === '5' ||array[i] === '6' ||array[i] === '7' ||array[i] === '8' ||array[i] === '9' ||array[i] === ',' ) {
           
            if (array[i]===',') {
                numArray1.push('.');
            }
            else{
                numArray1.push(array[i]);
            }
        }

    } 
    
    valor1 = parseFloat (numArray1.join("")); 

    //console.log(botaoClicado1)

    //console.log(valor1);
   
    bebida = botaoClicado1.querySelector('.coquinha-escrito').innerHTML;
    vlrBebida = valor1;



    bebida = botaoClicado1.querySelector('.coquinha-escrito').innerHTML
    vlrBebida = Number((botaoClicado1.querySelector('.valor-bebida').innerHTML).replace("R$", " ").replace(",", "."));

    
    selectionPedidoFinal();


}

let sobremesa;
let vlrSobremesa=0;

function selectionSobremesa0(botaoClicado2) {

    const botaoSelecionadoAnteriormente2 = botaoClicado2.parentElement.querySelector('.selecionado');

    if (botaoSelecionadoAnteriormente2 !== null){
        botaoSelecionadoAnteriormente2.classList.remove('selecionado');
    }

    botaoClicado2.classList.toggle('selecionado');

    let preco2 = botaoClicado2.querySelector('.valor-sobremesa').innerHTML;

    const array = preco2.split('');
    //console.log(preco2);

    let numArray2 = [];
    let valor2=0;

    for(let i=0;i<array.length;i++){   
        
        if (array[i] === '0' ||array[i] === '1' ||array[i] === '2' ||array[i] === '3' ||array[i] === '4' ||array[i] === '5' ||array[i] === '6' ||array[i] === '7' ||array[i] === '8' ||array[i] === '9' ||array[i] === ',' ) {
           
            if (array[i]===',') {
                numArray2.push('.');
            }
            else{
                numArray2.push(array[i]);
            }
        }

    } 
    
    valor2= parseFloat (numArray2.join("")); 

    //console.log(valor2);
   
    sobremesa = botaoClicado2.querySelector('.escrito-sobremesa').innerHTML;
    vlrSobremesa = valor2;



    sobremesa = botaoClicado2.querySelector('.escrito-sobremesa').innerHTML
    vlrSobremesa = Number((botaoClicado2.querySelector('.valor-sobremesa').innerHTML).replace("R$", " ").replace(",", "."));
    

    

    selectionPedidoFinal()

}

function selectionPedidoFinal(){

    
    if(comida !== undefined && bebida !== undefined && sobremesa !== undefined ){
        
        
       document.getElementById("btn-pedido").removeAttribute("disabled");
       document.getElementById("btn-pedido").innerHTML = "Fechar Pedido";
       document.getElementById("btn-pedido").style.LineBorder = "15px";
       document.getElementById("btn-pedido").style.color = "#FFFFFF";
       document.getElementById("btn-pedido").style.fontStyle = "bold";
       document.getElementById("btn-pedido").style.background = "#32B72F";
       document.getElementById("btn-pedido").style.fontSize = "59px";

       
    }

    else{
        document.getElementById("btn-pedido").setAttribute("disabled");
    }
}

function chamaZap(){
    let valorTotal = 0.0;
    valorTotal = vlrComida + vlrBebida+vlrSobremesa;
    console.log(valorTotal)

    let mensagemDeEnvio="Olá, gostaria de fazer o pedido:" + 
    "\n- Prato: " + comida + 
    "\n- Bebida: " + bebida +
    "\n- Sobremesa: " + sobremesa +
    "\nTotal: R$ " +valorTotal.toFixed(2).replace(".", ",");

    let msg = encodeURIComponent(mensagemDeEnvio);
    
    window.open(`https://wa.me/5599999999?text=${msg}`);

}



