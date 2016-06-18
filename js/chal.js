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
            break;
        case ('chal2'):
            return 2;
            break;
        case ('chal3'):
            return 3;
            break;
        case ('chal4'):
            return 4;
            break;
    }

}

function reportSolved(chalId) {
    debugger;
    localStorage.setItem(chalId, Math.max(localStorage.getItem('level'), localStorage.getItem(chalId)));
    switch (chalId) {
        case 'chal1':
            console.log('chal1');
            var el = document.querySelector('.chal1');
            el.innerHTML = '<input type="button" id="1" value="Next Game!" onclick="goToNextChal(this.id)">';        
            break;
        case 'chal2':
            var el = document.querySelector('.chal2');
            el.innerHTML = '<input type="button" id="2" value="Next Game!" onclick="goToNextChal(this.id)">';
            break;
        case 'chal3':
            var el = document.querySelector('.chal3');
            el.innerHTML = '<input type="button" id="3" value="Show Puki!" onclick="showPuki()">';
            break;
        case 'chal4':
            
            break;
        default:
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