class EasyHttp {
  // Create an HTTP GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(user => resolve(user))
        .catch(error => reject(error))
    });
  }

  // Create an HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
    });
  }

  // Create an HTTP PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers : {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
    });
  }

  // Create an HTTP DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type' : 'application/json'
        }
      })
        .then(response => response.json())
        .then(() => resolve('Resource Deleted...'))
        .catch(error => reject(error))
    });
  }
}