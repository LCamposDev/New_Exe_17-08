function exe1(){
    let not1 = Number(document.getElementById("not1").value)
    let not2 = Number(document.getElementById("not2").value)
    let not3 = Number(document.getElementById("not3").value)
    let not4 = Number(document.getElementById("not4").value)
    // processamento
    let mf = (not1 + not2 + not3 + not4) / 4
    if (mf < 7)
    resultado = "Reprovado"
    else
    resultado = "Aprovado"
    // mostrar o resultado
    document.getElementById("resultado").innerHTML = resultado
}

function exe2(){
    let not1 = Number(document.getElementById("not1").value)
    let not2 = Number(document.getElementById("not2").value)
    //processamento
    let mf = (not1 + not2) / 2
    if (mf <= 3)
    resultado = "Reprovado"
    else if (mf > 3, mf < 7)
    resultado = "Exames"
    else
    resultado = "Aprovado"
    //mostrar o resultado
    document.getElementById("resultado").innerHTML = resultado
}

function exe3(){
    let nm1 = Number(document.getElementById("nm1").value)
    let nm2 = Number(document.getElementById("nm2").value)
    //processamento
    if (nm1 < nm2)
    resultado = "Numero 1 é menor que o Numero 2"
    else
    resultado = "Numero 2 é menor que o Numero 1"
    //mostrar o resultado
    document.getElementById("resultado").innerHTML = resultado
}