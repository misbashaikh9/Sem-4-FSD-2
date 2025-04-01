const http = require('http');

const server = http.createServer((req, res) => {

  const reqUrl = new URL(req.url, `http://${req.headers.host}`);

  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(JSON.stringify({

    path: reqUrl.pathname,

    query: Object.fromEntries(reqUrl.searchParams),

  }));

});

server.listen(3000, () => {

  console.log("Server running at http://localhost:3000/");

});