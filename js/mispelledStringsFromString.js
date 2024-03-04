
const words = [] //the array where we keep all our mispelled versions
// 1. define our string and coerce (convert) it into an array
const str = "Regular.Expressi0ns=Awesome!" //master copy of our str
const strAsArray = str.split('') //master copy of our str as an array
// console.log(strAsArray)
// 2. loop ~79 times (until we have 79 versions in words)
let count = 0
while(words.length < 79 && count < 10000){
    count++
    //splice mutates! make a copy of our master array
    const copyOfStrArray = [...strAsArray]
    // const copyOfStrArray = strAsArray.slice()
    let thisWord = '' //where we make this version at
    while(copyOfStrArray.length){
        // 3. keep looping as long as we have a char to grab
        // generate a random number between 0 and strlength-1
        const rand = Math.floor(Math.random()*copyOfStrArray.length)
        // 4. splice goes to rand index, and removes 1 item, and returns it
        thisWord += copyOfStrArray.splice(rand,1)
        // console.log(thisWord.length,copyOfStrArray.length)
    }
    // 5. confirm it is unique, if so add it!
    if(!words.includes(thisWord)){
        words.push(thisWord)
    }
}
// 6. Insert the correct spelling at a random index
const rand = Math.floor(Math.random()*79)
words.splice(rand,0,str)

console.log(words.length,count)
console.log(words.join('')) //turn our array into a giant string
