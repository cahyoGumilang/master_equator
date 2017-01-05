var clik = document.getElementById('log');
var lop = document.getElementById('popup');
  clik.onclick=function(){
 lop.style.display='block';
};
/*function loggin(){
  var p = document.getElementById('pas').innerHTML;
  var g= document.getElementById('ko');
  var f = p.length;
  if ( f<8){
    g.innerHTML="maaf password anda terlalu pendek";
  }
  else {
    lop.style.display='block';
  }

};
*/
function apo() {
  var vd = "Berisi gambar-gambar tentang dunia yang sudah kiamat atau dunia setelah kiamat.pada keadaan tersebut sangat jarang ditemukanya makluk hidup selain tumbuhan yang menghiasi kota-kota yang menjadikanya kota tersebut terlihat lebih hijau."
  document.getElementById('tulis').innerHTML="Apocalipse";
  document.getElementById('apa').innerHTML = vd;
  document.getElementById('mok').style.backgroundColor = "#555";
};
function ilang() {
  var bm= document.getElementById('apa');
  var tm = document.getElementById('tulis');
  bm.innerHTML = " ";
  tm.innerHTML = " ";
}
function fan() {
  var vd = "Berisi gambar-gambar sci-fi yang tidak dapat dinalar atau hanya ada dalam dunia fantasi.gambar atau ilustrasi tersebut diambil dari internet"
  document.getElementById('tulis').innerHTML="Fantasy";
  document.getElementById('apa').innerHTML = vd;
  document.getElementById('mok').style.backgroundColor = "darkGreen";
}
function gem() {
  var vd = "Berisi gambar-gambar yang menggambarkan berbagai tempat dan suasana yang anda dapat ditemukan di dunia game.tempat tempat tersebut diambil dari beberapa judul game terkenal"
  document.getElementById('tulis').innerHTML="Game";
  document.getElementById('apa').innerHTML = vd;
  document.getElementById('mok').style.backgroundColor = "darkblue";
}
