var gChals = [
    {
        id: 'chal1',
        name: 'what\'s in the picture',
        src: 'chal1.js'
    },
    {
        id: 'chal2',
        name: 'numbers master',
        src: 'chal2.js'
    },
    {
        id: 'chal3',
        name: 'puzzle king',
        src: 'chal3.js'
    }, {
        id: 'chal4',
        name: 'count me in',
        src: 'chal4.js'
    }
];

function saveDBtoLS() {
    if (localStorage.getItem("username") === null) {

        gChals.forEach(chalEl => {
            let id = chalEl.id;
            localStorage.setItem(id, 0);
        });
        localStorage.level = 1;
    }
}
//saveDBtoLS();
function updateLevel(newLevel){
    localStorage.level=newLevel;
}

function getChals() {

}

function getChalById(chalId) {
    switch (chalId) {
    case ('chal1'):
        window.location = gChals[0].src;
        break;
    case ('chal2'):
        window.location = gChals[1].src;
        break;
    case ('chal3'):
        window.location = gChals[2].src;
        break;
    case ('chal4'):
        window.location = gChals[3].src;
        break;
    }

}

// function renderChals() {}

function reportSolved(chalId) {
    localStorage.setItem(chalId, Math.max(localStorage.getItem('level'), localStorage.getItem(chalId)));
}
reportSolved('chal1');

function getCurrChal() {
    var unSolvedChals = [];
    gChals.forEach(chalEl => {
        if (localStorage.getItem(chalEl.id) == 0) unSolvedChals.push(chalEl.id);
    });
    return unSolvedChals[0];
}
//console.log(getCurrChal());