import http from 'http';
import fs from'fs'
const Port=5000;
const server=http.createServer((req,res)=>{
// res.writeHead(200,{'content-type':'text/plain'});
// res.write('hello');
// res.end();
if(req.method==='GET' && req.url==='/hello'){
    fs.readFile('index.html', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        } else {
     
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data); 
        }
    }
    )
}
})
server.listen(Port,()=>{
    console.log(`server is connecting on ${Port}`)
})