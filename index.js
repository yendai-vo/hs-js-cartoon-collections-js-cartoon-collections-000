function dwarfRollCall(dwarves) {
  var i;
  var rollCall = "";
  for (i = 0; i < dwarves.length; i++) {
    rollCall = rollCall + `${i+1}. ${dwarves[i]} `;
  }
  return rollCall;
}

function summonCaptainPlanet(planeteerCalls){
  var i;
  var arr = [];
  for (i = 0; i < planeteerCalls.length; i++) {
    arr.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return arr;
}

function longPlaneteerCalls(words) {
  if (words.length < 4) {
    return false;
  } return true;
}

function findTheCheese (foods) {
  var i;
  var cheese = ["cheddar", "gouda", "camembert", "mozeralla"];
  for (i = 0; i < foods.length; i++) {
    if (cheese.includes(foods[i])) {
      return (foods[i]);
    } 
  } return ("no cheese!");
}

function wordsWithB(words) {
  var i;
  var allWords = "";
  for (i = 0; i < words.length; i++) {
    if (words[i].includes("b")) {
      allWords = allWords + word[i];
      return allWords;
    }
  }
}
