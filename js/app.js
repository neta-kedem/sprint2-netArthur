'use strict';

function renderindex() {
    var nextChal=getNextChal();
    for (let i = 4; i; i--) {
    	//take the level in which the game ended
        for (let j = +localStorage.getItem('chal' + i); j; j--) {
        	//add stars accordingly
            $('[data-stars="' + i + '"]').append('<span class="glyphicon glyphicon-star" style="display:inline"></span>');
        }
    }
    for (let i = 4; i-1; i--) {
        if(isLocked(i)){
        	$('[data-stars="' + i + '"]').append('<span class="glyphicon glyphicon-lock" style="display:inline"></span>');
        }
		
	}
    updatePrograssBar();
}
 function isLocked(chalNum){
    //if the game is not yet finished and it is not the next game
 	return (!(+localStorage.getItem('chal' + chalNum))&&(getNextChal() !== ('chal' + chalNum)))
 }

 function updatePrograssBar() {
 	var percentage;
 	percentage = (getChalNumById(getNextChal())-1)*25;
 	$('.progress-bar').css('width', percentage + '%');
 	$('.progress-bar').text(percentage+ '%');
 }