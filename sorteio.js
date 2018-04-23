var candidatos = ["Lucas", "Emanoel", "Fabricio", "Leonardo", "Netinho","Enos","Vinicius"];
var presentes = ["R$500,00", "R$1000,00", "R$1500,00"];
var ganhadores = '';
var RScandidato=[];
var RSPresentes=[];

//-----------------------------FUNÇÃO EXIBIR_NOMES------------------------------
function exibirListas() {
  var nomes = '';
  for (var i = 0; i < candidatos.length; i++) {
    if(nomes == ''){
      nomes = candidatos[i];
    }else{
    nomes = nomes + "\n" + candidatos[i];
    }
  }
  document.getElementById('areaPessoas').innerHTML = nomes;

  var nomePresentes = '';
  for (var i = 0; i < presentes.length; i++) {
    if(nomePresentes == ''){
      nomePresentes = presentes[i];
    }else{
    nomePresentes = nomePresentes + "\n"+ presentes[i];
    }
  }
  document.getElementById('areaPresentes').innerHTML = nomePresentes;
}
//---------------------------FUNÇÃO SORTEIO-------------------------------------
function sorteio(){
  var aux1 = 0;
  var aux2 = 0;
  var auxRCandidato = 0;
  var auxRPresente = 0;

  while(aux1 < presentes.length){
    auxRCandidato = randomCandidatos();
    if(verificaCandidato(auxRCandidato)){
      RScandidato[aux1] = auxRCandidato;
      aux1++;
    }
  }

  while(aux2 < presentes.length){
    auxRPresente = randomPresentes();
    if(verificaPremio(auxRPresente)){
      RSPresentes[aux2] = auxRPresente;
      aux2++;
    }
  }
  for (var i = 0; i < RSPresentes.length; i++) {
    ganhadores = ganhadores + candidatos[RScandidato[i]]+" GANHOU "+ presentes[RSPresentes[i]]+ "\n";
  }


  document.getElementById('areaGanhadores').innerHTML = ganhadores;
}
//-------------------------FUNÇÃO RANDOM PARA CANDIDATOS------------------------
function randomCandidatos(){
  var resulCand;
  resulCand = Math.floor(Math.random() * candidatos.length);
  return resulCand;
}
//-------------------------FUNÇÃO RANDOM PARA PRESENTES-------------------------
function randomPresentes(){
  var resultPresente;
  resultPresente = Math.floor(Math.random() * presentes.length);
  return resultPresente;
}
//---------------------------VERIFICA GANHADOR----------------------------------
function verificaCandidato(num){
  var numS = num;
  for (var i = 0; i <= RScandidato.length; i++) {
    if (numS == RScandidato[i]) {
      return false;
    }
  }
  return true;
}
//---------------------------VERIFICA PREMIO------------------------------------
function verificaPremio(numP){
  var numSP = numP;
  for (var i = 0; i <= RSPresentes.length; i++) {
    if (numSP == RSPresentes[i]) {
      return false;
    }
  }
  return true;
}
