var Artists = new Array(1);

function regArtist(name, poB, doB, bFav) {
    var artist = {name: name, poB: poB, doB: doB, bFav: bFav};
    Artists.push(artist);
}
function updateFav(cb){
  Artists[cb.index].bFav=cb.checked;
}
function searchArtist(){
    name = document.getElementById('console').value; 
    for(var i = 1; i<Artists.length; i++){
        if(Artists[i].name==name){
          document.getElementById('console').value = "Found Artist \""+name+"\" at Index "+i+".";
          return;
      }
  }
    document.getElementById('console').value = "Could not find "+name+".";
}