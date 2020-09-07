// set variables for functions
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// add event listeners from UI to trigger functions
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();
  // Get input value
  var newItem = document.getElementById("item");
  // Create new li element
  var li = document.createElement("li");
  // add class
  li.className = "list-group-item";
  // add text node with input value
  li.appendChild(document.createTextNode(newItem.value));
  // add del button element
  var deleteBtn = document.createElement("button");
  // add del button classes
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // convert item to lower to filter and match
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");
  // convert to array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
