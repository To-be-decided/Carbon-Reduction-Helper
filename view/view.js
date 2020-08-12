view_init = function(){

}

function selectHasValueByControl(sObj, value) {
/*    for(i=0; i<sObj.options.length; i++){
        if(sObj.options[i].value == value) return true
    } */
    return sObj.indexOf('value="' + value + '"') > -1
}