http = new EasyHttp;

// http.get('https://jsonplaceholder.typicode.com/users/1')
//   .then(user => console.log(user))
//   .catch(error => console.log(error));

const data = {
  name: 'Brandon',
  email: 'brandon@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(user => console.log(user))
//   .catch(error => console.log(error));

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(user => console.log(user))
//   .catch(error => console.log(error));

http.delete('https://jsonplaceholder.typicode.com/users/1')
  .then(user => console.log(user))
  .catch(error => console.log(error));