  //Бүтээгдэхүүний объектын массив
const product = [
  {
    id: 1,
    title: "Гүн чийгшүүлэгч тос",
    price: "75000",
    category: "Арьс арчилгаа",
    image: "image/skin_care/sk5.jpg",
  },
  {
    id: 1,
    title: "Хөөсөн цэвэрлэгч",
    price: "86000",
    category: "Арьс арчилгаа",
    image: "image/skin_care/sk6.jpg",
  },
  {
    id: 3,
    title: "Уруулын будаг",
    price: "45000",
    category: "Уруулын будаг",
    image: "image/makeup/m5.jpg",
  },
  {
    id: 1,
    title: "Vitality капсул",
    price: "96000",
    category: "Арьс арчилгаа",
    image: "image/skin_care/sk7.jpg",
  },
  {
    id: 2,
    title: "makeup",
    price: "53000",
    category: "makeup",
    image: "image/makeup/m6.jpg"
  }
  ,
  {
    id: 1,
    image: 'image/skin_care/sk9.JPG',
    title: 'Бүдэг ягаан ',
    price: 23000,
    category: 'Хуурай арьс'
},
{
    id: 1,
    image: 'image/skin_care/sk10.JPG',
    title: 'Бүдэг ягаан өнгө',
    price: 22000,
    category: 'Тослог арьс'
},
{
    id: 3,
    image: 'image/skin_care/sk3.JPG',
    title: 'Гүн улаан өнгө',
    price: 23000,
    category: 'Холимог'
},
{
    id: 1,
    image: 'image/skin_care/sk4.JPG',
    title: 'Бүдэг улаан',
    price: 23000,
    category: 'Холимог'
},
{
    id: 2,
    image: 'image/skin_care/sk5.JPG',
    title: 'Ягаан',
    price: 23000,
    category: 'Тослог арьс'
},
{
    id: 3,
    image: 'image/skin_care/sk6.JPG',
    title: 'Тод улаан',
    price: 23000,
    category: 'Холимог'
},
{
    id: 2,
    image: 'image/skin_care/sk7.JPG',
    title: 'Гялалзсан ягаан',
    price: 22000,
    category: 'Хуурай арьс'
},
{
    id: 1,
    image: 'image/skin_care/sk8.JPG',
    title: 'Улаан ягаан',
    price: 25000,
    category:'Холимог'
},
{
  id: 1,
  image: 'image/makeup/m3.JPG',
  title: 'Бүдэг ягаан ',
  price: 23000,
  category: 'Хуурай арьс'
},
{
  id: 1,
  image: 'image/makeup/m10.JPG',
  title: 'Бүдэг ягаан өнгө',
  price: 22000,
  category: 'Тослог арьс'
},
{
  id: 3,
  image: 'image/makeup/m4.JPG',
  title: 'Гүн улаан өнгө',
  price: 23000,
  category: 'Холимог'
},
{
  id: 1,
  image: 'image/makeup/m6.JPG',
  title: 'Бүдэг улаан',
  price: 23000,
  category: 'Холимог'
},
{
  id: 2,
  image: 'image/makeup/m5.JPG',
  title: 'Ягаан',
  price: 23000,
  category: 'Тослог арьс'
},
{
  id: 3,
  image: 'image/makeup/m7.JPG',
  title: 'Тод улаан',
  price: 23000,
  category: 'Холимог'
},
{
  id: 2,
  image: 'image/makeup/m8.JPG',
  title: 'Гялалзсан ягаан',
  price: 22000,
  category: 'Хуурай арьс'
},
{
  id: 1,
  image: 'image/makeup/m9.JPG',
  title: 'Улаан ягаан',
  price: 25000,
  category:'Холимог'
},
  
];
const displayItem = (items) => {
  document.getElementById('root').innerHTML = items
    .map((item) => {
      const { image, title, price, category } = item;
      return `
        <section class='box'>
          <div class='img-box'>
            <img class='images' src='${image}'></img>
          </div>
          <article class='bottom'>
            <p>${title}</p>
            <h2>₮${price}.00</h2>
            <p>${category}</p>
            <button> Сагслах </button>
          </article>
        </section>`;
    })
    .join('');
};
displayItem(product);

// бүтээгдэхүүнийг хайх хэсэг
// product массивын item-нууд map функц ажиллаад category гаргаж авна. 
const categories = [...new Set(product.map((item) => item.category))];

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = product.filter((item) =>
    item.title.toLowerCase().includes(searchData)
  );
  displayItem(filterData);
});

const btns = [
  { id: 1, name: 'Skin Care' },
  { id: 2, name: 'Makeup' },
  { id: 3, name: 'Уруулын будаг' }
];

const filters = [...new Set(btns.map((btn) => btn.id))];

document.getElementById('btns').innerHTML = btns
  .map((btn) => {
    const { name, id } = btn;
    return `<button class='fil-p' onclick='filterItems(${id})'>${name}</button>`;
  })
  .join('');

const filterItems = (a) => {
  const filterCategories = product.filter((item) => item.id === a);
  displayItem(filterCategories);
};
