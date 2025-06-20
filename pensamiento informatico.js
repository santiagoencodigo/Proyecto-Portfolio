function iniciarPagina () { 
  
//Un codigo limpio es aquel que tiene alta legibilidad y conduce a una buena capacidad de mantenimiento
    
        let botonSeleccionJuegosJS = document.getElementById("boton-seleccion-juegoJS")
        botonSeleccionJuegosJS.addEventListener("click", JuegosQueHeDiseñado)

        let spanParrafo1 = document.getElementById('parrafo-1')
        let spanParrafo2 = document.getElementById('parrafo-2')
        let spanParrafo3 = document.getElementById('parrafo-3')
    
        function JuegosQueHeDiseñado () {
        let inputCuantaProbabilidadHayDe = document.getElementById('CuantaProbabilidadHayDe')
        let inputCuantaProbabilidadDirecciones = document.getElementById('ProbabilidadConDirecciones')
        let inputPiedraPapeloTijera = document.getElementById('PiedraPapeloTijera')

        if (inputCuantaProbabilidadHayDe.checked) {
            let jugador
            let computador=aleatorio(1, 3)

            spanParrafo1.innerHTML='I am from Bogotá, Colombia, and I love thinking, reflecting on my life and writing code 👨‍💻.'
            spanParrafo2.innerHTML='I am a problem solver, always exploring how to create new things and solve new problems. 🐱‍👤'
            spanParrafo3.innerHTML='I would like to learn english and how to create an excellent software with my fingers. 👐'

            alert("Vamos a jugar a cuanta probabilidad hay sobre algo. Entonces para jugar tienes que decir un numero del 1 al 3 y si escoges el mismo que yo, entonces tendras que cumplir esa probabilidad.")
            jugador = prompt("¿Cual es la probabilidad de que vallas a programar?" + " Escoge un numero entre 1, 2 y 3... Yo digo, 1...2...3...")

                    if(jugador == 1 && computador == 2) {
                        alert("El computador dice 2")
                        alert("Tú dices 1")
                        alert("No tienes que programar. 😉")
                    } else if(jugador == 1 && computador == 3) {
                        alert("El computador dice 3")
                        alert("Tú dices 1")
                        alert("No tienes que programar. 😉")
                    } else if(jugador == 2 && computador == 3) {
                        alert("El computador dice 3")
                        alert("Tú dices 2")
                        alert("No tienes que programar. 😉")
                    } else if(jugador == 2 && computador == 1){
                        alert("El computador dice 1")
                        alert("Tú dices 2")
                        alert("No tienes que programar. 😉")
                    } else if(jugador == 3 && computador == 1){
                        alert("El computador dice 1")
                        alert("Tú dices 3")
                        alert("No tienes que programar. 😉")
                    } else if(jugador == 3 && computador == 2){
                        alert("El computador dice 2")
                        alert("Tú dices 3")
                        alert("No tienes que programar. 😉")            
                    
                        }else if(jugador == 3 && computador == 3) {
                        alert("El computador dice 3")
                        alert("Tú dices 3")
                        alert("Sí tienes que programar. 😁")
                        }else if(jugador == 2 && computador == 2) {
                        alert("El computador dice 2")
                        alert("Tú dices 2")
                        alert("Sí tienes que programar. 😁")
                        }else if(jugador == 1 && computador == 1) {
                        alert("El computador dice 1")
                        alert("Tú dices 1")
                        alert("Sí tienes que programar. 😁")
                                
                        } else {
                        alert("Sólo tienes que decir 1, 2 o 3 ... Es facil. 😪")}
                        
        } else if (inputCuantaProbabilidadDirecciones.checked) {

            spanParrafo1.innerHTML='I have not any experience in programming jobs, my goal is get the first job with this. 👽'
            spanParrafo2.innerHTML='Actually I am studying for an exam to entry to the university and study system enginering. 🧠'
            spanParrafo3.innerHTML='I start in this year my first project and that it is, a portfolio, an interesting web page 👀'

            function eleccion(jugada) {
                let resultado = ""
                 if (jugada== 1) {
                     resultado = "derecha"
                 } else if(jugada== 2) {
                     resultado = "izquierda"
                 } else if(jugada== 3) {
                     resultado = "adelante"
                 } else if(jugada== 4) {
                     resultado = "atras"
                 } return resultado
             }

             let computador = 1
             let usuario = 0
             computador = aleatorio(1,4)
             alert("Vamos a jugar otra manera de probabilidad. 🎲🎲🎲")
             alert("esta vez hay que señalar alguna dirección y si señalamos el mismo lugar tendrás que hacer esa probabilidad.")
             alert("¿Cuanta probabilidad hay de que vallas a programar hoy?")
 
             usuario = prompt("Entonces, escoge 1 para derecha, 2 para izquierda, 3 para adelante y 4 para atras")
 
             alert("Tu señalaste la dirección " + eleccion(usuario))
             alert("El computador señaló hacia la dirección " + eleccion(computador))
 
             if(usuario==computador) {
                 alert("😅No ganaste, entonces tendrás que programar.")}
             else {alert("😑Ganaste, entonces no tienes que programar.")}

        } else if (inputPiedraPapeloTijera.checked) {

            spanParrafo1.innerHTML='to finish the year I going to the university for studying systems engineering ✍ '
            spanParrafo2.innerHTML='I would like to create many pages for many companys, do excellent creative job 🧞‍♂️'
            spanParrafo3.innerHTML='I would like to learn many frameworks, lenguages and be a full stack programmer 👨‍💻'

            function eleccion(jugada) {
                let resultado = ""
                if(jugada == 1) {
                resultado = "Piedra ✊"
                } else if(jugada == 2) {
                resultado = "Papel ✋"
                } else if(jugada == 3) {
                resultado = "Tijera ✌"
                } else {
                resultado = "Mala Elección. ❌"
                }
                return resultado 
                }
                let player = 0
                let pc = 0 
                let triunfos = 0
                let perdidas = 0
        
                while (triunfos < 3 && perdidas < 3) {
                    pc = aleatorio(1,3)
                    player = prompt("para no perder elige: 1 para piedra ✊, 2 para papel ✋, 3 para tijera ✌")
                    //Estas palabras "if", "else if", "else" --> Se llaman CONDICIONALES
                    
                    alert("PC ELIGE: " + eleccion(pc))
                    alert("Tu eliges: " + eleccion(player))
                    // COMBATE
                    if(pc == player) {
                        alert("Empate")
                    } else if(player == 1 && pc == 3) {
                        alert("Ganaste👍")
                        triunfos = triunfos + 1
                    } else if(player == 2 && pc == 1) {
                        alert("Ganaste👍")
                        triunfos = triunfos + 1
                    } else if(player == 3 && pc == 2) {
                        alert("Ganaste👍")
                        triunfos = triunfos + 1
                    } else {
                        alert("Perdiste❌")
                        perdidas = perdidas + 1
                    }
                                
            }
        alert("ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces." )
        }
        } 
    
        function aleatorio(min, max) {return Math.floor(Math.random() * (max - min + 1) + (min))} 
}

window.addEventListener("load", iniciarPagina)

        
       
    
        
        

       
   
   

                    
                    
                    