import registerController from '../controllers/registerController';

let registerBtn = document.querySelector('.registerBtn');

if (registerBtn) {
  registerBtn.addEventListener('click', function() {
    registerController.getFormData();
  });
}
