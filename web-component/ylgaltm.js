

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

    // set болон ... ашиглан дээрх товчлууруудын массив дээр үндэслэн товчлууруудын set үүсгэж б
    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]

        //button уудыг дэлгэцэнд харуулах
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button class='turul' onclick='filterItems("+(id)+`)'>${name}</button>`
            )
    }).join('');
    
    const product = [
        // бүтээгдэхүүнүүдийн бусад мэдээлэл
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
    
    //бүтээгдэхүүнийг хадгалж авах
    const categories = [...new Set(product.map((item)=>
        {return item}))]
    
        //шүүлт хийх функц бэлдэх 
    const filterItems = (a)=>{
        const flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                    value.id
                    )
            }
        }
        //шүүсэн мэдээллээ харуулах
        displayItem(flterCategories)
    }
    
    
    const displayItem = (items) => {

        //// 'content' ID-тай HTML элементийг авах
        document.getElementById('content').innerHTML = items.map((item)=>
        {
            var {image, title, price} = item;
            return(
                
                `  <section class = "product_page Products">
                    <article class="uruuliin_budag">
                    <a href="#">
                        <picture>
                            <img src=${image}>
                        </picture>
                    </a>
                    <article class="uruuliin_budag_dood">
                        <h3>Тод ягаан </h3>
                        <p>Тод ягаан өнгөтэй урууланд гүний чийгшил өгнө</p>
                        <a>${price} ₮</a>
                    </arsicle>
                    </article>
                    </section>`)
        }).join('');
    }
    

    //Эхлээд бүтээгдэхүүнүүдийг дэлгэц дээр харуулах
    displayItem(categories);