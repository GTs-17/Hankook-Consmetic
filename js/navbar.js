function display_cart() {
    var all_cart = '';
    
    if (Object.keys(cart_items).length > 0) {
        for (k in cart_items) {
            all_cart += `
                <section class="cart-items">
                    <h2 class="cart-title">${cart_items[k].title}</h2>
                    <article class="cart-img">
                        <img src="${cart_items[k].img}" alt="No Image">
                    </article>
                    <h2 class="cart-price">${cart_items[k].quantity}</h2>
                    <h2 class="cart-price">${cart_items[k].cart_price}</h2>
                    <article class="i-center"><i class="fa fa-trash-o" data-key="${k}" aria-hidden="true"></i></article>
                </section>
            `;
        }
        all_cart += `<center> <h1> Total Price ${total_price} </h1> </center>
                     <div><button class="Paid-Btn" onclick="pay()">Төлөх</button></div>`; // Энэ мөрөөс хойш товчлуурыг нэмнэ
        document.getElementById('cart').innerHTML = all_cart;
  
        //Delete product
        const trashIcons = document.querySelectorAll('.fa-trash-o');
        trashIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const key = this.getAttribute('data-key');
                delete cart_items[key];
                total_items -= 1; 
                updateCount();  
                display_cart();  // render
            });
        });
  
    } else {
        document.getElementById('cart').innerHTML = '<center> <h1> Сагсанд бүтээгдэхүүн байхгүй </h1> </center> ';
    }
  }
  
  function pay() {
      // Энд төлбөр төлөх үйлдэл хийх логик орж ирнэ.
      alert('Төлбөр амжилттай хийгдлээ!');
  }
  