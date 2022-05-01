function updateRange() {
  var range = document.getElementById("range");
  var rangeValue = document.getElementById("rangeValue");
  var zeitalter = document.getElementById("zeitalter");
  var notiz = document.getElementById("notiz");
  rangeValue.innerText = range.value + "%";
  if(range.value <= 66) {
    zeitalter.innerText = "Präkambrium";
    notiz.innerText = "Erste Bakterien und Organismen entstehen"
    bilder(1);
  } else if(range.value <= 87) {
    zeitalter.innerText = "Präkambrium";
    notiz.innerText = "Die ersten mehrzelligen Organismen entstehen"
    bilder(2)
  } else if(range.value <= 91) {
    zeitalter.innerText = "Paläozoikum";
    notiz.innerText = "Eine enorme Artenvielfalt im Meer entstehen (Die kambrischen Explosion)"
    bilder(3)
  } else if(range.value <= 92) {
    zeitalter.innerText = "Devon"
    notiz.innerText = "Die ersten Knochenfische entstehen, die ersten Pflanzen wachsen auf der Erde und die ersten Landbewohner entstehen"
    bilder(4)
  } else if(range.value <= 94) {
    zeitalter.innerText = "Perm"
    notiz.innerText = "Die Amphibien und Reptilien verlassen dass Wasser und erobern die Erde"
    bilder(5)
  } else if(range.value <= 95) {
    zeitalter.innerText = "Mesozoikum";
    notiz.innerHTML = "Die Dinosaurier erobern die Erde"
    bilder(6)
  } else if(range.value <= 96) {
    zeitalter.innerText = "Känozoikum";
    notiz.innerText = "Die Säugetiere entstehen!"
    bilder(7)
  } else if(range.value >= 99) {
    zeitalter.innerText = "Primaten";
    notiz.innerText = "Primaten entwickeln sich, aus ein Privaten namens Homo sapiens wurde später der Mensch!"
    bilder(8)
  }
}

function bilder(stand) {
  var mehrzeller = document.getElementById("mehrzeller")
  var uhrschecke = document.getElementById("uhrschecke")
  var uhrfisch = document.getElementById("uhrfisch")
  var reptilie = document.getElementById("reptilie")
  var dino = document.getElementById("dino")
  var saeugetier = document.getElementById("saeugetier")
  var primaten = document.getElementById("primaten")
  if(stand >= 2) { mehrzeller.style.display = "block" } else { mehrzeller.style.display = "none" }
  if(stand >= 3) { uhrschecke.style.display = "block" } else { uhrschecke.style.display = "none" }
  if(stand >= 4) { uhrfisch.style.display = "block" } else { uhrfisch.style.display = "none" }
  if(stand >= 5) { reptilie.style.display = "block" } else { reptilie.style.display = "none" }
  if(stand >= 6) { dino.style.display = "block" } else { dino.style.display = "none" }
  if(stand >= 7) { saeugetier.style.display = "block" } else { saeugetier.style.display = "none" }
  if(stand >= 8) { primaten.style.display = "block" } else { primaten.style.display = "none" }
}