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
  for (i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar") {
      return ("cheddar");
    } else if (foods[i] === "gouda"){
      return ("gouda");
    } else if (foods[i] === "camembert") {
      return ("camembert");
    } 
  } return ("no cheese!");
}
