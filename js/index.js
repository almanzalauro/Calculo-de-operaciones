const txtOp1 = document.getElementById("op1");
const txtOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

btnCalcular.addEventListener('click',calcular)

function calcular(){
    const operacion = txtOperacion.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);

    if((operacion == "+" || operacion == "-" || operacion =="*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch(operacion){
            
            case "+":
                resultado = op1 + op2;
                break;
            case "-":
                resultado = op1 - op2;
                break;
            case "*":
                resultado = op1 * op2;
                break;
            case "/":
                resultado = op1 / op2;
                break;
        }
        pResultado.style.margin="10px 0 0 0"
        pResultado.style.color="white";
        pResultado.style.fontWeight="Bold"
        pResultado.innerText = op1 +" "+ operacion+ " "+op2+ " = "+ resultado;
        
    }
    else{
        pResultado.style.margin="10px 0"
        pResultado.style.color="red";
        pResultado.style.fontWeight="Bold"
        pResultado.innerText = "Por favor inserte valores correctos."
    }
}
