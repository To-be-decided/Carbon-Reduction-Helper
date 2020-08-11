view_init = function(){

}

function selectHasValueByControl(c, value) {
    if (c !== null) {
        return (c.indexOf('value="' + value + '"') > -1);
    } else {
        return false;
    }
}