import html from "../core.js";

import Header from "../component/Header.js";

import Todolist from "../component/Todolist.js";

import { connect } from "../store.js";

function App({ todos }) {
  return html`
      <div class="container">
        ${Header()} 
        ${todos.length > 0 && Todolist()}
      </div>
  `;
}

export default connect()(App);
