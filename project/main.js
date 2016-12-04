var body;
var tbl;
var tblBody;
var index;
var artistHandler;

function init() {
body = document.getElementsByTagName("body")[0];
tbl = document.createElement("table");
tblBody = document.createElement("tbody");
index = 1;
var row = document.createElement("tr");
 
 for (var i = 0; i < 5; i++) { 
      var cell = document.createElement("td");
      var tableheader = "";
        switch(i){
            case 0:
                tableheader = "ID";
                break;
            case 1:
                tableheader = "Name";
                break;
            case 2:
                tableheader = "Place of Birth";
                break;
            case 3:
                tableheader = "Date of Birth";
                break;
            case 4:
                tableheader = "Favorite";
                break;
            default:
                break;
        }
            var cellText = document.createTextNode(tableheader);
        
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
tblBody.appendChild(row);
tbl.appendChild(tblBody);
body.appendChild(tbl);
tbl.setAttribute("border", "1");
}

function newArtist() {
    var name = document.getElementById('inNam').value;
    var pob = document.getElementById('inPoB').value;
    var dob = document.getElementById('inDoB').value;
    var fav = document.getElementById('inFav').checked;
    $.getScript('ArtistHandler.js', regArtist(name, pob, dob, fav));
    var row = document.createElement("tr");
 
    for (var i = 0; i < 5; i++) {
      var cell = document.createElement("td");
        switch(i){
            case 0:
                var cellContent = document.createTextNode(index);
                break;
            case 1:
                var cellContent = document.createTextNode(name);
                break;
            case 2:
                var cellContent = document.createTextNode(pob);
                break;
            case 3:
                var cellContent = document.createTextNode(dob);
                break;
            case 4:
                var cellContent = document.createElement("input")
                cellContent.type = "checkbox";
                cellContent.checked = fav;
                cellContent.index = index;
                cellContent.onclick = $.getScript('ArtistHandler.js', updateFav(cellContent));
                break;
            default:
                break;
        }
      cell.appendChild(cellContent);
      row.appendChild(cell);
    }
 
    tblBody.appendChild(row);
    index++;
}
