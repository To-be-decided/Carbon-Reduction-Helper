function saveValues() {

    let allSelects = document.querySelectorAll('.table select');
    let setSelects = {};

    allSelects.forEach((s) => { 
        if (s.value != "") {
             console.log(s.id);
             setSelects[s.id] = s.value;
        }});

    let expire = new Date();
    expire.setTime(new Date().getTime() + 3600000*24*14);
    document.cookie = "savedValues=" + JSON.stringify(setSelects) + ";expires="+expire.toGMTString();     
}


function loadValues() {

    const setSelects = JSON.parse(document.cookie
      .split('; ')
      .find(row => row.startsWith('savedValues'))
      .split('=')[1]);    
    
    let allSelects = document.querySelectorAll('.table select');
    
    allSelects.forEach((s) => { 
        if (setSelects.hasOwnProperty(s.id)) {
             s.value = setSelects[s.id];
        }
    });
}