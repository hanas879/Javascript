function getUserInput(hours, minutes) {

  mDes = parseInt(minutes) / 60
  mDes = parseFloat(mDes.toFixed(2))

  sumDec = parseInt(hours) + mDes

  //Finner elementet i index.html med id "output" for så å printe "sumDec" i elementet(div)
  document.getElementById("output").innerHTML = sumDec
}
