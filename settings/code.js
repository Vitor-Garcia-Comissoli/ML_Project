<<<<<<< HEAD
$("img").each(function(){
  var img = this;
  
  var programming_lang = img.parentElement.previousElementSibling.className;
  
  if(programming_lang == "r"){
    let [first1, ...rest1] = atob(img.src.substring(26)).split('rgb(100%,100%,100%);fill-opacity:1');
    rest1 = rest1.join('rgb(100%,100%,100%);fill-opacity:1');
    
    var text1 = first1 + "transparent !important" + rest1;
    
    let [first2, ...rest2] = text1.split('svg');
    rest2 = rest2.join('svg');
    
    var text2 = first2 + "svg style='display:block !important;margin: auto !important; max-width:100% !important;height:100%;filter: drop-shadow(1px 1px 1px #00000088) !important;'" + rest2;
    
    var new_src = "data:image/svg+xml;base64,"+btoa(text2);
    img.src = new_src
    
  }else if(programming_lang=="python"){
    
    let [first1, ...rest1] = atob(img.src.substring(26)).split('svg height');
    rest1 = rest1.join('svg height');
    var text1 = first1 + 'svg style="display:block !important;margin: auto !important; max-width:100% !important;height:100%;filter: drop-shadow(1px 1px 1px #00000088) !important;" height' + rest1;
    var new_src = "data:image/svg+xml;base64,"+btoa(text1);
    img.src = new_src
  }
    
})
  
$(".r").each(function(){
  code_lang = '<p style=" color: slategrey; margin: 0 !important; font-size:smaller">RStudio</p><hr style=" margin-top: 5px; margin-bottom: 10px; border: 0; border-top: 0.5px solid #7080904a; ">'
  this.innerHTML = code_lang + this.innerHTML 
})
  
$(".python").each(function(){
  code_lang = '<p style=" color: slategrey; margin: 0 !important; font-size:smaller">Python</p><hr style=" margin-top: 5px; margin-bottom: 10px; border: 0; border-top: 0.5px solid #7080904a; ">'
  this.innerHTML = code_lang + this.innerHTML 
})


document.addEventListener('DOMContentLoaded', () => {

  $("table").each(function(){
    var tab = this;
    var div = document.createElement("div");
    div.style.overflowX = "scroll";
    div.style.width = "100%";
    div.style.filter = "margin: 0 !important";
    div.id = "tabelas_customizadas";
    tab.before(document.createElement("div"));
    var sub = tab.previousElementSibling;
    div.append(tab);
    sub.replaceWith(div);
  })
  
});

var width = document.getElementsByClassName('col-xs-12 col-sm-4 col-md-3')[0].clientWidth;
var toc = document.getElementById("TOC");
toc.style.maxWidth = width + "px";

$(window).resize(() =>{
    var width = document.getElementsByClassName('col-xs-12 col-sm-4 col-md-3')[0].clientWidth;
    var toc = document.getElementById("TOC");
    toc.style.maxWidth = width + "px";
});




=======
$("img").each(function(){
  var img = this;
  
  var programming_lang = img.parentElement.previousElementSibling.className;
  
  if(programming_lang == "r"){
    let [first1, ...rest1] = atob(img.src.substring(26)).split('rgb(100%,100%,100%);fill-opacity:1');
    rest1 = rest1.join('rgb(100%,100%,100%);fill-opacity:1');
    
    var text1 = first1 + "transparent !important" + rest1;
    
    let [first2, ...rest2] = text1.split('svg');
    rest2 = rest2.join('svg');
    
    var text2 = first2 + "svg style='display:block !important;margin: auto !important; max-width:100% !important;height:100%;filter: drop-shadow(1px 1px 1px #00000088) !important;'" + rest2;
    
    var new_src = "data:image/svg+xml;base64,"+btoa(text2);
    img.src = new_src
    
  }else if(programming_lang=="python"){
    
    let [first1, ...rest1] = atob(img.src.substring(26)).split('svg height');
    rest1 = rest1.join('svg height');
    var text1 = first1 + 'svg style="display:block !important;margin: auto !important; max-width:100% !important;height:100%;filter: drop-shadow(1px 1px 1px #00000088) !important;" height' + rest1;
    var new_src = "data:image/svg+xml;base64,"+btoa(text1);
    img.src = new_src
  }
    
})
  
$(".r").each(function(){
  code_lang = '<p style=" color: slategrey; margin: 0 !important; font-size:smaller">RStudio</p><hr style=" margin-top: 5px; margin-bottom: 10px; border: 0; border-top: 0.5px solid #7080904a; ">'
  this.innerHTML = code_lang + this.innerHTML 
})
  
$(".python").each(function(){
  code_lang = '<p style=" color: slategrey; margin: 0 !important; font-size:smaller">Python</p><hr style=" margin-top: 5px; margin-bottom: 10px; border: 0; border-top: 0.5px solid #7080904a; ">'
  this.innerHTML = code_lang + this.innerHTML 
})


document.addEventListener('DOMContentLoaded', () => {

  $("table").each(function(){
    var tab = this;
    var div = document.createElement("div");
    div.style.overflowX = "scroll";
    div.style.width = "100%";
    div.style.filter = "margin: 0 !important";
    div.id = "tabelas_customizadas";
    tab.before(document.createElement("div"));
    var sub = tab.previousElementSibling;
    div.append(tab);
    sub.replaceWith(div);
  })
  
});







>>>>>>> 3ccef94d7154cd69cd0fd4fc6048801a19467be8
