
// Fetch data from sale.json
async function fetchProducts() {
    
    try {
      const response = await fetch('sale.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Use the fetched data
  async function displayProduct() {
    const products = await fetchProducts();
  
    var cards = '';
  
    for (let item of products) {
      cards += `
        <article class="myproduct" data-name="">
          <a href="#">
            <picture class="img-size">
              <img src="${item.img}" alt="ampoule">
            </picture>
          </a>
          <article class="products-info">
            <h3>${item.title}</h3>
            <p>${item.info}</p>
            <p>${item.price}</p>
          </article>
          <button class="card-btn" onclick="addCart(${item.id})">Add To Cart</button>
        </article>
      `;
    }
  
    // End of for loop, injecting all cards into shop_products section
    document.getElementById('shop_products').innerHTML = cards;
  }
  
  // Rest of your code...
  
  // Call displayProduct to initiate the display
  displayProduct();
  









var cart_items = {}
var total_price = 0

function addcart(item_id) {

  if (cart_items[item_id]) {
      cart_items[item_id].quantity += 1
      cart_items[item_id].cart_price += cart_items[item_id].price
      console.log(cart_items)

      total_price += cart_items[item_id].price

      return
  }


  for (item of all_products) {

      if (item_id == item.id) {
          cart_items[item_id] = item
          cart_items[item_id].quantity = 1
          cart_items[item_id].cart_price = cart_items[item_id].price

          total_price += cart_items[item_id].price
          return
      }
  }

}



function display_cart() {

  var all_cart = ''


  if (Object.keys(cart_items).length > 0) {

      for (k in cart_items) {

          all_cart = all_cart + `
              <div class="cart-items">
              <h2 class="cart-title">${cart_items[k].title}</h2>
                  <div class="cart-img">
                      <img src="${cart_items[k].img}" alt="No Image">
                  </div>
              
                  <h2 class="cart-price">${cart_items[k].quantity}</h2>
                  <h2 class="cart-price">${cart_items[k].cart_price}</h2>
              </div>
          `
      }
      all_cart += `<center> <h1> Total Price ${ total_price } </h1> </center>`
      document.getElementById('cart').innerHTML = all_cart


  }

  else {
      document.getElementById('cart').innerHTML = '<center> <h1> No Product Added in Cart </h1> </center> '
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

