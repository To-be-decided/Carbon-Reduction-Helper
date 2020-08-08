pBar_set = function(pBarId, perc){
    let pBarControl = document.getElementById(pBarId)

    console.log("pBar_set() called with'" +pBarId+"', " + perc)
    pBarControl.children[0].innerText = perc + "%"
    pBarControl.getElementsByClassName("pBar_meter")[0].style.backgroundSize = perc + "% 100%"
}
