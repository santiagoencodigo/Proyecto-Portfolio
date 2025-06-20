let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego() {

    let sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
   
    let sectionReiniciar=document.getElementById('section-reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonSeleccionar = document.getElementById("boton-seleccionar")
    botonSeleccionar.addEventListener("click", seleccionarMascota)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascota(){
    let sectionSeleccionarMascota=document.getElementById('MOKEPON')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'
    
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let SpanMascotaJugador = document.getElementById('mascota-jugador')

    //Esto es una forma de modificación del DOM

    if (inputHipodoge.checked) {
        SpanMascotaJugador.innerHTML = 'Hipodoge '
    } else if (inputCapipepo.checked) {
        SpanMascotaJugador.innerHTML = 'Capipepo '
    } else if (inputRatigueya.checked) {
        SpanMascotaJugador.innerHTML = 'Ratigueya '
    } else {
        alert("Debes seleccionar tu mascota")
    }

    SeleccionarMascotaEnemigo()
}

function SeleccionarMascotaEnemigo(){
    let MascotaAleatoria = aleatorio(1,3)
    let SpanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (MascotaAleatoria == 1){
        SpanMascotaEnemigo.innerHTML = 'Hipodoge '
    } else if (MascotaAleatoria == 2) {
        SpanMascotaEnemigo.innerHTML = 'Capipepo '
    } else {
        SpanMascotaEnemigo.innerHTML = 'Ratigueya '
    }
   
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    
    combate()

}

// Hay diferentes operadores "AND=&&" "OR=||" "NOT=!" y habrá que estudiar las bases de la ingenieria en software. 

function combate(){

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate🙌")
    } else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje("Ganaste👍")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("Ganaste👍")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje("Ganaste👍")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste❌")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
} 

function revisarVidas(){
    if(vidasEnemigo == 0) {
        crearMensajeFinal('Ganaste🥳')
    }else if(vidasJugador == 0) {
        crearMensajeFinal('Perdiste😥')
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    notificacion.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    sectionMensajes.appendChild(notificacion)
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar=document.getElementById('section-reiniciar')
    sectionReiniciar.style.display = 'block'
}   

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)