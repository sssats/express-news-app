var defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

class requestProviderController {

  static get(url) {
    return fetch(url, {
        method: 'get',
        mode: 'cors'
      }).then(res => res.json())
      .then(json => json);
  }

  static post(url, data, headers = defaultHeaders) {
    return fetch(url, {
        headers: headers,
        method: "POST",
        body: data
      })
      .then(res => res.json())
      .then(json => json)
      .catch(error => console.log(error));
  }
};

export default requestProviderController;
