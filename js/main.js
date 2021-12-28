
let IMAG=["ani01","ani02","ani03","ani04","ani05","ani06","ani07","ani08","ani09","ani10","ani11"];

let nameUser =  prompt("Bienvenido, te invito a clasificar animales invertebrados: Escriba su nombre");

let correctas=[2,3,4,0,0,4,1,0,3,1];

function agregarNombre(texto){
    texto.innerHTML = `<em><strong>${nameUser}</em></strong> ${texto.innerHTML}`;
}

let i = 1;
let j = 0;
let aciertos = 0;

k=1;
indiceAnterior = 2;

function titulosCorrectos(){
    let titleCorrecto = document.getElementsByTagName("label");
    let respuesta = document.getElementsByName("c");
    let imagen = document.getElementById("fotos");
    let numero = document.getElementById("Num");

    if(k != 10){

        if(indiceAnterior != correctas[k]){
            titleCorrecto[indiceAnterior].style.color="#2666c3";
            titleCorrecto[correctas[k]].style.color="green";
            respuesta[correctas[k]].checked =true;
            indiceAnterior = correctas[k];
            imagen.src = "../img/"+IMAG[k]+".jpg";
            numero.innerHTML = k+1;
            k++;
        }
        else{
            indiceAnterior = correctas[k];
            imagen.src = "../img/"+IMAG[k]+".jpg";
            numero.innerHTML = k+1;
            k++;
        }

    }
    else{
        this.innerHTML = "FIN";
    }
    console.log(k);
}

function mostrarResultados(){
    this.innerHTML = "***Continuar***";
    this.style.color = "red";
    let titleCorrecto = document.getElementsByTagName("label");
    let respuesta = document.getElementsByName("c");
    let imagen = document.getElementById("fotos");
    let numero = document.getElementById("Num");
    imagen.src = "../img/"+IMAG[0]+".jpg";
    titleCorrecto[2].style.color="green";
    respuesta[2].checked =true;
    this.onclick = titulosCorrectos;
    numero.innerHTML = 1;

}

function modificarPagina(){

    if(i == 10){
        let texto = document.getElementById("nombre");
        texto.innerHTML = `${nameUser} has completado la prática`;
        this.innerHTML = `Eran 10 animales y lograste clasificar correctamente ${aciertos}, teniendo ${10-aciertos} fallas. 
        Haga un clic sobre este texto para ver la práctica resuelta correctamente.`;
        this.style.color = "green";
        this.onclick = mostrarResultados;

        let footer = document.getElementById("pie");
        footer.innerHTML = `Aciertos: ${aciertos} ---  Fallas: ${10-aciertos}`;
    }
    else{
        let numero = document.getElementById("Num");
        numero.innerHTML = i +1;
        let imagen = document.getElementById("fotos");
        imagen.src = "../img/"+IMAG[i++]+".jpg";
        let respuesta = document.getElementsByName("c");
        if(respuesta[correctas[j++]].checked){
            aciertos++;
        }
    }
    console.log(i,"puntos",aciertos);
}


window.onload = function() {
    let texto = document.getElementById("nombre");
    agregarNombre(texto);
    let continuar = document.getElementById("Con");
    continuar.style.color = "red";
    continuar.onclick = modificarPagina;

}