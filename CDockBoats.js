function slip(boat_name, boat_type, owners){
    return {
        boat_name: boat_name,
        boat_type: boat_type,
        owners: owners,
        getInfo(){
            return `${this.owners} has(have) a ${this.boat_type}boat at this slip named ${this.boat_name}`
        }
    }
}
let c08 = slip('Dragon Balls','Motor','Andrea and Tarlton Brewer')
let c09 = slip("No Worries","Motor",'Barb and Jack Jenkins')
let c10 = slip('Once Again', 'Motor','Keith and Penny Mead')
let c12 =  slip('Just One More','Motor','Mark Mitchell')
let c13 =  slip('Why Knot','Motor','Anne and Jay Moody')
let c15 =  slip('Miss Smitten','Motor','Robert and Diane Van Arsdale')
let c16 =  slip('Aquila III','Motor','Rodney Williams and Rose Uribes')
let c18 =  slip('Grace','Motor','Dan and Robbie Benjamin')
let c2 =  slip('Therapy','Motor','James Puchine')
let c20 =  slip('Traveller','Motor','Dave and Anne Scott')
let c21 =  slip('Hat Trick','Motor','Bill Ward')
let c22 =  slip('Tortuga','Motor','Jim and Marlen Zeigler')
let c23 =  slip('Betelgeuse III','Sail','Margie Davenport')
let c24 =  slip('Souther Cross','Motor','Dave Teets Tiffany Gilchrist')
let c26 =  slip('Re-Joyce','Sail','Doug and Joyce Eagles')
let c31 =  slip('Seaquel','Motor','Charles and Kathi Williams')
let c34 =  slip('Dynamene','Sail','Max Morris')
let c35 =  slip('Shearwater','Sail','Jack and Judy Filmeck')
let c38 =  slip('Day Dreamer','Motor','Kyle and Gambol Bosmans')
let c39 =  slip('Thalassa','Sail','Ed and Michelle Tully')
let c41 =  slip('Steadfast','Sail','Billy Wooten')
let c41b =  slip('Perseverence','Sail','Steve and Kathie Thompson')
let c44 =  slip('Solitude','Sail','Guy and Virginia Axtell')

console.log(c41.getInfo())
console.log(c26.getInfo())
console.log(c2.getInfo())