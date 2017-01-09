import requestProviderController from './requestProviderController'
import config from '../config';

class loadArticlesController {

  static loadArticles() {
    return requestProviderController.get(config.url.api + config.url.laodArticles);
  }
  static loadArticleById(id) {
    return requestProviderController.get(config.url.api + config.url.loadArticleById + id);
  }
}

export default loadArticlesController;
