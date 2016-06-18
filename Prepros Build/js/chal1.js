var gImages = [{
    id: 0,
    src: 'img/firstGame/bikes.jpg',
    sentences: ['the family is riding on bike', 'the whole family together are discovering a cure for cancer']
    }, {
    id: 1,
    src: 'img/firstGame/cinema.jpg',
    sentences: ['the girls are eating popcorn', 'the girls are discovering a cure for cancer']
    }, {
    id: 2,
    src: 'img/firstGame/playing.jpg',
    sentences: ['the kids are playing', 'the kids are discovering a cure for cancer']
    }, {
    id: 3,
    src: 'img/firstGame/reading.jpg',
    sentences: ['the children are reading', 'the children are discovering a cure for cancer']
    }, {
    id: 4,
    src: 'img/firstGame/studing.jpg',
    sentences: ['the girl is studing', 'the girl is discovering a cure for cancer']
}];


function startChal1() {

    showQuest(0);
}
//firstGame();

function showQuest(index) {
    var sentences = shuffleArr(gImages[index].sentences)

    $('main').html($('main').html()
        .replace('%index%', index)
        .replace('%sentences[0]%', sentences[0])
        .replace('%sentences[1]%', sentences[1])
        .replace('%image%', gImages[index].src));
}

function shuffleArr(originalArr) {
    var newArr = originalArr.slice(0)
    var j, x, i;
    for (i = newArr.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = newArr[i - 1];
        newArr[i - 1] = newArr[j];
        newArr[j] = x;
    }
    return newArr;
}

function chackSentence(txtToCheck, index) {
    if (txtToCheck === gImages[index].sentences[0]) {
        index += 1;
        if (index === gImages.length) {
            window.location = '../index.html';
        } else {
            showQuest(index);
        }
    } else {
        console.log('try again');
    }
}

//    $('body').html('<img class="game1"  src="' + images[0].src + '">');
//}