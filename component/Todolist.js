import html from "../core.js";

import { connect } from "../store.js";

import TodoItem from "./TodoItem.js";

function Todolist({ todos, filter, filters }) {
  return html`
    <div class="container-to-do">
      <ul class="root">
        ${todos
          .filter(filters[filter])
          .map((todo, index) => TodoItem({ todo, index }))}
      </ul>
    </div>
  `;
}

export default connect()(Todolist);
