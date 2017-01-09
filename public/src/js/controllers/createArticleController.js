import requestProviderController from './requestProviderController'
import config from '../config';

class createArticleController {

  static getFormData() {
    let title = document.querySelector('.article [name=title]').value;
    let image = document.querySelector('.article [name=image]').files[0];
    let body = document.querySelector('.article [name=body]').value;
    let formData = new FormData();

    if (title) {
      formData.append('title', title);
    }
    if (body) {
      formData.append('body', body);
    }
    if (image) {
      formData.append('file', image);
    }

    return formData;
  }

  static saveArticle() {
    requestProviderController.post(config.url.api + config.url.createArticle, this.getFormData())
      .then(function(json) {
        console.log(json);
      });
  }
}

export default createArticleController;
