console.log(3456);
let axios = require("axios");

axios({
  method: "get",
  url: "https://www.apiopen.top/journalismApi"
}).then(function(response) {
  var res = response.data.data;
  console.log(res.auto)
  var result='';
  for(var i=0;i<res.auto.length;i++){
      result+="<div>"+res.auto[i].source+"</div>"
  }
  console.log(result)

  document.getElementsByTagName("p")[0].innerHTML = result
});
