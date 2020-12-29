class Greeting extends HTMLElement {
  constructor() {
    super();
    // this.innerText = `Hello, macieju`;

    this.shadow = this.attachShadow({ mode: "open" });
    this.text = document.createElement("span");

    this.text.textContent = "text shadow dom";
    this.shadow.appendChild(this.text);
  }
  connectedCallback() {
    this.text.textContent = "text shadow dom odizolowany stylami";
  }
}

window.customElements.define("my-greeting", Greeting);
