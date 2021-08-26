var addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);
    shownotes();
});
// show elements in local storage
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html+=`
        <div class="notecard">
                <div class="card-body my-2 mx-2 card" style="width: 18rem;">
                    <h5 class="card-title">Note ${index +1}</h5>
                    <p class="card-text"> ${element} </p>
                    <button id='${index}' onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
        <div>
        `;
    });
    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) noteselm.innerHTML = html;
    else noteselm.innerHTML = "Nothing to show !";
}
// to delete note
function deletenote(index) {
    //console.log('hii',index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}
var search = document.getElementById("searchtxt");
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
    //console.log(inputval);
    var notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function (element) {
        let cardtxt = document.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});