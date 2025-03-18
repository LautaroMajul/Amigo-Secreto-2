// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let nombre = document.querySelector("input").value;
    if(nombre.length === 0 ||!isNaN(nombre)){
        alert("Ingresa un nombre")
        document.querySelector("input").value = "";
    } else {
        amigos.push(nombre);
        console.log(amigos);
        document.querySelector("input").value = "";
        recorreArray();
    }
    
}
function recorreArray(){
        let lista = document.querySelector("ul");
        lista.innerHTML = "";
        for (let i = 0; i < amigos.length; i++) {
            let nuevoElemento = document.createElement("li")        
            nuevoElemento.textContent = amigos[i];
            lista.appendChild(nuevoElemento);  
        }
}

function sortearAmigo(){
    let texto = document.getElementById('resultado');
    let boton =  document.getElementById('Boton');
    if(amigos.length === 0 || amigos.length === 1){
        alert("Error, debes ingresar un minimo de 2 personas para sortear")
        boton.disabled = true;
        return;
    }   
    let sorteoAleatorio = Math.floor(Math.random()* amigos.length);
    let amigoSorteado = amigos[sorteoAleatorio];
    texto.innerHTML = `El amigo secreto es ${amigoSorteado}`
    alert(`El amigo secreto es ${amigoSorteado}`);

    setTimeout(function(){
        location.reload();
        }, 3000); // 3000 milisegundos son 3 seconds
}