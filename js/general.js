function backToHomePage() {
    window.location = "index.html"
}

function refresBtn(){
    window.location.reload();
}

function showPuki() {
    window.open('showPuki.html');
}

function showChal(idStr) {
    console.log('idStr:', idStr);

    switch (idStr) {
        case 'chal1':
            window.location = '../chal1.html';
            break;
        case 'chal2':
            if(!isLocked(2))
                window.location = '../chal2.html';
            break;
        case 'chal3':
            if(!isLocked(3))
                window.location = '../chal3.html';
            break;
        case 'chal4':
            if(!isLocked(4))
                window.location = '../chal4.html';
            break;
    }
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