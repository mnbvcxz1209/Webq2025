var dataUrl = 'https://api.unsplash.com/photos?client_id=812193ef71ca946e361ed541979a0cfd91e9419a19235fd05f51ea14233f020a&per_page=30';
function getimg(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET',dataUrl,ture);
  xhr.send();
  xhr.onload=function(){
    var data = JSON.parse(this.responseText);
    add_new_ikmg(data);
  }
}
function add_new_img(dataset){
  var gal = document.getElementById("gallery");
  dataset.forEach(function(item){
    console.log(item);
    var img = document.creteElement("img");
    img.setAttribute("src",item.urls.small);
    gal.appendChild(img);
  });
}