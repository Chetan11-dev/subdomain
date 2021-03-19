var express = require('express')
var app = express()
// var wildcardSubdomains = require('./wildcard')
var path = require('path');

//app.use(wildcardSubdomains())

app.get('/', function (req, res) {
  let host = req.headers.host ? req.headers.host : ''; // requested hostname is provided in headers
  host = host.split(':')[0]; // removing port part

  // checks if requested host exist in array of custom hostnames
  const isSubdomain = false
  // (host && subdomainHosts.includes(host));
  if (isSubdomain) { // yes, requested host exists in provided host list
    // call router and return to avoid calling next below
    // yes, router is middleware and can be called
    return customRouter(req, res, next);
  }
  console.log({ host, isSubdomain})
  // default behavior
  res.send('Visit <a href="http://foo.vcap.me:5555">http://foo.vcap.me:5555</a> (points back to localhost)' + host)
})

// app.get('/_sub/:firstSubdomain/*', function (req, res) {
//   console.log('recieves request')
//   res.end(
//     `First Subdomain: ${req.params.firstSubdomain}
// Original Url: ${req.originalUrl}
// webpage: ${req.originalUrl}
// New Url: ${req.url}
// Query string: ${JSON.stringify(req.query)}`
//   )
// })

app.listen(5555)
console.log('Example started on port 5555')
console.log('============================')
console.log('To test subdomain routing, visit these urls in your browser:')
console.log('http://test.vcap.me:5555/')
console.log('http://another.test.vcap.me:5555/')
