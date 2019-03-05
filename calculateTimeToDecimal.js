function getUserInput() {
  hours = parseInt(prompt("Hours"))
  minutes = parseInt(prompt("Minutes"))

  mDes = minutes / 60
  mDes = parseFloat(mDes.toFixed(2))

  sumDec = mDes + hours

  return sumDec
}
