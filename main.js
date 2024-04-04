//////////////////DELETED TODOS /////////////////////////////////
const deletedTodos = document.querySelectorAll(".delete-item");
deletedTodos.forEach(function (button) {
  button.addEventListener("click", function () {
    const deleted = button.closest("li");
    deleted.remove();
  });
});
/////////////////////DELETED ALL TODOS////////////////////////////////
const deletedAllTodos = document.querySelector("#clearButton");
deletedAllTodos.addEventListener("click", function (event) {
  event.preventDefault();
  const listGroup = document.querySelector(".list-group");
  listGroup.remove();
});
////////////////////ADDED TODOS////////////////////////////////
const inputElement = document.querySelector("#todoName");
inputElement.addEventListener("input",function(){
    const value = inputElement.value
    console.log(value);
})
console.log(inputElement);
