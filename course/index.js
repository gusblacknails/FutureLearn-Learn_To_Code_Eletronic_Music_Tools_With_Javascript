function syntaxHighlight(){
  /*
    //res = res.replace(/([a-zA-Z])+.\(/g, function replaceVars(x){return '<span class="var">'+x+'</span>'});
      //res = res.replace(/\)/g, function replaceVars(x){return '<span class="var">'+x+'</span>'});
      //res = res.replace(/{/g, function(x){return '<span class="string">'+x+'</span>'} )
    //res = res.replace(/}/g, function(x){return '<span class="me">'+x+'</span>'} )
  */

  var js =  document.querySelector('#js').innerHTML;
  var res = js;

    //Matches window keywords
  res= res.replace(/window/g, function(x){return '<span class="object">'+x+'</span>'}); 

  //Matches var or new keywords
  res = res.replace(/var|new/g, function(x){return '<span class="var">'+x+'</span>'}); 

  //Matches functions keywords
  res = res.replace(/function/g, function(x){return '<span class="method">'+x+'</span>'});
  
  //Matches If keyowrds
  res = res.replace(/if/g, function(x){return '<span class="var">'+x+'</span>'});

  //Matches Methods
  res = res.replace(/\.([^;]*)(?=\()/g , function(x){return '<span class="method">'+x+'</span>'});

  //Matches Comments
  res = res.replace(/([\/\/]{2}).*/g, function(x){return '<span class="comment">'+x+'</span>'} )

  //Matches strings 
  res = res.replace(/'.'/g, function(x){return '<span class="string">'+x+'</span>'} )
  res = res.replace(/"."/g, function(x){return '<span class="string">'+x+'</span>'} )

  //Matches floats
  //res = res.replace(/[0-9]+\D\d+/g, function(x){return '<span class="integer">'+x+'</span>'} )

  //Matches integers
  //res = res.replace(/\s[0-9]+(?=;)/g,function(x){return '<span class="integer">'+x+'</span>'} )

  //Matches general numbers
  res = res.replace(/[^;a-z :*+-]\d+/g, function(x){return '<span class="integer">'+x+'</span>'})

  //HTML syntax

  // /&lt;|&gt;/g -> matches for eg: < and >

  // /&lt;[a-z]+/g -> matches tag begining eg: <canvas

  // /"[0-9a-zA-z]+"/g -> matches a property value eg: "asdad"

  // /\w+=/g -> matches any property eg: adad=


  document.querySelector('.js').innerHTML = res;
}



window.addEventListener('load', syntaxHighlight)