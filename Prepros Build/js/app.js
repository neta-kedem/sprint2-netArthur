'use strict';

var gState = {
    playerName: 'Muki',
};

function startChal(chalStr) {
    console.log('chalStr : ', chalStr);

}

function setLevel(levelstr) {
    console.log('levelstr : ', levelstr);

}

function renderindex() {
    for (let i = 4; i; i--) {
        //    console.log(localStorage.getItem('chal' + i));
        for (let j = +localStorage.getItem('chal' + i); j; j--) {
            $('[data-stars="' + i + '"]').append('<span class="glyphicon glyphicon-star" style="display:inline"></span>');
        }
    }
}