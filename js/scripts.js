$(document).ready(function () {
  let language = "";
  $("#questions").submit(function (event) {
    event.preventDefault();
    const name = $("#nameInput").val();

    if (name === "") {
      alert("Please enter your name in the first textbox.");
    }
    else {
      $("#pepe").fadeIn();
      if (!(language === "")) {
        $("#result").hide();
        $("." + language).hide();
      }

      $("span#nameOutput").text(name);
      language = $("#language").val();

      if (language === "none") {
        const age = $("input:radio[name=age]:checked").val();
        const os = $("#OS").val();

        if ((age === "senior") || (os === "Windows") || (os === "Android")) {
          language = "csharp";
        }

        else if ((os === "Mac") || (os === "iOS")) {
          language = "python";
        }

        else {
          language = "javascript";
        }
      }

      $("." + language).show();
      $("#pepe").fadeOut(function(){ $("#result").fadeIn();});
    }
  });
});