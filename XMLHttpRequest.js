function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "XMLHttpRequest.xml", true);
  xmlhttp.send();
}

function myFunction(xml) {
  var x, i, xmlDoc, table;
  xmlDoc = xml.responseXML;
  table =
    "<tr><th>TV SHOW</th><th>Release Year</th><th>Seasons</th></tr>";
  x = xmlDoc.getElementsByTagName("TV");
  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("TVSHOW")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("SEASONS")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("tvshow2").innerHTML = table;
}