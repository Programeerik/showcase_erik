class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
              <style>
                   nav {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        z-index: 1;
                        background-color: #FDFDFD;
                        box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
                    }
                    
                    nav ul {
                        display: flex;
                        list-style: none;
                        justify-content: space-around;
                    }
              </style>
              <section class="navigation">
                <nav>
                  <ul>
                    <li><a href="index.html"><img width="35" height="35" alt="Icon of person to navigate to personal page" class="navigation-image" src="images/user.png"></a></li>
                    <li><a href="contact.html"><img width="35" height="35" alt="Icon of person to navigate to contact page" class="navigation-image" src="images/email.png"> </a></li>
                    <li><a href="game.html"><img width="35" height="35" alt="Icon of person to navigate to game page" class="navigation-image" src="images/console.png"> </a></li>
                  </ul>
                </nav>
              </section>
        `;

        /*this.shadowRoot.getElementById('my-button').addEventListener('click', () => {
            this.shadowRoot.getElementById('my-output').textContent = 'Klik gedetecteerd!';
        });*/
    }
}

customElements.define('nav-bar', NavBar);
