
/*Convert stirng message to array of code based on provided cypher*/

let message1 = ['i hold these truths to be self evident that all men are created equal under god']

let cypherSet = ['bcadefghjiklnmopstrvuxzq']
let ansKey = []
let mssgOut = []

function codeGen(message){
    const cypherArr = cypherSet[0].split('')
    const mssgArrayd = message[0].split("")
    let maLength = mssgArrayd.length
    
    for(i=0; i <= maLength-1; i++){
    
        let key = cypherArr.indexOf(mssgArrayd[i]
)
        ansKey.push(key)

       /* mssgOut.push(cypherArr[key])*/
    }
   /* messageEncoded = mssgOut.join('')*/
        
        return ansKey

}

/* function takes array of code, the private cypher and converts to text message*/

let diffCypher = ['nopqrstuvwxyzabcdefghijklm']

function interp(theKey, cyph){
    const cypherArr = cyph[0].split('')
    let resArr = []
    
    for(i=0; i<=theKey.length-1; i++){
        let valu = theKey[i]
        if(valu == -1){
            resArr.push(' ')
        }else{
            let res = cypherArr[valu]
            resArr.push(res)
        }
         }
         mssgReveal = resArr.join('')

        return mssgReveal
}


/* call functions*/


codeGen(message1)
interp(ansKey, diffCypher)


/*test output*/

console.log(message1)

console.log(ansKey)

console.log(mssgReveal)