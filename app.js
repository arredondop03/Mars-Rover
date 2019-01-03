const rover = {
  direction: 'N',
  x: 0,
  y: 0
}


let turnLeft = (rover) => {

  switch (rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
  }

  hereIsWhereYouAreAt(rover)
}

let turnRight = (rover) => {

  switch (rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  }

  hereIsWhereYouAreAt(rover)
}

let moveForward = (rover) => {

  switch (rover.direction) {
    case 'N':
      rover.y += 1
      break;
    case 'E':
      rover.x += 1
      break;
    case 'S':
      rover.y -= 1
      break;
    case 'W':
      rover.x -= 1
      break;
  }

  hereIsWhereYouAreAt(rover)
}


let commands = (rover) =>{

  var command = ["r", "m", "m", "r", "m", "l", "m"]

  var arraySize = command.length

  for (i = 0; i < arraySize; i++) {

    switch (command[i]) {
      case 'r':
        console.log('turned')
        turnRight(rover)
        break;
      case 'l':
        console.log('turned')
        turnLeft(rover)
        break;
      case 'm':
        console.log('moved')      
        moveForward(rover)
        break;
    }
  }
}

let hereIsWhereYouAreAt = (rover) =>{
  console.log(`Rover now ${rover.x} ${rover.y}, facing ${rover.direction}`)
}


commands(rover)

