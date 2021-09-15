let errors = 1;
let multiplayer = 1;
let eps = 0 * multiplayer;
let epc = 1 * multiplayer;
let zIndex = 5;

let buyAutc = 1;
let buyGame = 1;
let buyPcfs = 1;
let buyCrvd = 1;
let buyCrin = 1;
let buyApwz = 1;

let errorTitle = document.getElementById("errorTitle");
let errorsGenerated = document.getElementById("errorGenerated");

let times0 = document.getElementById("times0");
let costs0 = document.getElementById("costs0");
let times1 = document.getElementById("times1");
let costs1 = document.getElementById("costs1");
let times2 = document.getElementById("times2");
let costs2 = document.getElementById("costs2");
let times3 = document.getElementById("times3");
let costs3 = document.getElementById("costs3");
let times4 = document.getElementById("times4");
let costs4 = document.getElementById("costs4");
let times5 = document.getElementById("times5");
let costs5 = document.getElementById("costs5");

let winWelcome = document.getElementById("winWelcome");
let winInternet = document.getElementById("winInternet");
let winComputer = document.getElementById("winComputer");
let winError = document.getElementById("winError");
let winFunds = document.getElementById("winFunds");
let errorsEPS = document.getElementById("errorsEPS");
let errorsEPC = document.getElementById("errorsEPC");

function closeWindow(id) {
    let styleId;
    if (id === 0) {
        styleId = winWelcome;
    } else if (id === 1) {
        styleId = winInternet;
    } else if (id === 2) {
        styleId = winComputer;
    } else if (id === 3) {
        styleId = winError;
    } else if (id === 4) {
        styleId = winFunds;
    }
    styleId.style.display = "none";
}

function openWindow(id) {
    let styleId;
    if (id === 0) {
        styleId = winWelcome;
    } else if (id === 1) {
        styleId = winInternet;
    } else if (id === 2) {
        styleId = winComputer;
    } else if (id === 3) {
        styleId = winError;
    } else if (id === 4) {
        styleId = winFunds;
    }
    zIndex++;
    styleId.style.display = "block";
    styleId.style.zIndex = zIndex;
}

function getErrors() {
    errors = errors + 1*epc;
    updateErrors();
}

function getEPS() {
    errors = errors + eps;
    setTimeout(getEPS,1000);
    updateErrors();
}

function updateErrors() {
    errorTitle.innerHTML = errors;
    errorsGenerated.innerHTML = errors;
    errorsEPC.innerHTML = epc;
    errorsEPS.innerHTML = eps;
    times0.innerHTML = buyAutc;
    costs0.innerHTML = (buyAutc*50);
    times1.innerHTML = buyGame;
    costs1.innerHTML = (buyGame*120);
    times2.innerHTML = buyPcfs;
    costs2.innerHTML = (buyPcfs*1000);
    times3.innerHTML = buyCrvd;
    costs3.innerHTML = (buyCrvd*2500);
    times4.innerHTML = buyCrin;
    costs4.innerHTML = (buyCrin*12500);
    times5.innerHTML = buyApwz;
    costs5.innerHTML = (buyApwz*20000);
}

function buy(itemId) {
    let price;
    let idBuyName;
    switch (itemId) {
        case 0:
            price = 50;
            idBuyName = buyAutc;
            break;
        case 1:
            price = 120;
            idBuyName = buyGame;
            break;
        case 2:
            price = 1000;
            idBuyName = buyPcfs;
            break;
        case 3:
            price = 2500;
            idBuyName = buyCrvd;
            break;
        case 4:
            price = 12500;
            idBuyName = buyCrin;
            break;
        case 5:
            price = 20000;
            idBuyName = buyApwz;
            break;
        default:
            break;
    }
    if (errors >= price*idBuyName) {
        errors = errors - price*idBuyName;
        switch (itemId) {
            case 0:
                buyAutc++;
                eps++;
                break;
            case 1:
                buyGame++;
                epc++;
                break;
            case 2:
                buyPcfs++;
                eps = eps+10;
                break;
            case 3:
                buyCrvd++;
                epc = epc+10;
                break;
            case 4:
                buyCrin++;
                eps = eps+100;
                break;
            case 5:
                buyApwz++;
                epc = epc+100;
                break;
            default:
                break;
        }
    } else {
        openWindow(4);
    }
    setTimeout(updateErrors,0);

}