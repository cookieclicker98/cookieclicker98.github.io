let errors = 1;
let errorsMax = 1;
let errorSpent = 0;
let errorClicks = 0;

let multiplayer = 1;
let eps = 0 * multiplayer;
let epc = 1 * multiplayer;

let windowIndex = 5;

let buyAutoclicker = 1;
let buyCrackedgame = 1;
let buyPcfaster = 1;
let buyCrackedvideo = 1;
let buyCrackedinternet = 1;
let buyAppwizard = 1;
let priceAutoclicker = 100;
let priceCrackedgame = 200;
let pricePcfaster = 10000;
let priceCrackedvideo = 15000;
let priceCrackedinternet = 1000000;
let priceAppwizard = 1250000;

let errorTitle = document.getElementById("errorTitle");

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
let errorsGenerated = document.getElementById("errorsGenerated");
let errorsClicked = document.getElementById("errorsClickedHolder");
let errorMaxHolder = document.getElementById("errorMaxHolder");
let errorsSpendHolder = document.getElementById("errorsSpendHolder");

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
    styleId.style.display = "block";
    topWindow(id);
}

function topWindow(id) {
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
    windowIndex++;
    styleId.style.display = "block";
    styleId.style.zIndex = windowIndex;
}

function getErrors() {
    errors = errors + 1*epc;
    errorsMax = errorsMax + 1*epc;
    errorClicks++;
    updateErrors();
}

function getEPS() {
    errors = errors + eps;
    errorsMax = errorsMax + eps;
    setTimeout(getEPS,1000);
    updateErrors();
}

function updateErrors() {
    errorTitle.innerHTML = errors;
    errorsGenerated.innerHTML = errors;
    errorsEPC.innerHTML = epc;
    errorsEPS.innerHTML = eps;
    errorsClicked.innerHTML = errorClicks;
    errorsSpendHolder.innerHTML = errorSpent;
    errorMaxHolder.innerHTML = errorsMax;
    times0.innerHTML = buyAutoclicker-1;
    costs0.innerHTML = (buyAutoclicker*priceAutoclicker);
    times1.innerHTML = buyCrackedgame-1;
    costs1.innerHTML = (buyCrackedgame*priceCrackedgame);
    times2.innerHTML = buyPcfaster-1;
    costs2.innerHTML = (buyPcfaster*pricePcfaster);
    times3.innerHTML = buyCrackedvideo-1;
    costs3.innerHTML = (buyCrackedvideo*priceCrackedvideo);
    times4.innerHTML = buyCrackedinternet-1;
    costs4.innerHTML = (buyCrackedinternet*priceCrackedinternet);
    times5.innerHTML = buyAppwizard-1;
    costs5.innerHTML = (buyAppwizard*priceAppwizard);
}

function buy(itemId) {
    let price;
    let idBuyName;
    switch (itemId) {
        case 0:
            price = priceAutoclicker;
            idBuyName = buyAutoclicker;
            break;
        case 1:
            price = priceCrackedgame;
            idBuyName = buyCrackedgame;
            break;
        case 2:
            price = pricePcfaster;
            idBuyName = buyPcfaster;
            break;
        case 3:
            price = priceCrackedvideo;
            idBuyName = buyCrackedvideo;
            break;
        case 4:
            price = priceCrackedinternet;
            idBuyName = buyCrackedinternet;
            break;
        case 5:
            price = priceAppwizard;
            idBuyName = buyAppwizard;
            break;
        default:
            break;
    }
    if (errors >= price*idBuyName) {
        errors = errors - price*idBuyName;
        errorSpent = price*idBuyName + errorSpent;
        switch (itemId) {
            case 0:
                buyAutoclicker++;
                eps++;
                break;
            case 1:
                buyCrackedgame++;
                epc++;
                break;
            case 2:
                buyPcfaster++;
                eps = eps+10;
                break;
            case 3:
                buyCrackedvideo++;
                epc = epc+10;
                break;
            case 4:
                buyCrackedinternet++;
                eps = eps+100;
                break;
            case 5:
                buyAppwizard++;
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

function changeBackground(color_text) {
    document.body.style.background = color_text + " fixed center center no-repeat";
    document.body.style.backgroundSize = "cover";
}

function changeFontColor(font_color) {
    document.getElementsByClassName("win-bgIcon").style.color = font_color;
}