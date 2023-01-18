const items = [];
let itemChange = -1;
document.addEventListener("click", function (event) {
    let target = event.target;
    console.log(target);
    switch (target.id){
        case "add":
            addItem();
            break;
        case "show":
            show()
            break;
        case "change":
            changeItem();
            show();
            break;
    }
    if (target.id.slice(0, 4) === "del-") {
        if (confirm("Are you sure?")) {
            items.splice(parseInt(target.id.slice(4)), 1);
            show();
        }
    }
    if (target.id.slice(0, 5) === "item-") {
        let changeBox = document.getElementById("change-box");
        itemChange = parseInt(target.id.slice(5));
        console.log(itemChange);
        changeBox.value = items[itemChange];
    }
});
function show() {
    let result = "<table>" +
        "<tr>" +
        "<td>No.</td>" +
        "<td>Item</td>" +
        "<td>Delete?</td>" +
        "</tr>";
    for (let i = 0; i < items.length; i++) {
        result += `<tr>`;
        result += `<td>${i + 1}</td>`;
        result += `<td id="item-${i}">${items[i]}</td>`;
        result += `<td><button id="del-${i}">Delete</button></td>`;
        result += `</tr>`;
    }
    result += "</table>";
    document.getElementById("result").innerHTML = result;
}

function addItem() {
    let newItem = document.getElementById("new-item");
    if (newItem.value.length > 0) {
        items.push(newItem.value);
    }
    newItem.value = "";
}


function changeItem() {
    let changeBox = document.getElementById("change-box");
    items[itemChange] = changeBox.value;
    itemChange = -1;
    changeBox.value = "";
}