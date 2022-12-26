import html from "../core.js";

import { connect } from "../store.js";

function Status({ todos, filters, filter }) {
  return html`
    <ul class="status">
      ${Object.entries(filters).map(
        ([key, value]) => html`
          <li
            onclick="dispatch('switchFilter', '${key}')"
            class="status-item ${filter === key && "active"}"
          >
            <span class="">${key} ${todos.filter(value).length} </span>
          </li>
        `
      )}
      <div class="clear-completed" onclick="dispatch('clearCompleted')"
        >${todos.filter(filters.completed).length > 0 &&
        filter === "completed" &&
        "Clear Completed"}
      </div>
      <div class="line"></div>
    </ul>
  `;
}

export default connect()(Status);
