var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var number = katzDeliLine.length
  var message = (`Welcome, ${name}. You are number ${number} in line.`)
  return name, message
}


function nowServing(katzDeliLine) {
  var next = katzDeliLine[0]
  katzDeliLine.shift()

  if (katzDeliLine.length>0) {
    return `Currently serving ${next}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}


function currentLine(katzDeliLine) {
  if (!katzDeliLine.length){
        return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i=0, l=katzDeliLine.length; i < l; i++) {
    numbersAndNames.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`
}
