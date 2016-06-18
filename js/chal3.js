var gQuestions = [];
var gAnswers = [];
var gMaxNumber = 0;
var gExLeft = 16;

function startChal3() {
    gExLeft = 16;
    setMaxNumber();
    renderChal3();
    makeDragNDrop();
}

//building and rendering the question table
function renderChal3() {
    var maxAns = setMaxNumber();
    $('.questsChal3Container').append('<img class="img img-responsive" id="questsImage" src="../img/chalNum3/chal3.jpg" alt="bgImg">');
    var row = '<div class="divQuests3">';
    $('questsChal3').append(row);
    //a 4x4 table
    for (let j = 0; j < 4; j++) {
        row = '<div class="rowQuests">';

        //for every cell in the line
        for (i = 1; i <= 4; i++) {
            var answer = +getNumber(gMaxNumber);
            gAnswers.push(answer);
            var firstOperator = getNumber(+gMaxNumber);
            var secondOperator = answer - firstOperator;
            var classes = 'quest droppable';
            var excersize = Math.max(firstOperator, secondOperator) + ((Math.min(firstOperator, secondOperator) < 0) ? ' - ' : ' + ') + Math.abs(Math.min(firstOperator, secondOperator));
            row += '<div class="' + classes + '" data-ans="' + answer + '">' + excersize + '</div>';
        }

        row += '</div>';
        $('.questsChal3Container').append(row);
    }
    renderAns();

}

//render the answers array
function renderAns(){
    var row='';
    //shuffeling the answers array, adding some spice to the game
    gAnswers = shuffleArr(gAnswers);
    for (let i = 0; i < 2; i++) {
        row = '<div class="colAnswers">';
        for (j = 0; j < 8; j++) {
            var classes = 'answer draggable';
            row += '<div class="' + classes + '">' + gAnswers[(8 * i + j)] + '</div>';
        }
        row += '</div>';
        $('.answersChal3Container').append(row);
    }
    
}

function makeDragNDrop() {
    $('.draggable').draggable({
        opacity: 0.5,
        revert: 'invalid',
        cursor: 'move'
    });

    $('.droppable').droppable({
        drop: function (event, ui) {
            //if the answe match the question
            if ($(this).context.dataset.ans === ui.draggable.context.innerText) {
                //hide the answer element
                $(ui.draggable).css('visibility', 'hidden');
                //hide the question element
                $(this).css('visibility', 'hidden');
                //one piece less to solve
                gExLeft--;
                //if no more pieces left
                if (!gExLeft) {
                    reportSolved('chal3');
                    return;
                }
            }
        }
    });
}

//generate a random number from 0 to maxNm, inclusive
function getNumber(maxNum) {
    return Math.floor(Math.random() * (maxNum + 1));
}

//give you the max number according to the level
function setMaxNumber() {
    var level = getLevel();
    switch (level) {
    case ('1'):
        gMaxNumber = 10;
        break;
    case ('2'):
        gMaxNumber = 20;
        break;
    case ('3'):
        gMaxNumber = 10;
        break;
    default:
        window.location = '../index.html';
        break;
    }
}