document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#todo-input");
    const submitButton = document.querySelector("#submit");
    const todoList = document.querySelector(".todo-lists");

    submitButton.addEventListener("click", () => {
        const inputData = input.value.trim();
        if (!inputData) return; 
        input.value = ""; 

        
        const todo_el = document.createElement("div");
        todo_el.classList.add("todo-item");

        const todo_content_el = document.createElement("div");
        const todo_input_el = document.createElement("input");
        todo_input_el.classList.add("text");
        todo_input_el.type = "text";
        todo_input_el.value = inputData;
        todo_input_el.setAttribute("readonly", "readonly");

        todo_content_el.appendChild(todo_input_el);
        todo_el.appendChild(todo_content_el);

        
        const todo_actions_el = document.createElement("div");
        todo_actions_el.classList.add("action-items");

        const todo_done_el = document.createElement("i");
        todo_done_el.classList.add("fa-solid", "fa-check");

        const todo_edit_el = document.createElement("i");
        todo_edit_el.classList.add("fa-solid", "fa-pen-to-square", "edit");

        const todo_delete_el = document.createElement("i");
        todo_delete_el.classList.add("fa-solid", "fa-trash");

        todo_actions_el.appendChild(todo_done_el);
        todo_actions_el.appendChild(todo_edit_el);
        todo_actions_el.appendChild(todo_delete_el);
        todo_el.appendChild(todo_actions_el);

        todoList.appendChild(todo_el); 

        
        todo_done_el.addEventListener("click", () => {
            todo_input_el.classList.add("done");
            todo_done_el.style.display = "none"; 
        });

        
        todo_edit_el.addEventListener("click", () => {
            if (todo_input_el.hasAttribute("readonly")) {
                todo_input_el.removeAttribute("readonly");
                todo_input_el.focus();
                todo_edit_el.classList.add("active"); 
            } else {
                todo_input_el.setAttribute("readonly", "readonly");
                todo_edit_el.classList.remove("active"); 
            }
        });

        
        todo_delete_el.addEventListener("click", () => {
            todo_el.remove();
        });
    });
});
