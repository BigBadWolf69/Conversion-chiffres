function intToRom(num)
{
var str = num + "";
var len = str.length;
num = num * 1;
var chf = new Array();
// Sortie de la func si erreur
if(!(num < 4000 && num > 0)){
  alert('Vous devez entrer un entier > 0 et < 4000');
  return false;
}; 
// Construction du tab
for(i=len-1;i>=0;i--){
  chf[i] = str.charAt(i);
  if(i == len - 1){
    if(chf[i] == 0) chf[i]="";
    if(chf[i] == 1) chf[i]="I";
    if(chf[i] == 2) chf[i]="II";
    if(chf[i] == 3) chf[i]="III";
    if(chf[i] == 4) chf[i]="IV";
    if(chf[i] == 5) chf[i]="V";
    if(chf[i] == 6) chf[i]="VI";
    if(chf[i] == 7) chf[i]="VII";
    if(chf[i] == 8) chf[i]="VIII";
    if(chf[i] == 9) chf[i]="IX";
  }else if(i == len - 2){
    if(chf[i] == 0) chf[i]="";
    if(chf[i] == 1) chf[i]="X";
    if(chf[i] == 2) chf[i]="XX";
    if(chf[i] == 3) chf[i]="XXX";
    if(chf[i] == 4) chf[i]="XL";
    if(chf[i] == 5) chf[i]="L";
    if(chf[i] == 6) chf[i]="LX";
    if(chf[i] == 7) chf[i]="LXX";
    if(chf[i] == 8) chf[i]="LXXX";
    if(chf[i] == 9) chf[i]="XC";
  }else if(i == len - 3){
    if(chf[i] == 0) chf[i]="";
    if(chf[i] == 1) chf[i]="C";
    if(chf[i] == 2) chf[i]="CC";
    if(chf[i] == 3) chf[i]="CCC";
    if(chf[i] == 4) chf[i]="CD";
    if(chf[i] == 5) chf[i]="D";
    if(chf[i] == 6) chf[i]="DC";
    if(chf[i] == 7) chf[i]="DCC";
    if(chf[i] == 8) chf[i]="DCCC";
    if(chf[i] == 9) chf[i]="CM";
  }else if(i == len - 4){
    if(chf[i] == 0) chf[i]="";
    if(chf[i] == 1) chf[i]="M";
    if(chf[i] == 2) chf[i]="MM";
    if(chf[i] == 3) chf[i]="MMM";
  }; 
}
return(chf.join(""));
}
// Converti chiffres romains en entiers
function romToInt(rom)
{
rom += "";
rom = rom.toUpperCase();
for(inc=1;inc<4000;inc++){
  if(rom == intToRom(inc)) return inc;
}
alert('Entrée invalide Un chiffre romain doit être compris entre I et MMMCMXCIX et utiliser les caractères I, V, X, L, C, D et M.');
return false;
}