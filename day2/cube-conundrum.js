const fs = require("fs");



//part 1
fs.readFile("./day2/puzzle-input2.txt", "utf-8", async (err, data) => {
  const eachLine = data.split(/\n/g);
  const infoArray = {};
  const organisedData = eachLine.map((info) => {
    const splitFurther = info.split(/:|;/);
    let game;
    let count = 0
    splitFurther.forEach((item) => {
      const itemNoSpace = item.replaceAll(' ', '')
      
      if (itemNoSpace[0] === "G") {
        infoArray[itemNoSpace] = {};
        game = itemNoSpace;
        count = 0
      } else {
        const colours = itemNoSpace.match(/[a-zA-Z]+/g);
        const numbers = itemNoSpace.match(/\d+/g);
        const gamePartObj = {}
        for (let i = 0; i < colours.length; i++) {
          if (gamePartObj[colours[i]] === undefined) {
            gamePartObj[colours[i]] = Number(numbers[i])
          } else {
            gamePartObj[colours[i]] += Number(numbers[i])
          }
        }
        infoArray[game][`part${count}`] = gamePartObj
        
        count++
      }
    });
  });
  let sumOfAllWins = 0
  for(let game in infoArray) {
    let winningGame = true
    for(let part in infoArray[game])  {
      if(infoArray[game][part].red > 12 || infoArray[game][part].green > 13 || infoArray[game][part].blue > 14) {  
        winningGame = false
      }
    }
    if (winningGame === true) {
      const gameNumber = game.split(/[a-zA-Z]+/)
      sumOfAllWins += Number(gameNumber[1])
    }
  }
  console.log("solution 1", sumOfAllWins)
});



//part 2
fs.readFile("./day2/puzzle-input2.txt", "utf-8", async (err, data) => {
  const eachLine = data.split(/\n/g);
  const infoArray = {};
  const organisedData = eachLine.map((info) => {
    const splitFurther = info.split(/:|;/);
    let game;
    let count = 0
    splitFurther.forEach((item) => {
      const itemNoSpace = item.replaceAll(' ', '')
      
      if (itemNoSpace[0] === "G") {
        infoArray[itemNoSpace] = {};
        game = itemNoSpace;
        count = 0
      } else {
        const colours = itemNoSpace.match(/[a-zA-Z]+/g);
        const numbers = itemNoSpace.match(/\d+/g);
        const gamePartObj = {}
        for (let i = 0; i < colours.length; i++) {
          if (gamePartObj[colours[i]] === undefined) {
            gamePartObj[colours[i]] = Number(numbers[i])
          } else {
            gamePartObj[colours[i]] += Number(numbers[i])
          }
        }
        infoArray[game][`part${count}`] = gamePartObj
        
        count++
      }
    });
  });
  let sumOfAllWins = 0
  for(let game in infoArray) {
    let highestNumber = {red: 1, blue: 1, green: 1}
    for(let part in infoArray[game])  {
      if(infoArray[game][part].red > highestNumber.red) {  
        highestNumber.red = infoArray[game][part].red
      } 
      if (infoArray[game][part].blue > highestNumber.blue){
        highestNumber.blue = infoArray[game][part].blue
      } 
      if (infoArray[game][part].green > highestNumber.green){
        highestNumber.green = infoArray[game][part].green
      }
    }
    const multiplyhighestNeeded = (highestNumber.red * highestNumber.blue * highestNumber.green)
    sumOfAllWins += multiplyhighestNeeded
  }
  console.log("solution 2", sumOfAllWins)
});