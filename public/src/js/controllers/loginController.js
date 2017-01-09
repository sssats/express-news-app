import requestProviderController from './requestProviderController'
import config from '../config';


class loginController {
  static getFormData() {
    let login = document.querySelector('.login input[name=login]').value;
    let password = document.querySelector('.login input[name=password]').value;

    requestProviderController.post(config.url.api + config.url.login, {
      login: login,
      password: password
    }).then(function(json) {
      console.log(json);
    });
  }
}

export default loginController;
