const all_products = [

  {
      id: 1,
      title: 'Ampoule',
      disprice: 150000,
      price: 135000,
      img: "image/Sale/sale1.png", 
      info: ' Ногоон цайны хандтай арьсанд гүн чийгшил өгч гүний давхаргад нөлөөлнө'
  },

  {
      id: 2,
      title: 'Хөөсөн нүүр цэвэрлэгч',
      disprice: 45000,
      price: 36000,
      img: "image/Sale/sale2.png", 
      info: ' Ordinary   40мл '
  },

  {
      id: 3,
      title: 'Cepa Cica Ampoule',
      disprice: 45000,
      price: 36000,
      img: "image/Sale/sale3.png", 
      info: ' Сорви арилгах эмчилгээний гол бүрэлдэхүүн хэсэг болох Allium Cepa (CEPA)'
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


//object-д хадгалсан Json-г уншиж бүтээгдэхүүнийг тодорхой форматаар харуулах

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
  
  //html-д оруулна
  document.getElementById('shop_products').innerHTML = cards
}


display_product()


var cart_items = {};
var total_price = 0;
var total_items = 0;

//Сагсанд хийх үед ямар элемент орж байгааг id-р таних хэсэг
function addcart(item_id) {
  if (cart_items[item_id]) {
    cart_items[item_id].quantity += 1;
    cart_items[item_id].cart_price += cart_items[item_id].price;
    total_items += 1; 
    total_price += cart_items[item_id].price;
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


//Сагсанд хэрхэн орохыг загварчлав
function display_cart() {
  var all_cart = '';
  
  //Сагсанд бүтээгдэхүүн орсон үед ажиллах хэсэг
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
                  <div><button class="to-pay-btn" onclick="pay()">Төлөх</button></div>`; // Энэ мөрөөс хойш товчлуурыг нэмнэ
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


//Төлөх товч дарах үед хийгдэх ажиллагаа
function pay() {
  alert('Төлбөр амжилттай хийгдлээ!');
}


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











