'use strict';

var http = require('http');
var getPort = require('get-port');

var server = http.createServer(function (req, res) {
  res.end('Hello World\n');
});

describe('http', function () {
  var port;

  before(function () {
    return getPort().then(function (p) {
      port = p;
      server.listen(port);
    });
  });

  it('should provide an example', function (done) {
    http.get({ path: '/', port: port }, function (res) {
      expect(res).to.have.property('statusCode', 200);
      done();
    });
  });
});
