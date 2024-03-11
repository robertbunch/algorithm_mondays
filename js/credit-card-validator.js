//Visa: Starts: 4       #digits: 13/16
//MC:   Starts: 5       #digits: 16
//Amex: Starts: 3,4/7   #digits: 15
//Disc: Starts: 6       #digits: 16


const cards = [
    '30000000000000', //bad amex
    '340000000000000', //valid amex
    '3400000000000000', //bad amex
    '370000000000000', //valid amex
    '45370000000000000', //bad amex
    '440000000000000', //bad Visa
    '4400000000000', //valid Visa
    '4400000000000000',  //valid Visa
    '4400000000000000a', //bad visa
    '24400000000000000', //bad visa
    '44400000000000000', //bad visa
    '5400000000000000', //valid MC
    '54000000000000000', //bad
    '154000000000000000', //bad
    '6011000000000000', //valid disc
    '60110000r0000000', //bad
    '60110000s00000000',//bad
]
const validateCC = ccNumber => {
    //Visa:
    // we need to make sure that we start with a 4. We use ^
    // we need to make sure we have exactly 12 or 15 digits after
    // the 4, or we do not have a match, use an | and use a $
    if(ccNumber.match(/^4(\d{12}|\d{15})$/)){
        console.log(ccNumber, " is a valid Visa card")
    }else if(ccNumber.match(/^5\d{15}$/)){
        //MC
        console.log(ccNumber, " is a valid MasterCard")
    }else if(ccNumber.match(/^3[4,7]\d{13}$/)){
        //Amex
        console.log(ccNumber, " is a valid AMEX")
    }else if(ccNumber.match(/^6\d{15}$/)){
        //Discover Card
        console.log(ccNumber, " is a valid Discover")
    }
    
}

cards.forEach(validateCC)