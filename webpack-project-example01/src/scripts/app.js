
const input = document.querySelectorAll(".new-todo")[0];
const todoList = document.querySelectorAll(".todo-list")[0];
const main = document.querySelectorAll(".main")[0];
const ENTER = 13;

input.addEventListener("keypress", (e) => {
  if(e.keyCode === ENTER) {
    main.style.display ="block";

    const itemTemplate = `
    <li data-id="">
      <div class="view">
        <input class="toggle" type="checkbox">
        <label>${input.value}</label>
        <button class="destroy"></button>
      </div>
    </li>
    `;

    const item = document.createElement("div");

    item.innerHTML = itemTemplate;
    todoList.appendChild(item.children[0]); // 

    input.value = "";
  }
});
//api 호출 파일 프로토콜의 경우 실행이 안됨.. 그래서 웹프로토콜로 테스트를 진행해야 함.

