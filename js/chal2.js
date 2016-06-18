var gState = {
    currLine: 0,
    //how many numbers the player need to drag, depends on the level
    numHiddenNum: 0,
    //how many number the player still need to drag
    currHiddenNum: 0,
    //an array of arrays- each inner araay has the numbers to drag in this line
    allNumsToDrag: []
}

function startChal2() {
    console.log('second game!');
    getNumHiddenNum();
    renderBoard();
}
//depend on the level, how many number to hide
function getNumHiddenNum() {
    var level = getLevel();
    console.log(level);

    switch (level) {
    case ('1'):
        gState.numHiddenNum = 2;
        break;
    case ('2'):
        gState.numHiddenNum = 3;
        break;
    case ('3'):
        gState.numHiddenNum = 5;
        break;
    default:
        window.location = '../index.html';
        break;
    }


}

function renderBoard(level) {
    //counts cell number
    var count = 1;
    var row = '<div class="divQuests2"><table><tbody>';
    $('.questsChal2Container').append(row);
    //for every row
    for (let j = 0; j < 10; j++) {
        row = '<tr>';
        //get an array of the numbers to hide
        var numsToDrag = randomNums(gState.numHiddenNum, j);
        //put it in an array of arrays, in the glob variable
        gState.allNumsToDrag.push(numsToDrag);
        //for every cell in the line
        for (i = 1; i <= 10; i++) {
            //if the number is in the array to hide- make it blank, else write a number to it
            var numToShow = gState.allNumsToDrag[j].some(num => count === num) ? '' : (10 * j + i);
            var classes = 'tdGame2 tblQuests2 tdhidden';
            //the cells with hidden number are getting ready to become droppable. they are very excited
            if (!numToShow) classes += ' droppable';
            row += '<td class="' + classes + '" data-value="' + count + '">' + numToShow + '</td>';
            count++;
        }
        row += '</tr>';
        $('.questsChal2Container').append(row);
    }
    //the cells get their droppable badge 
    makeMeDroppable();

    row += '</tbody></table></div>';

    $('.questsChal2Container').append(numsToDrag.join);
    //show the numbers of each line in it's time
    showNextLine(gState.currLine);
}

//the cell brides are waiting for their future husbands
function makeMeDroppable() {
    //they go through a harsh selective process
    $('.droppable').droppable({
        drop: function (event, ui) {
            //to ensure they find the best match
            if ($(this).context.dataset.value === ui.draggable.context.innerText) {
                //make sure he is loyal
                $(ui.draggable).draggable('disable');
                //counting to make sure everyone gets their fair share
                gState.currHiddenNum++;
                if (gState.currHiddenNum == gState.numHiddenNum) {
                    //OMG you won the game
                    if (gState.currLine === 9) {
                        reportSolved('chal2');
                        return;
                    }
                    //show next line of numbers
                    showNextLine(++gState.currLine);
                }
            }
        }
    });
}

//reveals next number lines, and the number that need to be dragged
function showNextLine(lineNum) {
    gState.currHiddenNum = 0;
    showAnswers(lineNum);
    var numsToDrag = gState.allNumsToDrag[lineNum];
    //choose all cuurently shown nums, and 10 more
    var lineToShow = $('.tblQuests2:lt(' + (lineNum + 1) * 10 + ')').removeClass('tdhidden');
}

//show the number to drag
function showAnswers(lineNum) {
    var numsToShow = gState.allNumsToDrag[lineNum];
    var html = '<div class="divAnswers2"><table><tbody>';
    numsToShow.forEach(num => {
        html += '<tr><td class="tdGame2 tblAnswers2 draggable" data-num="' + num + '">' + num + '</td></tr>';

    });
    html += '</tbody></table></div>';
    $('.answersChal2Container').append(html);
    //make them draggable, what an excitement
    $('.draggable').draggable({
        opacity: 0.5,
        //if you didn't find an appropriate bride, go back home, alone and forsaken
        revert: 'invalid',
        cursor: 'move'
    });
    //if it doesn't work out, you can allways go back to live with your parents
    $('.divAnswers2').droppable();
}

//generate an array of nums that will be in the hidden numbers array
function randomNums(arrSize, lineNum) {
    var nums = [];
    var num = ((Math.floor(Math.random() * 10) + 1) + (lineNum * 10));
    nums.push(num);
    while (nums.length < arrSize) {
        num = ((Math.floor(Math.random() * 10) + 1) + (lineNum * 10));
        if (!nums.includes(num)) {
            nums.push(num);
        }
    }
    return nums;
}