let cart = JSON.parse(sessionStorage.getItem('cart'));

const cartViewReference = {
    window: document.querySelector('#cart .window'),
    summary: document.querySelector('#cart .summary .price'),
    count: document.querySelector('#cart .count'),
    clear() {
        cart = [];
        sessionStorage.setItem('cart', JSON.parse([]));
    },
    update(cart) {
        this.window.innerHTML = '';
        this.count.innerText = '';
        this.summary.innerText = `0 RSD`;
        
        for (let article of cart) {
            let reference = document.createElement('article');
            reference.innerHTML = `
                <h4 class="name">${article.name} X ${article.quantity}</h4>
                <small class="code">${article.code}</small>
                <h4 class="price">${article.quantity} X ${article.price} RSD</h4>
                <a class="remove" onclick="onRemoveFromCart(${article.id})">ukloni</a>
                `;

            this.window.appendChild(reference);

            let sum = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
            let count = cart.reduce((acc, curr) => acc + curr.quantity, 0);

            this.count.innerText = `(${count})`;
            this.summary.innerText = `${sum} RSD`;
        }
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }
}

cartViewReference.update(cart);

const onAddToCart = (id) => {
    let found = cart.find(article => article.id == id);
    if (found)
        found.quantity++;
    else {
        let article = articles.find(article => article.id == id);
        if (article) {
            article.quantity = 1;   
            cart.push(article);
        }
    }

    cartViewReference.update(cart);
}

const onRemoveFromCart = (id) => {
    let index = cart.findIndex(article => article.id == id);
    cart.splice(index, 1);

    cartViewReference.update(cart);
}