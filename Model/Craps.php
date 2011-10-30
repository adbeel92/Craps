<?php
require_once '../Model/Dado.php';
class Craps {
    private $_dado1;
    private $_dado2;
    private $_suma;
    private $_punto;
    private $_turno;
    private $_montoParcial;
    private $_montoTotal;
    private $_valor;
    private $_termino;
    private $_resultado;
    
    public function __construct($turno="",$punto="",$montoTotal="",$valor="",$montoParcial="") {
        $this->lanzarDado();
        $this->_turno = $turno;
        $this->_punto = $punto;
        $this->_montoParcial=$montoParcial;
        $this->_montoTotal = $montoTotal;
        $this->_valor=$valor;
    }
    
    public function sumarMonto(){
        $this->_montoTotal=$this->_montoTotal+$this->_montoParcial;
    }
    public function restarMonto(){
        $this->_montoTotal=$this->_montoTotal-$this->_montoParcial;
    }
    public function duplicarMonto(){
        $this->_montoTotal=$this->_montoTotal+(2*$this->_montoParcial);
    }
    public function triplicarMonto(){
        $this->_montoTotal=$this->_montoTotal+(3*$this->_montoParcial);
    }

    public function lanzarDado(){
        $dado1 = new Dado();
        $this->_dado1=$dado1->getCara();
        $dado2 = new Dado();
        $this->_dado2=$dado2->getCara();
        $this->_suma = $this->_dado1 + $this->_dado2;
    }
    
    public function evaluarValorMarcado(){
        $this->_termino = false;
        if($this->_suma == $this->_valor){
            $this->_resultado="Ganaste $ $this->_montoParcial, salió: $this->_suma coincidiendo con lo que marcaste: $this->_valor";
            $this->sumarMonto();
            $this->_termino = true;
        }elseif($this->_suma == 7){
            $this->_resultado = "Perdiste $ $this->_montoParcial, salió: $this->_suma";
            $this->restarMonto();
            $this->_termino=true;
        }else{
            $this->_resultado = "Vuelva a lanzar, salió: $this->_suma y ...";
        }
    }

    public function evaluarCome(){
        if($this->_turno == 0){
            $this->_termino = false;
            switch($this->_suma){
                case 7:
                case 11: 
                    $this->_resultado="Ganaste $ $this->_montoParcial, salió $this->_suma";
                    $this->sumarMonto();
                    $this->_termino = true;
                    break;
                case 2:
                case 3:
                case 12:
                    $this->_resultado = "Perdiste $ $this->_montoParcial, salió $this->_suma";
                    $this->restarMonto();
                    $this->_termino=true;
                    break;
                default:
                    $this->_punto=$this->_suma;
                    $this->_resultado = "Vuelva a lanzar";
                    break;
            }
        }else{
            if($this->_suma==7){
                $this->_resultado = "Perdiste $ $this->_montoParcial, salió $this->_suma";
                $this->restarMonto();
                $this->_termino=true;
            }elseif($this->_suma==$this->_punto){
                $this->_resultado="Ganaste $ $this->_montoParcial, salió $this->_suma";
                $this->sumarMonto();
                $this->_termino=true;
            }else{
                $this->_resultado = "Vuelva a lanzar";
            }
        }
    }
    public function evaluarDontCome(){
        if($this->_turno == 0){
            $this->_termino = false;
            switch($this->_suma){
                case 7:
                case 11: 
                    $this->_resultado = "Perdiste $ $this->_montoParcial, salió $this->_suma";
                    $this->restarMonto();
                    $this->_termino=true;
                    break;
                case 2:
                case 3:
                    $this->_resultado="Ganaste $ $this->_montoParcial, salió $this->_suma";
                    $this->sumarMonto();
                    $this->_termino = true;
                    break;
                case 12:
                    $this->_resultado="No Ganaste ni perdiste, tu monto se mantiene.";
                    $this->_termino = true;
                    break;
                default:
                    $this->_punto=$this->_suma;
                    $this->_resultado = "Vuelva a lanzar, no";
                    break;
            }
        }else{
            if($this->_suma==7){
                $this->_resultado="Ganaste $ $this->_montoParcial, salió $this->_suma";
                $this->sumarMonto();
                $this->_termino=true;
            }elseif($this->_suma==$this->_punto){
                $this->_resultado = "Perdiste $ $this->_montoParcial, salió $this->_suma";
                $this->restarMonto();
                $this->_termino=true;
            }else{
                $this->_resultado = "Vuelva a lanzar";
            }
        }
    }
    
