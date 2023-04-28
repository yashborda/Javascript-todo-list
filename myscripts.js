showNotes();
var city = document.getElementById("city");
var state = document.getElementById("state");
var country = document.getElementById("Country");
async function submitvalue() {
    if (((city.value).trim() != 0) || ((state.value).trim() != 0) || ((country.value).trim() != 0)) {

        let addform = localStorage.getItem("addform");
        locObj = (addform == null) ? [] : JSON.parse(addform);
        var world = {
            city: city.value,
            state: state.value,
            country: country.value
        }
        locObj.push(world);
        console.log(locObj);
        city.value = "";
        state.value = "";
        country.value = "";
        localStorage.setItem("addform", JSON.stringify(locObj));
    }
    showNotes();
}

function showNotes() {
    var html = "";
    let addform = localStorage.getItem("addform");
    locObj = (addform == null) ? [] : JSON.parse(addform);
    locObj.forEach(function (element, index) {
        html += ` <tr>
                    <td>${index + 1}</td>
                    <td>${element.city}</td>
                    <td>${element.state}</td>
                    <td>${element.country}</td>
                    <td>
                        <button onclick="editvalue(${index})" class="btn btn-secondary">
                        <i class="fas fa-pen-fancy"></i> Edit
                        </button>
                        <button onclick="deleteNote(${index})" class="btn btn-primary">
                        <i class="fas fa-trash-alt"></i> Delete
                        </button>
                    </td>
                </tr> `

    });
    var adddetils = document.getElementById("adddetils");
    if (locObj.length != 0) {
        adddetils.innerHTML = html;
    } else {
        adddetils.innerHTML = `
        <tr>
            <td colspan="5" class="text-center">Nothing to show! Use "c" section above to add notes.</td>
        </tr>`;
    }
};

function deleteNote(index) {
    //   console.log("index", index);
    let addform = localStorage.getItem("addform");
    locObj = (addform == null) ? [] : JSON.parse(addform);
    locObj.splice(index, 1);
    localStorage.setItem("addform", JSON.stringify(locObj));
    city.value = "";
    state.value = "";
    country.value = "";
    document.getElementById("addbtn").style.display = 'block';
    document.getElementById("savebtn").style.display = 'none';
    showNotes();
}

var index = document.getElementById("index");

function editvalue(index) {
    //  console.log("edit verify", index);
    this.index.value = index;
    var addform = localStorage.getItem("addform");
    var locObj = JSON.parse(addform);
    city.value = locObj[index].city;
    state.value = locObj[index].state;
    country.value = locObj[index].country;
    document.getElementById("addbtn").style.display = 'none';
    document.getElementById("savebtn").style.display = 'block';
}

function savechangesbtn() {
    if (((city.value).trim() != 0) || ((state.value).trim() != 0) || ((country.value).trim() != 0)) {
        var addform = localStorage.getItem("addform");
        var locObj = JSON.parse(addform);
        locObj[this.index.value].city = city.value;
        locObj[this.index.value].state = state.value;
        locObj[this.index.value].country = country.value;
        localStorage.setItem("addform", JSON.stringify(locObj));
    }
    city.value = "";
    state.value = "";
    country.value = "";
    index.value = "";
    document.getElementById("addbtn").style.display = 'block';
    document.getElementById("savebtn").style.display = 'none';
    showNotes();
}
