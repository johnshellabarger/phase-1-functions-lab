// Code your solution in this file!
function distanceFromHqInBlocks(currentBlock){
    let hqBlock = 42
    return Math.abs(hqBlock - currentBlock)
}

const distanceFromHqInFeet = (someValue) =>  distanceFromHqInBlocks(someValue) * 264 

function distanceTravelledInFeet(block1, block2){
    let blocksTravelled = Math.abs(block1 - block2)
    return ( blocksTravelled * 264 )
}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start,destination)
    let fare = 0;

    if(feet >= 2500){
        fare = "cannot travel that far"
    } else if (feet < 400){
        fare = 0
    } else if (feet > 2000){
        fare = 25
    } else {
        fare = parseFloat((((feet - 400) * 2) / 100).toFixed(2))
    }
    return fare 
}

calculatesFarePrice(50,60)