$(document).ready(function(){
  let language = "";

  $(questions).submit(function(event){

    event.preventDefault(); 

    if(language === "")
    {
      $("#result").show();
      $("#description").show();
    }
    else
    {
      $("."+ language).hide();
    }
    $("span#nameOutput").text($("#nameInput").val());
    
    language = $("#language").val();

    if(language === "none")
    {
      const age = $("input:radio[name=age]:checked").val();
      const os = $("#OS").val();
      if ((age === "senior") || (os === "Windows") || (os === "Android"))
      {
        language = "csharp";
      }

      else if ((os === "Mac") || (os === "iOS"))
      {
        language = "python";
      }

      else
      {
        language = "javascript";
      }
    }
    

    $("." + language).show();
  });
});