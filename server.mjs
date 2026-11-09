import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import './build.mjs';
const mime={'.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.xml':'application/xml'};
createServer(async(req,res)=>{try{let path=decodeURIComponent(req.url.split('?')[0]);if(path.includes('..'))throw Error();if(path==='/'||/^\/(en|es)(\/privacy)?\/?$/.test(path))path=(path==='/'?'':path.replace(/\/$/,''))+ '/index.html';let body=await readFile('./dist'+path);res.writeHead(200,{'Content-Type':mime[path.slice(path.lastIndexOf('.'))]||'text/html; charset=utf-8'});res.end(body)}catch{res.writeHead(404);res.end('Not found')}}).listen(process.env.PORT||4173,'0.0.0.0');
