// var gMainDiv = '<div class="gameContainer"></div>';
// var gQuestsDiv = '<div class="quests"></div>';
// var gAnswersDiv = '<div class="answers"></div>';

var gQuests = [
                {quest:'3 + 5 ?' , answer:'8'},
                {quest:'5 - 2 ?' , answer:'3'},
                {quest:'6 + 4 ?' , answer:'10'},
                {quest:'2 + 5 ?' , answer:'7'}
              ];

function thirdGame() {
    // hideMainContent();
    renderChal();
}
// //firstGame();

// function hideMainContent() {
//     $('#mainPage').hide();
// }
// function showChal(){
    
//     $('main').html
// }

function renderChal() {
    var html = '<table>'+
               '<div class="quest">'+ gQuests[0].quest +'</div>'+
               '<div class="quest">'+ gQuests[1].quest +'</div>'+
               '<div class="quest">'+ gQuests[2].quest +'</div>'+
               '<div class="quest">'+ gQuests[3].quest +'</div>'+
               '</table>';
    // $('#chal3').show();
    
    $('main').html(html);
}

// function shuffleArr(originalArr) {
//     var newArr = originalArr.slice(0)
//     var j, x, i;
//     for (i = newArr.length; i; i -= 1) {
//         j = Math.floor(Math.random() * i);
//         x = newArr[i - 1];
//         newArr[i - 1] = newArr[j];
//         newArr[j] = x;
//     }
//     return newArr;
// }

// function chackSentence(txtToCheck, num) {
//     if (txtToCheck === gImages[num].sentences[0]) {
//         num += 1;
//         if (num === gImages.length) {
//             window.location = '../index.html';
//         } else {
//             showQuest(num);
//         }
//     } else {
//         console.log('try again');
//     }
// }

//    $('body').html('<img class="game1"  src="' + images[0].src + '">');
//}