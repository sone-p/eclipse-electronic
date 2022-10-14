var ARTICLES = [
    {
        id: 1,
        name: 'INTEGRISANO KOLO TDA1001',
        code: 'TDA1001',
        category: 'integralna kola',
        price: 150,        
    },
    {
        id: 2,
        name: 'INTEGRISANO KOLO TDA1002A',
        code: 'TDA1002',
        category: 'integralna kola',
        price: 170,        
    },
    {
        id: 3,
        name: 'INTEGRISANO KOLO  TDA1003',
        code: 'TDA1003',
        category: 'integralna kola',
        price: 130,        
    },
    {
        id: 4,
        name: 'INTEGRISANO KOLO TDA1004',
        code: 'TDA1004',
        category: 'integralna kola',
        price: 110,        
    },
    {
        id: 5,
        name: 'OTPORNIK ZA HLADNJAK 100W 0R22',
        code: 'OTH-100/0.22',
        category: 'otpornici',
        price: 1120,        
    },
    {
        id: 6,
        name: 'KONDENZATOR BIPOLARNI 100µF 100V',
        code: 'KOBI100M100',
        category: 'kondenzatori',
        price: 216,        
    },
    {
        id: 7,
        name: 'KONDENZATOR BIPOLARNI 2,2µF 100V',
        code: 'KOBI2.2M100',
        category: 'kondenzatori',
        price: 183,        
    },
    {
        id: 8,
        name: 'OTPORNIK ZA HLADNJAK 300W 680R',
        code: 'OTH-300/680',
        category: 'otpornici',
        price: 6200,        
    }
];

if (!localStorage.getItem('articles'))
    localStorage.setItem('articles', JSON.stringify(ARTICLES));
if (!sessionStorage.getItem('cart'))
    sessionStorage.setItem('cart', JSON.stringify([]));

let list = document.querySelector('section.popular ul.list');

if (window.location.pathname.split('/').reverse()[0] == 'index.html') {
    // <article>
    //     <img src="https://via.placeholder.com/180" alt="">
    //     <div class="info">
    //         <h3 class="name">Consequuntur, temporibus praesentium</h3>
    //         <p class="code">Minima</p>
    //         <h3 class="price">5.00 RSD</h3>
    //     </div>
    //     <button onclick="onAddToCart(2)" class="buy">Dodaj u korpu</button>
    // </article>
    for (let article of ARTICLES) {
        let root = document.createElement('li');
        root.innerHTML = `
        <article>
            <div class="img">
                <a href="item.html?id=${article.id}" class="link"></a>
                <img src="https://via.placeholder.com/180" alt="">
            </div>
            <div class="info">
                <p class="code">${article.code}</p>
                <h3 class="name">${article.name}</h3>
                <h3 class="price">${article.price} RSD</h3>
            </div>
            <button onclick="onAddToCart(${article.id})" class="buy">Dodaj u korpu</button>
        </article>
        `;
        
        list.appendChild(root);
    }
}
