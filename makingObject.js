let golfClub = {
    make: 'Ben Hogan',
    model: 'Radials',
    year: '1970-1979',
    getInfo(){
        return `I have as set of ${this.make} ${this.model} of the ${this.year} era.`
    }
}
/*console.log(golfClub.getInfo())*/

/* a factory function for objects*/

function collection(make, model, year, pricePaid){
   return {
    make: make,
    model: model,
    year: year,
    pricePaid: pricePaid,
    getData(){
        return `This box has ${this.make} ${this.model} ${this.year}, and you paid ${this.pricePaid}`
    }
   }

}
let box_1 = collection('Ben Hogan', 'Apex', '1968', '$62.00')
let box_2 = collection('Ben Hogan', 'Radial', '1972', '$102.00')
let box_3 = collection('Wilson Staff', 'Dyna-Powered', '1956', '$35.00')
let box_4 = collection('MacGregor', 'CF-4000', '1968', '$70.00')

/*console.log(box_1.getData())
console.log(box_2.getData())
console.log(box_3.getData())
console.log(box_4.getData())*/

/*class constructor/prototype method */

function StorageUnit(box, content, value){
    this.box = box
    this.content = content
    this.value = value
}

StorageUnit.prototype.getContent=function(){
    return `Box ${this.box} contains ${this.content} valued at $ ${this.value}`
}

let Tully = new StorageUnit(001, 'books', 150)
let Simpson =  new StorageUnit(001, 'Silver', 50)

/*console.log(Tully.getContent())*/

/*Easier way using classes*/

class StorageBox {
    constructor (box, content, value){
        this.box = box
        this.content = content
        this.value = value
    }
    getContentInfo(){
        return `This box ${this.box} contains ${this.content} valued at $ ${this.value}`
    }
}

let James = new StorageBox(525, 'tools', 220)
let Brown =  new StorageBox(414,'Beer Mugs', 300)
let Bates = new StorageBox(6877,'Silver Ware',1500)

/*console.log(James.getContentInfo())
console.log(Brown.getContentInfo())
console.log(Bates.getContentInfo())*/

/*class constructor with nested object for storage unit  client, location, and room*/

class StorageLocker {
    constructor(client,building, room){
        this.building = building
        this.room = room
        this.client = client
        this.boxNums = []
            }
        get num(){
            return `${this.client} owns box(es): ${this. boxNums}.`
            }
        get location(){
            return `${this.client} collection is located in ${this.building}, room ${this.room}`
        }
        set box(num) {
            this.boxNums.push(num)
            }
            }  
        
    
            /* make a new class for tully*/
    let Tullye = new StorageLocker('tullyE','Addison', '3C')
            /* SET the id's of tullys boxes, notice the use of the = , tripped me up a bit*/
    Tullye.box = '001'
    Tullye.box = '002'
    Tullye.box = '003'
            /* log out the client*/

   /* console.log(Tullye.client)
            /*lot out the boxes with the Getter*/
  /*  console.log(Tullye.num)
    console.log(Tullye.location)*/

            /*Another class declaration*/

    let Shellback = new StorageLocker('shellbackME', 'John Rice Hall','2A')
    Shellback.box = '898754'
    Shellback.box = '545852'
    Shellback.box = '844445'
    Shellback.box = '836875'
    Shellback.box = '425744'

   /*console.log(Shellback.num, Shellback.client, Shellback.location)*/

    /*make a new class by extending storagelocker*/

    class LockerPlus extends StorageLocker{
        constructor(client, building, room){
            super(client,building,room)
            this.boxNums = []
            this.locked = ''
        }
        set secure(val){
            this.locked = val
       }

        set box(num){
            this.boxNums.push(num)
        }
        get num(){
            return `${this.client} owns box(es) ${this. boxNums}.`
            }
        
        get needKey(){
            return `This property is locked? ${this.locked}`
        }
       
    }
    let Wanderer= new LockerPlus('Johnson','RHodes Hall','b-135')
    Wanderer.box = '896'
    Wanderer.box = '897'
    Wanderer.secure = 'Yes'

    console.log(Wanderer.location, Wanderer.num, Wanderer.needKey)
    