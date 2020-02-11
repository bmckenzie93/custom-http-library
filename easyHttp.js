// XML Http Request Object Constructor
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// make an http GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let that = this;
  this.http.onload = function() {
    if(that.http.status === 200) {
      callback(null, that.http.responseText)
    } else {
      callback('Error: ' + that.http.status);
    }
  }

  this.http.send()
}

// make an http POST request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let that = this;
  this.http.onload = function() {
    callback(null, that.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// make an http PUT request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let that = this;
  this.http.onload = function() {
    callback(null, that.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// make an http DELETE request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let that = this;
  this.http.onload = function() {
    if(that.http.status === 200) {
      callback(null, 'Post Deleted')
    } else {
      callback('Error: ' + that.http.status);
    }
  }

  this.http.send()
}