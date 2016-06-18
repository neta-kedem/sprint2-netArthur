var gSrc = 'img/chalNum1/';
var gLevel = 0;
//var gBaseDiv;
var gImages = [{
    src: gSrc + '0' + '.jpg',
    sentences: [
		'the family is riding on bike',
		'the family is discovering a cure for cancer',
		'the family is looking for cats',
		'the family is pregnent']
	}, {
    src: gSrc + '1' + '.jpg',
    sentences: [
		'the girls are eating popcorn',
		'the girls are discovering a cure for cancer',
		'the girls are looking for cats',
		'the girls are pregnent']
	}, {
    src: gSrc + '2' + '.jpg',
    sentences: [
		'the kids are playing',
	 	'the kids are discovering a cure for cancer',
	 	'the kids are looking for cats',
		'the kids are pregnent']
	}, {
    src: gSrc + '3' + '.jpg',
    sentences: [
		'the children are reading',
		'the children are discovering a cure for cancer',
		'the chilsren are looking for cats',
		'the chilsren are pregnent']
	}, {
    src: gSrc + '4' + '.jpg',
    sentences: [
		'the girl is studing',
		'the girl is discovering a cure for cancer',
		'the girl is looking for cats',
		'the girl is pregnent']
}];

function startChal1() {
    applyLevel();
    showQuest(0);
}
//show next picture and sentences
function showQuest(index) {
    var sentences = shuffleArr(gImages[index].sentences.slice(0, gLevel + 1));
    $('main').html($('.template').html()
        .replace(/%index%/g, index)
        .replace('%sentences[]%', sentences[0])
        .replace('%sentences[]%', sentences[1])
        .replace('%sentences[]%', sentences[2])
        .replace('%sentences[]%', sentences[3])
        .replace('%src%', gSrc + index + '.jpg')
        .replace('%data-src%', 'src')
    );
}

function applyLevel() {
    gLevel = +getLevel();
    console.log(gLevel);
    var sentencesHtml = $('.sentences').html();
    $('.sentences').html(sentencesHtml.repeat(gLevel + 1));
}

//validate the answer
function chackSentence(elToCheck, index) {
    var txtToCheck = elToCheck.value;
    //if you were right
    if (txtToCheck === gImages[index].sentences[0]) {
        console.log('true');
        //if you finished all the pics
        if (index == gImages.length - 1) {
            alert('you won!!');
            reportSolved('chal1');
            return;
            //show next pic
        } else {
            index++;
            showQuest(index);
            return;
        }
    } else {
        console.log($(this).removeClass('btn-primary'));
        $(this).removeClass('btn-primary').addClass('btn-danger');
    }
}