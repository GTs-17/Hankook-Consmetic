const all_products = [

    {
        "id": 1,
        "title": "Зөөлөн ягаан",
        "info": "Усан ягаан өнгөтэй урууланд гүний чийгшил өгнө",
        "price": "23,000₮",
        "img": "image/makeup/m3.JPG"
    },
            
           
    {
        "id": 2,
        "title": "Тод ягаан",
        "info": "Тод ягаан өнгөтэй урууланд гүний чийгшил өгнө",
        "price": "22,000₮",
        "img": "image/makeup/m4.JPG"   
    },

    {    
        "id": 3,
        "title": "Өнгөгүй",
        "info": "Өөрийн уруулын өнгийг тодосгох зорилготой өнгөгүй уруулын будаг",    
        "price": "22,000₮",
        "img": "image/makeup/m5.JPG"
    },
            
    {
        "id": 4,   
        "title": "Тод улаан",
        "info": "Таныг төгс бас цэгцтэй харагдуулахад тусална , чийглэг",
        "price": "22,000₮",
        "img": "image/makeup/m6.JPG"
    },
          
    {
        "id": 5,
        "title": "Улбар шар",
        "info": "Усан ягаан өнгөтэй урууланд гүний чийгшил өгнө",
        "price": "22,000₮",
        "img": "image/makeup/m7.JPG"
    },
           
    {
        "id": 6,
        "title": "Гүн улаан",
        "info": "Гүн улаан бөгөөд илүү хуурай бүтэцтэй",
        "price": "28,000₮",
        "img": "image/makeup/m8.JPG"
    },
            
           
    {
        "id": 7,
        "title": "Улаан ягаан",
        "info": "Улаан ягаан өнгийн холимог ягаан өнгө илүү их агуулсан",
        "price": "28,000₮",
        "img": "image/makeup/m9.JPG"
    },

    {
        "id": 8,
        "title": "Ягаан бор",
        "info": "Ягаан бор өнгийн холимог бор өнгө илүү их агуулсан",
        "price": "28,000₮",
        "img": "image/makeup/m10.JPG"
    },
  
  ]
  
  
  
  
  function display_product() {
  
    var cards = ''
  
    for (let item of all_products) {
  
        cards = cards + `
        <article class="suuri_tos" data-name="">
        <a href="#">
            <picture>
                <img src="${item.img}" alt="">
            </picture>
        </a>
        <article class="suuri_tos dood">
            <h3>${item.title} </h3>
            <p>${item.info}</p>
            <a>${item.price}</a>
            <button class="card-btn" onclick= "addcart( ${item.id} ) " >Add To Cart</button>
        </article>
        </article>
        `
  
    }
    // End of for loop , injecting all cards into  shop_products section 
    document.getElementById('shop_products').innerHTML = cards
  }
  
  
  display_product()
  
  
  var cart_items = {};
  var total_price = 0;
  var total_items = 0;
  
  function addcart(item_id) {
    if (cart_items[item_id]) {
      cart_items[item_id].quantity += 1;
      cart_items[item_id].cart_price += cart_items[item_id].price;
      total_items += 1; 
      total_price += cart_items[item_id].price;
      console.log(cart_items);
      updateCount(); 
      return;
    }
  
    for (item of all_products) {
      if (item_id == item.id) {
        cart_items[item_id] = item;
        cart_items[item_id].quantity = 1;
        cart_items[item_id].cart_price = cart_items[item_id].price;
        total_items += 1; 
        total_price += cart_items[item_id].price;
        document.getElementById("count").innerHTML = total_items; 
        return;
      }
    }
  }
  
  function updateCount() {
    document.getElementById("count").innerHTML = total_items; 
  }
  
  var cart =[];
  
  function delElement(a){
    cart.splice(a, 1);
    displaycart();
  }
  
  function delElement(index) {
    if (index >= 0 && index < Object.keys(cart_items).length) {
        var keys = Object.keys(cart_items);
  
        var removedItemKey = keys[index];
        delete cart_items[removedItemKey];
        display_cart();
    }
  }
  
  
  
  
  
  
  
  
  function display_cart() {
  
    var all_cart = '';
    let j = 0;
  
  
    if (Object.keys(cart_items).length > 0) {
  
        for (k in cart_items) {
            all_cart = all_cart + `
                <section class="cart-items">
                <h2 class="cart-title">${cart_items[k].title}</h2>
                    <article class="cart-img">
                        <img src="${cart_items[k].img}" alt="No Image">
                    </article>
  
                    <h2 class="cart-price">${cart_items[k].quantity}</h2>
                    <h2 class="cart-price">${cart_items[k].cart_price}</h2>
                </section>
            `
        }
        all_cart += `<center> <h1> Total Price ${ total_price } </h1> </center>`
        document.getElementById('cart').innerHTML = all_cart
  
  
    }
  
    else {
        document.getElementById('cart').innerHTML = '<center> <h1> Сагсанд бүтээгдэхүүн байхгүй </h1> </center> '
    }
  }
  
  var burger = document.querySelector('.burger')
  var navBar = document.querySelector('.navbar')
  var navList = document.querySelector('.navlist')
  
  
  burger.addEventListener('click', () => {
  
    navBar.classList.toggle('resp_navbar')
    navList.classList.toggle('resp_navlist')
  
  })
  
  // code for showing cart section and hiding product section
  
  function show_cart() {
    document.getElementById('cart').style.display = 'block'
    document.getElementById('shop_products').style.display = 'none'
    display_cart();
  }
  
  function show_shop() {
    document.getElementById('cart').style.display = 'none'
    document.getElementById('shop_products').style.display = 'block'
    document.getElementById('shop_products').style.display = 'flex'
  }