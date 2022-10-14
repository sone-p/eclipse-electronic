let articles = JSON.parse(localStorage.getItem('articles'));

categoryViewReference = {
    title: document.querySelector('section .title'),
    list: document.querySelector('section .list')
}

const urlParams = new URLSearchParams(window.location.search);

let category = urlParams.get('name');

let filtered = articles.filter(article => article.category == category);

if (filtered.length > 0) {
    for (let article of filtered) {
        let reference = document.createElement('li');
        reference.innerHTML = `
            <article>
                <img src="https://via.placeholder.com/180" alt="">
                <div class="info">
                    <h3 class="name">${article.name}</h3>
                    <p class="code">${article.code}</p>
                    <h3 class="price">${article.price} RSD</h3>
                </div>
                <button onclick="addToCart(2)" class="buy">Dodaj u korpu</button>
            </article>
        `

        categoryViewReference.list.appendChild(reference);
    }
    categoryViewReference.title.innerText = category;
}
else
    categoryViewReference.title.innerText = 'Nema proizvoda u ovoj kategoriji.';