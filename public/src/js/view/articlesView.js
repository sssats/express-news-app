import loadArticlesController from '../controllers/loadArticlesController.js'
import createArticleController from '../controllers/createArticleController.js'

class articlesView {
  static getData(callback) {
    loadArticlesController.loadArticles().then(function(data) {
      if (data.success) {
        callback(data.articles);
      }
    });
  }

  static renderTemplate(el, article) {
    let template = `<img src="/images/${article.picture}" width="100" alt="${article.title}"/>
      <div>
        <h2>${article.title}</h2>
        <p>${article.body}</p>
      </div>`;
    let tempElement = document.createElement('article');

    tempElement.innerHTML = template;

    return el.appendChild(tempElement);
  }

  static render() {
    var self = this;
    this.getData(function(articles) {
      var articlesEl = document.createElement('div');
      for (let article of articles) {
        self.renderTemplate(articlesEl, article);
      }
      document.querySelector('.articles').appendChild(articlesEl);
    });
  }
}

let createArticleBtn = document.querySelector('.article button[name=create]');
if (createArticleBtn) {
  createArticleBtn.addEventListener('click', function() {
    createArticleController.saveArticle();
  });
}

if (document.querySelector('.articles')) {
  articlesView.render();

}
