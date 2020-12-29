class Greeting extends HTMLElement {
  constructor() {
    super();
    // this.innerText = `Hello, macieju`;

    this.shadow = this.attachShadow({ mode: "open" });
    this.text = document.createElement("p");
    this.text.innerHTML = "text shadow dom";
    this.shadow.appendChild(this.text);
  }
  connectedCallback() {
    this.text.innerHTML = `<style> span {color: blue } </style>
    <span>text shadow dom odizolowany stylami</span>`;
  }
}

window.customElements.define("my-greeting", Greeting);
