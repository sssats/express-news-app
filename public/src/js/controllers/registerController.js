import requestProviderController from './requestProviderController'
import config from '../config';


class registerController {
  static getFormData() {
    let login = document.querySelector('.register input[name=login]').value;
    let password1 = document.querySelector('.register input[name=password1]').value;
    let password2 = document.querySelector('.register input[name=password2]').value;

    requestProviderController.post(config.url.api + config.url.register, JSON.stringify({
      login: login,
      password1: password1,
      password2: password2
    })).then(function(json) {
      console.log(json);
    });
  }
}

export default registerController;
