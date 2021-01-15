$(document).ready(function(){
  language = ""; OS = ""; age = ""; fun = "";

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
    console.log(language);
    $("."+ language).toggle()

  });
});