// feetToMile 
function feetToMile(feet){
    var Mile = feet / 5280;
    return Mile;
}

// woodCalculator 
function woodCalculator(Length, Width, Thickness)/**Cubic inches */{
    var RedWoodcalculate = (Length * Width * Thickness);
    var BdFt1 = RedWoodcalculate / 144; /**One board feet */
    var BlackWoodcalculate = (Length * Width * Thickness);/**Cubic feet */
    var BdFt2 = BlackWoodcalculate / 12; /**One board feet */
    var TotalCalcu = BdFt1 + BdFt2 ;
    return TotalCalcu;
}
var result = woodCalculator ( 36, 24, 12,);
console.log("total board area is:", result, "feet.");

// brickCalculator 
function brickCalculator(TotalWallArea){
    var TotalBricksArea = 0.228 * 0.107 * 0.069; /** indian brick size (cm) */ 
    var TotalWall_MToFeetConvert = TotalBricksArea * 0.3048;
    var TotalBrickWall_M3ToM2Convert = TotalWallArea / 1000;
    var claculateBricks = TotalBrickWall_M3ToM2Convert / TotalWall_MToFeetConvert ;
    return claculateBricks;
}
var result = brickCalculator(40);/**Cubic feet */
var FinalResult = Math.round(result);
console.log("total bricks number is :", FinalResult);

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