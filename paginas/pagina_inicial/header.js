class Header extends HTMLElement {
connectedCallback() {
  this.innerHTML = '  <nav>
            <ul class="nav_links">
                <li><a href="#">Content</a></li>
                <li><a href="#">Content</a></li>
                <li><a href="#">Content</a></li>
            </ul>
        </nav> ';
  
           }
}
customElements.define('main-header' , Header);
