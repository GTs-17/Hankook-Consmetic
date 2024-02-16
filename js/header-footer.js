class header extends HTMLElement {
    constructor(){
            super();
    }
    connectedCallback() {
            this.parentNode.innerHTML = `
            <nav>
            <ul class='nav-bar'>
                <li class='logo'>
                    <a href='nuur.html'>
                        <img src='./image/introduction/MenuLogo.jpg' alt="MenuLogo"/>
                    </a>
                </li>
                <input type='checkbox' id='check' />
                <span class="menu">
                    <li><a href="nuur.html">Hankook</a></li>
                    <li><a href="Skin_care.html">Арьс арчилгаа</a></li>
                    <li><a href="MakeUp.html">MakeUp</a></li>
                    <li><a href="sale.html" onclick="show_shop()">Хямдрал</a></li>
                    <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                </span>
                
                <section class="header-card" >
                    <li><a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a></li>
                    <li><a href="login.html"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                    <li><a href="search.html"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-shopping-basket" aria-hidden="true "></i></a></li>
                </section>
                <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
        
            </ul>
        </nav>
            `;
    }
}

customElements.define("top-header", header);



class footer extends HTMLElement {
    constructor(){
            super();
    }
    connectedCallback() {
            this.parentNode.innerHTML = `
                    
        <section class="row footer_top_section" >
        <section class="footer_logo ">
            <a><picture>
                <img src="image/HomePage_image/logo.jpg" alt="HankookLogo" width="70%">
            </picture>
            </a>
        </section>

        <section class="footer-col">
            <article>
                <h4>Companies</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                </ul>
            </article>
        </section>

        <section class="footer-col input_text">
            <h4>Санал хүсэлт</h4>
            <form>
                <section>
                    <label for="message">Мессеж</label>
                    <textarea name="message" id="message" class="texting"></textarea>
                    <div class="button">
                        <input type="submit" value="Илгээх">
                    </div>
                </section>
            </form>
        </section>


        <section>
        <article class="footer-col">
        <address class="social-links">
            <h4>Бидэнтэй нэгдэх</h4>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>                 
        </address>
        </article>
        </section>

        </section>
        <div class="footer-line"></div>
        <section class="footer_bottom_section">
            <p>
                © 2023 GTs Chimegee Orgio ХХК. Зохиогчийн эрх хуулиар хамгаалагдсан Developed by <a
                    href="#">Hankook</a>
            </p>
        </section>
            `;
    }
}
customElements.define("main-footer", footer);