const all_products = [

  {
      id: 1,
      title: 'Гарчиг1',
      disprice: 150000,
      price: 135000,
      img: "image/Sale/sale1.png", 
      info: ' Nice Profdughdfghfdghkfdghkfdghf k hsrukdgfdjkhfhe h hhfgh '
  },

  {
      id: 2,
      title: 'Гарчиг2',
      disprice: 45000,
      price: 36000,
      img: "image/Sale/sale2.png", 
      info: ' йөй '
  },

  {
      id: 3,
      title: 'Гарчиг3',
      disprice: 45000,
      price: 36000,
      img: "image/Sale/sale3.png", 
      info: ' dsfhyuidyuhgdfygyfdgiud'
  },

  {
      id: 4,
      title: 'Гарчиг4',
      disprice: 45000,
      price: 36000,
      img: "image/Sale/sale4.png", 
      info: ' dsffgdsgdsf gdsg s gsddsfhyuidyuhgdfygyfdgiud'
  },
  {
      id: 5,
      title: 'Гарчиг5',
      disprice: 45000,
      price: 36000,
      img: "image/Sale/sale4.png", 
      info: ' dsffgdsgdsf gdsg s gsddsfhyuidyuhgdfygyfdgiud'
  },



]




function display_product() {

  var cards = ''

  for (let item of all_products) {

      cards = cards + `
              <section class="shop_card">
              <article class="card-img-room">
                  <img class="card-img"
                      src=" ${item.img}  "
                      alt="">
              </article>
              <h2 class="card-title">   ${item.title}    </h2>
              <p class="card-detail"> ${item.info}  </p>
              <s class="sale-price">Price - ${item.disprice}</s>
              <h2 class="card-price">Price - ${item.price}</h2>
              <button class="card-btn" onclick= "addcart( ${item.id} ) " >Add To Cart</button>
              </section> 
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