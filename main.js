//////////////////DELETED TODOS /////////////////////////////////
function addDeleteListener() {
  const deletedTodos = document.querySelectorAll(".delete-item");
  deletedTodos.forEach(function (button) {
    button.addEventListener("click", function () {
      const deleted = button.closest("li");
      deleted.remove();
    });
  });
}

/////////////////////DELETED ALL TODOS////////////////////////////////
const deletedAllTodos = document.querySelector("#clearButton");
deletedAllTodos.addEventListener("click", function (event) {
  event.preventDefault();
  const listGroup = document.querySelector(".list-group");
  const test = Array.from(listGroup.children);
  test.forEach(function (item) {
    item.remove();
  });
});
////////////////////ADDED TODOS////////////////////////////////
const inputElement = document.querySelector("#todoName");
console.log(inputElement);
// inputElement.addEventListener("input", function (e) {
//   console.log(e.target);
// });

const addButton = document.querySelector("#todoAddButton");
addButton.addEventListener("click", function (e) {
  e.preventDefault();
  const value = inputElement.value;
  if (value.trim() === "") {
    return;
  }
  const liElement = document.createElement("li");
  liElement.className = "list-group-item d-flex justify-content-between";
  liElement.textContent = value;
  const aElement = document.createElement("a");
  aElement.href = "#";
  aElement.className = "delete-item";
  const iElement = document.createElement("i");
  iElement.className = "fa fa-remove";

  aElement.appendChild(iElement);
  liElement.appendChild(aElement);

  const listGroup = document.querySelector(".list-group");
  listGroup.appendChild(liElement);
  inputElement.value = "";
  addDeleteListener();
});
