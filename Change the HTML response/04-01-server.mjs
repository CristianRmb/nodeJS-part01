import { createServer } from 'node:http';

const server = createServer((request, response) => {
  console.log('request received');

  response.statusCode = 200;

  response.setHeader('Content-Type', 'text/html');

  response.end(
    '<html><body><h1>Prova server HTTP</h1></br><p>Le modifice non si vedono live, bisogna riavviare</p></body></html>',
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
