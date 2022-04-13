//header-component
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar sticky-top border">
      <div class="container-fluid container">
        <a href=""><img src="./index.html" alt="Logo">
        </a>
        <div class="nav-right">
          <ul class="nav">
            <li class="nav-item"><a class="nav-link active" href="./index.html">Rooms</a></li>
            <li class="nav-item"><a class="nav-link active" href="./environment.html">Environment</a></li>
          </ul>
          <div class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
              aria-expanded="false">Setting</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="./index.html">Cameras</a></li>
              <li><a class="dropdown-item" href="./environment.html">Security</a></li>
              <li><a class="dropdown-item" href="./environment.html">Messenge</a></li>
              <li><a class="dropdown-item" href="./environment.html">Call</a></li>
              <li><a class="dropdown-item" href="./environment.html">Lighting</a></li>
              <li><a class="dropdown-item" href="./environment.html">Volunm</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
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
        <li class="vertical__list-item"><a href="#"><i class="bi bi-house"></i></a></li>
        <li class="vertical__list-item"><a href="#"><i class="bi bi-search"></i></a></li>
        <li class="vertical__list-item"><a href="#"><i class="bi bi-telephone"></i></a></li>
        <li class="vertical__list-item"><a href="#"><i class="bi bi-chat"></i></a></li>

      </ul>
      <span></span>
    </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', Footer);