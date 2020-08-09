// Google analytics
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'UA-173546127-1');
    window.dataLayer = window.dataLayer || [];


// Common parameters
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

