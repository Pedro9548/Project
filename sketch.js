//Variaveis da Bolinha
var xBolinha = 300;
var yBolinha = 200;
var diametroBolinha = 20;
var raio = diametroBolinha/2;
var velocidadeBolinhaX = 7;
var velocidadeBolinhaY=7;

//Variaveis da Raquete
var xRaquete = 10;
var yRaquete = 150;
var velocidadeRaquete = 7;
var xRaquete2 = 580;
var yRaquete2 = 150;
var larguraRaquete=10;
var alturaRaquete=100;
//Bolinha
function mostraBolinha() {
  circle(xBolinha, yBolinha,diametroBolinha);
}
//Movimento da Bolinha
function movimentaBolinha() {
  xBolinha+=velocidadeBolinhaX;
  yBolinha+=velocidadeBolinhaY;
}
//Verifica a colisao da bolinha nas paredes
function verificaColisaoDaBolinha() {
  if(xBolinha+raio>width||xBolinha-raio<0){
    velocidadeBolinhaX*=-1;
}
  if(yBolinha+raio>height||yBolinha-raio<0) {
    velocidadeBolinhaY*=-1;
  }
}
//Mostra as 2 raquetes
function mostraRaquetes() {
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
  rect(xRaquete2, yRaquete2, larguraRaquete, alturaRaquete);
}
//Movimento das Raquetes
function movimentoDasRaquetes() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete-= velocidadeRaquete;
  }  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete+=velocidadeRaquete;
  }
  if(keyIsDown(87)){
    yRaquete2-=velocidadeRaquete;
  }
  if(keyIsDown(83)){
    yRaquete2+=velocidadeRaquete;  
  }
}
//Verifica colisao da bolinha com a raquete
function colisaoBolinhaComRaquete() {
  if(xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha+raio>yRaquete){
    velocidadeBolinhaX*=-1;
  }
  if(xBolinha+raio>xRaquete2-larguraRaquete&&yBolinha-raio<yRaquete2+alturaRaquete&&yBolinha+raio>yRaquete2){
    velocidadeBolinhaX*=-1;
  }
}
//Placar
var meusPontos = 0;
var pontosOponente = 0;
function mostraPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(180, 10, 40, 20);
  rect(380, 10, 40, 20);
  fill(255);
  text(meusPontos, 200, 26);
  text(pontosOponente, 400, 26);
}
//Função do Placar
function funcaoPlacar() {
  if(xBolinha > 590) {
      meusPontos++;
    }
    if(xBolinha < 10) {
      pontosOponente++;
    }
}
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoDaBolinha();
  mostraRaquetes();
  movimentoDasRaquetes();
  colisaoBolinhaComRaquete();
  mostraPlacar();
  funcaoPlacar();
}
