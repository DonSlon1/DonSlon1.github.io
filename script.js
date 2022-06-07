function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("article").style.marginLeft = "250px";
    document.getElementById("p").style.width="1050px";
    }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("article").style.marginLeft = "100px";
    document.getElementById("p").style.width="1300px";
    }
function listClose(){
    document.getElementById("misninavigace").style.display = "none";
    document.getElementById("sipka").outerHTML='<span style="display: inline; margin-left: 30px;" id="sipka" onclick="listOpne()">▼</span>';
}
function listOpne(){
    document.getElementById("misninavigace").style.display = "block";
    document.getElementById("sipka").outerHTML='<span style="display: inline; margin-left: 30px;" id="sipka" onclick="listClose()">▲</span>';
}
document.getElementById("Mnav").style.display = "none";
function OpenMNav(){
    document.getElementById("Mnav").style.display = "block";
}
function CleseMNav(){
    document.getElementById("Mnav").style.display = "none";
}