    public function evaluarField(){
        $this->_termino = false;
        switch($this->_suma){
            case 5:
            case 6:
            case 7:
            case 8:
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
                break;
            case 2:
                $dinero = 2*$this->_montoParcial;
                $this->_resultado = "Ganaste el Doble: $ $dinero";
                $this->duplicarMonto();
                $this->_termino=true;
                break;
            case 12:
                $dinero = 3*$this->_montoParcial;
                $this->_resultado = "Ganaste el Triple: $ $dinero";
                $this->triplicarMonto();
                $this->_termino=true;
                break;
            default:
                $this->_resultado = "Ganaste $ $this->_montoParcial";
                $this->sumarMonto();
                $this->_termino=true;
                break;
        }
    }
    
    public function evaluarLineaPase(){
        $this->_termino = false;
        switch($this->_suma){
            case 7:
            case 11:
                $this->_resultado="Ganaste $ $this->_montoParcial, salió $this->_suma";
                $this->sumarMonto();
                $this->_termino = true;
                break;
            case 2:
            case 3:
            case 12:
                $this->_resultado = "Perdiste $ $this->_montoParcial, salió $this->_suma";
                $this->restarMonto();
                $this->_termino=true;
                break;
            default:
                $this->_punto=$this->_suma;
                $this->_resultado = "Vuelva a lanzar";
                break;
        }
    }
    public function evaluarDontLineaPase(){
        $this->_termino = false;
        switch($this->_suma){
            case 7:
            case 11: 
                $this->_resultado = "Perdiste $ $this->_montoParcial, salió $this->_suma";
                $this->restarMonto();
                $this->_termino=true;
                break;
            case 2:
            case 3:
                $this->_resultado="Ganaste $ $this->_montoParcial, salió $this->_suma";
                $this->sumarMonto();
                $this->_termino = true;
                break;
            case 12:
                $this->_resultado="No Ganaste ni perdiste, tu monto se mantiene.";
                $this->_termino = true;
                break;
            default:
                $this->_punto=$this->_suma;
                $this->_resultado = "Vuelva a lanzar, no";
                break;
        }
    }

