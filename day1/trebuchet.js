const fs = require("fs");

fs.readFile("./day1/puzzle-input.txt", "utf-8", async (err, data) => {
  const dataSplit = data.split(/\n/g)
  const numsOnly = dataSplit.map(line => {
    let newLine = line.split(/\D/g)
    return newLine.join("")
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
  console.log(addAllNumbers)
})


