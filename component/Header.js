import html from "../core.js";

import Status from "./Status.js";

function Header() {
  return html`
    <div class="container-input">
      <input
        class="form-input new-todo"
        type="text"
        placeholder=" "
        oninput="this.value && document.querySelector('.time-input').value? document.querySelector('.btn').classList.remove('disabled') : document.querySelector('.btn').classList.add('disabled')"
      />
      <label for="" class="form-label">New task...</label>
      <input
        oninput="this.value && document.querySelector('.form-input').value? document.querySelector('.btn').classList.remove('disabled') : document.querySelector('.btn').classList.add('disabled')"
        class="time-input"
        type="date"
        name=""
      />
      <button
        onclick="dispatch('add', 
        document.querySelector('.form-input').value.trim(),
        document.querySelector('.time-input').value.trim(),
        ) || document.querySelector('.form-input').focus()"
        class="disabled btn"
      >
        Add
      </button>
    </div>
    ${Status()}
  `;
}

export default Header;
