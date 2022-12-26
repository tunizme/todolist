import html from "../core.js";

import { connect } from "../store.js";

function TodoItem({ todo, index }) {
  return html`
    <li class="to-do-item">
      <input value="${todo.title}" type="checkbox" id="input-${index}"
      class="check-input" onchange="dispatch('toggle', ${todo.id})" 
      ${todo.completed && "checked"} />
      <label for="input-${index}" class="checkbox">
        <svg viewBox="0 0 22 16" fill="none">
          <path d="M1 6.85L8.09677 14L21 1" />
        </svg>
      </label>
      <input
        value="${todo.title}"
        class="index-${todo.id} description editing ${todo.completed &&
        "completed"}"
        onkeyup="event.keyCode === 13 && dispatch('editTask', this.value.trim(), ${todo.id})
      || event.keyCode === 27 && dispatch('cancelEdit')
      "
        onblur="dispatch('editTask', this.value.trim(), ${todo.id})"
      />
      <div class="icon">
        <div class="edit-delete">
          <span
            class="edit material-symbols-outlined"
            onclick="document.querySelector('.index-${todo.id}').focus()"
          >
            edit
          </span>
          <span
            class="bin material-symbols-outlined"
            onclick="dispatch('delete', ${todo.id})"
          >
            delete
          </span>
        </div>
        <div class="time">
          <span class="material-symbols-outlined"> error </span>
          <p>${todo.time}</p>
        </div>
      </div>
    </li>
  `;
}

export default connect()(TodoItem);
