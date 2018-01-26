
  setInterval(loadText, 1000);

  function loadText() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "tekst.txt", false);
    xhttp.send();


    document.getElementById("demo").innerHTML = xhttp.responseText;

  }

    function message () {
      var y = document.getElementById("myText").value;
      var x = document.getElementById("myName").value;

      var xhttp = new XMLHttpRequest();
      xhttp.open("PUT", "rest2.php?mykey=" + x + "&value=" + y, false);
      xhttp.send();
      clearField();
  }

  function clearField() {
      document.getElementById("myText").value = "";
  }
