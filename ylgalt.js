const select = document.querySelector('select');
const product = document.querySelector('products');

select.addEventListener('change', (event) =>{
    const selected = event.target.value;


    for(let i=0; i<products.children.length; i++){
        const product == products.children[i];

        if(selected === 'none'){
            product.style.display ='block';
        }
        else{
            if(product.id !== selected){
                product.style.display = 'none';
            } else{
                product.style.display = 'block';

            }
        }
    }
});