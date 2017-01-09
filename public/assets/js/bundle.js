/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(5);
	
	__webpack_require__(10);
	
	__webpack_require__(12);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _loadArticlesController = __webpack_require__(6);
	
	var _loadArticlesController2 = _interopRequireDefault(_loadArticlesController);
	
	var _createArticleController = __webpack_require__(9);
	
	var _createArticleController2 = _interopRequireDefault(_createArticleController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var articlesView = function () {
	  function articlesView() {
	    _classCallCheck(this, articlesView);
	  }
	
	  _createClass(articlesView, null, [{
	    key: 'getData',
	    value: function getData(callback) {
	      _loadArticlesController2.default.loadArticles().then(function (data) {
	        if (data.success) {
	          callback(data.articles);
	        }
	      });
	    }
	  }, {
	    key: 'renderTemplate',
	    value: function renderTemplate(el, article) {
	      var template = '<img src="/images/' + article.picture + '" width="100" alt="' + article.title + '"/>\n      <h2>' + article.title + '</h2>\n      <p>' + article.body + '</p>';
	      var tempElement = document.createElement('article');
	
	      tempElement.innerHTML = template;
	
	      return el.appendChild(tempElement);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var self = this;
	      this.getData(function (articles) {
	        var articlesEl = document.createElement('div');
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var article = _step.value;
	
	            self.renderTemplate(articlesEl, article);
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        document.querySelector('.articles').appendChild(articlesEl);
	      });
	    }
	  }]);
	
	  return articlesView;
	}();
	
	var createArticleBtn = document.querySelector('.article button[name=create]');
	if (createArticleBtn) {
	  createArticleBtn.addEventListener('click', function () {
	    _createArticleController2.default.saveArticle();
	  });
	}
	
	articlesView.render();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _requestProviderController = __webpack_require__(7);
	
	var _requestProviderController2 = _interopRequireDefault(_requestProviderController);
	
	var _config = __webpack_require__(8);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var loadArticlesController = function () {
	  function loadArticlesController() {
	    _classCallCheck(this, loadArticlesController);
	  }
	
	  _createClass(loadArticlesController, null, [{
	    key: 'loadArticles',
	    value: function loadArticles() {
	      return _requestProviderController2.default.get(_config2.default.url.api + _config2.default.url.laodArticles);
	    }
	  }, {
	    key: 'loadArticleById',
	    value: function loadArticleById(id) {
	      return _requestProviderController2.default.get(_config2.default.url.api + _config2.default.url.loadArticleById + id);
	    }
	  }]);
	
	  return loadArticlesController;
	}();
	
	exports.default = loadArticlesController;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaultHeaders = {
	  'Accept': 'application/json',
	  'Content-Type': 'application/json'
	};
	
	var requestProviderController = function () {
	  function requestProviderController() {
	    _classCallCheck(this, requestProviderController);
	  }
	
	  _createClass(requestProviderController, null, [{
	    key: 'get',
	    value: function get(url) {
	      return fetch(url, {
	        method: 'get',
	        mode: 'cors'
	      }).then(function (res) {
	        return res.json();
	      }).then(function (json) {
	        return json;
	      });
	    }
	  }, {
	    key: 'post',
	    value: function post(url, data) {
	      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultHeaders;
	
	      return fetch(url, {
	        headers: defaultHeaders,
	        method: "POST",
	        body: data
	      }).then(function (res) {
	        return res.json();
	      }).then(function (json) {
	        return json;
	      });
	    }
	  }]);
	
	  return requestProviderController;
	}();
	
	;
	
	exports.default = requestProviderController;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  url: {
	    api: 'http://localhost:3000/',
	    login: 'auth/login',
	    register: 'auth/register',
	    laodArticles: 'articles',
	    createArticle: 'articles/create',
	    loadArticleById: 'articles/',
	    deleteArticleById: 'articles/delete/'
	  }
	};
	
	exports.default = config;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _requestProviderController = __webpack_require__(7);
	
	var _requestProviderController2 = _interopRequireDefault(_requestProviderController);
	
	var _config = __webpack_require__(8);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var createArticleController = function () {
	  function createArticleController() {
	    _classCallCheck(this, createArticleController);
	  }
	
	  _createClass(createArticleController, null, [{
	    key: 'getFormData',
	    value: function getFormData() {
	      var title = document.querySelector('.article [name=title]').value;
	      var image = document.querySelector('.article [name=image]').files[0];
	      var body = document.querySelector('.article [name=body]').value;
	      var formData = new FormData();
	
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
	  }, {
	    key: 'saveArticle',
	    value: function saveArticle() {
	      var headers = {
	        'Accept': 'application/json',
	        'Content-Type': 'multipart/form-data'
	      };
	      _requestProviderController2.default.post(_config2.default.url.api + _config2.default.url.createArticle, this.getFormData(), headers).then(function (json) {
	        console.log(json);
	      });
	    }
	  }]);
	
	  return createArticleController;
	}();
	
	exports.default = createArticleController;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _loginController = __webpack_require__(11);
	
	var _loginController2 = _interopRequireDefault(_loginController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var loginBtn = document.querySelector('.loginBtn');
	
	if (loginBtn) {
	  loginBtn.addEventListener('click', function () {
	    _loginController2.default.getFormData();
	  });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _requestProviderController = __webpack_require__(7);
	
	var _requestProviderController2 = _interopRequireDefault(_requestProviderController);
	
	var _config = __webpack_require__(8);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var loginController = function () {
	  function loginController() {
	    _classCallCheck(this, loginController);
	  }
	
	  _createClass(loginController, null, [{
	    key: 'getFormData',
	    value: function getFormData() {
	      var login = document.querySelector('.login input[name=login]').value;
	      var password = document.querySelector('.login input[name=password]').value;
	
	      _requestProviderController2.default.post(_config2.default.url.api + _config2.default.url.login, {
	        login: login,
	        password: password
	      }).then(function (json) {
	        console.log(json);
	      });
	    }
	  }]);
	
	  return loginController;
	}();
	
	exports.default = loginController;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _registerController = __webpack_require__(13);
	
	var _registerController2 = _interopRequireDefault(_registerController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var registerBtn = document.querySelector('.registerBtn');
	
	if (registerBtn) {
	  registerBtn.addEventListener('click', function () {
	    _registerController2.default.getFormData();
	  });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _requestProviderController = __webpack_require__(7);
	
	var _requestProviderController2 = _interopRequireDefault(_requestProviderController);
	
	var _config = __webpack_require__(8);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var registerController = function () {
	  function registerController() {
	    _classCallCheck(this, registerController);
	  }
	
	  _createClass(registerController, null, [{
	    key: 'getFormData',
	    value: function getFormData() {
	      var login = document.querySelector('.register input[name=login]').value;
	      var password1 = document.querySelector('.register input[name=password1]').value;
	      var password2 = document.querySelector('.register input[name=password2]').value;
	
	      _requestProviderController2.default.post(_config2.default.url.api + _config2.default.url.register, {
	        login: login,
	        password1: password1,
	        password2: password2
	      }).then(function (json) {
	        console.log(json);
	      });
	    }
	  }]);
	
	  return registerController;
	}();
	
	exports.default = registerController;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map