function init() {
    console.log('hello');
    
    // var elMainPageContent = document.querySelector('#mainPage');
    // $('main').html(elMainPageContent);
    
    // $('#chal1').hide();
    // $('#chal2').hide();
    // $('#chal3').hide();
    // $('#chal4').hide();
}
function showChal(idStr) {
    console.log('idStr:',idStr);
    
    switch (idStr) {
        case 'chal1':
            //startChal1();
            window.location = '../chal1.html';
            break;
        case 'chal2':
            window.location = '../chal2.html';
            break;
        case 'chal3':
            window.location = '../chal3.html';
            break;
        case 'chal4':
            window.location = '../chal4.html';
            break;
    }
}