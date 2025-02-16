let amigosLista = [];   

function agregarAmigo() {
  let input = document.getElementById('amigo') 
  let nombresUsuario = input.value.trim();

  if (nombresUsuario === '') { 
    alert('Por favor, inserte un nombre.'); 
    return;
  } 

  if (!/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(nombresUsuario)) { 
    alert('No se permiten simbolos y/o números.');
    limpiarCaja();
    return; 
  }
  
  if (amigosLista.includes(nombresUsuario)) {
    alert ('Ese nombre ya está agregado en la lista');
    limpiarCaja();
    return;
  } 

  amigosLista.push(nombresUsuario);
    actualizarLista(); 
    console.log(amigosLista);  
    limpiarCaja(); 
}


function limpiarCaja() {
  let valorCaja = document.querySelector('#amigo').value = ''; 
}

function actualizarLista() { 
  let lista = document.getElementById('listaAmigos'); 
  lista.innerHTML = ''; 
   
  for (let i = 0; i < amigosLista.length; i++) { 
    let nuevoElemento = document.createElement("li"); 
    nuevoElemento.textContent = amigosLista[i];  
    lista.appendChild(nuevoElemento); 
  } 
    
}

function sortearAmigo() {
  if (amigosLista.length === 0) {
    alert("No se digitaron nombres para sortear."); 
    return;
  }

  if (amigosLista.length === 1) {
    alert('Escribir 2 nombres al menos para sortear')
    return; 
  }

 let indiceAleatorio = Math.floor(Math.random()*amigosLista.length); 
 let nombreAleatorio = amigosLista[indiceAleatorio]; 
 let nombreElegido = document.getElementById('resultado');
 nombreElegido.innerHTML = `El nombre seleccionado es: "${nombreAleatorio}" 🤫`; 

 document.getElementById('reset').removeAttribute('disabled');

 document.getElementById('amigo').setAttribute('disabled', 'true');

 document.getElementById('intentos').setAttribute('disabled', 'true');

 document.querySelector('#ingresoDeNombre').setAttribute('disabled', 'true');
}

function reiniciarJuego() {
  amigosLista = []
  actualizarLista(); 
  limpiarCaja();
  document.getElementById('resultado').innerHTML = ''; //limpia el resultado
  document.getElementById('amigo').removeAttribute('disabled');
  document.querySelector('#ingresoDeNombre').removeAttribute('disabled');
  document.getElementById('reset').setAttribute('disabled','true');
}


