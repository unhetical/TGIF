var arrayMember = data.results[0].members;
newTable(arrayMember);

function newTable(pArray) {
    var table = document.getElementById("senate-data");

    for (var i = 0; i < pArray.length; i++) {

        var tr = document.createElement("tr");
        tr.setAttribute("class","pArray[i].party);
        var td = document.createElement("td");
        var a = document.createElement("a");
        a.setAttribute("href", pArray[i].url);



        if (pArray[i].middle_name == null) {
            a.innerHTML = pArray[i].first_name + " " + pArray[i].last_name;
        } else {
            a.innerHTML = pArray[i].first_name + " " + pArray[i].middle_name + " " + pArray[i].last_name;

        }
        td.appendChild(a);
        tr.appendChild(td);

        var td1 = document.createElement("td");
        td1.innerHTML = pArray[i].party;
        tr.appendChild(td1);

        var td2 = document.createElement("td");
        td2.innerHTML = pArray[i].state;
        tr.appendChild(td2);


        var td3 = document.createElement("td");
        td3.innerHTML = pArray[i].seniority;
        tr.appendChild(td3);


        var td4 = document.createElement("td");
        td4.innerHTML = pArray[i].votes_with_party_pct;
        tr.appendChild(td4);

        table.appendChild(tr);
    }

}



//arrayMember = position first_name
//function pArray get info from id:senate-data
// loop for
// if have null no +middle_name
// else have middle_name + all (first+middle+last)
//create table with var (tr,td,text)
// add with appendChild td inside tr, tr inside table.
// create different td for add elements.


// FUNCTION CHECKED BOXES //

var checkbox = document.getElementsByTagName("input");
console.log(checkbox[0].checked);
console.log(checkbox[1].checked);
console.log(checkbox[2].checked);
for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", getCheckedBoxes);
}

function getCheckedBoxes() {
  var party = [];

    for (var i = 0; i < checkbox.length; i++) {

        if (checkbox[i].checked) {
            party.push(checkbox[i]);
        }
        if (checkbox[i].length > 0) {
            return party;
        } else {
            return null;
        }

    }
}
