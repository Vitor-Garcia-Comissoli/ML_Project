
  $("img").each(function(){
    var img = this;
    
    let [first1, ...rest1] = atob(img.src.substring(26)).split('rgb(100%,100%,100%);fill-opacity:1');
    rest1 = rest1.join('rgb(100%,100%,100%);fill-opacity:1');
    
    var text1 = first1 + "transparent !important" + rest1;
    
    let [first2, ...rest2] = text1.split('svg');
    rest2 = rest2.join('svg');
    
    var text2 = first2 + "svg style='display:block !important;margin: auto !important; max-width:100% !important;height:100%;filter: drop-shadow(1px 1px 1px #00000088) !important;'" + rest2;
    
    var new_src = "data:image/svg+xml;base64,"+btoa(text2);
    
    img.src = new_src
  })

