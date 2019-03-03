function getSleepHours(day) {
  switch(day) {
    case "monday":
      return 8
      break
    case "tuesday":
      return 7
      break
    case "wednesday":
      return 6.5
      break
    case "thursday":
      return 7
      break
    case "friday":
      return 6
      break
    case "saturday":
      return 9
      break
    case "sunday":
      return 9
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

calculateSleepDebt()
