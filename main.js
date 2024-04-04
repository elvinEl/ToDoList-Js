//////////////////DELETED TODOS /////////////////////////////////
const deletedTodos = document.querySelectorAll(".delete-item");
deletedTodos.forEach(function (button) {
  button.addEventListener("click", function () {
    const deleted = button.closest("li");
    deleted.remove();
  });
});
console.log(deletedTodos);
/////////////////////DELETED ALL////////////////////////////////
const deletedAllTodos = document.querySelector("#clearButton");
deletedAllTodos.addEventListener("click", function (event) {
  event.preventDefault();
  const listGroup = document.querySelector(".list-group");
  listGroup.remove();
});
console.log(deletedAllTodos);
