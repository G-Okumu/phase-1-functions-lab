// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    let headquater = 42;
    if (pickupLocation >= headquater) {
        let numberOfBlocksFromHeadquater = pickupLocation - headquater;
        return numberOfBlocksFromHeadquater;
    } else {
        return headquater - pickupLocation;
    }
}

function distanceFromHqInFeet(distance) {
    let distanceFromHqInFeet = distanceFromHqInBlocks(distance) * 264;

    return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
    }

}

function calculatesFarePrice(start, destination) {
    let distanceToGo = distanceTravelledInFeet(start, destination);
    if (distanceToGo <= 400) {
        return 0;
    } else if (distanceToGo > 400 && distanceToGo <= 2000) {
        return .02 * (distanceToGo - 400);
    } else if (distanceToGo > 2000 && distanceToGo < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}