import loginController from '../controllers/loginController';

let loginBtn = document.querySelector('.loginBtn');

if (loginBtn) {
  loginBtn.addEventListener('click', function() {
    loginController.getFormData();
  });

}
