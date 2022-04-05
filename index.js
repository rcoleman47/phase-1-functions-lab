// Code your solution in this file!
function distanceFromHqInBlocks(block){
    const hqBlock = 42
    return Math.abs(block-hqBlock);
};
function distanceFromHqInFeet(block){
   const dFT = (distanceFromHqInBlocks(block)*264);
    return dFT;
};
function distanceTravelledInFeet(start, finish){
    return Math.abs(start-finish)*264;
};
function calculatesFarePrice(start, destination){
    let dist = Math.abs(start - destination)*264;
    if (dist <= 400){
        return 0;
    } else if (dist <= 2000){
        return ((dist - 400)*.02);
    } else if (dist <= 2500){
        return 25;
    } else if (dist > 2500){
        return 'cannot travel that far';
    };
};
