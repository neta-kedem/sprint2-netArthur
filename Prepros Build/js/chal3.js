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
    var htmlQuests = '<div class=colQuests>'+
                            '<div class="quest" ondrop="drop(event)" ondragover="allowDrop(event)">'+ gQuests[0].quest +'</div>'+
                            '<div class="quest" ondrop="drop(event)" ondragover="allowDrop(event)">'+ gQuests[1].quest +'</div>'+
                            '<div class="quest" ondrop="drop(event)" ondragover="allowDrop(event)">'+ gQuests[2].quest +'</div>'+
                            '<div class="quest" ondrop="drop(event)" ondragover="allowDrop(event)">'+ gQuests[3].quest +'</div>'+
                     '</div>'+
                     '<div class=colQuests>'+
                            '<div class="quest">'+ gQuests[0].quest +'</div>'+
                            '<div class="quest">'+ gQuests[1].quest +'</div>'+
                            '<div class="quest">'+ gQuests[2].quest +'</div>'+
                            '<div class="quest">'+ gQuests[3].quest +'</div>'+
                     '</div>'+
                     '<div class=colQuests>'+
                            '<div class="quest">'+ gQuests[0].quest +'</div>'+
                            '<div class="quest">'+ gQuests[1].quest +'</div>'+
                            '<div class="quest">'+ gQuests[2].quest +'</div>'+
                            '<div class="quest">'+ gQuests[3].quest +'</div>'+
                     '</div>'+
                     '<div class=colQuests>'+
                            '<div class="quest">'+ gQuests[0].quest +'</div>'+
                            '<div class="quest">'+ gQuests[1].quest +'</div>'+
                            '<div class="quest">'+ gQuests[2].quest +'</div>'+
                            '<div class="quest">'+ gQuests[3].quest +'</div>'+
                     '</div>';
                    
    var htmlAnswers = '<div class=colAnswers>'+
                            '<div class="answer" draggable="true" ondragstart="drag(event)">'+ gQuests[0].answer +'</div>'+
                            '<div class="answer">'+ gQuests[1].answer +'</div>'+
                            '<div class="answer">'+ gQuests[2].answer +'</div>'+
                            '<div class="answer">'+ gQuests[3].answer +'</div>'+
                      '</div>'+
                            '<div class=colAnswers>'+
                            '<div class="answer">'+ gQuests[0].answer +'</div>'+
                            '<div class="answer">'+ gQuests[1].answer +'</div>'+
                            '<div class="answer">'+ gQuests[2].answer +'</div>'+
                            '<div class="answer">'+ gQuests[3].answer +'</div>'+
                      '</div>'+
                      '<div class=colAnswers>'+
                            '<div class="answer">'+ gQuests[0].answer +'</div>'+
                            '<div class="answer">'+ gQuests[1].answer +'</div>'+
                            '<div class="answer">'+ gQuests[2].answer +'</div>'+
                            '<div class="answer">'+ gQuests[3].answer +'</div>'+
                      '</div>'+
                      '<div class=colAnswers>'+
                            '<div class="answer">'+ gQuests[0].answer +'</div>'+
                            '<div class="answer">'+ gQuests[1].answer +'</div>'+
                            '<div class="answer">'+ gQuests[2].answer +'</div>'+
                            '<div class="answer">'+ gQuests[3].answer +'</div>'+
                      '</div>';
    
    $('.questsChal3').html(htmlQuests);
    $('.answersChal3').html(htmlAnswers);
}

function allowDrop(ev) {
    // debugger;
    ev.preventDefault();
}

function drag(ev) {
    // debugger;
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    // debugger;
    
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
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