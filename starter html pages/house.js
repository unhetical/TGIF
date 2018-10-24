var url = "https://api.propublica.org/congress/v1/113/house/members.json";
var checkbox = document.getElementsByTagName("input"); 


fetch(url, {
    headers: {
        "X-API-Key": "Gk4q1LhfyZlB9T5EedIxo3BU7pLqjIl41GO4ZY13"
    }
}).then(function (data) {
    return data.json();
}).then(function (myData) {
    console.log(myData);
    arrayMember = myData.results[0].members;
    newTable(arrayMember);
    check(arrayMember);
    filter(arrayMember);
    var states = fillArray(arrayMember);
    fillArray(arrayMember);
var statesResult = compareArray(states);
    state_fun(statesResult);
})


//-------TABLE-------//

function newTable(pArray) {
    var table = document.getElementById("house-data");

    for (var i = 0; i < pArray.length; i++) {

        var tr = document.createElement("tr");
        tr.setAttribute("class", pArray[i].party);

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
        td4.innerHTML = pArray[i].votes_with_party_pct + " %";
        tr.appendChild(td4);

        table.appendChild(tr);
    }

}

//--- FUNCTION LISTENER ---//

function check(c) {
document.getElementById("state").addEventListener("change", filter);
    for (var i = 0; i < checkbox.length; i++) { //listen in each click and start function filter
        checkbox[i].addEventListener("click", filter);
    }
}

//---FUNCTION PUSH VALUE IN EMPTY ARRAY---//

function filter() {
    var arrayCheck = [];
    var aMember = [];
    var selecState = document.getElementById("state").value;

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            arrayCheck.push(checkbox[i].value);
        }
    }
    if (arrayCheck.length == 0 && selecState == "All") {
        aMember = arrayMember;
    }

    if (arrayCheck.length == 0 && selecState !== "All") {
        for (var k = 0; k < arrayMember.length; k++) {

            var stateFilter = arrayMember[k].state == selecState || selecState == "All";

            if (stateFilter) {
                aMember.push(arrayMember[k]);
            }
        }


    } else {
        for (var k = 0; k < arrayMember.length; k++) {
            for (i = 0; i < arrayCheck.length; i++) {

                var partyFilter = arrayCheck[i] == arrayMember[k].party;
                var stateFilter = arrayMember[k].state == selecState || selecState == "All";

                if (partyFilter && stateFilter) {
                    aMember.push(arrayMember[k]);

                }

            }

        }
    }

    document.getElementById("house-data").innerHTML = "";
    newTable(aMember);
    console.log(arrayCheck, aMember, selecState);

}

//---FUNCTION ARRAY EMPTY STATES---//

function fillArray(st1) {
    var states = [];
    for (var i = 0; i < st1.length; i++) {
        states.push(st1[i].state)
    }
    states.sort();
    return states;
}

//---FUNCTION COMPARE REPEATED STATES---//

function compareArray(str) {
    var statesResult = [str[0]];
    for (var j = 1; j < str.length; j++) {
        if (str[j] != statesResult[statesResult.length - 1]) {
            statesResult.push(str[j]);
        }
    }
    return statesResult;
}

//----FUNCTION ADD DROPDOWN---//

function state_fun(st) {
    var select = document.getElementById("state");

    for (var i = 0; i < st.length; i++) {

        var option = document.createElement("option");
        option.innerHTML = st[i];
        option.setAttribute("class", st[i].state);
        select.appendChild(option);
    }

}

