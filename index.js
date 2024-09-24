const headquartersLocation = 42; 

function distanceFromHqInBlocks(location) {
    return Math.abs(location - headquartersLocation);
}
function distanceFromHqInFeet(location) {
    const hqLocation = 42; 
    const distance = location - hqLocation;
    return Math.abs(distance) * 264; 
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) *264;
    
}
function calculatesFarePrice(start, destination) {
    let distance = Math.abs(destination - start) * 264;
    let freeDistance = 400;
    
    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25; 
    } else if (distance > freeDistance) {
        let chargeableDistance = distance - freeDistance;
        return chargeableDistance * 0.02; 
    } else {
        return 0; 
    }
}

