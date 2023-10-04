function fazM()
{
    let nota1 =parseFloat(document.getElementById("nota1").value);
    let nota2 =parseFloat(document.getElementById("nota2").value);
    // parseFloat serve pra colocar numeros com virgula, parseInt pra numeros inteiros

    let media

    media= (nota1 + nota2)/2

    document.getElementById("media").innerHTML=media;

    if(media>=7){
        document.getElementById("resultado").innerHTML="APROVADO"
        document.getElementById("resultado").style.color="green"
        document.getElementById("resultado").style.borderColor="black"
        document.getElementById("resultado").style.backgroundColor="lightgreen"
    }
    else{
        document.getElementById("resultado").innerHTML="REPROVADO"
        document.getElementById("resultado").style.color="red"
        document.getElementById("resultado").style.borderColor="black"
        document.getElementById("resultado").style.backgroundColor="lightcoral"
    }
}

// -------------------------------------------------------------- //

function fazM2()
{
    let nota1 =parseFloat(document.getElementById("nota1").value);
    let nota2 =parseFloat(document.getElementById("nota2").value);
    let falta =parseInt(document.getElementById("falta").value);

    let media

    media= (nota1 + nota2)/2

    document.getElementById("media").innerHTML=media;

    if(media>=7 && falta<=5){

        document.getElementById("resultado").innerHTML="APROVADO"
        document.getElementById("resultado").style.color="green"
        document.getElementById("resultado").style.borderColor="black"
        document.getElementById("resultado").style.backgroundColor="lightgreen"
    }
    
    else if(falta>5){

        document.getElementById("resultado").innerHTML="RECUPERAÇÃO"
        document.getElementById("resultado").style.borderColor="black"
        document.getElementById("resultado").style.backgroundColor="lightgoldenrodyellow"

    }

    else{
        document.getElementById("resultado").innerHTML="REPROVADO"
        document.getElementById("resultado").style.color="red"
        document.getElementById("resultado").style.borderColor="black"
        document.getElementById("resultado").style.backgroundColor="lightcoral"
    }
}