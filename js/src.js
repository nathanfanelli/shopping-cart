let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Pokemon Card 1',
        tag: 'pokemoncard1',
        price: 14.99,
        inCart: 0
    },
    {
        name: 'Pokemon Card 2',
        tag: 'pokemoncard2',
        price: 14.99,
        inCart: 0
    },
    {
        name: 'Pokemon Card 3',
        tag: 'pokemoncard3',
        price: 14.99,
        inCart: 0
    },
    {
        name: 'Pokemon Card 4',
        tag: 'pokemoncard4',
        price: 14.99,
        inCart: 0
    }
]

for(i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    localStorage.setItem('cartNumbers', 1);
}