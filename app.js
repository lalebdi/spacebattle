/****************************************************************************************** 
//  the firepower deducts from the hull.
// create a class for the earth ship and a class for the aliens to define these objects. 
// use the clues given to randomize the properites of the alien ships
// create an array for the aliens so we can loop through them.
// create  arrays for the specs
// the accuracy is going to be a function with Math.random() no need for rounding
// the game is going to be function
// don't forget to call the function.
// the games is gonna be if loops.
*****************************************************************************************/



// create my ship class
class USSSchwarzenegger {
    constructor (hull, firepower, accuracy) {
        this.hull = hull, 
        this.firepower = firepower,
        this.accuracy = accuracy
    };

// I'm using the ternary operator for the accuracy. 
    battle (USSSchwarzenegger) {
        (Math.random() <=0.8)? "The enemy is hit :)" : "You missed :("
        //  no swigly lines so I guess I did it right. will copy it to the invadors class with adjustments
        
    };
};


// forgot to instansiate here :(
let myShip =  new USSSchwarzenegger(20 , 5 , 0.7);

// console.log(myShip);
// created the USSSchwarzenegger object and it works!!

// creating the aliens class here:
class Invadors {
    constructor (hull, firepower, accuracy){
        this.hull = Math.floor(Math.random()*4) +3;
      this.firepower = Math.floor(Math.random() *3) +2;
      this.accuracy = (Math.floor(Math.random()*3) +6) /10;
    };
    // I'm using the ternary operator for  the accuracy here. 
    battle (Invadors) {
        (Math.random() <=0.8)? "your ship is hit :(" : "the aliens missed :)"
    };
};

// let alien = new Invadors;

// console.log(alien);
// the randomizaton works!! Happy dance :)

let hull = [];
let firepower = [];
let accuracy = [];

let aliens = [];

// creating a for loop to loop through the aliens array 6 times for the 6 alien ships.
for (let i = 0 ; i<=5 ; i++){
    let specs = Math.floor(Math.random()*4); // this is inspired by another script I found.
    // we instansiate here
    aliens.push = new Invadors(hull [specs] , firepower [specs] , accuracy[specs])
};

// console.log(aliens);
// the for loop works in the array. Hurray!!


// let mySHip = { 
//                 hull :20,
//                 firepower : 5,
//                 accuracy : 0.7
//             };

// let alien = { 
//                 hull : 5,
//                 firepower : 3,
//                 accuracy : 0.8
//             };



// let attck = (attacker , attacked ) => {
//         if ( attacker.accuracy <= 0.8 ){
//              attacked.hull=attacked.hull - attacker.firepower 
//              console.log(attacked.hull)
//             console.log("the attack is succeful")
//         }else{
//             console.log("you missed")
//         }
// };



// attck(mySHip, alien);

// for loop
// empty array. for loop 