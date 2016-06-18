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
function updateLevel(newLevel) {
    localStorage.level = newLevel;
}

function getChalNumById(chalId) {
    switch (chalId) {
        case ('chal1'):
            return 1;
        case ('chal2'):
            return 2;
        case ('chal3'):
            return 3;
        case ('chal4'):
            return 4;
    }

}

function reportSolved(chalId) {
    localStorage.setItem(chalId, Math.max(localStorage.getItem('level'), localStorage.getItem(chalId)));
    switch (chalId) {
        case 'chal1':
            var elChal1 = document.querySelector('.chal1');
            elChal1.innerHTML = '<input type="button" id="btnChal1" value="Next Game!" onclick="goToNextChal(this.id)">';        
            break;
        case 'chal2':
            var elChal2 = document.querySelector('#chal2');
            elChal2.innerHTML = '<input type="button" id="btnChal2" value="Next Game!" onclick="goToNextChal(this.id)">';
            break;
        case 'chal3':
            var elChal3 = document.querySelector('#chal3');
            elChal3.innerHTML = '<input type="button" id="btnChal3" value="Show Puki!" onclick="showPuki()">';
            break;
        case 'chal4':
            break;
    }
    
}
function goToNextChal(chalID) {
    switch (chalID) {
        case 'btnChal1':
            window.location = 'chal2.html';
            break;
        case 'btnChal2':
            window.location = 'chal3.html';
            break;
        case 'btnChal3':
            window.location = 'showPuki.html';
            break;
        case 'btnChal4':
            window.location = 'chal2.html';
            break;
    }
}
function getNextChal() {
    var unSolvedChals = [];
    gChals.forEach(chalEl => {
        if (localStorage.getItem(chalEl.id) == 0) unSolvedChals.push(chalEl.id);
    });
    return unSolvedChals[0];
}

function getLevel() {
    return localStorage.level;
}

function refresBtn(){
    window.location.reload();
}