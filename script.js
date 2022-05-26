function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("article").style.marginLeft = "250px";
    }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("article").style.marginLeft = "100px";
    }
function listClose(){
    document.getElementById("misninavigace").style.display = "none";
    document.getElementById("sipka").outerHTML='<span style="display: inline; margin-left: 30px;" id="sipka" onclick="listOpne()">▼</span>';
}
function listOpne(){
    document.getElementById("misninavigace").style.display = "block";
    document.getElementById("sipka").outerHTML='<span style="display: inline; margin-left: 30px;" id="sipka" onclick="listClose()">▲</span>';
}