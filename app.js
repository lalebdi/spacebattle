let mySHip = { 
                hull :20,
                firepower : 5,
                accuracy : 0.7
            };

let alien = { 
                hull : 5,
                firepower : 3,
                accuracy : 0.8
            };

//  the firepower deducts from the hull.

let attck = (attacker , attacked ) => {
        if ( attacker.accuracy <= 0.8 ){
             attacked.hull=attacked.hull - attacker.firepower 
             console.log(attacked.hull)
            console.log("the attack is succeful")
        }else{
            console.log("you missed")
        }
};



attck(mySHip, alien);

// for loop
// empty array. for loop 