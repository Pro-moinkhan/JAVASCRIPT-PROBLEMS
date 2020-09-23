// feetToMile 
function feetToMile(feet){
    var Mile = feet / 5280;
    return Mile;
}

// woodCalculator 
function woodCalculator(table, chair, bed){
    var total =(table * 3 + chair * 1 + bed * 5);
    return total;
}

// brickCalculator 
function brickCalculator(floor){
    var brick = 1000;
    if(floor > 10 && floor <= 20){
        return (10 * 15 * brick) + ((floor - 10) * 12 * brick);
    }
    else if(floor > 20){
        return (10 * 15 * brick) + ((floor - 10) * 12 * brick) + ((floor - 20) * 10 * brick);
    }
    else{
        return (floor * 15 * brick);
    }
}

// tinyFriends
function firends(name){
    var tinyFrnds = name[0];
    for(i=0; i<name.length; i++){
        var char = name[i];
        if(char < tinyFrnds){
            tinyFrnds = char;
        }
    }
    return tinyFrnds;
}