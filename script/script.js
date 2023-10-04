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