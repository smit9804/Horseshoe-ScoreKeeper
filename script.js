let p1score = 0;
let p1scoreArray = [];
let p1scoreElement = document.getElementById("p1score");
let p1totalShoes = 0;
let p1totalShoesElement = document.getElementById("p1totalShoes");
let p1totalRingers = 0;
let p1totalRingersElement = document.getElementById("p1totalRingers");
let p1totalDoubles = 0;
let p1totalDoublesElement = document.getElementById("p1totalDoubles");
let p1ringerpct = 0;
let p1ringerpctElement = document.getElementById("p1ringerpct");

let p2score = 0;
let p2scoreElement = document.getElementById("p2score");
let p2totalShoes = 0;
let p2totalShoesElement = document.getElementById("p2totalShoes");
let p2totalRingers = 0;
let p2totalRingersElement = document.getElementById("p2totalRingers");
let p2totalDoubles = 0;
let p2totalDoublesElement = document.getElementById("p2totalDoubles");
let p2ringerpct = 0;
let p2ringerpctElement = document.getElementById("p2ringerpct");

let p3score = 0;
let p3scoreElement = document.getElementById("p3score");
let p3totalShoes = 0;
let p3totalShoesElement = document.getElementById("p3totalShoes");
let p3totalRingers = 0;
let p3totalRingersElement = document.getElementById("p3totalRingers");
let p3totalDoubles = 0;
let p3totalDoublesElement = document.getElementById("p3totalDoubles");
let p3ringerpct = 0;
let p3ringerpctElement = document.getElementById("p3ringerpct");

let playername1 = "";
let playername1Element = document.getElementById("name1");
let playername1inputElement = document.getElementById("name1input");

function name1enter() {
    playername1 === playername1inputElement.innerHTML;
    console.log(playername1);
}
// Solo practice

function p1reset() {
    p1score = 0;
    p1scoreElement.innerHTML = p1score;

    p1totalShoes = 0;
    p1totalShoesElement.innerHTML = p1totalShoes;

    p1totalRingers = 0;
    p1totalRingersElement.innerHTML = p1totalRingers;

    p1totalDoubles = 0;
    p1totalDoublesElement.innerHTML = p1totalDoubles;

    p1ringerpct = 0;
    p1ringerpctElement.innerHTML = p1ringerpct;
}

