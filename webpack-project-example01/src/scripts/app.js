
const input = document.querySelector(".new-todo");
const todoList = document.querySelector(".todo-list");
const toggleAll = document.querySelector(".toggle-all");
const main = document.querySelectorAll(".main")[0];
const ENTER = 13;

toggleAll.addEventListener("click", e => {
  const items = document.querySelectorAll(".todo-list li");

  document.querySelectorAll(".toggle").forEach((toggle, index) => {
    toggle.checked = e.target.checked;

    if(e.target.checked) {
      items[index].classList.add("completed");
    }else{
      items[index].classList.remove("completed");
    }
  });
});

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

    const itemWrapper = document.createElement("div");

    itemWrapper.innerHTML = itemTemplate;

    // 아이템은 항상 마지막에 추가되기 때문에 마지막 destroy 버튼을 가지고 옴
    const destroy = itemWrapper.querySelector(".destroy"); // 미리 destroy reference(참조값)를 가지고 온다
    const toggle = itemWrapper.querySelector(".toggle");
    const item = itemWrapper.children[0];

    todoList.appendChild(item); // item(div) 내부에 html들이 todoList내부로 이동이 되버려서 없어진다.
    // 여기에서 destroy 버튼을 가지고 올 수 있게 되겠지? 
    // const destroy = document.querySelectorAll(".destroy")[item.parentNode.children.length-1];
    
    // console.log("debugger");

    console.log(item);

    // 마지막 destroy 버튼에 이벤트를 걸어준다.
    destroy.addEventListener("click", e => {
      e.preventDefault();

      e.target.parentNode.parentNode.remove();

      if(todoList.innerHTML ==="") {
        main.style.display="none";
      }
    });

    toggle.addEventListener("click", e => {
      if(e.target.checked) {
        item.classList.add("completed");
      } else {
        item.classList.remove("completed");
      }
    });
    input.value = "";
  }
});

// document.addEventListener("click", e => { // 아무것도안할때 메모리사용량은 좋지만 사용자가 클릭하는경우에는 메모리를 더 많이 차지하게됨.
//   e.preventDefault();
//   if(Array.prototype.indexOf.call(e.target.classList, "destroy")!==-1) {
//     const destroy = document.querySelectorAll(".destroy"); // NodeList ArrayLike
    
//     // destroy 버튼중 클릭한 버튼의 인덱스를 찾는다.
//     const findIndex = Array.prototype.reduce.call(destroy, (acc, curr, index) => {
//       if(e.target === curr) { // 찾으려고 하는 타겟과 destroy Node List에 항목과 동일한 경우 
//         return index; // 현재 인덱스를 반환해주고
//       } else { // 같지 않은 경우 기존에 찾았던 인덱스를 반환해준다.
//         return acc;
//       }
//     }, -1);

//     // 같은 인덱스에 맞는 item을 삭제한다.
//     const item = document.querySelectorAll(".todo-list")[0].children[findIndex];
    
//     item.remove();

//     if(todoList.innerHTML ==="") {
//       main.style.display="none";
//     }
//   }
// });
//api 호출 파일 프로토콜의 경우 실행이 안됨.. 그래서 웹프로토콜로 테스트를 진행해야 함.

