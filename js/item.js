const articleViewReference = {
    root: document.querySelector('article'),
    name: document.querySelector('article .name'),
    code: document.querySelector('article .code'),
    price: document.querySelector('article .price'),
    category: document.querySelector('article .category'),
    update(article) {
        this.name.innerText = article.name;
        this.code.innerText = article.code;
        this.price.innerText = `${article.price} RSD`;
        this.category.innerText = article.category;
    }
};

let articles = JSON.parse(localStorage.getItem('articles'));

const urlParams = new URLSearchParams(window.location.search);

let id = urlParams.get('id');

let article = articles.find(article => article.id == id);

if (article) 
    articleViewReference.update(article);
else
    articleViewReference.root.innerText = 'Nepostojeci artikal';
