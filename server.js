//objeto e chamada http
const http = require('http');

// endereço e porta
const hostname = "127.0.0.1";
const port = 3000;

//método createServer
http.createServer((req, res) => {
    //função retorno user
    //objeto writeHead 
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //método end
    res.end("Hello World!")

}).listen(port, hostname, () => {
    //método listen
    console.log(`O Servidor está sendo executado em http://${hostname}:${port}/`);
});