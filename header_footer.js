//header-component
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    
    `;
  }
}

customElements.define('header-component', Header);


//footer-component
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="container">
      <ul class="vertical__list">
        <li class="vertical__list-item"><a href="./index.html"><i class="bi bi-house"></i></a></li>
        <li class="vertical__list-item"><a href="./environment.html"><i class="bi bi-search"></i></a></li>
        <li class="vertical__list-item"><a href="./environment.html"><i class="bi bi-telephone"></i></a></li>
        <li class="vertical__list-item"><a href="./environment.html"><i class="bi bi-chat"></i></a></li>

      </ul>
      <span></span>
    </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', Footer);