

/*create an array of random numbers*/

let randNums =[]

 makeRandArr=()=>{

     for (i=0; i < 50; i ++){
        let num = Math.floor(Math.random() * 5000)+500
        randNums.push(num)
        }
    return randNums
}

makeRandArr()

/* print the array of rand numbers*/
console.log(randNums)

/*filter and print values, with a call back function*/

const above = randNums.filter(num=>num > 2750)

/*console.log(above)*/

/* search and return a booleen with include*/

const includer = randNums.includes(3852)

console.log(includer)

/*map method*/
    /*divide each element by 2, round down*/

const halfV = randNums.map(num=> Math.floor(num/2))



    /*test if an element is above or below a set value using a ternary operator*/

let tgtV = 2750
const aboveBelow = randNums.map((num)=>num>tgtV ? 'above': 'below')

    /*create an array of 'above' values and use .length to make a percentage above target value*/

const aboveT = aboveBelow.filter(val=>val === 'above')

const pcntaboveEnum = (aboveT.length/randNums.length)*100


/*console.log(aboveBelow)*/
/*console.log(aboveT.length, above.length)*/
console.log( `${pcntaboveEnum}% of the random values are above the target value of ${tgtV}`)

    /*find index of first even number within the array*/

    function evenNmb(num){
        if(num%2===0){
            return num
        }

    }
const evenIndexes = []
evenIndexes.push(randNums.findIndex(evenNmb))

console.log(evenIndexes)

    /*make an array of even numbers from the array*/

const evenNumbers = randNums.filter(evenNmb)

console.log(evenNumbers)

    /* reduce method on the array, to add all together*/

const initVal = 0

const sumNum = randNums.reduce((accumulator, currentValue)=> accumulator + currentValue, initVal)

console.log(sumNum)