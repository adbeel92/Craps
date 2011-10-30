$(document).ready(function(){


$("#rprincipal").click(function(){
    $("#reglasTitle").html("<p>Reglas de Juego</p>");
    $("#contentReglas").html("<p>En craps, los jugadores realizan apuestas en base a lo que sale en los dados. Se utilizan dos dados de seis caras. El tirador es el jugador que arroja los dados.</p> </br><p>Para tus apuestas, utiliza las fichas que estan en la mesa. Existen Fichas de $10, $50, $100, $500 y $1000</p></br> <p>Cada Zona de la Mesa tiene Reglas Distintas, Asegurate de Leerlas antes de Empezar a jugar</p> <img id='regTable' src='../Imagenes/Crapslayout.png' alt='on'/>");
});

$("#apassline").click(function(){
    $("#reglasTitle").html("<p>Apuestas Pass Line</p>");
    $("#contentReglas").html("<p>Los jugadores deben realizar las apuestas de linea de pase en la casilla llamada PASS LINE en la mesa.</p> </br> <p>Una apuesta realizada en la casilla de pass line es ganadora si la tirada de salida es un 7 u 11 y es perdedora si sale un 2, 3 o 12. </p></br> <p>Si en los dados aparecen un 4, 5, 6, 8, 9 o 10, este numero pasa a ser el punto.</p> </br> <p> Para ganar una apuesta de linea de pase, el tirador debe lograr el punto antes de tirar un 7. En el caso de que salga un 7 antes de salir el punto, las apuestas de linea de pase perderan.</p> </br><p> Al ganar la apuesta de linea de pase, normalmente se recibe el pago de 1 a 1.</p> <img id='imgr' src='../Imagenes/passline.png' alt='on'/>");
});

$("#adontpassline").click(function(){
    $("#reglasTitle").html("<p>Apuestas Don't Pass Line</p>");
    $("#contentReglas").html("<p>Una apuesta de linea de no pase es lo contrario de una apuesta de linea de pase y hay que realizar esta apuesta en la casilla Dont Pass Bar en la mesa.<p> <br /><p>La apuesta de linea de no pase es ganadora si en la tirada de salida sale un 2 o 3.Por otro lado, si en la tirada de salida sale un 7 u 11, la apuesta de linea de no pase perdera.</p><br /><p>Si en la tirada de salida sale un 12, la apuesta de linea de no pase resulta en un empate (un push) y se devuelve al jugador la apuesta. Si en la tirada de salida sale un 4, 5, 6, 8, 9 o 10, este numero pasa a ser el punto. </p><br /><p>Al haber establecido el punto, las apuestas de linea de no pase son ganadoras en caso que el tirador logre un 7 antes de tirar el punto. Si sale el punto antes del 7, la apuesta de linea de no pase perdera. Normalmente el pago de una apuesta de linea de no pase es el de 1 a 1. </p> <img id='imgr' src='../Imagenes/dontpass.png' alt='on'/>");
});

$("#acome").click(function(){
    $("#reglasTitle").html("<p>Apuestas Come</p>");
    $("#contentReglas").html("<p>Si se realizan las apuestas de venida en la casilla COME en la mesa de dados antes de cualquier tiro de los dados.</p> <br /> <p>Las reglas de las apuestas de venida son efectivamente las mismas que las de las apuestas de linea de pase. Las apuestas de venida son ganadoras si el tirador tira un 7 u 11 y perderan en caso que salga un 2, 3 o 12.</p> < br/> <p>Al salir un 4, 5, 6, 8, 9 o 10, este numero pasa a ser el punto y el dealer movera la apuesta de venida de la casilla COME en la mesa de dados a la casilla correspondiente al punto: 4, 5, SEIS, 8, NUEVE o 10.</p> <br /> <p>Si el tirador de nuevo logra el punto, o sea el punto de venida antes de tirar un 7, el pago de la apuesta de venida es el de 1 a 1. Por lo tanto la apuesta de venida quedara en la mesa hasta que salga el punto de venida o un 7.<p> <img id='imgr' src='../Imagenes/come.png' alt='on'/>");
});

$("#adontcome").click(function(){
    $("#reglasTitle").html("<p>Apuestas Don't Come</p>");
    $("#contentReglas").html("<p>Una apuesta sin venida de hecho es lo contrario de una apuesta de venida. Se realiza esta apuesta en la casilla Dont Come Bar en la mesa del juego.</p><br /> <p>Las apuestas sin venida son ganadoras al salir un 2 o 3 y pierden en caso que salga un 7 u 11. Si el tirador logra un 12, se devolvera esta apuesta a los jugadores.</p> <br /> <p>Al salir un 4, 5, 6, 8, 9 o 10, este numero pasa a ser el punto de venida. Despues de establecer el punto de venida, las apuestas sin venida usualmente pagan 1 a 1 al salir un 7 y pierden en caso que salga el punto de venida.</p> <img id='imgr' src='../Imagenes/dontcome.png' alt='on'/>");
});

$("#afield").click(function(){
    $("#reglasTitle").html("<p>Apuestas Field</p>");
    $("#contentReglas").html("<p>La apuesta de campo es la apuesta a que en el proximo tiro de los dados aparecera un 2, 3, 4, 9, 10, 11 o 12. La apuesta se realiza en la casilla llamada FIELD en la mesa.</p> <br /> <p>Cuando sale un 3, 4, 9, 10 u 11, la apuesta de campo gana el pago de 1 a 1. Si sale un 2 o 12, la apuesta de campo para el 2 gana el pago de 2 a 1 y para el 12 gana de 3 a 1. En caso que salga un 5, 6, 7 o 8, las apuestas de campo perderan.</p> <img id='imgr' src='../Imagenes/field.png' alt='on'/>"); 
});

$("#abig6y8").click(function(){
    $("#reglasTitle").html("<p>Apuestas Big 6 y Big 8</p>");
    $("#contentReglas").html("<p>Con la apuesta a Gran 6 se cree que saldra la suma de 6 antes de un 7. De la misma manera una apuesta a Gran 8 es la apuesta a que se tirara un 8 antes de un 7. Las apuestas a Gran 6 y las apuestas a Gran 8 se realizan en la mesa de dados, mejor dicho en las casillas numeradas 6 u 8 respectivamente.</p> <img id='imgr' src='../Imagenes/big6y8.png' alt='on'/>" );
});

$("#aany7").click(function(){
    $("#reglasTitle").html("<p>Apuestas Any 7</p>");
    $("#contentReglas").html("<p>La apuesta a cualquier 7 es, como el nombre indica, la apuesta a que en el proximo tiro saldra un 7. Se puede realizar esta apuesta en todas las tiradas de salida. Se realiza esta apuesta en la casilla de 7 y al salir un 7 normalmente se recibe el pago de 5 a 1. </p> <img id='imgr' src='../Imagenes/seven5x1.png' alt='on'/>");
});

$("#aanycraps").click(function(){
    $("#reglasTitle").html("<p>Apuestas Any Craps </p>");
    $("#contentReglas").html("<p>La apuesta a cualquier dado es una apuesta a que en el proximo tiro de los dados aparecera un 2, 3 o 12. Se puede realizar estas apuestas en todas las tiradas de salida y hay que realizarlas en la casilla llamada Any craps en la mesa de dados. Al salir un 2, 3 o 12, normalmente se recibe el pago de 8 a 1. </p> <img id='imgr' src='../Imagenes/anycraps.png' alt='on'/>");
});

$("#any11").click(function(){
    $("#reglasTitle").html("<p>Apuestas Any 11</p>");
    $("#contentReglas").html("<p>La apuesta a cualquier 11 es, como el nombre indica, una apuesta a que en el proximo tiro saldra un 11, se puede realizar esta apuesta en cualquiera de las 2 casillas que muestra dos dados con la suma de 11. En caso que salga un 11, normalmente se recibe el pago de 16 a 1. </p> <img id='imgr' src='../Imagenes/any11.png' alt='on'/>");
});

$("#ahorn").click(function(){
    $("#reglasTitle").html("<p>Apuestas Horn</p>");
    $("#contentReglas").html("<p>Una apuesta de Horn es la apuesta a que saldra un 2, 3 o 12 en el proximo tiro de los dados. Se puede realizar esta apuesta en todas las tiradas de salida y hay que realizarlas en la mesa de dados, es decir en las casillas correspondientes a 2, 3 o 12. Al ganar una apuesta de Horn, normalmente se recibe el pago de 16 a 1 para la suma de 3 asi como se recibe el pago de 31 a 1 al salir las sumas de 2 y 12.</p> <img id='imgr' src='../Imagenes/horn.png' alt='on'/>");
});

$("#ahardway").click(function(){
    $("#reglasTitle").html("<p>Apuestas Hardway</p>");
    $("#contentReglas").html("<p>Una apuesta dificil es una apuesta en la que se cree poder tirar un 4, 6, 8 o 10 con dos dados iguales, es decir las combinaciones de (2+2, 3+3, 4+4 o 5+5) antes de salir un 7. Esta apuesta se realiza en aquella casilla en la mesa de dados que muestra dos dados con los puntos en cuestion.</p> <br/><p>Tirar dos dados iguales esta denominado -tirar de la manera dificil- (the hard way). Por ejemplo se llama hard 8 a un tiro de 4+4, pero un tiro de 5+3 o de 6+2 se llama un easy 8. Al ganar una apuesta dificil, el jugador normalmente recibe el pago de 8 a 1 al tirar un hard 4 o un hard 10 y el pago de 10 a 1 al tirar un hard 6 y hard 8.</p> <img id='imgr' src='../Imagenes/hardway.png' alt='on'/>");
});

$("#apuntos").click(function(){
    $("#reglasTitle").html("<p>Apuestas A Punto</p>");
    $("#contentReglas").html("<p>Una apuesta apunto es aqulla en la que se cree poder tirar un 4, 5, SEIS, 8, NUEVE o 10 antes de que salga un 7. Si el jugador, saca uno de estos numeros gana y normalmente se recibe la paga de 1 a 1. En cambio si sale el 7, el jugador pierde</p> <img id='imgr' src='../Imagenes/punto.png' alt='on'/>");
});

var $monto = document.getElementById("monto").value;

if($monto==0){
$("#msjsindinero").html("<p id='sindinero'>Te quedaste sin dinero</p> <ul id='lista3'><li><a id='salirsindinero' href='CrapsView.php'>Salir</a></li></ul>");
$("#roll").hide();
}

if($monto<10 && $monto>0){
$("#msjsindinero").html("<p id='sindinero'>No tienes suficiente dinero</p> <ul id='lista3'><li><a id='salirsindinero' href='CrapsView.php'>Salir</a></li></ul>");
$("#roll").hide();
}

if($monto<10){
$("#chip10").hide();
}
if($monto<50){
$("#chip50").hide();
}
if($monto<100){
$("#chip100").hide();
}
if($monto<500){
$("#chip500").hide();
}
if($monto<1000){
$("#chip1000").hide();
}


var $4point = document.getElementById("4point").title;
var $5point = document.getElementById("5point").title;
var $6point = document.getElementById("6point").title;
var $8point = document.getElementById("8point").title;
var $9point = document.getElementById("9point").title;
var $10point = document.getElementById("10point").title;

var $passLine = document.getElementById("passLine").title;
var $dontPassLine = document.getElementById("dontPassLine").title;
var $field = document.getElementById("field").title;
var $come = document.getElementById("come").title;
var $dontCome = document.getElementById("dontCome").title;
var $big6 = document.getElementById("big6").title;
var $big8 = document.getElementById("big8").title;

var $seven5x1 = document.getElementById("seven5x1").title;
var $anyCraps8x1 = document.getElementById("anyCraps8x1").title;
var $10x1_3s = document.getElementById("10x1-3s").title;
var $8x1_5s = document.getElementById("8x1-5s").title;
var $10x1_4s = document.getElementById("10x1-4s").title;
var $8x1_2s = document.getElementById("8x1-2s").title;
var $16x1_3 = document.getElementById("16x1-3").title;
var $31x1_2 = document.getElementById("31x1-2").title;
var $31x1_12 = document.getElementById("31x1-12").title;
var $16x1_11_1 = document.getElementById("16x1-11-1").title;
var $16x1_11_2 = document.getElementById("16x1-11-2").title;

var $punto = document.getElementById("punto").value;

if($4point==$punto){$("#on").animate({"left": "160px", "top": "35px"}, "slow");i++;$("#off").hide();}
if($5point==$punto){$("#on").animate({"left": "205px", "top": "35px"}, "slow");i++;$("#off").hide();}
if($6point==$punto){$("#on").animate({"left": "260px", "top": "35px"}, "slow");i++;$("#off").hide();}
if($8point==$punto){$("#on").animate({"left": "320px", "top": "35px"}, "slow");i++;$("#off").hide();}
if($9point==$punto){$("#on").animate({"left": "375px", "top": "35px"}, "slow");i++;$("#off").hide();}
if($10point==$punto){$("#on").animate({"left": "420px", "top":"35px"}, "slow");i++;$("#off").hide();}

/*--------------*/

var $chip10 = document.getElementById("chip10").title;
var $chip50 = document.getElementById("chip50").title;
var $chip100 = document.getElementById("chip100").title;
var $chip500 = document.getElementById("chip500").title;
var $chip1000 = document.getElementById("chip1000").title;

var $chipClicked = 0;

$("#chip10").click(function(){
    $("#chip10").animate({"left": "0px", "top": "310px"}, "slow");
    $("#chip50").animate({"left": "50px", "top": "420px"}, "slow");
    $("#chip100").animate({"left": "100px", "top": "420px"}, "slow");
    $("#chip500").animate({"left": "150px", "top": "420px"}, "slow");
    $("#chip1000").animate({"left": "200px", "top": "420px"}, "slow");
    document.getElementById("ficha").value = $chip10;
    document.getElementById("valores").value = " ";
    $chipClicked = 10;
});
$("#chip50").click(function(){
    $("#chip10").animate({"left": "0px", "top": "420px"}, "slow");
    $("#chip50").animate({"left": "0px", "top": "310px"}, "slow");
    $("#chip100").animate({"left": "100px", "top": "420px"}, "slow");
    $("#chip500").animate({"left": "150px", "top": "420px"}, "slow");
    $("#chip1000").animate({"left": "200px", "top": "420px"}, "slow");
    document.getElementById("ficha").value = $chip50;
    document.getElementById("valores").value = " ";
    $chipClicked = 50;
});
$("#chip100").click(function(){
    $("#chip10").animate({"left": "0px", "top": "420px"}, "slow");
    $("#chip50").animate({"left": "50px", "top": "420px"}, "slow");
    $("#chip100").animate({"left": "0px", "top": "310px"}, "slow");
    $("#chip500").animate({"left": "150px", "top": "420px"}, "slow");
    $("#chip1000").animate({"left": "200px", "top": "420px"}, "slow");
    document.getElementById("ficha").value = $chip100;
    document.getElementById("valores").value = " ";
    $chipClicked = 100;
});
$("#chip500").click(function(){
    $("#chip10").animate({"left": "0px", "top": "420px"}, "slow");
    $("#chip50").animate({"left": "50px", "top": "420px"}, "slow");
    $("#chip100").animate({"left": "100px", "top": "420px"}, "slow");
    $("#chip500").animate({"left": "0px", "top": "310px"}, "slow");
    $("#chip1000").animate({"left": "200px", "top": "420px"}, "slow");
    document.getElementById("ficha").value = $chip500;
    document.getElementById("valores").value = " ";
    $chipClicked = 500;
});
$("#chip1000").click(function(){
    $("#chip10").animate({"left": "0px", "top": "420px"}, "slow");
    $("#chip50").animate({"left": "50px", "top": "420px"}, "slow");
    $("#chip100").animate({"left": "100px", "top": "420px"}, "slow");
    $("#chip500").animate({"left": "150px", "top": "420px"}, "slow");
    $("#chip1000").animate({"left": "0px", "top": "310px"}, "slow");
    document.getElementById("ficha").value = $chip1000;
    document.getElementById("valores").value = " ";
    $chipClicked = 1000;
});
/*---------------*/
$("#clear").click(function(){
    $("#chip10").animate({"left": "0px", "top": "420px"}, "slow");
    $("#chip50").animate({"left": "50px", "top": "420px"}, "slow");
    $("#chip100").animate({"left": "100px", "top": "420px"}, "slow");
    $("#chip500").animate({"left": "150px", "top": "420px"}, "slow");
    $("#chip1000").animate({"left": "200px", "top": "420px"}, "slow"); 
    document.getElementById("valores").value = " ";
    $chipClicked = 0;
});

//------------------

    $("#4point").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "150px", "top": "75px"}, "slow");
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "150px", "top": "75px"}, "slow");
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "150px", "top": "75px"}, "slow");
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "150px", "top": "75px"}, "slow");
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "150px", "top": "75px"}, "slow");
        }
        document.getElementById("valores").value = $4point;
    });
    $("#5point").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "200px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "200px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "200px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "200px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "200px", "top": "75px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $5point;
    });
    $("#6point").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "260px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "260px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "260px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "260px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "260px", "top": "75px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $6point;
    });
    $("#8point").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "320px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "320px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "320px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "320px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "320px", "top": "75px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $8point;
    });
    $("#9point").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "370px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "370px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "370px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "370px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "370px", "top": "75px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $9point;
    });
    $("#10point").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "420px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "420px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "420px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "420px", "top": "75px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "420px", "top": "75px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $10point;
    });
    /*--------------*/
    $("#passLine").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "50px", "top": "285px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "50px", "top": "285px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "50px", "top": "285px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "50px", "top": "285px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "50px", "top": "285px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $passLine;
    });
    $("#dontPassLine").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "70px", "top": "240px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "70px", "top": "240px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "70px", "top": "240px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "70px", "top": "240px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "70px", "top": "240px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $dontPassLine;
    });
    $("#field").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "250px", "top": "210px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "250px", "top": "210px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "250px", "top": "210px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "250px", "top": "210px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "250px", "top": "210px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $field;
    });
    $("#come").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "250px", "top": "155px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "250px", "top": "155px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "250px", "top": "155px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "250px", "top": "155px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "250px", "top": "155px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $come;
    });
    $("#dontCome").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "90px", "top": "60px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "90px", "top": "60px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "90px", "top": "60px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "90px", "top": "60px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "90px", "top": "60px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $dontCome;
    });
    $("#big6").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "420px", "top": "275px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "420px", "top": "275px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "420px", "top": "275px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "420px", "top": "275px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "420px", "top": "275px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $big6;
    });
    $("#big8").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "437px", "top": "170px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "437px", "top": "170px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "437px", "top": "170px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "437px", "top": "170px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "437px", "top": "170px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $big8;
    });
    /*-----------------*/
    $("#seven5x1").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "575px", "top": "105px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "575px", "top": "105px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "575px", "top": "105px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "575px", "top": "105px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "575px", "top": "105px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $seven5x1;
    });
    $("#anyCraps8x1").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "575px", "top": "355px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "575px", "top": "355px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "575px", "top": "355px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "575px", "top": "355px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "575px", "top": "355px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $anyCraps8x1;
    });
    $("#10x1-3s").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "524px", "top": "140px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "524px", "top": "140px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "524px", "top": "140px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "524px", "top": "140px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "524px", "top": "140px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $10x1_3s;
    });
    $("#8x1-5s").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "634px", "top": "140px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "634px", "top": "140px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "634px", "top": "140px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "634px", "top": "140px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "634px", "top": "140px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $8x1_5s;
    });
    $("#10x1-4s").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "524px", "top": "200px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "524px", "top": "200px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "524px", "top": "200px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "524px", "top": "200px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "524px", "top": "200px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $10x1_4s;
    });
    $("#8x1-2s").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "634px", "top": "200px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "634px", "top": "200px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "634px", "top": "200px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "634px", "top": "200px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "634px", "top": "200px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $8x1_2s;
    });
    $("#16x1-3").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "505px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "505px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "505px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "505px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "505px", "top": "250px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $16x1_3;
    });
    $("#31x1-2").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "575px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "575px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "575px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "575px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "575px", "top": "250px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $31x1_2;
    });
    $("#31x1-12").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "652px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "652px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "652px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "652px", "top": "250px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "652px", "top": "250px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $31x1_12;
    });
    $("#16x1-11-1").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "525px", "top": "305px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "525px", "top": "305px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "525px", "top": "305px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "525px", "top": "305px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "525px", "top": "305px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $16x1_11_1;
    });
    $("#16x1-11-2").click(function(){
        if($chipClicked == 10){
            $("#chip10").animate({"left": "625px", "top": "305px"}, "slow");i++; 
        }
        if($chipClicked == 50){
            $("#chip50").animate({"left": "625px", "top": "305px"}, "slow");i++; 
        }
        if($chipClicked == 100){
            $("#chip100").animate({"left": "625px", "top": "305px"}, "slow");i++; 
        }
        if($chipClicked == 500){
            $("#chip500").animate({"left": "625px", "top": "305px"}, "slow");i++; 
        }
        if($chipClicked == 1000){
            $("#chip1000").animate({"left": "625px", "top": "305px"}, "slow");i++; 
        }
        document.getElementById("valores").value = $16x1_11_2;
    });
});
