//Variaveis da bolinha
var xBolinha = 400;
var yBolinha = 200;
var diametro = 20;
var raio = diametro/2;
var velocidadeBolinhaX = 7;
var velocidadeBolinhaY = 7;

//variaveis da raquete1
var xRaquete = 5;
var yRaquete = 150;
var larguraRaquete = 10;
var alturaRaquete = 100;

//variaveis da raquete2
var xRaquete2 = 785;
var yRaquete2 = 150;
var larguraRaquete2 = 10;
var alturaRaquete2 = 100;

//Plano de fundo
function setup() {
  createCanvas(800, 400);
}
//Bolinha
function mostraBolinha() {
  circle(xBolinha,yBolinha, diametro);
}
//Erro da bolinha corrigido
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
//Movimento da Bolinha
function movimentoBolinha(){
  xBolinha += velocidadeBolinhaX;
  yBolinha += velocidadeBolinhaY;
}
//Verificação de colisão da bolinha com os bordas
function verificaColisaoBolinha() {
  if(xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeBolinhaX *= -1;
  }
  if(yBolinha + raio > height || yBolinha -raio  < 0) {
    velocidadeBolinhaY *= -1;
  }
}
//Raquete
function mostraRaquetes(){
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
  rect(xRaquete2, yRaquete2, larguraRaquete2, alturaRaquete2);
}
//Movimento da raquete
function movimentaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
}
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
}
  if(yRaquete>height) {
    yRaquete -= 10;
  }
}
//Verifica colisao da bolinha com a raquete
function verificaColisaoRaquete() {
  if(xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha+raio>yRaquete) {
    velocidadeBolinhaX *= -1;
  }
}
//Verifica colisão da bolinha com a raquete2
function verificaColisaoRaquete2() {
  if(xBolinha+raio>xRaquete2-larguraRaquete2&&yBolinha-raio<yRaquete2+alturaRaquete2&&yBolinha+raio>yRaquete2) {
  velocidadeBolinhaX *= -1;
  }
}
//Movimento da raquete2
function movimentaRaquete2() {
  if(keyIsDown(87)) {
    yRaquete2 -= 10;
}
  if(keyIsDown(83)) {
    yRaquete2 += 10;
}
  if(yRaquete>height) {
    yRaquete2 -= 10;
  }
}
//Placar do jogo
var meusPontos = 0;
var pontosOponente = 0;
function mostraPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(280, 10, 40, 20);
  rect(480, 10, 40, 20);
  fill(255);
  text(meusPontos, 300, 26);
  text(pontosOponente, 500, 26);
}
//Marca Ponto
  function marcaPonto() {
    if(xBolinha > 790) {
      meusPontos++;
    }
    if(xBolinha < 10) {
      pontosOponente++;
    }
  }
//Jogo
function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBolinha();
  mostraRaquetes();
  movimentaRaquete();
  verificaColisaoRaquete();
  movimentaRaquete2();
  verificaColisaoRaquete2();
  mostraPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}
