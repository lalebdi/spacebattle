/****************************************************************************************** 
//  the firepower deducts from the hull.
// create a class for the earth ship and a class for the aliens to define these objects. 
// use the clues given to randomize the properites of the alien ships
// create an array for the aliens so we can loop through them.
// create  arrays for the specs.
// the accuracy is going to be a function with Math.random() no need for rounding
// the game is going to be function
// don't forget to call the function.
// the game is gonna be nested if loops.
*****************************************************************************************/


// create the USSSchwarzenegger class
class USSSchwarzenegger {
    constructor(hull , firepower , accuracy) {
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
   
  }
    

// // forgot to instansiate here :(
let myShip = new USSSchwarzenegger(20 , 5 , 0.7);

// console.log(myShip);
// created the USSSchwarzenegger object and it works!!


// creating the aliens class here:
class alien {
  constructor(hull, firepower, accuracy) {
    this.hull = Math.floor(Math.random()*4) +3;
    this.firepower = Math.floor(Math.random() *3) +2;
    this.accuracy = (Math.floor(Math.random()*3) +6) /10;
  }
 
  
    }

const hull = [];
const firepower = [];
const accuracy = [];



let aliens = [];
// creating a for loop to loop through the aliens array 6 times for the 6 alien ships.
for (let i = 0; i <= 5; i++) {
  let specs = Math.floor(Math.random() * 4);  // this is inspired by another script I found.
  aliens.push(new alien(hull[specs], firepower[specs], accuracy[specs]));
}

// console.log(aliens);
// console.log(aliens.length)
// console.log(aliens[0].hull)
// the randomizaton works!! Happy dance :)

let chanceToHit 

function spaceBattle(USSSchwarzenegger, aliens){
    while (aliens.length !==0 ){
      let userChoice = prompt("attack or retreat");
      chanceToHit = Math.random()
    if (userChoice == "attack"){
        if(chanceToHit  <= myShip.accuracy){
            alert("success")
            console.log(chanceToHit)
             aliens[0].hull -=  USSSchwarzenegger.firepower
             
        }else{
            console.log(aliens[0].accuracy)
            alert("You missed");
            
            
        }
        if (aliens[0].hull <=0){
            aliens.shift();
            alert(aliens.length + " alien ships left");
            alert("Next ship");
            
            
        }
        
        
       
    }else{
        alert("GAME OVER")
        return;
    }
 } 

} 



spaceBattle(myShip, aliens);



