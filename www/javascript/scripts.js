$(document).ready(function () {

    $('#a24').on('click', function () { datosPartida(this.value);});
    $('#a30').on('click', function () { datosPartida(this.value);});
    $('#iniciar').on('click', function () { iniciaPartida(cantidad_puntos, equipo1, equipo2); });
    $("#suma-e1").on("click", function () { sumaEquipoUno(1); });
    $("#suma-e2").on("click", function () { sumaEquipoDos(1); });
    $("#resta-e1").on("click", function () { restaEquipoUno(1); });
    $("#resta-e2").on("click", function () { restaEquipoDos(1); });
    $("#fin").on("click", function () { finJuego(); });
    

    var cantidad_puntos = [""];
    var equipo1 = [];
    var equipo2 = [];
    function datosPartida(puntos) {
        cantidad_puntos = puntos;
        console.log("Selecciono: " +cantidad_puntos);
        equipo1 = $('#equipo1').val();
        console.log("Equipo 1: " +equipo1);
        equipo2 = $('#equipo2').val();
        console.log("Equipo 2: " +equipo2);
        if (equipo1 == "" || equipo2 == "") {
            equipo1 = document.getElementById("equipo1").placeholder;
            console.log(equipo1);
            equipo2 = document.getElementById("equipo2").placeholder;
            console.log(equipo2);
        }
        if (puntos == "a 24") {
            $('#a30').removeClass("encendido").addClass("apagado");
            $('#a24').removeClass("apagado").addClass("encendido");
        } else {
            $('#a24').removeClass("encendido").addClass("apagado");
            $('#a30').removeClass("apagado").addClass("encendido");
        }
    }

    function iniciaPartida(puntos, equipo1, equipo2) {
        if (puntos == "") {
            window.alert("Error, no ingresó datos del juego");
            finJuego();
        } 
        console.log("Inicia partida");
        $('#juego').removeClass("oculto").addClass("visible");
        $('#inicio').removeClass("visible").addClass("oculto");
        $('#nombre-e1').val(equipo1);
        console.log("equipo 1: " + equipo1);
        $('#nombre-e2').val(equipo2);
        console.log("equipo 2: " + equipo2);
        $('#puntaje').val(puntos);
        console.log("puntaje: " + puntos);
        $('#puntaje-e1').val(0);
        $('#puntaje-e2').val(0);
         
    }

    var sumatoria1=0;
    var sumatoria2=0;
    function sumaEquipoUno(n){
        sumatoria1 += n;
        $('#puntaje-e1').val(sumatoria1);
        console.log("puntaje equipo 1:" + sumatoria1);
        muestraImagenUno(sumatoria1);
        if (sumatoria1 == 30 && cantidad_puntos == "a 30") {
            muestraGanador(equipo1);
        }
        if (sumatoria1 == 24 && cantidad_puntos == "a 24") {
            muestraGanador(equipo1);
        }
        
    }

    function sumaEquipoDos(n) {
        sumatoria2 += n;
        $('#puntaje-e2').val(sumatoria2);
        console.log("puntaje equipo 2:" + sumatoria2);
        muestraImagenDos(sumatoria2);
        if (sumatoria2 == 30 && cantidad_puntos == "a 30") {
            muestraGanador(equipo2);
        }
        if (sumatoria2 == 24 && cantidad_puntos == "a 24") {
            muestraGanador(equipo2);
        }
    }

    function restaEquipoUno(n) {
        sumatoria1 -= n;
        $('#puntaje-e1').val(sumatoria1);
        console.log("puntaje equipo 1:" + sumatoria1);
        if (sumatoria1 <0){
            sumatoria1 =0;
            $('#puntaje-e1').val(0);
        }
        muestraImagenUno(sumatoria1);
    }

    function restaEquipoDos(n) {
        sumatoria2 -= n;
        $('#puntaje-e2').val(sumatoria2);
        console.log("puntaje equipo 2:" + sumatoria2);
        if (sumatoria2 < 0) {
            sumatoria2 = 0;
            $('#puntaje-e2').val(0);
        }
        muestraImagenDos(sumatoria2);
    }


    function finJuego(){
        $('#juego').removeClass("visible").addClass("oculto");
        $('#inicio').removeClass("oculto").addClass("visible");
        $('#nombre-e1').val("");
        $('#nombre-e2').val("");
        $('#equipo1').val("");
        $('#equipo2').val("");
        $('#puntaje').val("");
        if (cantidad_puntos == "a 24") {
            $('#a30').removeClass("apagado").addClass("encendido");
        } else {
            $('#a24').removeClass("apagado").addClass("encendido");
        }
        sumatoria1=0;
        sumatoria2=0;
        $('#puntaje-e1').val("");
        $('#puntaje-e2').val("");
        document.getElementById("equipo1").placeholder = "Equipo 1";
        document.getElementById("equipo2").placeholder = "Equipo 2";
        $('#imagen1').attr('src', 'imagenes/0.png');
        $('#imagen2').attr('src', 'imagenes/0.png');
        $('#imagen3').attr('src', 'imagenes/0.png');
        $('#imagen4').attr('src', 'imagenes/0.png');
        $('#imagen5').attr('src', 'imagenes/0.png');
        $('#imagen6').attr('src', 'imagenes/0.png');
        $('#imagen7').attr('src', 'imagenes/0.png');
        $('#imagen8').attr('src', 'imagenes/0.png');
        $('#imagen9').attr('src', 'imagenes/0.png');
        $('#imagen10').attr('src', 'imagenes/0.png');
        $('#imagen11').attr('src', 'imagenes/0.png');
        $('#imagen12').attr('src', 'imagenes/0.png');
        $('#ganador').text("");
        $('#ganador').removeClass("ganador").addClass("ganador-fuera");
        
    }

    function muestraImagenUno (sumatoria1) {
        if (sumatoria1 == 0) {
            $('#imagen1').attr('src', 'imagenes/0.png');
        } 
        if (sumatoria1 == 1){
            $('#imagen1').attr('src','imagenes/1.png');
        } 
        if (sumatoria1 == 2) {
            $('#imagen1').attr('src', 'imagenes/2.png');
        }
        if (sumatoria1 == 3) {
            $('#imagen1').attr('src', 'imagenes/3.png');
        }
        if (sumatoria1 == 4) {
            $('#imagen1').attr('src', 'imagenes/4.png');
        }
        if (sumatoria1 == 5) {
            $('#imagen1').attr('src', 'imagenes/5.png');
            $('#imagen2').attr('src', 'imagenes/0.png');
            $('#imagen3').attr('src', 'imagenes/0.png');
            $('#imagen7').attr('src', 'imagenes/0.png');
            $('#imagen8').attr('src', 'imagenes/0.png');
            $('#imagen9').attr('src', 'imagenes/0.png');
        }
        if (sumatoria1 == 6) {
            $('#imagen2').attr('src', 'imagenes/1.png');
        }
        if (sumatoria1 == 7) {
            $('#imagen2').attr('src', 'imagenes/2.png');
        }
        if (sumatoria1 == 8) {
            $('#imagen2').attr('src', 'imagenes/3.png');
        }
        if (sumatoria1 == 9) {
            $('#imagen2').attr('src', 'imagenes/4.png');
        }
        if (sumatoria1 == 10) {
            $('#imagen2').attr('src', 'imagenes/5.png');
            $('#imagen3').attr('src', 'imagenes/0.png');
            $('#imagen7').attr('src', 'imagenes/0.png');
            $('#imagen8').attr('src', 'imagenes/0.png');
            $('#imagen9').attr('src', 'imagenes/0.png');
            
        }
        if (sumatoria1 == 11) {
            $('#imagen3').attr('src', 'imagenes/1.png');
        }
        if (sumatoria1 == 12) {
            $('#imagen3').attr('src', 'imagenes/2.png');
        }
        if (sumatoria1 == 13) {
            $('#imagen3').attr('src', 'imagenes/3.png');
        }
        if (sumatoria1 == 14) {
            $('#imagen3').attr('src', 'imagenes/4.png');
        }
        if (sumatoria1 == 15) {
            $('#imagen3').attr('src', 'imagenes/5.png');
            $('#imagen7').attr('src', 'imagenes/0.png');
            $('#imagen8').attr('src', 'imagenes/0.png');
            $('#imagen9').attr('src', 'imagenes/0.png');
        }
        if (sumatoria1 == 16) {
            $('#imagen7').attr('src', 'imagenes/1.png');
        }
        if (sumatoria1 == 17) {
            $('#imagen7').attr('src', 'imagenes/2.png');
        }
        if (sumatoria1 == 18) {
            $('#imagen7').attr('src', 'imagenes/3.png');
        }
        if (sumatoria1 == 19) {
            $('#imagen7').attr('src', 'imagenes/4.png');
        }
        if (sumatoria1 == 20) {
            $('#imagen7').attr('src', 'imagenes/5.png');
            $('#imagen8').attr('src', 'imagenes/0.png');
            $('#imagen9').attr('src', 'imagenes/0.png');
        }
        if (sumatoria1 == 21) {
            $('#imagen8').attr('src', 'imagenes/1.png');
        }
        if (sumatoria1 == 22) {
            $('#imagen8').attr('src', 'imagenes/2.png');
        }
        if (sumatoria1 == 23) {
            $('#imagen8').attr('src', 'imagenes/3.png');
        }
        if (sumatoria1 == 24) {
            $('#imagen8').attr('src', 'imagenes/4.png');
        }
        if (sumatoria1 == 25) {
            $('#imagen8').attr('src', 'imagenes/5.png');
            $('#imagen9').attr('src', 'imagenes/0.png');
        }
        if (sumatoria1 == 26) {
            $('#imagen9').attr('src', 'imagenes/1.png');
        }
        if (sumatoria1 == 27) {
            $('#imagen9').attr('src', 'imagenes/2.png');
        }
        if (sumatoria1 == 28) {
            $('#imagen9').attr('src', 'imagenes/3.png');
        }
        if (sumatoria1 == 29) {
            $('#imagen9').attr('src', 'imagenes/4.png');
        }
        if (sumatoria1 == 30) {
            $('#imagen9').attr('src', 'imagenes/5.png');
        }
    }

    function muestraImagenDos(sumatoria2) {
        if (sumatoria2 == 0) {
            $('#imagen4').attr('src', 'imagenes/0.png');
        }
        if (sumatoria2 == 1) {
            $('#imagen4').attr('src', 'imagenes/1.png');
        }
        if (sumatoria2 == 2) {
            $('#imagen4').attr('src', 'imagenes/2.png');
        }
        if (sumatoria2 == 3) {
            $('#imagen4').attr('src', 'imagenes/3.png');
        }
        if (sumatoria2 == 4) {
            $('#imagen4').attr('src', 'imagenes/4.png');
        }
        if (sumatoria2 == 5) {
            $('#imagen4').attr('src', 'imagenes/5.png');
            $('#imagen5').attr('src', 'imagenes/0.png');
            $('#imagen6').attr('src', 'imagenes/0.png');
            $('#imagen10').attr('src', 'imagenes/0.png');
            $('#imagen11').attr('src', 'imagenes/0.png');
            $('#imagen12').attr('src', 'imagenes/0.png');
        }
        if (sumatoria2 == 6) {
            $('#imagen5').attr('src', 'imagenes/1.png');
        }
        if (sumatoria2 == 7) {
            $('#imagen5').attr('src', 'imagenes/2.png');
        }
        if (sumatoria2 == 8) {
            $('#imagen5').attr('src', 'imagenes/3.png');
        }
        if (sumatoria2 == 9) {
            $('#imagen5').attr('src', 'imagenes/4.png');
        }
        if (sumatoria2 == 10) {
            $('#imagen5').attr('src', 'imagenes/5.png');
            $('#imagen6').attr('src', 'imagenes/0.png');
            $('#imagen10').attr('src', 'imagenes/0.png');
            $('#imagen11').attr('src', 'imagenes/0.png');
            $('#imagen12').attr('src', 'imagenes/0.png');

        }
        if (sumatoria2 == 11) {
            $('#imagen6').attr('src', 'imagenes/1.png');
        }
        if (sumatoria2 == 12) {
            $('#imagen6').attr('src', 'imagenes/2.png');
        }
        if (sumatoria2 == 13) {
            $('#imagen6').attr('src', 'imagenes/3.png');
        }
        if (sumatoria2 == 14) {
            $('#imagen6').attr('src', 'imagenes/4.png');
        }
        if (sumatoria2 == 15) {
            $('#imagen6').attr('src', 'imagenes/5.png');
            $('#imagen10').attr('src', 'imagenes/0.png');
            $('#imagen11').attr('src', 'imagenes/0.png');
            $('#imagen12').attr('src', 'imagenes/0.png');
        }
        if (sumatoria2 == 16) {
            $('#imagen10').attr('src', 'imagenes/1.png');
        }
        if (sumatoria2 == 17) {
            $('#imagen10').attr('src', 'imagenes/2.png');
        }
        if (sumatoria2 == 18) {
            $('#imagen10').attr('src', 'imagenes/3.png');
        }
        if (sumatoria2 == 19) {
            $('#imagen10').attr('src', 'imagenes/4.png');
        }
        if (sumatoria2 == 20) {
            $('#imagen10').attr('src', 'imagenes/5.png');
            $('#imagen11').attr('src', 'imagenes/0.png');
            $('#imagen12').attr('src', 'imagenes/0.png');
        }
        if (sumatoria2 == 21) {
            $('#imagen11').attr('src', 'imagenes/1.png');
        }
        if (sumatoria2 == 22) {
            $('#imagen11').attr('src', 'imagenes/2.png');
        }
        if (sumatoria2 == 23) {
            $('#imagen11').attr('src', 'imagenes/3.png');
        }
        if (sumatoria2 == 24) {
            $('#imagen11').attr('src', 'imagenes/4.png');
        }
        if (sumatoria2 == 25) {
            $('#imagen11').attr('src', 'imagenes/5.png');
            $('#imagen12').attr('src', 'imagenes/0.png');
        }
        if (sumatoria2 == 26) {
            $('#imagen12').attr('src', 'imagenes/1.png');
        }
        if (sumatoria2 == 27) {
            $('#imagen12').attr('src', 'imagenes/2.png');
        }
        if (sumatoria2 == 28) {
            $('#imagen12').attr('src', 'imagenes/3.png');
        }
        if (sumatoria2 == 29) {
            $('#imagen12').attr('src', 'imagenes/4.png');
        }
        if (sumatoria2 == 30) {
            $('#imagen12').attr('src', 'imagenes/5.png');
        }
    }

    function muestraGanador (equipo){
        console.log("Ganador del juego :" + equipo);
        $('#ganador').removeClass("ganador-fuera").addClass("ganador");
        $('#ganador').text("Ganador del juego: " + equipo + " !!!");
    }

});

