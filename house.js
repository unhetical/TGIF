var arrayMember = data.results[0].members;
console.log(arrayMember[0].first_name);

function newTable(pArray) {
    var table = document.getElementById("house-data");

    for (var i = 0; i < pArray.length; i++) {

        var tr = document.createElement("tr");
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

newTable(arrayMember);

//arrayMember = position first_name
//function pArray get info from id:senate-data
// loop for
// if have null no +middle_name
// else have middle_name + all (first+middle+last)
//create table with var (tr,td,text)
// add with appendChild td inside tr, tr inside table.
// create different td for add elements.
