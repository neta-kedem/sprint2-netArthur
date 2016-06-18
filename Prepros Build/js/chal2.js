var gState = {
    currLine: 0,
    numHiddenNum: 0,
    allNumsToDrag: []
}

function startChal2() {
    console.log('second gameee');
    gState.numHiddenNum = 2;
    level1();
}

function level1() {
    var count = 1;
    var row = '<div class="tblQuests"><table><tbody>';
    var allNumsToDrag = [];
    $('main').append(row);
    for (let j = 0; j < 10; j++) {
        row = '<tr>';
        var numsToDrag = randomNums(gState.numHiddenNum, j);

        allNumsToDrag.push(numsToDrag);
        for (i = 1; i <= 10; i++) {

            var numToShow = numsToDrag.some(num => i === num) ? '&nbsp&nbsp&nbsp' : pad(10 * j + i);

            row += '<td class="tdGame2 tdhidden" ondrop="drop(event)" id="' + count + '" ondragover="allowDrop(event)">' + numToShow + '</td>';
            count++;
        }
        row += '</tr>';
        $('main').append(row);
    }
    row += '</tbody></table></div>';

    $('main').append(numsToDrag.join);
    gState.allNumsToDrag = allNumsToDrag;
    showLine(gState.currLine);
    //    showAnswers(gState.currLine);
}

function showAnswers(lineNum) {
    var numsToShow = gState.allNumsToDrag[lineNum];
    var html = '<div class="tblAnswers"><table><tbody>';
    //    console.log(numsToShow);
    numsToShow.forEach(num => html += '<tr><td class="tdGame2" data-num="' + num + '" draggable="true" ondragstart="drag(event)">' + num + '</td></tr>');
    html += '</tbody></table></div>';
    $('main').append(html);
}

function showLine(lineNum) {
    showAnswers(lineNum);
    console.log(lineNum);
    var lineToShow = $('.tdGame2:lt(' + (lineNum + 1) * 10 + ')').removeClass('tdhidden');
    //    console.log($('.tdhidden:lt(' + (lineNum + 1) * 10 + ')'));
}

function randomNums(numOfEmptyCells, lineNum) {
    var nums = [];
    var num = ((Math.floor(Math.random() * 10) + 1) + (lineNum * 10));
    nums.push(num);
    while (nums.length < numOfEmptyCells) {
        num = ((Math.floor(Math.random() * 10) + 1) + (lineNum * 10));
        if (!nums.includes(num)) {
            nums.push(num);
        }
    }
    return nums;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.path[0].innerHTML);
    //    console.log(ev.path[0].innerHTML);
}

function drop(ev) {
    ev.preventDefault();
    var txtDragged = ev.dataTransfer.getData("text");
    var txtTarget = $('#' + ev.target.id)[0].id;

    if (txtTarget === txtDragged) {
        $('#' + txtTarget).text(txtDragged);
        $('[data-num=' + txtTarget + ']').addClass('totalyhidden');
        gState.numHiddenNum--;
        if (!gState.numHiddenNum) {
            //            debugger;
            showLine(++gState.currLine);
        }

    }
}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "&nbsp&nbsp" + valString;
    }
    if (valString.length < 3) {
        return "&nbsp" + valString;
    } else {
        return valString;
    }
}