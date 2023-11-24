class header extends HTMLElement {
    constructor(){
            super();
    }
    connectedCallback() {
            this.parentNode.innerHTML = `
            <nav class="head_menu">
            <a href="nuur.html">
                <picture class="logo margin-left1 margin-top1">
                    <img src="image/introduction/MenuLogo.jpg" alt="MenuLogo" width="100px" height="94px">
                </picture>
            </a>  
                <ul>
                    <li><a href="Home.html">Hankook</a></li>
                    <li><a href="Skin_care.html">Арьс арчилгаа</a></li>
                    <li><a href="MakeUp.html">MakeUp</a></li>
                    <li><a href="Sale.html">Хямдрал</a></li>
                </ul> 
            </nav>
            <section class="head_card margin-top margin-right1">
            <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-user" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
            <a href="#"><i class="fa fa-shopping-basket" aria-hidden="true"></i></a>
            </section>
            `;
    }
}

customElements.define("top-header", header);