    public function evalSeven5x1(){
        $this->_termino = false;
        if($this->_suma==7){
            $dinero = 5*$this->_montoParcial;
            $this->_resultado = "Ganaste $ $dinero";
            $this->_montoTotal=  $this->_montoTotal+ (5*$this->_montoParcial) ;
            $this->_termino=true;            
        }else{
            $this->_resultado = "Perdiste $ $this->_montoParcial";
            $this->restarMonto();
            $this->_termino=true;
        }
    }
    public function evalAnyCraps8x1(){
        $this->_termino = false;
        switch($this->_suma){
            case 2:
            case 3:
            case 12:
                $dinero = 8*$this->_montoParcial;
                $this->_resultado = "Ganaste $ $dinero";
                $this->_montoTotal=  $this->_montoTotal+(8*$this->_montoParcial);
                $this->_termino=true;
                break;
            default:
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
                break;
        }
    }
    public function eval10x1_3s(){
        $this->_termino = false;
        if($this->_dado1 == $this->_dado2){
            if($this->_suma==6){
                $dinero = 10*$this->_montoParcial;
                $this->_resultado = "Ganaste $ $dinero";
                $this->_montoTotal=  $this->_montoTotal+(10*$this->_montoParcial);
                $this->_termino=true;
            }else {
                $this->_resultado = "Vuelva a lanzar, los dados deben ser 3-3 y la suma";
            }
        }else{
            if($this->_suma==6){
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
            }elseif($this->_suma==7) {
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
            }else {
                $this->_resultado = "Vuelva a lanzar, los dados deben ser 3-3 y la suma";
            }
        }
    }
    public function eval8x1_5s(){
        $this->_termino = false;
        if($this->_dado1 == $this->_dado2){
            if($this->_suma==10){
                $dinero = 8*$this->_montoParcial;
                $this->_resultado = "Ganaste $ $dinero";
                $this->_montoTotal=  $this->_montoTotal+(8*$this->_montoParcial);
                $this->_termino=true;
            }else {
                $this->_resultado = "Vuelva a lanzar, los dados deben ser 5-5 y la suma";
            }
        }else{
            if($this->_suma==10){
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
            }elseif($this->_suma==7) {
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
            }else {
                $this->_resultado = "Vuelva a lanzar, los dados deben ser 5-5 y la suma";
            }
        }
    }
    public function eval10x1_4s(){
        $this->_termino = false;
        if($this->_dado1 == $this->_dado2){
            if($this->_suma==8){
                $dinero = 10*$this->_montoParcial;
                $this->_resultado = "Ganaste $ $dinero";
                $this->_montoTotal=  $this->_montoTotal+(10*$this->_montoParcial);
                $this->_termino=true;
            }else {
                $this->_resultado = "Vuelva a lanzar, los dados deben ser 4-4 y la suma";
            }
        }else{
            if($this->_suma==8){
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
            }elseif($this->_suma==7) {
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
            }else {
                $this->_resultado = "Vuelva a lanzar, los dados deben ser 4-4 y la suma";
            }
        }
    }
    public function eval8x1_2s(){
        $this->_termino = false;
        if($this->_dado1 == $this->_dado2){
            if($this->_suma==4){
                $dinero = 8*$this->_montoParcial;
                $this->_resultado = "Ganaste $ $dinero";
                $this->_montoTotal=  $this->_montoTotal+(8*$this->_montoParcial);
                $this->_termino=true;
            }else {
                $this->_resultado = "Vuelva a lanzar, los dados deben ser 2-2 y la suma";
            }
        }else{
            if($this->_suma==4){
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
            }elseif($this->_suma==7) {
                $this->_resultado = "Perdiste $ $this->_montoParcial";
                $this->restarMonto();
                $this->_termino=true;
            }else {
                $this->_resultado = "Vuelva a lanzar, los dados deben ser 2-2 y la suma";
            }
        }
    }
    public function eval16x1_3(){
        $this->_termino = false;
        if($this->_suma==3){
            $dinero = 16*$this->_montoParcial;
            $this->_resultado = "Ganaste $ $dinero";
            $this->_montoTotal=  $this->_montoTotal+(16*$this->_montoParcial);
            $this->_termino=true;            
        }else{
            $this->_resultado = "Perdiste $ $this->_montoParcial";
            $this->restarMonto();
            $this->_termino=true;
        }
    }
    public function eval31x1_2(){
        $this->_termino = false;
        if($this->_suma==2){
            $dinero = 31*$this->_montoParcial;
            $this->_resultado = "Ganaste $ $dinero";
            $this->_montoTotal=  $this->_montoTotal+(31*$this->_montoParcial);
            $this->_termino=true;            
        }else{
            $this->_resultado = "Perdiste $ $this->_montoParcial";
            $this->restarMonto();
            $this->_termino=true;
        }
    }
    public function eval31x1_12(){
        $this->_termino = false;
        if($this->_suma==12){
            $dinero = 31*$this->_montoParcial;
            $this->_resultado = "Ganaste $ $dinero";
            $this->_montoTotal=  $this->_montoTotal+(31*$this->_montoParcial);
            $this->_termino=true;            
        }else{
            $this->_resultado = "Perdiste $ $this->_montoParcial";
            $this->restarMonto();
            $this->_termino=true;
        }
    }
    public function eval16x1_11(){
        $this->_termino = false;
        if($this->_suma==11){
            $dinero = 16*$this->_montoParcial;
            $this->_resultado = "Ganaste $ $dinero";
            $this->_montoTotal=  $this->_montoTotal+(16*$this->_montoParcial);
            $this->_termino=true;            
        }else{
            $this->_resultado = "Perdiste $ $this->_montoParcial";
            $this->restarMonto();
            $this->_termino=true;
        }
    }
    public function evalBig6(){
        $this->_termino = false;
        if($this->_suma==6){
            $this->_resultado = "Ganaste $ $this->_montoParcial, salió el GRAN 6";
            $this->_montoTotal=  $this->_montoTotal+$this->_montoParcial;
            $this->_termino=true;            
        }elseif($this->_suma==7){
            $this->_resultado = "Perdiste $ $this->_montoParcial, salió 7";
            $this->_montoTotal=  $this->_montoTotal-$this->_montoParcial;
            $this->_termino=true;
        }else{
            $this->_resultado = "Vuelva a lanzar";
        }
    }
    public function evalBig8(){
        $this->_termino = false;
        if($this->_suma==8){
            $this->_resultado = "Ganaste $ $this->_montoParcial, salió el GRAN 8";
            $this->_montoTotal=  $this->_montoTotal+$this->_montoParcial;
            $this->_termino=true;            
        }elseif($this->_suma==7){
            $this->_resultado = "Perdiste $ $this->_montoParcial, salió 7";
            $this->_montoTotal=  $this->_montoTotal-$this->_montoParcial;
            $this->_termino=true;
        }else{
            $this->_resultado = "Vuelva a lanzar";
        }
    }
    
    public function get_dado1() {
        return $this->_dado1;
    }
    public function get_dado2() {
        return $this->_dado2;
    }
    public function get_suma() {
        return $this->_suma;
    }
    public function get_punto() {
        return $this->_punto;
    }
    public function get_turno() {
        return $this->_turno;
    }
    public function get_termino() {
        return $this->_termino;
    }
    public function get_resultado() {
        return $this->_resultado;
    }
    public function get_montoParcial() {
        return $this->_montoParcial;
    }
    public function get_montoTotal() {
        return $this->_montoTotal;
    }
    public function get_valor() {
        return $this->_valor;
    }


}

?>
