

const btns=[
    {
        id: 1,
        name: 'Хуурай арьс'
    },
    {
        id: 2,
        name: 'Тослог арьс'
    },
    {
        id: 3,
        name: 'Холимог'
    },
    ]
    
    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]
    
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button class='turul' onclick='filterItems("+(id)+`)'>${name}</button>`
            )
    }).join('');
    
    const product = [
    {
        id: 1,
        image: 'image/makeup/m10.JPG',
        title: 'Бүдэг ягаан ',
        price: 23000,
        category: 'Хуурай арьс'
    },
    {
        id: 1,
        image: 'image/makeup/m3.JPG',
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
    
    const categories = [...new Set(product.map((item)=>
        {return item}))]
    
    const filterItems = (a)=>{
        const flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                    value.id
                    )
            }
        }
        displayItem(flterCategories)
    }
    
    
    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=>
        {
            var {image, title, price} = item;
            return(
                `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
                </div>`)
        }).join('');
    }
    displayItem(categories);
    // document.addEventListener('DOMContentLoaded', function () {
    //     const turulDropdown = document.querySelector('.turul');
    //     const products = document.querySelectorAll('.product_page article');

    //     turulDropdown.addEventListener('change', function () {
    //         const selectedCategory = turulDropdown.value;

    //         products.forEach(function (product) {
    //             const category = product.classList.contains(selectedCategory) || selectedCategory === 'none';
    //             product.style.display = category ? 'block' : 'non e';
    //         });
    //     });
    // });
