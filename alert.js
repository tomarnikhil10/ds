document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    if(e.key == "F12"){
        alert("Inspect Not Allowed");
        return false;
    }
}