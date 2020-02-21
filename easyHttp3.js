class EasyHttp {
  // Create an HTTP GET request
  // async get(url) {
  //   const response = await fetch(url);
  //   const resData = await response.json();
  //   return resData;
  

  // Create an HTTP POST request
  // async post(url, data) {
  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   const resData = await response.json();
  //   return resData;
  // }

//   // Create an HTTP PUT request
  // async put(url, data) {
  //   const response = await fetch(url, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type' : 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   const resData = await response.json();
  //   return resData;

//   // Create an HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'content-type' : 'application/json'
      }
    });
    const resData = await 'Resource Deleted...'
    console.log(response);
    return resData;
  }
}