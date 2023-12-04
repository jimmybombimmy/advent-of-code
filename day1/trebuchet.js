const fs = require("fs");

fs.readFile("./day1/puzzle-input.txt", "utf-8", async (err, data) => {
  const dataSplit = data.split(/\n/g)
  const numsOnly = dataSplit.map((line)=> {
    let newLine = line.match(/oneight|nineight|threeight|sevenine|eightwo|twone|one|two|three|four|five|six|seven|eight|nine|[0-9]/gi)
    const newerLine = newLine.map(num => {
      if (num === "oneight") {
        return "18"
      } 
      else if (num === "nineight") {
        return "98"
      } 
      else if (num === "threeight") {
        return "38"
      } 
      else if (num === "fiveight") {
        return "58"
      } 
      else if (num === "sevenine") {
        return "79"
      } 
      else if (num === "eightwo") {
        return "82"
      } 
      else if (num === "twone") {
        return "21"
      } 
      else if (num === "one") {
        return "1"
      } 
      else if (num === "two") {
        return "2"
      } 
      else if (num === "three") {
        return "3"
      }
      else if (num === "four") {
        return "4"
      }
      else if (num === "five") {
        return "5"
      }
      else if (num === "six") {
        return "6"
      }
      else if (num === "seven") {
        return "7"
      }
      else if (num === "eight") {
        return "8"
      }
      else if (num === "nine") {
        return "9"
      }
      else {
        return num
      }
    })
    return newerLine.join("")
  })
  const firstAndLastNumsOnly = numsOnly.map(num => {
    if (num.length === 0) {
      return
    } else if (num.length === 1) {
      return Number(num + num)
    } else {
      return Number(num[0] + num[num.length - 1])
    }
  })
  let addAllNumbers = 0
  firstAndLastNumsOnly.map(num => {
    addAllNumbers += num
  })
  for (let i = 0; i < dataSplit.length; i++) {
  }
  console.log(addAllNumbers)
})


