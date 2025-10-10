function Dropdown(type) {
  const textEl = document.getElementById(type + "Text");
  const selectEl = document.getElementById(type + "Select");

  textEl.style.display = "none";
  selectEl.style.display = "inline-block";
  selectEl.focus();
}

function set_value(type) {
  const textEl = document.getElementById(type + "Text");
  const selectEl = document.getElementById(type + "Select");
  const inputEl = document.getElementById(type + "Input"); 

  textEl.textContent = selectEl.value;
  inputEl.value = selectEl.value; 

  textEl.style.display = "inline";
  selectEl.style.display = "none";
}

