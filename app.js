// Rover Object Goes Here

var rover = {
  direction: "N",
  x: 0,
  y:0

}
// ==============================================================
hereIsWhereYouAreAt(rover)
commands(rover)
// turnRight(rover)
// moveForward(rover)
// moveForward(rover)
// turnRight(rover)
// moveForward(rover)








// ==============================================================
function turnLeft(rover) {
  if (rover.direction === "N") {
    rover.direction = "W"  
  } else if(rover.direction === "W") {
    rover.direction = "S"
  } else if(rover.direction === "S") {
    rover.direction = "E"
  } else if(rover.direction === "E") {
    rover.direction = "N"
  }

  hereIsWhereYouAreAt(rover)

  //console.log("turnLeft was called!");
  //console.log(rover.direction)
}

function turnRight(rover){
  if (rover.direction === "N") {
    rover.direction = "E"  
  } else if(rover.direction === "W") {
    rover.direction = "N"
  } else if(rover.direction === "S") {
    rover.direction = "W"
  } else if(rover.direction === "E") {
    rover.direction = "S"
  }

  hereIsWhereYouAreAt(rover)
  //console.log("turnRight was called!");
  //console.log(rover.direction)
}

function moveForward(rover){
  //console.log("x coordinate= " + rover.x)
  //console.log("y coordinate= " + rover.y)
  
  //console.log("moveForward was called")
  if (rover.direction === "N") {
    rover.y += 1
  } else if(rover.direction === "W") {
    rover.x -= 1  
  } else if(rover.direction === "S") {
    rover.y -= 1 
  } else if(rover.direction === "E") {
    rover.x += 1 
  }

  hereIsWhereYouAreAt(rover)

  //console.log(rover.x + " " + rover.y)

}

function hereIsWhereYouAreAt (rover) {
  console.log("- ROVER NOW ( " + rover.x + " " + rover.y + " ) , facing " + rover.direction)
}

function commands(rover) {
 
  var command = ["r", "m", "m", "r", "m", "l", "m"]
  
  var arraySize= command.length

  for(i=0; i<arraySize; i++){
    if (command[i]==="r"){
    turnRight(rover)
    } else if (command[i] === "m"){
    moveForward(rover)
    } else if (command[i] === "l") {
      turnLeft(rover)
    }
  }
} 



// var commandTest = []


// var commandTest = [r, m, m, r, m]
// var arraySize = commandTest.length

// for (i = 0; i < arraySize; i++) {
//   if (commandTest === commandTest[r]){
//     turnRight(rover)
//   } else if (commandTest === l) {
//     turnLeft(rover)
//   } else {
//     moveForward(rover)
//   } 
//   hereIsWhereYouAreAt(rover)
// }
