window.onload = function (){
var div = document.getElementsByTagName("div").item(0);

var hr = document.createElement("hr");
div.appendChild(hr);

var li = document.createElement("li");
li.appendChild(document.createTextNode("Teste de lista"));
div.firstChild.appendChild(li);

var atributo = document.createAttribute("style");
atributo.value = "color:blue";
li.setAttributeNode(atributo);

var select = document.createElement("select");
select.setAttribute("id", "estados");
var option = document.createElement("option");
option.setAttribute("value", "DF");
option.appendChild(document.createTextNode("Distrito Federal"));

select.appendChild(option);
div.appendChild(select);

}