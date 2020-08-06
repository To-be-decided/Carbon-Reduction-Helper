const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var step = urlParams.get('step')

if(step === null) {
    step=""
}

gotoMenu = function(page){
    let url = page

    if(step !== "") url = url + "?step=" + step
    window.location.href = url
}

