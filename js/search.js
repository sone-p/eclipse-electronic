let articles = JSON.parse(localStorage.getItem('articles'));

const searchViewReference = {
    category: document.querySelector('#input_category'),
    query: document.querySelector('#input_query'),
    results: document.querySelector('.search .results'),
    clearResults() {
        this.results.innerHTML = '';
    },
    updateResults() {    
        this.clearResults();    
        if (this.query.value.length > 1) {
            let filtered = articles.filter(article => 
                article.code.includes(this.query.value.toUpperCase()));

            console.log(filtered);
            filtered.forEach(article => {
                let reference = document.createElement('div');
                reference.classList.add('result');
                reference.innerHTML = `
                    <a href="item.html?id=${article.id}" class="link"></a>
                    <p class="breadcrumb"><small><span>${article.category}</span></small></p>
                    <p class="item">${article.name}<br/><small>${article.code}</small></p>
                `;

                this.results.appendChild(reference);
            });
        }
    }
}

const onFocusOut = () => {
    searchViewReference.clearResults();
}

const onQueryChanged = () => {
    searchViewReference.updateResults();
}