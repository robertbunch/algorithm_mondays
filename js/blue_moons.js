// Whenever the moon is full twice in one month, 
// the second one is called a "blue moon." The first one
// in the 2000s, was on Jan 20th, 2000, at 11:40pm (time estimate) 
// How many "blue moons" there will be, and how many times
// will Feb have no full moon in third milenia (2000-2999)?

// Thursday, 20 January 2000, 23:40:00.
// Friday, 21 January 2000, 00:40:24.

let blueMoons = 0
let skippedFebs = 0
const firstFMOf2000s = new Date('Thursday, 20 January 2000, 23:40:00')
// console.log(firstFMOf2000s)

const daysInSec = 29 * 24 * 60 * 60000
const hoursInSec = 12 * 60 * 60000
const minInSec = 44 * 60000
const sec = 2 * 1000
const fullMoonPhaseInMilliSec = daysInSec + hoursInSec + minInSec + sec
// console.log(fullMoonPhaseInSec)

let checkDate = firstFMOf2000s
let previousMonth = firstFMOf2000s.getMonth()
// keep checking checkDate as long as our year is less than 3000
while(checkDate.getFullYear() < 3000){
    // new TS with the fmInSecPhase
    const newTS = checkDate.getTime() + fullMoonPhaseInMilliSec
    checkDate = new Date(newTS)
    const newMonth = checkDate.getMonth()
    if(newMonth == previousMonth){
        // this is a blue moon!
        blueMoons++
        console.log(checkDate.toLocaleDateString())
    }
    if(newMonth == 2 && previousMonth == 0){
        skippedFebs++
    }
    // update the previous month for next time
    previousMonth = newMonth
}

console.log(blueMoons)
console.log(skippedFebs)