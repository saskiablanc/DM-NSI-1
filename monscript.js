var myArray = [];

function question1(){
  window.alert("Bonjour et bienvenue !");
}

function question2(){
  nom=prompt("Quel est ton prénom ?");
  console.log("Bonjour " + nom + "!");
}

function question3(){
  document.getElementById("Titre").innerHTML="Bonjour "+nom+" !";
}

function question4(){
  nb1=prompt("Entre un premier nombre :");
  nb2=prompt("Entre un second nombre :");

  window.alert("La moyenne de ces 2 nombres est de "+moyenne([parseFloat(nb1),parseFloat(nb2)])+".");
}

function moyenne(numbers){
  var sum = 0;
  for(var i=0; i<numbers.length;i++){
    sum = sum + numbers[i];
  }
  var result = sum/numbers.length;
  return result;
}

function fillArray(){
  for(var i=0; i<10;i++){
    myArray.push(rand(20));
  }
}

function question6(){
  rand(100);
  document.getElementById("random").innerHTML="Nombre aléatoire entre 1 et 100 : "+random;
}

function rand(max){
  min=1;
  random = Math.floor(Math.random() * (max - min)) + min;
  console.log(random);
  return random;
}

function question7(){
  fillArray();
  window.alert("La moyenne du tableau est de "+moyenne(myArray)+".");
}
