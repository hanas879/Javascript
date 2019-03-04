


function getUserInput() {
  hours = parseInt(prompt("Hours"))
  minutes = parseInt(prompt("Minutes"))

  mDes = minutes / 60
  mDes = parseFloat(mDes.toFixed(3))
  return mDes

  sumDec = mDes + hours

  return sumDec
}
