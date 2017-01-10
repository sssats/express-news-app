class requestProviderController {

  static get(url) {
    return fetch(url, {
        method: 'get',
        mode: 'cors'
      }).then(res => res.json())
      .then(json => json);
  }

  static post(url, data) {
    return fetch(url, {
        method: "POST",
        body: data
      })
      .then(res => res.json())
      .then(json => json)
      .catch(error => console.log(error));
  }
};

export default requestProviderController;
