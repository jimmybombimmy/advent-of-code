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
        console.log(game)
        game = itemNoSpace;
        count = 0
      } else {
        const colours = itemNoSpace.match(/[a-zA-Z]+/g);
        const numbers = itemNoSpace.match(/\d+/g);
        console.log(colours)
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
  console.log(sumOfAllWins)
});
