saveValues = function(){
    let expire = new Date();

    let cookieValue = JSON.stringify(settings)
    var date = new Date("Februari 10, 2099");
    var dateString = date.toGMTString();

    document.cookie = "crh_settings=" + cookieValue + ";expires="+dateString;

    // @todo Check that cookie was saved correctly
    if(document.cookie == undefined || document.cookie.search("crh_settings=" + cookieValue)==0){
        alert("Could not save changes")
    }
}

function loadValues() {
    let crh_cookiePair = document.cookie
        .split('; ')
        .find(row => row.startsWith('crh_settings'))

    if(crh_cookiePair == undefined){
        console.log("model_init(): CRH Cookie not found continuing with default values")
    }else{
        settings = JSON.parse(crh_cookiePair.split('=')[1]);
    }
}