let errors = 1;
let errorsMax = 0;
let errorSpent = 0;
let errorClicks = 0;

let multiplier = 1;
let eps = 0 * multiplier;
let epc = 1 * multiplier;
let username = getCookie("username");
let firstTime = 0;

let windowIndex = 5;

let buyAutoclicker = 1;
let buyCrackedgame = 1;
let buyPcfaster = 1;
let buyCrackedvideo = 1;
let buyCrackedinternet = 1;
let buyAppwizard = 1;
let buyDeletehistory = 1;
let buyUpgradehardware = 1;
let buyRecyclebin = 1;
let priceAutoclicker = 100;
let priceCrackedgame = 200;
let pricePcfaster = 10000;
let priceCrackedvideo = 15000;
let priceCrackedinternet = 1000000;
let priceAppwizard = 1250000;
let priceDeletehistory = 1750000;
let priceUpgradehardware = 2500000;
let priceRecyclebin = 12500000;

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
let times6 = document.getElementById("times6");
let costs6 = document.getElementById("costs6");
let times7 = document.getElementById("times7");
let costs7 = document.getElementById("costs7");
let times8 = document.getElementById("times8");
let costs8 = document.getElementById("costs8");

let winWelcome = document.getElementById("winWelcome");
let winInternet = document.getElementById("winInternet");
let winComputer = document.getElementById("winComputer");
let winError = document.getElementById("winError");
let winFunds = document.getElementById("winFunds");
let winBsod = document.getElementById("winBsod");
let winLogin = document.getElementById("winLogin");
let winMenu = document.getElementById("winMenu");
let errorsEPS = document.getElementById("errorsEPS");
let errorsEPC = document.getElementById("errorsEPC");
let errorsMP = document.getElementById("errorsMP");
let errorsGenerated = document.getElementById("errorsGenerated");
let errorsClicked = document.getElementById("errorsClickedHolder");
let errorMaxHolder = document.getElementById("errorMaxHolder");
let errorsSpendHolder = document.getElementById("errorsSpendHolder");
let errorsInternet = document.getElementById("errorsInternet");
let usernamePc = document.getElementById("username-pc");

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
    } else if (id === 5) {
        styleId = winBsod;
        setTimeout(openWindow(3), 1839);
    } else if (id === 6) {
        styleId = winLogin;
    } else if (id === 7) {
        styleId = winMenu;
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
    } else if (id === 5) {
        styleId = winBsod;
    } else if (id === 6) {
        styleId = winLogin;
    } else if (id === 7) {
        styleId = winMenu;
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
    } else if (id === 5) {
        styleId = winBsod;
    } else if (id === 6) {
        styleId = winLogin;
    } else if (id === 7) {
        styleId = winMenu;
    }
    windowIndex++;
    styleId.style.display = "block";
    styleId.style.zIndex = windowIndex;
}

let switcher = 0;
function startSwitch() {
    if (switcher === 0) {
        openWindow(7);
        switcher = 1;
    } else {
        closeWindow(7);
        switcher = 0;
    }
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
    errorsInternet.innerHTML = errors;
    errorsEPC.innerHTML = epc;
    errorsEPS.innerHTML = eps;
    errorsClicked.innerHTML = errorClicks;
    errorsSpendHolder.innerHTML = errorSpent*multiplier;
    errorMaxHolder.innerHTML = errorsMax*multiplier;
    errorsMP.innerHTML = multiplier;
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
    times6.innerHTML = buyDeletehistory-1;
    costs6.innerHTML = (buyDeletehistory*priceDeletehistory);
    times7.innerHTML = buyUpgradehardware-1;
    costs7.innerHTML = (buyUpgradehardware*priceUpgradehardware);
    times8.innerHTML = buyRecyclebin-1;
    costs8.innerHTML = (buyRecyclebin*priceRecyclebin);
    usernamePc.innerHTML = username;
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
        case 6:
            price = priceDeletehistory;
            idBuyName = buyDeletehistory;
            break;
        case 7:
            price = priceUpgradehardware;
            idBuyName = buyUpgradehardware;
            break;
        case 8:
            price = priceRecyclebin;
            idBuyName = buyRecyclebin;
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
            case 6:
                buyDeletehistory++;
                eps = eps+1000;
                break;
            case 7:
                buyUpgradehardware++;
                epc = epc+1000;
                break;
            case 8:
                buyRecyclebin++;
                setTimeout(restartGame, 2537);
                break;
            default:
                break;
        }
    } else {
        openWindow(4);
    }
    setTimeout(updateErrors,0);
}

function login() {
    username = document.getElementById("username-input").value;
    if (username.trim() === "") {
        username = "Admin";
    }
    setCookie("username",username,365);
    closeWindow(6);
    updateErrors();
    setTimeout(setDone, 632);
}

function logoff() {
    closeWindow(0);
    closeWindow(1);
    closeWindow(2);
    closeWindow(3);
    closeWindow(4);
    closeWindow(5);
    closeWindow(7);
    switcher = 0;
    document.getElementById("winIcons").style.display = "none";
    document.getElementById("winToolbar").style.display = "none";
    openWindow(6);
}

function setDone() {
    document.getElementById("winIcons").style.display = "block";
    document.getElementById("winToolbar").style.display = "block";
    openWindow(3);
    if (firstTime === 0) {
        openWindow(0);
        firstTime++;
    }
}

function clock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let t;
    if (h > 12) {
        h -= 12;
        t = " PM";
    } else {
        t = " AM"
    }
    m = checkTime(m);
    document.getElementById("winClock").innerHTML =  h + ":" + m + t;
    setTimeout(clock, 30000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function restartGame() {
    errors = 1;
    multiplier = multiplier+0.5;
    eps = 0 * multiplier;
    epc = 1 * multiplier;
    buyAutoclicker = 1;
    buyCrackedgame = 1;
    buyPcfaster = 1;
    buyCrackedvideo = 1;
    buyCrackedinternet = 1;
    buyAppwizard = 1;
    buyDeletehistory = 1;
    buyUpgradehardware = 1;
    buyRecyclebin = 1;
    priceAutoclicker = 100;
    priceCrackedgame = 200;
    pricePcfaster = 10000;
    priceCrackedvideo = 15000;
    priceCrackedinternet = 1000000;
    priceAppwizard = 1250000;
    priceDeletehistory = 1750000;
    priceUpgradehardware = 2500000;
    priceRecyclebin = 12500000;
    updateErrors();
    closeWindow(1);
    closeWindow(2);
    closeWindow(3);
    closeWindow(4);
    openWindow(5);
}

function changeBackground(color_text) {
    document.body.style.background = color_text + " fixed center center no-repeat";
    document.body.style.backgroundSize = "cover";
}

function changeFontColor(font_color) {
    document.documentElement.style.setProperty('--text-color', font_color);
}

function changeTitleBackground(first_color, second_color) {
    document.documentElement.style.setProperty('--title-background-first', first_color);
    document.documentElement.style.setProperty('--title-background-second', second_color);
}