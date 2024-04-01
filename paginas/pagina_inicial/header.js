class Header extends HTMLElement {
connectedCallback() {
  this.innerHTML = '   <header>
        <img class="logo" src="/images/logo.png" alt="logo">
        <nav>
            <ul class="nav_links">
                <li><a href="#">Content</a></li>
                <li><a href="#">Content</a></li>
                <li><a href="#">Content</a></li>
            </ul>
        </nav>
        <button class="button_acess">
            <a href="#">
                <p>
                    <img class="icon_profile" src="/images/icon_profile.svg" alt="icon_profile"><center>Acessar</center>
                </p>
            </a>
        </button>
    </header> ';
  
           }
}
customElements.define('main-header' , Header);
