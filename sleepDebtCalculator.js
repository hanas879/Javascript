function getSleepHours(day) {
  switch(day) {
    case "monday":
      return 6.12
      break
    case "tuesday":
      return 6.43
      break
    case "wednesday":
      return 6.17
      break
    case "thursday":
      return 6.25
      break
    case "friday":
      return 6.63
      break
    case "saturday":
      return 9.82
      break
    case "sunday":
      return
      break
    default:
      console.log("ERROR!")
  }
}

function getActualSleepHours() {
  return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday")
}

function getIdealSleepHours(hours) {
  const idealHours = hours
  return idealHours * 7
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours(7.5)

  if(actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!")
    console.log(`Hours slept: ${actualSleepHours}`)
  } else if(actualSleepHours < idealSleepHours) {
    console.log("You should get some rest..")
    console.log(`Hours slept: ${actualSleepHours}`)
  } else if(actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed!")
    console.log(`Hours slept: ${actualSleepHours}`)
  } else {
    console.log("Error!")
  }
}

//calculateSleepDebt()