function noScorep1() {
    p1totalShoes += 2;
    p1totalShoesElement.innerHTML = p1totalShoes;
    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function add1p1() {
    //add to the total score
    p1score += 1;
    p1scoreElement.innerHTML = p1score;
    //add to the total shoes
    p1totalShoes += 2;
    p1totalShoesElement.innerHTML = p1totalShoes;
    //calculate ringer percentage
    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function add2p1() {
    //add to the total score
    p1score += 2;
    p1scoreElement.innerHTML = p1score;
    //add to the total shoes
    p1totalShoes += 2;
    p1totalShoesElement.innerHTML = p1totalShoes;
    //calculate ringer percentage
    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function ringer3p1() {
    p1score += 3;
    p1scoreElement.innerHTML = p1score;

    p1totalShoes += 2;
    p1totalShoesElement.innerHTML = p1totalShoes;

    p1totalRingers += 1;
    p1totalRingersElement.innerHTML = p1totalRingers;

    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function ringer4p1() {
    p1score = p1score + 4;
    p1scoreElement.innerHTML = p1score;

    p1totalShoes += 2;
    p1totalShoesElement.innerHTML = p1totalShoes;

    p1totalRingers += 1;
    p1totalRingersElement.innerHTML = p1totalRingers;

    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function ringer6p1() {
    p1score = p1score + 6;
    p1scoreElement.innerHTML = p1score;

    p1totalShoes += 2;
    p1totalShoesElement.innerHTML = p1totalShoes;

    p1totalRingers += 2;
    p1totalRingersElement.innerHTML = p1totalRingers;

    p1totalDoubles += 1;
    p1totalDoublesElement.innerHTML = p1totalDoubles;

    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}
function undoNoScorep1() {
    p1totalShoes -= 2;
    p1totalShoesElement.innerHTML = p1totalShoes;
    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function undoAdd1p1() {
    //add to the total score
    p1score -= 1;
    p1scoreElement.innerHTML = p1score;
    //add to the total shoes
    p1totalShoes -= 2;
    p1totalShoesElement.innerHTML = p1totalShoes;
    //calculate ringer percentage
    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function undoAdd2p1() {
    //add to the total score
    p1score -= 2;
    p1scoreElement.innerHTML = p1score;
    //add to the total shoes
    p1totalShoes -= 2;
    p1totalShoesElement.innerHTML = p1totalShoes;
    //calculate ringer percentage
    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function undoRinger3p1() {
    p1score -= 3;
    p1scoreElement.innerHTML = p1score;

    p1totalShoes -= 2;
    p1totalShoesElement.innerHTML = p1totalShoes;

    p1totalRingers -= 1;
    p1totalRingersElement.innerHTML = p1totalRingers;

    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function undoRinger4p1() {
    p1score -= 4;
    p1scoreElement.innerHTML = p1score;

    p1totalShoes -= 2;
    p1totalShoesElement.innerHTML = p1totalShoes;

    p1totalRingers -= 1;
    p1totalRingersElement.innerHTML = p1totalRingers;

    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

function undoRinger6p1() {
    p1score -= 6;
    p1scoreElement.innerHTML = p1score;

    p1totalShoes -= 2;
    p1totalShoesElement.innerHTML = p1totalShoes;

    p1totalRingers -= 2;
    p1totalRingersElement.innerHTML = p1totalRingers;

    p1totalDoubles -= 1;
    p1totalDoublesElement.innerHTML = p1totalDoubles;

    p1ringerpct = ((p1totalRingers / p1totalShoes) * 100).toFixed(2);
    if (p1ringerpct === NaN) {
        p1ringerpct = 0;
    }
    p1ringerpctElement.innerHTML = p1ringerpct;
    //add to score array for case of undo
    p1scoreArray.push(p1score);
    console.log(p1scoreArray);
}

// Two-Player Game!!!!!!!!!!!!!

//Reset the stats!
function twoReset() {
    p2score = 0;
    p2scoreElement.innerHTML = p2score;
    p3score = 0;
    p3scoreElement.innerHTML = p3score;

    p2totalShoes = 0;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoes = 0;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p2totalRingers = 0;
    p2totalRingersElement.innerHTML = p2totalRingers;
    p3totalRingers = 0;
    p3totalRingersElement.innerHTML = p3totalRingers;

    p2totalDoubles = 0;
    p2totalDoublesElement.innerHTML = p2totalDoubles;
    p3totalDoubles = 0;
    p3totalDoublesElement.innerHTML = p3totalDoubles;

    p2ringerpct = 0;
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpct = 0;
    p3ringerpctElement.innerHTML = p3ringerpct;
}
// player 2

function noScorep2() {
    //p2 and p3 total shoes count
    p2totalShoes += 2;
    p3totalShoes += 2;
    //p2 and p3 element show total shoe count
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    // p2 and p3 ringer pct count
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    // p2 and p3 element show pct
    p2ringerpctElement.innerHTML = p2ringerpct;
    p23ingerpctElement.innerHTML = p3ringerpct;
}

function add1p2() {
    p2score += 1;
    p2scoreElement.innerHTML = p2score;

    p2totalShoes += 2;
    p3totalShoes += 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function add2p2() {
    p2score += 2;
    p2scoreElement.innerHTML = p2score;

    p2totalShoes += 2;
    p3totalShoes += 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function ringer3p2() {
    p2score += 3;
    p2scoreElement.innerHTML = p2score;
    
    p2totalShoes += 2;
    p3totalShoes += 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    
    p2totalRingers +=1;
    p2totalRingersElement.innerHTML = p2totalRingers;
    
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function ringer4p2() {
    p2score += 4;
    p2scoreElement.innerHTML = p2score;
    
    p2totalShoes += 2;
    p3totalShoes += 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    
    p2totalRingers += 1;
    p2totalRingersElement.innerHTML = p2totalRingers;
    
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function a2dead1p2() {
    p2score += 1;
    p2scoreElement.innerHTML = p2score;

    p2totalShoes += 2;
    p3totalShoes += 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p2totalRingers += 1;
    p3totalRingers += 1;
    p2totalRingersElement.innerHTML = p2totalRingers;
    p3totalRingersElement.innerHTML = p3totalRingers;

    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function a3ringer3p2() {
    p2score += 3;
    p2scoreElement.innerHTML = p2score;

    p2totalShoes += 2;
    p3totalShoes += 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p2totalRingers += 2;
    p3totalRingers += 1;
    p2totalRingersElement.innerHTML = p2totalRingers;
    p3totalRingersElement.innerHTML = p3totalRingers;

    p2totalDoubles += 1;
    p2totalDoublesElement.innerHTML = p2totalDoubles;

    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function ringer6p2() {
    p2score += 6;
    p2scoreElement.innerHTML = p2score;
    
    p2totalShoes += 2;
    p3totalShoes += 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    
    p2totalRingers += 2;
    p2totalRingersElement.innerHTML = p2totalRingers;

    p2totalDoubles += 1;
    p2totalDoublesElement.innerHTML = p2totalDoubles;
    
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function a4deadp2() {
    //p2 and p3 total shoes count
    p2totalShoes += 2;
    p3totalShoes += 2;
    //p2 and p3 element show total shoe count
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p2totalRingers += 2;
    p3totalRingers += 2;
    p2totalRingersElement.innerHTML = p2totalRingers;
    p3totalRingersElement.innerHTML = p3totalRingers;

    p2totalDoubles += 1;
    p3totalDoubles += 1;
    p2totalDoublesElement.innerHTML = p2totalDoubles;
    p3totalDoublesElement.innerHTML = p3totalDoubles;
    // p2 and p3 ringer pct count
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    // p2 and p3 element show pct
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}
function undonoScorep2() {
    //p2 and p3 total shoes count
    p2totalShoes -= 2;
    p3totalShoes -= 2;
    //p2 and p3 element show total shoe count
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    // p2 and p3 ringer pct count
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    // p2 and p3 element show pct
    p2ringerpctElement.innerHTML = p2ringerpct;
    p23ingerpctElement.innerHTML = p3ringerpct;
}

function undoadd1p2() {
    p2score -= 1;
    p2scoreElement.innerHTML = p2score;

    p2totalShoes -= 2;
    p3totalShoes -= 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function undoadd2p2() {
    p2score -= 2;
    p2scoreElement.innerHTML = p2score;

    p2totalShoes -= 2;
    p3totalShoes -= 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function undoringer3p2() {
    p2score -= 3;
    p2scoreElement.innerHTML = p2score;
    
    p2totalShoes -= 2;
    p3totalShoes -= 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    
    p2totalRingers -=1;
    p2totalRingersElement.innerHTML = p2totalRingers;
    
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function undoringer4p2() {
    p2score -= 4;
    p2scoreElement.innerHTML = p2score;
    
    p2totalShoes -= 2;
    p3totalShoes -= 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    
    p2totalRingers -= 1;
    p2totalRingersElement.innerHTML = p2totalRingers;
    
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function undoa2dead1p2() {
    p2score -= 1;
    p2scoreElement.innerHTML = p2score;

    p2totalShoes -= 2;
    p3totalShoes -= 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p2totalRingers -= 1;
    p3totalRingers -= 1;
    p2totalRingersElement.innerHTML = p2totalRingers;
    p3totalRingersElement.innerHTML = p3totalRingers;

    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function undoa3ringer3p2() {
    p2score -= 3;
    p2scoreElement.innerHTML = p2score;

    p2totalShoes -= 2;
    p3totalShoes -= 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p2totalRingers -= 2;
    p3totalRingers -= 1;
    p2totalRingersElement.innerHTML = p2totalRingers;
    p3totalRingersElement.innerHTML = p3totalRingers;

    p2totalDoubles -= 1;
    p2totalDoublesElement.innerHTML = p2totalDoubles;

    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function undoringer6p2() {
    p2score -= 6;
    p2scoreElement.innerHTML = p2score;
    
    p2totalShoes -= 2;
    p3totalShoes -= 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;
    
    p2totalRingers -= 2;
    p2totalRingersElement.innerHTML = p2totalRingers;

    p2totalDoubles -= 1;
    p2totalDoublesElement.innerHTML = p2totalDoubles;
    
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

function undoa4deadp2() {
    //p2 and p3 total shoes count
    p2totalShoes -= 2;
    p3totalShoes -= 2;
    //p2 and p3 element show total shoe count
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p2totalRingers -= 2;
    p3totalRingers -= 2;
    p2totalRingersElement.innerHTML = p2totalRingers;
    p3totalRingersElement.innerHTML = p3totalRingers;

    p2totalDoubles -= 1;
    p3totalDoubles -= 1;
    p2totalDoublesElement.innerHTML = p2totalDoubles;
    p3totalDoublesElement.innerHTML = p3totalDoubles;
    // p2 and p3 ringer pct count
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    // p2 and p3 element show pct
    p2ringerpctElement.innerHTML = p2ringerpct;
    p3ringerpctElement.innerHTML = p3ringerpct;
}

//second player in 2-player game

function add1p3() {
    p3score += 1;
    p3scoreElement.innerHTML = p3score;

    p3totalShoes += 2;
    p2totalShoes += 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;

    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function add2p3() {
    p3score += 2;
    p3scoreElement.innerHTML = p3score;

    p3totalShoes += 2;
    p2totalShoes += 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;
    
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function ringer3p3() {
    p3score += 3;
    p3scoreElement.innerHTML = p3score;
    
    p3totalShoes += 2;
    p2totalShoes += 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;
    
    p3totalRingers +=1;
    p3totalRingersElement.innerHTML = p3totalRingers;
    
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function ringer4p3() {
    p3score += 4;
    p3scoreElement.innerHTML = p3score;
    
    p3totalShoes += 2;
    p2totalShoes += 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;
    
    p3totalRingers += 1;
    p3totalRingersElement.innerHTML = p3totalRingers;
    
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function a2dead1p3() {
    p3score += 1;
    p3scoreElement.innerHTML = p3score;

    p3totalShoes += 2;
    p2totalShoes += 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;

    p3totalRingers += 1;
    p2totalRingers += 1;
    p3totalRingersElement.innerHTML = p3totalRingers;
    p2totalRingersElement.innerHTML = p2totalRingers;

    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function a3ringer3p3() {
    p3score += 3;
    p3scoreElement.innerHTML = p3score;

    p2totalShoes += 2;
    p3totalShoes += 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p3totalRingers += 2;
    p2totalRingers += 1;
    p3totalRingersElement.innerHTML = p3totalRingers;
    p2totalRingersElement.innerHTML = p2totalRingers;

    p3totalDoubles += 1;
    p3totalDoublesElement.innerHTML = p3totalDoubles;

    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function ringer6p3() {
    p3score += 6;
    p3scoreElement.innerHTML = p3score;
    
    p3totalShoes += 2;
    p2totalShoes += 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;
    
    p3totalRingers += 2;
    p3totalRingersElement.innerHTML = p3totalRingers;

    p2totalDoubles += 1;
    p2totalDoublesElement.innerHTML = p2totalDoubles;
    
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function a4deadp3() {
    //p2 and p3 total shoes count
    p3totalShoes += 2;
    p2totalShoes += 2;
    //p2 and p3 element show total shoe count
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;

    p3totalRingers += 2;
    p2totalRingers += 2;
    p3totalRingersElement.innerHTML = p3totalRingers;
    p2totalRingersElement.innerHTML = p2totalRingers;

    p3totalDoubles += 1;
    p2totalDoubles += 1;
    p3totalDoublesElement.innerHTML = p3totalDoubles;
    p2totalDoublesElement.innerHTML = p2totalDoubles;
    // p2 and p3 ringer pct count
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    // p2 and p3 element show pct
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function undonoScorep3() {
    //p3 and p2 total shoes count
    p3totalShoes -= 2;
    p2totalShoes -= 2;
    //p3 and p2 element show total shoe count
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;
    // p3 and p2 ringer pct count
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    // p3 and p2 element show pct
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function undoadd1p3() {
    p3score -= 1;
    p3scoreElement.innerHTML = p3score;

    p3totalShoes -= 2;
    p2totalShoes -= 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;

    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function undoadd2p3() {
    p3score -= 2;
    p3scoreElement.innerHTML = p3score;

    p3totalShoes -= 2;
    p2totalShoes -= 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;
    
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function undoringer3p3() {
    p3score -= 3;
    p3scoreElement.innerHTML = p3score;
    
    p3totalShoes -= 2;
    p2totalShoes -= 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;
    
    p3totalRingers -=1;
    p3totalRingersElement.innerHTML = p3totalRingers;
    
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function undoringer4p3() {
    p3score -= 4;
    p3scoreElement.innerHTML = p3score;
    
    p3totalShoes -= 2;
    p2totalShoes -= 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;
    
    p3totalRingers -= 1;
    p3totalRingersElement.innerHTML = p3totalRingers;
    
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function undoa2dead1p3() {
    p3score -= 1;
    p3scoreElement.innerHTML = p3score;

    p3totalShoes -= 2;
    p2totalShoes -= 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;

    p3totalRingers -= 1;
    p2totalRingers -= 1;
    p3totalRingersElement.innerHTML = p3totalRingers;
    p2totalRingersElement.innerHTML = p2totalRingers;

    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function undoa3ringer3p3() {
    p3score -= 3;
    p3scoreElement.innerHTML = p3score;

    p2totalShoes -= 2;
    p3totalShoes -= 2;
    p2totalShoesElement.innerHTML = p2totalShoes;
    p3totalShoesElement.innerHTML = p3totalShoes;

    p3totalRingers -= 2;
    p2totalRingers -= 1;
    p3totalRingersElement.innerHTML = p3totalRingers;
    p2totalRingersElement.innerHTML = p2totalRingers;

    p3totalDoubles -= 1;
    p3totalDoublesElement.innerHTML = p3totalDoubles;

    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function undoringer6p3() {
    p3score -= 6;
    p3scoreElement.innerHTML = p3score;
    
    p3totalShoes -= 2;
    p2totalShoes -= 2;
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;
    
    p3totalRingers -= 2;
    p3totalRingersElement.innerHTML = p3totalRingers;

    p2totalDoubles -= 1;
    p2totalDoublesElement.innerHTML = p2totalDoubles;
    
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}

function undoa4deadp3() {
    //p2 and p3 total shoes count
    p3totalShoes -= 2;
    p2totalShoes -= 2;
    //p2 and p3 element show total shoe count
    p3totalShoesElement.innerHTML = p3totalShoes;
    p2totalShoesElement.innerHTML = p2totalShoes;

    p3totalRingers -= 2;
    p2totalRingers -= 2;
    p3totalRingersElement.innerHTML = p3totalRingers;
    p2totalRingersElement.innerHTML = p2totalRingers;

    p3totalDoubles -= 1;
    p2totalDoubles -= 1;
    p3totalDoublesElement.innerHTML = p3totalDoubles;
    p2totalDoublesElement.innerHTML = p2totalDoubles;
    // p2 and p3 ringer pct count
    p3ringerpct = ((p3totalRingers / p3totalShoes) * 100).toFixed(2);
    p2ringerpct = ((p2totalRingers / p2totalShoes) * 100).toFixed(2);
    // p2 and p3 element show pct
    p3ringerpctElement.innerHTML = p3ringerpct;
    p2ringerpctElement.innerHTML = p2ringerpct;
}
